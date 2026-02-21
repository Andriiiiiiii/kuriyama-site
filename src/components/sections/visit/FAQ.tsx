import React, { useEffect, useRef, useState } from "react";
import { FONT_SIZES } from "@/config/typography";
import backImage from "@/assets/visit/12-back-image.webp";
import leftImage from "@/assets/visit to the apiary/left picture 8.webp";

interface FAQProps {
  questionText?: string;
  enableEditor?: boolean;
}

type FAQItem = {
  question: string;
  answer: string;
};

type FAQContent = {
  titleLines: string[];
  questions: FAQItem[];
  backgroundImage: string;
  leftImage: string;
};

const STORAGE_KEY = "apiary-visit-faq-content";
const AUTH_KEY = "apiary-visit-editor-auth";
const EDITOR_OPEN_KEY = "apiary-visit-editor-open";
const DRAFT_KEY = "apiary-visit-faq-draft";

const DEFAULT_TITLE_LINES = ["частые", "вопросы"];
const DEFAULT_BACKGROUND_IMAGE = backImage;
const DEFAULT_LEFT_IMAGE = leftImage;

const FAQ: React.FC<FAQProps> = ({
  questionText = "Вопрос о посещении Куриямы",
  enableEditor = false,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [content, setContent] = useState<FAQContent>({
    titleLines: DEFAULT_TITLE_LINES,
    backgroundImage: DEFAULT_BACKGROUND_IMAGE,
    leftImage: DEFAULT_LEFT_IMAGE,
    questions: Array.from({ length: 5 }, () => ({
      question: questionText,
      answer: "Описание, подробнее раскрывающее заголовок",
    })),
  });
  const [isEditorAuthorized, setIsEditorAuthorized] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const isEditing = enableEditor && isEditorAuthorized && isEditorOpen;
  const [hoveredText, setHoveredText] = useState<string | null>(null);

  const historyRef = useRef<FAQContent[]>([]);
  const historyIndexRef = useRef(0);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const imageKeyRef = useRef<"background" | "left" | null>(null);

  const toggleItem = (index: number) => {
    if (isEditing) return;
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (!enableEditor) return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Partial<FAQContent>;
        const normalized: FAQContent = {
          titleLines: parsed.titleLines ?? DEFAULT_TITLE_LINES,
          backgroundImage: parsed.backgroundImage || DEFAULT_BACKGROUND_IMAGE,
          leftImage: parsed.leftImage || DEFAULT_LEFT_IMAGE,
          questions:
            parsed.questions ??
            Array.from({ length: 5 }, () => ({
              question: questionText,
              answer: "Описание, подробнее раскрывающее заголовок",
            })),
        };
        setContent(normalized);
        historyRef.current = [normalized];
        historyIndexRef.current = 0;
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    } else {
      const initial: FAQContent = {
        titleLines: DEFAULT_TITLE_LINES,
        backgroundImage: DEFAULT_BACKGROUND_IMAGE,
        leftImage: DEFAULT_LEFT_IMAGE,
        questions: Array.from({ length: 5 }, () => ({
          question: questionText,
          answer: "Описание, подробнее раскрывающее заголовок",
        })),
      };
      historyRef.current = [initial];
      historyIndexRef.current = 0;
    }

    const authState = window.sessionStorage.getItem(AUTH_KEY);
    const isAuthorized = authState === "1";
    setIsEditorAuthorized(isAuthorized);
    setIsEditorOpen(window.sessionStorage.getItem(EDITOR_OPEN_KEY) === "1");

    if (isAuthorized) {
      const draft = window.sessionStorage.getItem(DRAFT_KEY);
      if (draft) {
        try {
          const parsedDraft = JSON.parse(draft) as FAQContent;
          setContent(parsedDraft);
          historyRef.current = [parsedDraft];
          historyIndexRef.current = 0;
        } catch {
          window.sessionStorage.removeItem(DRAFT_KEY);
        }
      }
    }
  }, [enableEditor, questionText]);

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

  useEffect(() => {
    if (!enableEditor) return;
    const onSave = () => saveContent();
    const onReset = () => resetContent();
    window.addEventListener("apiary-visit-editor-save", onSave);
    window.addEventListener("apiary-visit-editor-reset", onReset);
    return () => {
      window.removeEventListener("apiary-visit-editor-save", onSave);
      window.removeEventListener("apiary-visit-editor-reset", onReset);
    };
  }, [content, isEditing, enableEditor, questionText]);

  const pushHistory = (nextContent: FAQContent) => {
    const history = historyRef.current.slice(0, historyIndexRef.current + 1);
    history.push(nextContent);
    historyRef.current = history;
    historyIndexRef.current = history.length - 1;
    setContent(nextContent);
    if (isEditing) {
      window.sessionStorage.setItem(DRAFT_KEY, JSON.stringify(nextContent));
    }
  };

  const saveContent = (nextContent: FAQContent = content) => {
    if (!enableEditor) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextContent));
    historyRef.current = [nextContent];
    historyIndexRef.current = 0;
    setContent(nextContent);
    if (isEditing) {
      window.sessionStorage.setItem(DRAFT_KEY, JSON.stringify(nextContent));
    }
  };

  const resetContent = () => {
    saveContent({
      titleLines: DEFAULT_TITLE_LINES,
      backgroundImage: DEFAULT_BACKGROUND_IMAGE,
      leftImage: DEFAULT_LEFT_IMAGE,
      questions: Array.from({ length: 5 }, () => ({
        question: questionText,
        answer: "Описание, подробнее раскрывающее заголовок",
      })),
    });
  };

  const updateTitleLine = (index: number, value: string) => {
    const titleLines = [...content.titleLines];
    titleLines[index] = value;
    pushHistory({ ...content, titleLines });
  };

  const updateQuestion = (index: number, value: string) => {
    const questions = content.questions.map((item, i) =>
      i === index ? { ...item, question: value } : item,
    );
    pushHistory({ ...content, questions });
  };

  const updateAnswer = (index: number, value: string) => {
    const questions = content.questions.map((item, i) =>
      i === index ? { ...item, answer: value } : item,
    );
    pushHistory({ ...content, questions });
  };

  const updateImage = (key: "background" | "left", value: string) => {
    if (key === "background") {
      pushHistory({ ...content, backgroundImage: value });
      return;
    }
    pushHistory({ ...content, leftImage: value });
  };

  const openImagePicker = (key: "background" | "left") => {
    if (!isEditing) return;
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
    <section className="relative w-full h-layout bg-white overflow-hidden">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <div className="absolute inset-0">
        <img
          src={content.backgroundImage || DEFAULT_BACKGROUND_IMAGE}
          alt=""
          className="absolute object-contain"
          style={{
            left: "40.7639%",
            top: "0%",
            width: "18.5417%",
            height: "100%",
            cursor: isEditing ? "pointer" : "default",
            outline:
              isEditing && hoveredText === "bg-image" ? "2px solid #C65A32" : "none",
            outlineOffset: isEditing && hoveredText === "bg-image" ? "2px" : "0px",
            transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
          }}
          onClick={() => openImagePicker("background")}
          onMouseEnter={() => setHoveredText("bg-image")}
          onMouseLeave={() => setHoveredText(null)}
        />

        <h1
          className="absolute font-ua-brand text-primary font-bold uppercase leading-[1.1]"
          style={{
            left: "8.3472%",
            top: "20.8535%",
            width: "33.6894%",
            height: "29.5360%",
            fontSize: FONT_SIZES.heading,
            zIndex: 9998,
          }}
        >
          <span
            style={{
              cursor: isEditing ? "text" : "default",
              outline:
                isEditing && hoveredText === "title-0" ? "2px solid #C65A32" : "none",
              outlineOffset: isEditing && hoveredText === "title-0" ? "2px" : "0px",
              transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
              whiteSpace: "pre",
              maxWidth: "none",
              display: "inline-block",
            }}
            contentEditable={isEditing}
            suppressContentEditableWarning
            onBlur={(event) => updateTitleLine(0, event.currentTarget.innerText)}
            onMouseEnter={() => setHoveredText("title-0")}
            onMouseLeave={() => setHoveredText(null)}
          >
            {content.titleLines[0]}
          </span>
          <br />
          <span
            style={{
              cursor: isEditing ? "text" : "default",
              outline:
                isEditing && hoveredText === "title-1" ? "2px solid #C65A32" : "none",
              outlineOffset: isEditing && hoveredText === "title-1" ? "2px" : "0px",
              transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
              whiteSpace: "pre",
              maxWidth: "none",
              display: "inline-block",
            }}
            contentEditable={isEditing}
            suppressContentEditableWarning
            onBlur={(event) => updateTitleLine(1, event.currentTarget.innerText)}
            onMouseEnter={() => setHoveredText("title-1")}
            onMouseLeave={() => setHoveredText(null)}
          >
            {content.titleLines[1]}
          </span>
        </h1>

        <img
          src={content.leftImage || DEFAULT_LEFT_IMAGE}
          alt=""
          className="absolute bottom-0 left-0 object-contain"
          style={{
            left: "-2%",
            bottom: "-5%",
            width: "25%",
            maxHeight: "45%",
            zIndex: 10,
            cursor: isEditing ? "pointer" : "default",
            outline:
              isEditing && hoveredText === "left-image" ? "2px solid #C65A32" : "none",
            outlineOffset: isEditing && hoveredText === "left-image" ? "2px" : "0px",
            transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
          }}
          onClick={() => openImagePicker("left")}
          onMouseEnter={() => setHoveredText("left-image")}
          onMouseLeave={() => setHoveredText(null)}
        />

        <div
          className="absolute"
          style={{
            left: "50.6944%",
            top: "18.6715%",
            width: "40.9722%",
          }}
        >
          {content.questions.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggleItem(index)}
                className="w-full font-glametrix text-secondary font-bold text-left hover:opacity-80 transition-opacity flex items-center justify-between"
                style={{
                  fontSize: FONT_SIZES.subheading,
                  marginTop: index === 0 ? "0" : "1.5vh",
                  zIndex: 9998,
                }}
              >
                <span
                  className="flex-1"
                  style={{
                    cursor: isEditing ? "text" : "pointer",
                    outline:
                      isEditing && hoveredText === `question-${index}`
                        ? "2px solid #C65A32"
                        : "none",
                    outlineOffset:
                      isEditing && hoveredText === `question-${index}` ? "2px" : "0px",
                    transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
                    whiteSpace: "pre",
                    maxWidth: "none",
                    display: "inline-block",
                  }}
                  contentEditable={isEditing}
                  suppressContentEditableWarning
                  onBlur={(event) => updateQuestion(index, event.currentTarget.innerText)}
                  onMouseEnter={() => setHoveredText(`question-${index}`)}
                  onMouseLeave={() => setHoveredText(null)}
                >
                  {item.question}
                </span>
                <span
                  className="ml-4 flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                >
                  {openIndex === index ? (
                    <div className="bg-primary" style={{ width: "100%", height: "1px" }} />
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <line
                        x1="10"
                        y1="0"
                        x2="10"
                        y2="20"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-primary"
                      />
                      <line
                        x1="0"
                        y1="10"
                        x2="20"
                        y2="10"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-primary"
                      />
                    </svg>
                  )}
                </span>
              </button>

              {openIndex === index && (
                <div className="overflow-hidden">
                  <p
                    className="font-glametrix text-foreground"
                    style={{
                      fontSize: FONT_SIZES.body,
                      marginTop: "1.5vh",
                      zIndex: 9998,
                      cursor: isEditing ? "text" : "default",
                      outline:
                        isEditing && hoveredText === `answer-${index}`
                          ? "2px solid #C65A32"
                          : "none",
                      outlineOffset:
                        isEditing && hoveredText === `answer-${index}` ? "2px" : "0px",
                      transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
                      whiteSpace: "pre",
                      maxWidth: "none",
                      display: "inline-block",
                    }}
                    contentEditable={isEditing}
                    suppressContentEditableWarning
                    onBlur={(event) => updateAnswer(index, event.currentTarget.innerText)}
                    onMouseEnter={() => setHoveredText(`answer-${index}`)}
                    onMouseLeave={() => setHoveredText(null)}
                  >
                    {item.answer}
                  </p>
                </div>
              )}

              <div
                className="bg-primary origin-left"
                style={{
                  width: "100%",
                  height: "1px",
                  marginTop: "1.5vh",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
