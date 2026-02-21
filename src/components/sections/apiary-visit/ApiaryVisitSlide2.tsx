import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FONT_SIZES } from "@/config/typography";
import AnimatedLine from "@/components/shared/AnimatedLine";
import leftImage from "@/assets/visit to the apiary/left image 2.webp";
import rightImage from "@/assets/visit to the apiary/right image 2.webp";
// Using vectors for lines or just divs? The prompt lists vectors with coordinates, so divs with borders can work.

type SlideContent = {
  title: string;
  textPrimary: string;
  textSecondary: string;
  images: {
    left: string;
    right: string;
  };
};

const STORAGE_KEY = "apiary-visit-slide2-content";
const AUTH_KEY = "apiary-visit-editor-auth";
const EDITOR_OPEN_KEY = "apiary-visit-editor-open";
const DRAFT_KEY = "apiary-visit-slide2-draft";

const DEFAULT_CONTENT: SlideContent = {
  title: "О МЕРОПРИЯТИИ",
  textPrimary:
    "Описание подкрепляющее заголовок, которое раскрывает суть мероприятия и приглашает гостей.",
  textSecondary: "Продолжение описания услуги с дополнительными деталями.",
  images: {
    left: leftImage,
    right: rightImage,
  },
};

const ApiaryVisitSlide2: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [step, setStep] = useState(0);

  const [content, setContent] = useState<SlideContent>(DEFAULT_CONTENT);
  const [isEditorAuthorized, setIsEditorAuthorized] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const isEditing = isEditorAuthorized && isEditorOpen;
  const [hoveredImage, setHoveredImage] = useState<"left" | "right" | null>(null);
  const [hoveredText, setHoveredText] = useState<
    "title" | "textPrimary" | "textSecondary" | null
  >(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const imageKeyRef = useRef<"left" | "right" | null>(null);
  const historyRef = useRef<SlideContent[]>([DEFAULT_CONTENT]);
  const historyIndexRef = useRef(0);

  // Start animation when in view
  useEffect(() => {
    if (isInView && step === 0) {
      setStep(1);
    }
  }, [isInView, step]);

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

  const updateImage = (key: "left" | "right", value: string) => {
    pushHistory({
      ...content,
      images: {
        ...content.images,
        [key]: value,
      },
    });
  };

  useEffect(() => {
    const syncFromStorage = () => {
      setIsEditorAuthorized(window.sessionStorage.getItem(AUTH_KEY) === "1");
      setIsEditorOpen(window.sessionStorage.getItem(EDITOR_OPEN_KEY) === "1");
    };

    syncFromStorage();
    window.addEventListener("apiary-visit-editor-change", syncFromStorage);
    return () => window.removeEventListener("apiary-visit-editor-change", syncFromStorage);
  }, []);


  const openImagePicker = (key: "left" | "right") => {
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
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-white">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      {/* Title: О мероприятии (id: 655:896): left 8.67%, top 5.36%, width 58.29%, height 7.14% */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute font-ua-brand font-bold uppercase leading-none text-[#C65A32]"
        style={{
          left: "8.67%",
          top: "5.36%",
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

      {/* Left Image: left image 2 (id: 655:898): left 8.33%, top 20.99%, width 33.89%, height 43.66% */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute"
        style={{
          left: "8.33%",
          top: "20.99%",
          width: "33.89%",
          height: "43.66%",
        }}
      >
        <img
          src={content.images.left}
          alt="Left visual"
          className="w-full h-full object-cover"
          style={{
            cursor: isEditing ? "pointer" : "default",
            outline: isEditing && hoveredImage === "left" ? "2px solid #C65A32" : "none",
            outlineOffset: isEditing && hoveredImage === "left" ? "2px" : "0px",
            transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
            zIndex: isEditing && hoveredImage === "left" ? 9998 : 2,
          }}
          onClick={() => openImagePicker("left")}
          onMouseEnter={() => setHoveredImage("left")}
          onMouseLeave={() => setHoveredImage(null)}
        />
      </motion.div>

      {/* Right Image: right image 2 (id: 655:905): left 50.63%, top 59.95%, width 41.04%, height 40.05% */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute"
        style={{
          left: "50.63%",
          top: "59.95%",
          width: "41.04%",
          height: "40.05%",
        }}
      >
        <img
          src={content.images.right}
          alt="Right visual"
          className="w-full h-full object-cover"
          style={{
            cursor: isEditing ? "pointer" : "default",
            outline: isEditing && hoveredImage === "right" ? "2px solid #C65A32" : "none",
            outlineOffset: isEditing && hoveredImage === "right" ? "2px" : "0px",
            transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
            zIndex: isEditing && hoveredImage === "right" ? 9998 : 2,
          }}
          onClick={() => openImagePicker("right")}
          onMouseEnter={() => setHoveredImage("right")}
          onMouseLeave={() => setHoveredImage(null)}
        />
      </motion.div>

      {/* Text 1: Описание подкрепляющее заголовок (id: 655:897): left 50.74%, top 38.03%, width 32.98%, height 7.61% */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: "50.74%",
          top: "38.03%",
          width: "fit-content",
          maxWidth: "none",
          display: "inline-block",
          fontSize: FONT_SIZES.body,
          lineHeight: 1.2,
          whiteSpace: "pre",
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline:
            isEditing && hoveredText === "textPrimary" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "textPrimary" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateContent("textPrimary", event.currentTarget.innerText)}
        onMouseEnter={() => setHoveredText("textPrimary")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.textPrimary}
      </motion.p>

      {/* Text 2: Продолжение описания услуги (id: 655:906): left 15.44%, top 80.87%, width 15.60%, height 4.45% */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: "15.44%",
          top: "80.87%",
          width: "fit-content",
          maxWidth: "none",
          display: "inline-block",
          fontSize: FONT_SIZES.body,
          lineHeight: 1.2,
          whiteSpace: "pre",
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline:
            isEditing && hoveredText === "textSecondary" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "textSecondary" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditorAuthorized && isEditorOpen}
        suppressContentEditableWarning
        onBlur={(event) => updateContent("textSecondary", event.currentTarget.innerText)}
        onMouseEnter={() => setHoveredText("textSecondary")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.textSecondary}
      </motion.p>

      {/* Decorative Lines with AnimatedLine */}

      {/* Group 1: Top Right */}
      {/* 1. Top Horizontal Line */}
      <AnimatedLine
        start={{ x: "42.22%", y: "29.25%" }}
        end={{ x: "91.63%", y: "29.25%" }}
        direction="to-right"
        trigger={step >= 1}
        onComplete={() => setStep((s) => Math.max(s, 2))}
        zIndex={20}
      />

      {/* 2. Vertical Line */}
      <AnimatedLine
        start={{ x: "91.63%", y: "29.25%" }}
        end={{ x: "91.63%", y: "53.86%" }}
        direction="to-bottom"
        trigger={step >= 2}
        onComplete={() => setStep((s) => Math.max(s, 3))}
        zIndex={20}
      />

      {/* 3. Bottom Horizontal Line */}
      <AnimatedLine
        start={{ x: "91.63%", y: "53.86%" }}
        end={{ x: "42.22%", y: "53.86%" }}
        direction="to-left"
        trigger={step >= 3}
        onComplete={() => setStep((s) => Math.max(s, 4))}
        zIndex={20}
      />

      {/* Group 2: Bottom Left */}

      {/* 1. Vertical Line */}
      <AnimatedLine
        start={{ x: "8.30%", y: "70.69%" }}
        end={{ x: "8.30%", y: "95.23%" }}
        direction="to-bottom"
        trigger={step >= 4}
        onComplete={() => setStep((s) => Math.max(s, 5))}
        zIndex={20}
      />

      {/* 2. Bottom Horizontal Line */}
      <AnimatedLine
        start={{ x: "8.30%", y: "95.23%" }}
        end={{ x: "50.69%", y: "95.23%" }}
        direction="to-right"
        trigger={step >= 5}
        onComplete={() => setStep((s) => Math.max(s, 6))}
        zIndex={20}
      />

      {/* 3. Top Horizontal Line */}
      <AnimatedLine
        start={{ x: "8.33%", y: "70.63%" }}
        end={{ x: "50.69%", y: "70.63%" }}
        direction="to-right"
        trigger={step >= 4}
        zIndex={20}
      />

    </section>
  );
};

export default ApiaryVisitSlide2;
