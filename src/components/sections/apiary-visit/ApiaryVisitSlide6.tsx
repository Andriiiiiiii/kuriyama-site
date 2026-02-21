import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FONT_SIZES } from "@/config/typography";

type SlideContent = {
  title: string;
  description: string;
};

interface ApiaryVisitSlide6Props {
  enableEditor?: boolean;
}

const STORAGE_KEY = "apiary-visit-slide6-content";
const AUTH_KEY = "apiary-visit-editor-auth";
const EDITOR_OPEN_KEY = "apiary-visit-editor-open";
const DRAFT_KEY = "apiary-visit-slide6-draft";

const DEFAULT_CONTENT: SlideContent = {
  title: "Место проведения",
  description: "Две строчки дополнительного описания как добраться",
};

const ApiaryVisitSlide6: React.FC<ApiaryVisitSlide6Props> = ({ enableEditor = false }) => {
  const [content, setContent] = useState<SlideContent>(DEFAULT_CONTENT);
  const [isEditorAuthorized, setIsEditorAuthorized] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const isEditing = enableEditor && isEditorAuthorized && isEditorOpen;
  const [hoveredText, setHoveredText] = useState<"title" | "description" | null>(
    null,
  );

  const historyRef = useRef<SlideContent[]>([DEFAULT_CONTENT]);
  const historyIndexRef = useRef(0);

  useEffect(() => {
    if (!enableEditor) return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Partial<SlideContent>;
        const normalized: SlideContent = {
          ...DEFAULT_CONTENT,
          ...parsed,
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
    <section className="relative w-full h-screen overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute font-ua-brand font-bold uppercase leading-none text-[#2E261D]"
        style={{
          left: "8.78%",
          top: "14.79%",
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
        contentEditable={isEditing}
        suppressContentEditableWarning
        onBlur={(event) => updateContent("title", event.currentTarget.innerText.trim())}
        onMouseEnter={() => setHoveredText("title")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: "8.16%",
          top: "26.59%",
          width: "fit-content",
          maxWidth: "none",
          display: "inline-block",
          fontSize: FONT_SIZES.body,
          lineHeight: 1.2,
          whiteSpace: "pre",
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline:
            isEditing && hoveredText === "description" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "description" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditing}
        suppressContentEditableWarning
        onBlur={(event) => updateContent("description", event.currentTarget.innerText)}
        onMouseEnter={() => setHoveredText("description")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.description}
      </motion.p>

      <motion.iframe
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        src="https://yandex.ru/map-widget/v1/?text=%D0%B3.%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D1%83%D0%BB.%20%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0%201&z=16"
        title="Яндекс Карта: г. Москва, ул. Ленина 1"
        loading="lazy"
        className="absolute border border-[#C65A32]"
        style={{
          left: "8.33%",
          top: "37.84%",
          width: "83.33%",
          height: "62.16%",
        }}
      />
    </section>
  );
};

export default ApiaryVisitSlide6;
