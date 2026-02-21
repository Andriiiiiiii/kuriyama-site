import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FONT_SIZES } from "@/config/typography";
import rightTopImage from "@/assets/visit to the apiary/right top image 3.webp";
import leftBottomImage from "@/assets/visit to the apiary/left bottom image 3.webp";

type SlideContent = {
  title: string;
  subtitle: string;
  group1Title: string;
  group1Text: string;
  group2Title: string;
  group2Text: string;
  group3Title: string;
  group3Text: string;
  images: {
    rightTop: string;
    leftBottom: string;
  };
};

const STORAGE_KEY = "apiary-visit-slide3-content";
const AUTH_KEY = "apiary-visit-editor-auth";
const EDITOR_OPEN_KEY = "apiary-visit-editor-open";
const DRAFT_KEY = "apiary-visit-slide3-draft";

const DEFAULT_CONTENT: SlideContent = {
  title: "ДЛЯ КОГО?",
  subtitle: "Описание, подробнее раскрывающее заголовок.",
  group1Title: "ДЛЯ СЕБЯ",
  group1Text: "Описание, подробнее раскрывающее заголовок",
  group2Title: "ДЛЯ СЕМЬИ",
  group2Text: "Описание, подробнее раскрывающее заголовок",
  group3Title: "ДЛЯ КОМПАНИЙ",
  group3Text: "Описание, подробнее раскрывающее заголовок",
  images: {
    rightTop: rightTopImage,
    leftBottom: leftBottomImage,
  },
};

const ApiaryVisitSlide3: React.FC = () => {
  const [content, setContent] = useState<SlideContent>(DEFAULT_CONTENT);
  const [isEditorAuthorized, setIsEditorAuthorized] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const isEditing = isEditorAuthorized && isEditorOpen;
  const [hoveredImage, setHoveredImage] = useState<"rightTop" | "leftBottom" | null>(null);
  const [hoveredText, setHoveredText] = useState<
    | "title"
    | "subtitle"
    | "group1Title"
    | "group1Text"
    | "group2Title"
    | "group2Text"
    | "group3Title"
    | "group3Text"
    | null
  >(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const imageKeyRef = useRef<"rightTop" | "leftBottom" | null>(null);
  const historyRef = useRef<SlideContent[]>([DEFAULT_CONTENT]);
  const historyIndexRef = useRef(0);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Partial<SlideContent>;
        const normalized: SlideContent = {
          ...DEFAULT_CONTENT,
          ...parsed,
          images: {
            ...DEFAULT_CONTENT.images,
            ...parsed.images,
          },
        };
        setContent(normalized);
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
      const draft = window.sessionStorage.getItem(DRAFT_KEY);
      if (draft) {
        try {
          const parsedDraft = JSON.parse(draft) as SlideContent;
          setContent(parsedDraft);
          historyRef.current = [parsedDraft];
          historyIndexRef.current = 0;
        } catch {
          window.sessionStorage.removeItem(DRAFT_KEY);
        }
      }
    }
  }, []);

  useEffect(() => {
    const syncFromStorage = () => {
      setIsEditorAuthorized(window.sessionStorage.getItem(AUTH_KEY) === "1");
      setIsEditorOpen(window.sessionStorage.getItem(EDITOR_OPEN_KEY) === "1");
    };

    syncFromStorage();
    window.addEventListener("apiary-visit-editor-change", syncFromStorage);
    return () => window.removeEventListener("apiary-visit-editor-change", syncFromStorage);
  }, []);

  useEffect(() => {
    const onSave = () => saveContent();
    const onReset = () => resetContent();
    window.addEventListener("apiary-visit-editor-save", onSave);
    window.addEventListener("apiary-visit-editor-reset", onReset);
    return () => {
      window.removeEventListener("apiary-visit-editor-save", onSave);
      window.removeEventListener("apiary-visit-editor-reset", onReset);
    };
  }, [content, isEditing]);

  const pushHistory = (nextContent: SlideContent) => {
    const history = historyRef.current.slice(0, historyIndexRef.current + 1);
    history.push(nextContent);
    historyRef.current = history;
    historyIndexRef.current = history.length - 1;
    setContent(nextContent);
    if (isEditing) {
      window.sessionStorage.setItem(DRAFT_KEY, JSON.stringify(nextContent));
    }
  };

  const saveContent = (nextContent: SlideContent = content) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextContent));
    historyRef.current = [nextContent];
    historyIndexRef.current = 0;
    setContent(nextContent);
    if (isEditing) {
      window.sessionStorage.setItem(DRAFT_KEY, JSON.stringify(nextContent));
    }
  };

  const resetContent = () => {
    saveContent(DEFAULT_CONTENT);
  };

  const updateContent = <K extends keyof SlideContent>(key: K, value: SlideContent[K]) => {
    pushHistory({ ...content, [key]: value });
  };

  const updateImage = (key: "rightTop" | "leftBottom", value: string) => {
    pushHistory({
      ...content,
      images: {
        ...content.images,
        [key]: value,
      },
    });
  };

  const openImagePicker = (key: "rightTop" | "leftBottom") => {
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
    <section className="relative w-full h-screen overflow-hidden bg-white">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      {/* Title: для кого? (id: 655:872): left 8.33%, top 16.16%, width 36.99%, height 9.50% */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute font-ua-brand font-bold uppercase leading-none text-[#2E261D]"
        style={{
          left: "8.33%",
          top: "16.16%",
          width: "fit-content",
          maxWidth: "none",
          display: "inline-block",
          fontSize: FONT_SIZES.heading,
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
      </motion.h2>

      {/* Subtitle: Описание, подробнее... (id: 655:876): left 50.76%, top 34.69%, width 35.02%, height 2.94% */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: "50.76%",
          top: "34.69%",
          width: "fit-content",
          maxWidth: "none",
          display: "inline-block",
          fontSize: FONT_SIZES.subheading,
          lineHeight: 1.2,
          whiteSpace: "pre",
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "subtitle" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "subtitle" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateContent("subtitle", event.currentTarget.innerText)}
        onMouseEnter={() => setHoveredText("subtitle")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.subtitle}
      </motion.p>

      {/* Rectangle 228 (id: 655:877): left 50.69%, top 44.83%, width 33.89%, height 55.17% */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        whileInView={{ opacity: 1, height: "55.17%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute z-30 border border-[#C65A32]"
        style={{
          left: "50.69%",
          top: "44.83%",
          width: "33.89%",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />

      {/* Content Group 1: Для себя */}
      <motion.h3
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute font-glametrix font-bold text-[#C65A32] uppercase"
        style={{
          left: "54.35%",
          top: "52.95%",
          maxWidth: "none",
          display: "inline-block",
          fontSize: FONT_SIZES.subheading,
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "group1Title" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "group1Title" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateContent("group1Title", event.currentTarget.innerText.trim())}
        onMouseEnter={() => setHoveredText("group1Title")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.group1Title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: "54.35%",
          top: "58.70%",
          width: "fit-content",
          maxWidth: "none",
          display: "inline-block",
          fontSize: FONT_SIZES.body,
          lineHeight: 1.2,
          whiteSpace: "pre",
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "group1Text" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "group1Text" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateContent("group1Text", event.currentTarget.innerText)}
        onMouseEnter={() => setHoveredText("group1Text")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.group1Text}
      </motion.p>

      {/* Content Group 2: Для семьи */}
      <motion.h3
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute font-glametrix font-bold text-[#C65A32] uppercase"
        style={{
          left: "54.35%",
          top: "68.95%",
          maxWidth: "none",
          display: "inline-block",
          fontSize: FONT_SIZES.subheading,
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "group2Title" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "group2Title" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateContent("group2Title", event.currentTarget.innerText.trim())}
        onMouseEnter={() => setHoveredText("group2Title")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.group2Title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: "54.35%",
          top: "74.68%",
          width: "fit-content",
          maxWidth: "none",
          display: "inline-block",
          fontSize: FONT_SIZES.body,
          lineHeight: 1.2,
          whiteSpace: "pre",
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "group2Text" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "group2Text" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateContent("group2Text", event.currentTarget.innerText)}
        onMouseEnter={() => setHoveredText("group2Text")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.group2Text}
      </motion.p>

      {/* Content Group 3: Для компаний */}
      <motion.h3
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute font-glametrix font-bold text-[#C65A32] uppercase"
        style={{
          left: "54.35%",
          top: "84.72%",
          maxWidth: "none",
          display: "inline-block",
          fontSize: FONT_SIZES.subheading,
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "group3Title" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "group3Title" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateContent("group3Title", event.currentTarget.innerText.trim())}
        onMouseEnter={() => setHoveredText("group3Title")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.group3Title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: "54.35%",
          top: "90.65%",
          width: "fit-content",
          maxWidth: "none",
          display: "inline-block",
          fontSize: FONT_SIZES.body,
          lineHeight: 1.2,
          whiteSpace: "pre",
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "group3Text" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "group3Text" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateContent("group3Text", event.currentTarget.innerText)}
        onMouseEnter={() => setHoveredText("group3Text")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.group3Text}
      </motion.p>

      {/* Images */}
      {/* right top image 3 (id: 655:887): left 65.35%, top 8.86%, width 19.24%, height 22.55% */}
      <motion.img
        initial={{ opacity: 0, rotate: 10, scale: 0.9 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        src={content.images.rightTop}
        alt=""
        className="absolute object-contain origin-top-right"
        style={{
          left: "65.35%",
          top: "8.86%",
          width: "auto",
          height: "auto",
          maxWidth: "30%",
          maxHeight: "35%",
          zIndex: isEditing && hoveredImage === "rightTop" ? 9998 : 2,
          cursor: isEditing ? "pointer" : "default",
          outline:
            isEditing && hoveredImage === "rightTop" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredImage === "rightTop" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        onClick={() => openImagePicker("rightTop")}
        onMouseEnter={() => setHoveredImage("rightTop")}
        onMouseLeave={() => setHoveredImage(null)}
      />

      {/* left bottom image 3 (id: 656:1254): left 8.33%, top 33.56%, width 38.89%, height 66.44% */}
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        src={content.images.leftBottom}
        alt=""
        className="absolute object-cover"
        style={{
          left: "8.33%",
          top: "33.56%",
          width: "38.89%",
          height: "66.44%",
          zIndex: isEditing && hoveredImage === "leftBottom" ? 9998 : 2,
          cursor: isEditing ? "pointer" : "default",
          outline:
            isEditing && hoveredImage === "leftBottom" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredImage === "leftBottom" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        onClick={() => openImagePicker("leftBottom")}
        onMouseEnter={() => setHoveredImage("leftBottom")}
        onMouseLeave={() => setHoveredImage(null)}
      />
    </section>
  );
};

export default ApiaryVisitSlide3;
