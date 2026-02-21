import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FONT_SIZES } from "@/config/typography";
import leftImage1 from "@/assets/visit to the apiary/1 left image 4.webp";
import leftImage2 from "@/assets/visit to the apiary/2 left image 4.webp";
import leftImage3 from "@/assets/visit to the apiary/3 left image 4.webp";
import rightImage1 from "@/assets/visit to the apiary/1 right image 4.webp";
import rightImage2 from "@/assets/visit to the apiary/2 right image 4.webp";
import rightTopImage from "@/assets/visit to the apiary/right top image 4.webp";

type SlideItem = {
  number: string;
  title: string;
  desc: string;
};

type SlideContent = {
  title: string;
  items: SlideItem[];
  images: {
    rightTop: string;
    left1: string;
    right1: string;
    left2: string;
    right2: string;
    left3: string;
  };
};

const STORAGE_KEY = "apiary-visit-slide4-content";
const AUTH_KEY = "apiary-visit-editor-auth";
const EDITOR_OPEN_KEY = "apiary-visit-editor-open";
const DRAFT_KEY = "apiary-visit-slide4-draft";

const DEFAULT_ITEM_DESC = "Две строчки дополнительного\nописания подкрепляющего заголовок";

const DEFAULT_CONTENT: SlideContent = {
  title: "ПРОГРАММА МЕРОПРИЯТИЯ",
  items: [
    { number: "1", title: "Знакомство", desc: DEFAULT_ITEM_DESC },
    { number: "2", title: "Сбор урожая", desc: DEFAULT_ITEM_DESC },
    { number: "3", title: "Мероприятие", desc: DEFAULT_ITEM_DESC },
    { number: "4", title: "Мероприятие", desc: DEFAULT_ITEM_DESC },
    { number: "5", title: "Мероприятие", desc: DEFAULT_ITEM_DESC },
  ],
  images: {
    rightTop: rightTopImage,
    left1: leftImage1,
    right1: rightImage1,
    left2: leftImage2,
    right2: rightImage2,
    left3: leftImage3,
  },
};

const subtitleSize = `calc(${FONT_SIZES.body} * 1.5)`;
const numberSize = `calc(${FONT_SIZES.heading} * 1.1)`;

const ApiaryVisitSlide4: React.FC = () => {
  const [content, setContent] = useState<SlideContent>(DEFAULT_CONTENT);
  const [isEditorAuthorized, setIsEditorAuthorized] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const isEditing = isEditorAuthorized && isEditorOpen;
  const [hoveredImage, setHoveredImage] = useState<keyof SlideContent["images"] | null>(
    null,
  );
  const [hoveredText, setHoveredText] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const imageKeyRef = useRef<keyof SlideContent["images"] | null>(null);
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
          items: parsed.items ?? DEFAULT_CONTENT.items,
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

  const updateTitle = (value: string) => {
    pushHistory({ ...content, title: value });
  };

  const updateItem = (index: number, key: keyof SlideItem, value: string) => {
    const items = content.items.map((item, i) =>
      i === index ? { ...item, [key]: value } : item,
    );
    pushHistory({ ...content, items });
  };

  const updateImage = (key: keyof SlideContent["images"], value: string) => {
    pushHistory({
      ...content,
      images: {
        ...content.images,
        [key]: value,
      },
    });
  };

  const openImagePicker = (key: keyof SlideContent["images"]) => {
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
    <section className="relative w-full h-[321.7vh] overflow-hidden">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute font-ua-brand font-bold uppercase leading-none text-[#C65A32]"
        style={{
          left: "8.78%",
          top: "12.16%",
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
        onBlur={(event) => updateTitle(event.currentTarget.innerText.trim())}
        onMouseEnter={() => setHoveredText("title")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.title}
      </motion.h2>

      <motion.img
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        src={content.images.rightTop}
        alt=""
        className="absolute object-cover"
        style={{
          left: "75.76%",
          top: "0%",
          width: "21.61%",
          height: "25.91%",
          zIndex: isEditing && hoveredImage === "rightTop" ? 9998 : 2,
          cursor: isEditing ? "pointer" : "default",
          outline: isEditing && hoveredImage === "rightTop" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredImage === "rightTop" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        onClick={() => openImagePicker("rightTop")}
        onMouseEnter={() => setHoveredImage("rightTop")}
        onMouseLeave={() => setHoveredImage(null)}
      />

      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        src={content.images.left1}
        alt=""
        className="absolute object-cover"
        style={{
          left: "15.42%",
          top: "21.78%",
          width: "33.89%",
          height: "13.77%",
          zIndex: isEditing && hoveredImage === "left1" ? 9998 : 2,
          cursor: isEditing ? "pointer" : "default",
          outline: isEditing && hoveredImage === "left1" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredImage === "left1" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        onClick={() => openImagePicker("left1")}
        onMouseEnter={() => setHoveredImage("left1")}
        onMouseLeave={() => setHoveredImage(null)}
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        src={content.images.right1}
        alt=""
        className="absolute object-cover"
        style={{
          left: "50.69%",
          top: "37.63%",
          width: "33.89%",
          height: "13.77%",
          zIndex: isEditing && hoveredImage === "right1" ? 9998 : 2,
          cursor: isEditing ? "pointer" : "default",
          outline: isEditing && hoveredImage === "right1" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredImage === "right1" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        onClick={() => openImagePicker("right1")}
        onMouseEnter={() => setHoveredImage("right1")}
        onMouseLeave={() => setHoveredImage(null)}
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        src={content.images.left2}
        alt=""
        className="absolute object-cover"
        style={{
          left: "15.42%",
          top: "53.48%",
          width: "33.89%",
          height: "13.77%",
          zIndex: isEditing && hoveredImage === "left2" ? 9998 : 2,
          cursor: isEditing ? "pointer" : "default",
          outline: isEditing && hoveredImage === "left2" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredImage === "left2" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        onClick={() => openImagePicker("left2")}
        onMouseEnter={() => setHoveredImage("left2")}
        onMouseLeave={() => setHoveredImage(null)}
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        src={content.images.right2}
        alt=""
        className="absolute object-cover"
        style={{
          left: "50.69%",
          top: "69.34%",
          width: "33.89%",
          height: "13.77%",
          zIndex: isEditing && hoveredImage === "right2" ? 9998 : 2,
          cursor: isEditing ? "pointer" : "default",
          outline: isEditing && hoveredImage === "right2" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredImage === "right2" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        onClick={() => openImagePicker("right2")}
        onMouseEnter={() => setHoveredImage("right2")}
        onMouseLeave={() => setHoveredImage(null)}
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
        src={content.images.left3}
        alt=""
        className="absolute object-cover"
        style={{
          left: "15.42%",
          top: "85.19%",
          width: "33.89%",
          height: "13.77%",
          zIndex: isEditing && hoveredImage === "left3" ? 9998 : 2,
          cursor: isEditing ? "pointer" : "default",
          outline: isEditing && hoveredImage === "left3" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredImage === "left3" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        onClick={() => openImagePicker("left3")}
        onMouseEnter={() => setHoveredImage("left3")}
        onMouseLeave={() => setHoveredImage(null)}
      />

      <p
        className="absolute font-['Han-Zi'] leading-none text-[#2E261D]"
        style={{
          left: "60.28%",
          top: "26.96%",
          maxWidth: "none",
          display: "inline-block",
          fontSize: numberSize,
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "item0-number" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "item0-number" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateItem(0, "number", event.currentTarget.innerText.trim())}
        onMouseEnter={() => setHoveredText("item0-number")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.items[0]?.number}
      </p>
      <p
        className="absolute font-glametrix font-bold text-[#2E261D]"
        style={{
          left: "64.64%",
          top: "27.13%",
          maxWidth: "none",
          display: "inline-block",
          fontSize: subtitleSize,
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "item0-title" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "item0-title" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateItem(0, "title", event.currentTarget.innerText.trim())}
        onMouseEnter={() => setHoveredText("item0-title")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.items[0]?.title}
      </p>
      <p
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: "64.61%",
          top: "28.93%",
          width: "fit-content",
          maxWidth: "none",
          display: "inline-block",
          fontSize: FONT_SIZES.body,
          lineHeight: 1.15,
          whiteSpace: "pre",
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "item0-desc" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "item0-desc" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateItem(0, "desc", event.currentTarget.innerText)}
        onMouseEnter={() => setHoveredText("item0-desc")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.items[0]?.desc}
      </p>

      <p
        className="absolute font-['Han-Zi'] leading-none text-[#2E261D]"
        style={{
          left: "8.53%",
          top: "42.82%",
          maxWidth: "none",
          display: "inline-block",
          fontSize: numberSize,
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "item1-number" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "item1-number" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateItem(1, "number", event.currentTarget.innerText.trim())}
        onMouseEnter={() => setHoveredText("item1-number")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.items[1]?.number}
      </p>
      <p
        className="absolute font-glametrix font-bold text-[#2E261D]"
        style={{
          left: "15.21%",
          top: "42.99%",
          maxWidth: "none",
          display: "inline-block",
          fontSize: subtitleSize,
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "item1-title" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "item1-title" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateItem(1, "title", event.currentTarget.innerText.trim())}
        onMouseEnter={() => setHoveredText("item1-title")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.items[1]?.title}
      </p>
      <p
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: "15.17%",
          top: "44.78%",
          width: "fit-content",
          maxWidth: "none",
          display: "inline-block",
          fontSize: FONT_SIZES.body,
          lineHeight: 1.15,
          whiteSpace: "pre",
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "item1-desc" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "item1-desc" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateItem(1, "desc", event.currentTarget.innerText)}
        onMouseEnter={() => setHoveredText("item1-desc")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.items[1]?.desc}
      </p>

      <p
        className="absolute font-['Han-Zi'] leading-none text-[#2E261D]"
        style={{
          left: "57.76%",
          top: "58.66%",
          maxWidth: "none",
          display: "inline-block",
          fontSize: numberSize,
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "item2-number" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "item2-number" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateItem(2, "number", event.currentTarget.innerText.trim())}
        onMouseEnter={() => setHoveredText("item2-number")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.items[2]?.number}
      </p>
      <p
        className="absolute font-glametrix font-bold text-[#2E261D]"
        style={{
          left: "64.71%",
          top: "58.85%",
          maxWidth: "none",
          display: "inline-block",
          fontSize: subtitleSize,
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "item2-title" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "item2-title" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateItem(2, "title", event.currentTarget.innerText.trim())}
        onMouseEnter={() => setHoveredText("item2-title")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.items[2]?.title}
      </p>
      <p
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: "64.61%",
          top: "60.64%",
          width: "fit-content",
          maxWidth: "none",
          display: "inline-block",
          fontSize: FONT_SIZES.body,
          lineHeight: 1.15,
          whiteSpace: "pre",
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "item2-desc" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "item2-desc" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateItem(2, "desc", event.currentTarget.innerText)}
        onMouseEnter={() => setHoveredText("item2-desc")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.items[2]?.desc}
      </p>

      <p
        className="absolute font-['Han-Zi'] leading-none text-[#2E261D]"
        style={{
          left: "8.60%",
          top: "74.53%",
          maxWidth: "none",
          display: "inline-block",
          fontSize: numberSize,
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "item3-number" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "item3-number" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateItem(3, "number", event.currentTarget.innerText.trim())}
        onMouseEnter={() => setHoveredText("item3-number")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.items[3]?.number}
      </p>
      <p
        className="absolute font-glametrix font-bold text-[#2E261D]"
        style={{
          left: "15.26%",
          top: "74.70%",
          maxWidth: "none",
          display: "inline-block",
          fontSize: subtitleSize,
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "item3-title" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "item3-title" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateItem(3, "title", event.currentTarget.innerText.trim())}
        onMouseEnter={() => setHoveredText("item3-title")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.items[3]?.title}
      </p>
      <p
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: "15.17%",
          top: "76.49%",
          width: "fit-content",
          maxWidth: "none",
          display: "inline-block",
          fontSize: FONT_SIZES.body,
          lineHeight: 1.15,
          whiteSpace: "pre",
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "item3-desc" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "item3-desc" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateItem(3, "desc", event.currentTarget.innerText)}
        onMouseEnter={() => setHoveredText("item3-desc")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.items[3]?.desc}
      </p>

      <p
        className="absolute font-['Han-Zi'] leading-none text-[#2E261D]"
        style={{
          left: "57.33%",
          top: "90.36%",
          maxWidth: "none",
          display: "inline-block",
          fontSize: numberSize,
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "item4-number" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "item4-number" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateItem(4, "number", event.currentTarget.innerText.trim())}
        onMouseEnter={() => setHoveredText("item4-number")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.items[4]?.number}
      </p>
      <p
        className="absolute font-glametrix font-bold text-[#2E261D]"
        style={{
          left: "64.71%",
          top: "90.56%",
          maxWidth: "none",
          display: "inline-block",
          fontSize: subtitleSize,
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "item4-title" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "item4-title" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateItem(4, "title", event.currentTarget.innerText.trim())}
        onMouseEnter={() => setHoveredText("item4-title")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.items[4]?.title}
      </p>
      <p
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: "64.61%",
          top: "92.34%",
          width: "fit-content",
          maxWidth: "none",
          display: "inline-block",
          fontSize: FONT_SIZES.body,
          lineHeight: 1.15,
          whiteSpace: "pre",
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "item4-desc" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "item4-desc" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateItem(4, "desc", event.currentTarget.innerText)}
        onMouseEnter={() => setHoveredText("item4-desc")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.items[4]?.desc}
      </p>
    </section>
  );
};

export default ApiaryVisitSlide4;
