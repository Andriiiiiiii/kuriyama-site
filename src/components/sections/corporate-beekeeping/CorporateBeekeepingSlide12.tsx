import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FONT_SIZES } from "@/config/typography";
import SelectTariffButton from "@/components/shared/SelectTariffButton";
import rightImage from "@/assets/corporate-beekeeping/12right.webp";

interface CorporateBeekeepingSlide12Props {
  enableEditor?: boolean;
}

type SlideContent = {
  title: string;
  subtitle: string;
  image: string;
};

const STORAGE_KEY = "apiary-visit-corporate12-content";
const AUTH_KEY = "apiary-visit-editor-auth";
const EDITOR_OPEN_KEY = "apiary-visit-editor-open";
const DRAFT_KEY = "apiary-visit-corporate12-draft";

const DEFAULT_CONTENT: SlideContent = {
  title: "ОСТАВЬТЕ ЗАЯВКУ",
  subtitle: "Пропуск на посещение на день со всеми активностями",
  image: rightImage,
};

const CorporateBeekeepingSlide12: React.FC<CorporateBeekeepingSlide12Props> = ({
  enableEditor = false,
}) => {
  const [content, setContent] = useState<SlideContent>(DEFAULT_CONTENT);
  const [isEditorAuthorized, setIsEditorAuthorized] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const isEditing = enableEditor && isEditorAuthorized && isEditorOpen;
  const [hoveredText, setHoveredText] = useState<"title" | "subtitle" | null>(null);
  const [hoveredImage, setHoveredImage] = useState<"image" | null>(null);

  const historyRef = useRef<SlideContent[]>([DEFAULT_CONTENT]);
  const historyIndexRef = useRef(0);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!enableEditor) return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Partial<SlideContent>;
        const normalized: SlideContent = {
          ...DEFAULT_CONTENT,
          ...parsed,
          image: parsed.image || DEFAULT_CONTENT.image,
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
  }, [enableEditor]);

  useEffect(() => {
    if (!enableEditor) return;
    const syncFromStorage = () => {
      setIsEditorAuthorized(window.sessionStorage.getItem(AUTH_KEY) === "1");
      setIsEditorOpen(window.sessionStorage.getItem(EDITOR_OPEN_KEY) === "1");
    };

    syncFromStorage();
    window.addEventListener("apiary-visit-editor-change", syncFromStorage);
    return () => window.removeEventListener("apiary-visit-editor-change", syncFromStorage);
  }, [enableEditor]);

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

  const updateContent = <K extends keyof SlideContent>(key: K, value: SlideContent[K]) => {
    pushHistory({ ...content, [key]: value });
  };

  const openImagePicker = () => {
    if (!isEditing) return;
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        updateContent("image", reader.result);
      }
    };
    reader.readAsDataURL(file);
    event.target.value = "";
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

  const BASE_WIDTH = 1440;
  const BASE_HEIGHT = 530;

  const pX = (px: number) => `${(px / BASE_WIDTH) * 100}%`;
  const pY = (px: number) => `${(px / BASE_HEIGHT) * 100}%`;

  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{
        paddingTop: `${(BASE_HEIGHT / BASE_WIDTH) * 100}%`,
        marginTop: "-5%",
      }}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute w-full border-t border-[#C65A32] bg-[#EFE3D6]"
          style={{
            top: pY(110),
            height: pY(420),
            left: 0,
          }}
        />

        <div
          className="absolute z-10"
          style={{
            left: pX(665),
            top: pY(30),
            width: pX(410),
            aspectRatio: "1/1",
            zIndex: isEditing && hoveredImage === "image" ? 9998 : 10,
            cursor: isEditing ? "pointer" : "default",
            outline: isEditing && hoveredImage === "image" ? "2px solid #C65A32" : "none",
            outlineOffset: isEditing && hoveredImage === "image" ? "2px" : "0px",
            transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
          }}
          onClick={openImagePicker}
          onMouseEnter={() => setHoveredImage("image")}
          onMouseLeave={() => setHoveredImage(null)}
        >
          <img
            src={content.image || rightImage}
            alt="Cherry"
            className="w-full h-full object-contain scale-x-[-1]"
          />
        </div>

        <h2
          className="absolute z-10 font-ua-brand font-bold uppercase leading-none text-[#2E261D]"
          style={{
            left: pX(124),
            top: pY(169),
            width: "fit-content",
            maxWidth: "none",
            display: "inline-block",
            fontSize: FONT_SIZES.heading,
            zIndex: 9998,
            cursor: isEditing ? "text" : "default",
            outline: isEditing && hoveredText === "title" ? "2px solid #C65A32" : "none",
            outlineOffset: isEditing && hoveredText === "title" ? "2px" : "0px",
            transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
            whiteSpace: "pre",
          }}
          contentEditable={isEditing}
          suppressContentEditableWarning
          onBlur={(event) => updateContent("title", event.currentTarget.innerText.trim())}
          onMouseEnter={() => setHoveredText("title")}
          onMouseLeave={() => setHoveredText(null)}
        >
          {content.title}
        </h2>

        <p
          className="absolute z-10 text-[#2E261D]"
          style={{
            left: pX(120),
            top: pY(355),
            width: "fit-content",
            maxWidth: "none",
            display: "inline-block",
            fontSize: FONT_SIZES.body,
            lineHeight: 1.2,
            zIndex: 9998,
            cursor: isEditing ? "text" : "default",
            outline:
              isEditing && hoveredText === "subtitle" ? "2px solid #C65A32" : "none",
            outlineOffset: isEditing && hoveredText === "subtitle" ? "2px" : "0px",
            transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
            whiteSpace: "pre",
          }}
          contentEditable={isEditing}
          suppressContentEditableWarning
          onBlur={(event) => updateContent("subtitle", event.currentTarget.innerText)}
          onMouseEnter={() => setHoveredText("subtitle")}
          onMouseLeave={() => setHoveredText(null)}
        >
          {content.subtitle}
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="absolute z-20"
          style={{
            left: pX(1099),
            top: pY(176),
            width: pX(219),
          }}
        >
          <SelectTariffButton width="100%" />
        </motion.div>
      </div>
    </section>
  );
};

export default CorporateBeekeepingSlide12;
