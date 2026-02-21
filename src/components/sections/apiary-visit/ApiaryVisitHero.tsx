import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FONT_SIZES } from "@/config/typography";
import SelectTariffButton from "@/components/shared/SelectTariffButton";
import imageRight from "@/assets/visit to the apiary/image right block 1.webp";
import topImage from "@/assets/visit to the apiary/top image 1.webp";
import leftImage from "@/assets/visit to the apiary/left image 1.svg";
import heroBg from "@/assets/1-background.webp";

type ApiaryVisitHeroContent = {
  title: string;
  meta: string;
  description: string;
  buttonText: string;
  images: {
    background: string;
    top: string;
    right: string;
    left: string;
  };
};

const STORAGE_KEY = "apiary-visit-hero-content";
const AUTH_KEY = "apiary-visit-editor-auth";
const EDITOR_OPEN_KEY = "apiary-visit-editor-open";
const DRAFT_KEY = "apiary-visit-hero-draft";

const DEFAULT_CONTENT: ApiaryVisitHeroContent = {
  title: "визит на пасеку",
  meta: "25.01.2026 в 10:00 | г. Москва, ул. Ленина 1",
  description: "Две строчки дополнительного\nописания подкрепляющего заголовок",
  buttonText: "Оставить заявку",
  images: {
    background: heroBg,
    top: topImage,
    right: imageRight,
    left: leftImage,
  },
};

const ApiaryVisitHero: React.FC = () => {
  const [content, setContent] = useState<ApiaryVisitHeroContent>(DEFAULT_CONTENT);
  const [savedContent, setSavedContent] = useState<ApiaryVisitHeroContent>(DEFAULT_CONTENT);
  const [isEditorAuthorized, setIsEditorAuthorized] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const isEditing = isEditorAuthorized && isEditorOpen;
  const [hoveredImage, setHoveredImage] = useState<
    keyof ApiaryVisitHeroContent["images"] | null
  >(null);
  const [hoveredText, setHoveredText] = useState<
    "title" | "meta" | "description" | null
  >(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const imageKeyRef = useRef<keyof ApiaryVisitHeroContent["images"] | null>(null);
  const historyRef = useRef<ApiaryVisitHeroContent[]>([DEFAULT_CONTENT]);
  const historyIndexRef = useRef(0);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Partial<ApiaryVisitHeroContent>;
        const normalized: ApiaryVisitHeroContent = {
          ...DEFAULT_CONTENT,
          ...parsed,
          description:
            typeof parsed.description === "string"
              ? parsed.description
              : DEFAULT_CONTENT.description,
        };
        setContent(normalized);
        setSavedContent(normalized);
        historyRef.current = [normalized];
        historyIndexRef.current = 0;
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }

    const authState = window.sessionStorage.getItem(AUTH_KEY);
    const isAuthorized = authState === "1";
    setIsEditorAuthorized(isAuthorized);
    setIsEditorOpen(window.sessionStorage.getItem(EDITOR_OPEN_KEY) === "1");

    if (isAuthorized) {
      const draftContent = window.sessionStorage.getItem(DRAFT_KEY);
      if (draftContent) {
        try {
          const parsedDraft = JSON.parse(draftContent) as ApiaryVisitHeroContent;
          setContent(parsedDraft);
          historyRef.current = [parsedDraft];
          historyIndexRef.current = 0;
        } catch {
          window.sessionStorage.removeItem(DRAFT_KEY);
        }
      }
    }
  }, []);

  const editorButtonClass =
    "rounded bg-black/70 px-3 py-2 text-sm text-white hover:bg-black";

  const editorButtonStyle: React.CSSProperties = {
    background: "rgba(0, 0, 0, 0.7)",
    color: "#fff",
    borderRadius: 4,
    padding: "8px 12px",
    fontSize: "12px",
  };

  const editorButtonWrapStyle: React.CSSProperties = {
    position: "fixed",
    right: 16,
    top: 16,
    zIndex: 9999,
    display: "flex",
    gap: 8,
  };

  const editorButtonRowStyle: React.CSSProperties = {
    position: "fixed",
    right: 16,
    top: 64,
    zIndex: 9999,
    display: "flex",
    gap: 8,
  };

  const editorButtonSoloStyle: React.CSSProperties = {
    position: "fixed",
    right: 16,
    top: 16,
    zIndex: 9999,
    ...editorButtonStyle,
  };

  const pushHistory = (nextContent: ApiaryVisitHeroContent) => {
    const history = historyRef.current.slice(0, historyIndexRef.current + 1);
    history.push(nextContent);
    historyRef.current = history;
    historyIndexRef.current = history.length - 1;
    setContent(nextContent);
    if (isEditing) {
      window.sessionStorage.setItem(DRAFT_KEY, JSON.stringify(nextContent));
    }
  };

  const updateContent = <K extends keyof ApiaryVisitHeroContent>(
    key: K,
    value: ApiaryVisitHeroContent[K],
  ) => {
    pushHistory({ ...content, [key]: value });
  };

  const updateImage = (key: keyof ApiaryVisitHeroContent["images"], value: string) => {
    pushHistory({
      ...content,
      images: {
        ...content.images,
        [key]: value,
      },
    });
  };

  const broadcastEditorState = () => {
    window.dispatchEvent(new Event("apiary-visit-editor-change"));
  };

  const handleEditorLogin = () => {
    const entered = window.prompt("Введите пароль редактора");
    if (!entered) return;

    const expected = import.meta.env.VITE_APIARY_HERO_EDITOR_PASSWORD ?? "kuriyama-admin";
    if (entered === expected) {
      setIsEditorAuthorized(true);
      setIsEditorOpen(true);
      window.sessionStorage.setItem(AUTH_KEY, "1");
      window.sessionStorage.setItem(EDITOR_OPEN_KEY, "1");
      broadcastEditorState();
      return;
    }

    window.alert("Неверный пароль");
  };

  const handleEditorLogout = () => {
    setIsEditorAuthorized(false);
    setIsEditorOpen(false);
    setContent(savedContent);
    window.sessionStorage.removeItem(DRAFT_KEY);
    window.sessionStorage.removeItem(AUTH_KEY);
    window.sessionStorage.removeItem(EDITOR_OPEN_KEY);
    broadcastEditorState();
  };

  const saveContent = (nextContent: ApiaryVisitHeroContent = content) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextContent));
    setSavedContent(nextContent);
    historyRef.current = [nextContent];
    historyIndexRef.current = 0;
    setContent(nextContent);
    window.sessionStorage.setItem(DRAFT_KEY, JSON.stringify(nextContent));
  };

  const resetContent = () => {
    saveContent(DEFAULT_CONTENT);
  };

  const openImagePicker = (key: keyof ApiaryVisitHeroContent["images"]) => {
    if (!isEditorAuthorized || !isEditorOpen) return;
    imageKeyRef.current = key;
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const key = imageKeyRef.current;
    if (!file || !key) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        updateImage(key, reader.result);
      }
    };
    reader.readAsDataURL(file);

    event.target.value = "";
    imageKeyRef.current = null;
  };

  useEffect(() => {
    if (!isEditing) return;
    window.sessionStorage.setItem(DRAFT_KEY, JSON.stringify(content));
  }, [content, isEditing]);

  useEffect(() => {
    if (!isEditing) return;
    const onKeyDown = (event: KeyboardEvent) => {
      const isUndoKey = event.code === "KeyZ" || event.key.toLowerCase() === "z";
      const isUndo = (event.ctrlKey || event.metaKey) && isUndoKey;
      if (!isUndo) return;
      if (historyIndexRef.current <= 0) return;
      event.preventDefault();
      historyIndexRef.current -= 1;
      setContent(historyRef.current[historyIndexRef.current]);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isEditing]);

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-white"
      data-editor-enabled={isEditorAuthorized && isEditorOpen ? "true" : "false"}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <div
        className="absolute"
        style={{
          left: "0%",
          top: "0%",
          width: "100%",
          height: "100%",
        }}
      >
        <img src={content.images.background} alt="" className="w-full h-full object-fill" />
      </div>

      <motion.img
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        src={content.images.top}
        alt=""
        className="absolute object-contain mix-blend-multiply"
        style={{
          left: "74.86%",
          top: "9.42%",
          width: "11.88%",
          height: "42.85%",
          zIndex: isEditing && hoveredImage === "top" ? 9998 : 1,
          cursor: isEditing ? "pointer" : "default",
          outline:
            isEditing && hoveredImage === "top" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredImage === "top" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        onClick={() => openImagePicker("top")}
        onMouseEnter={() => setHoveredImage("top")}
        onMouseLeave={() => setHoveredImage(null)}
      />

      <motion.img
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        src={content.images.right}
        alt=""
        className="absolute object-contain"
        style={{
          left: "36.60%",
          top: "32.69%",
          width: "54.93%",
          height: "52.01%",
          zIndex: isEditing && hoveredImage === "right" ? 9998 : 2,
          cursor: isEditing ? "pointer" : "default",
          outline:
            isEditing && hoveredImage === "right" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredImage === "right" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        onClick={() => openImagePicker("right")}
        onMouseEnter={() => setHoveredImage("right")}
        onMouseLeave={() => setHoveredImage(null)}
      />

      <motion.img
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        src={content.images.left}
        alt=""
        className="absolute object-contain"
        style={{
          left: "26.81%",
          top: "35.19%",
          width: "12.64%",
          height: "46.11%",
          zIndex: isEditing && hoveredImage === "left" ? 9998 : 3,
          cursor: isEditing ? "pointer" : "default",
          outline:
            isEditing && hoveredImage === "left" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredImage === "left" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        onClick={() => openImagePicker("left")}
        onMouseEnter={() => setHoveredImage("left")}
        onMouseLeave={() => setHoveredImage(null)}
      />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute font-ua-brand font-bold uppercase leading-none text-[#2E261D]"
        style={{
          left: "8.83%",
          top: "20.15%",
          width: "fit-content",
          maxWidth: "none",
          display: "inline-block",
          fontSize: "5vw",
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "title" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "title" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateContent("title", event.currentTarget.innerText.trim())}
        onMouseEnter={() => setHoveredText("title")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: "8.35%",
          top: "32.86%",
          width: "fit-content",
          maxWidth: "none",
          display: "inline-block",
          fontSize: FONT_SIZES.body,
          zIndex: 9998,
          whiteSpace: "pre",
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "meta" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "meta" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateContent("meta", event.currentTarget.innerText.trim())}
        onMouseEnter={() => setHoveredText("meta")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.meta}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: "8.22%",
          top: "38.86%",
          width: "fit-content",
          maxWidth: "none",
          display: "inline-block",
          fontSize: FONT_SIZES.body,
          zIndex: 9998,
          whiteSpace: "pre",
          cursor: isEditing ? "text" : "default",
          outline:
            isEditing && hoveredText === "description" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "description" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateContent("description", event.currentTarget.innerText)}
        onMouseEnter={() => setHoveredText("description")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute flex items-center justify-center cursor-pointer group"
        style={{
          left: "8.12%",
          top: "47.36%",
          width: "15.21%",
          zIndex: 10,
        }}
      >
        <SelectTariffButton width="100%" text={content.buttonText} />
      </motion.div>

      {!isEditorAuthorized ? (
        <button
          type="button"
          onClick={handleEditorLogin}
          className={editorButtonClass}
          style={editorButtonSoloStyle}
        >
          Вход редактора
        </button>
      ) : (
        <div style={editorButtonWrapStyle}>
          <button
            type="button"
            onClick={() => {
              setIsEditorOpen((prev) => {
                const next = !prev;
                window.sessionStorage.setItem(EDITOR_OPEN_KEY, next ? "1" : "0");
                broadcastEditorState();
                return next;
              });
            }}
            className={editorButtonClass}
            style={editorButtonStyle}
          >
            {isEditorOpen ? "Скрыть редактор" : "Редактировать"}
          </button>
          <button
            type="button"
            onClick={handleEditorLogout}
            className={editorButtonClass}
            style={editorButtonStyle}
          >
            Выход
          </button>
        </div>
      )}

      {isEditorAuthorized && isEditorOpen ? (
        <div style={editorButtonRowStyle}>
          <button
            type="button"
            onClick={saveContent}
            className={editorButtonClass}
            style={editorButtonStyle}
          >
            Сохранить
          </button>
          <button
            type="button"
            onClick={resetContent}
            className={editorButtonClass}
            style={editorButtonStyle}
          >
            Сбросить
          </button>
        </div>
      ) : null}
    </section>
  );
};

export default ApiaryVisitHero;
