import React, { useEffect, useRef, useState } from "react";
import { FONT_SIZES } from "@/config/typography";
import backImage from "@/assets/visit/13-back-image.webp";
import ivanPhoto from "@/assets/visit/ivan.webp";

interface ReviewsProps {
  enableEditor?: boolean;
}

type ReviewItem = {
  name: string;
  text: string;
  withBorder: boolean;
  photo: string;
  left: string;
  top: string;
  width: string;
};

type ReviewsContent = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  reviews: ReviewItem[];
};

const STORAGE_KEY = "apiary-visit-reviews-content";
const AUTH_KEY = "apiary-visit-editor-auth";
const EDITOR_OPEN_KEY = "apiary-visit-editor-open";
const DRAFT_KEY = "apiary-visit-reviews-draft";

const DEFAULT_CONTENT: ReviewsContent = {
  title: "отзывы",
  subtitle: "Текст, дополняющий заголовок. О ценности гостей и их визитов.",
  backgroundImage: backImage,
  reviews: [
    {
      left: "8.4028%",
      top: "28.7485%",
      width: "19.7917%",
      withBorder: true,
      name: "Иванов Иван",
      photo: ivanPhoto,
      text:
        "Отзыв в три-четыре строчки, подчеркивающий надежность, скорость и профит наших услуг. Здесь можно вставить отзыв покрупнее, чтобы он заполнил плашку. Впечатления о посещении и слова благодарности гидам и управляющим",
    },
    {
      left: "36.5972%",
      top: "38.2900%",
      width: "33.8889%",
      withBorder: true,
      name: "Лебедева Дарья",
      photo: ivanPhoto,
      text: "Отзыв в три-четыре строчки, подчеркивающий надежность, скорость.",
    },
    {
      left: "64.7917%",
      top: "12.3916%",
      width: "26.8750%",
      withBorder: true,
      name: "Кулик Евгений",
      photo: ivanPhoto,
      text: "Отзыв в три-четыре строчки, подчеркивающий надежность, скорость и профит наших услуг.",
    },
    {
      left: "71.6667%",
      top: "40.3965%",
      width: "20.0000%",
      withBorder: false,
      name: "Соколов Яков",
      photo: ivanPhoto,
      text: "Отзыв в три-четыре строчки, подчеркивающий надежность, скорость и профит наших услуг.",
    },
    {
      left: "29.5139%",
      top: "68.2776%",
      width: "27.1528%",
      withBorder: false,
      name: "Романов Сергей",
      photo: ivanPhoto,
      text: "Отзыв в три-четыре строчки, подчеркивающий надежность, скорость и профит.",
    },
    {
      left: "57.7778%",
      top: "64.1884%",
      width: "33.8889%",
      withBorder: true,
      name: "Соболева Наталья",
      photo: ivanPhoto,
      text: "Отзыв в три-четыре строчки, подчеркивающий надежность, скорость.",
    },
  ],
};

interface ReviewBlockProps {
  review: ReviewItem;
  index: number;
  isEditing: boolean;
  hoveredText: string | null;
  hoveredImage: string | null;
  setHoveredImage: (value: string | null) => void;
  setHoveredText: (value: string | null) => void;
  updateReview: (index: number, key: "name" | "text", value: string) => void;
  onImagePick: (key: { type: "review"; index: number }) => void;
}

const ReviewBlock: React.FC<ReviewBlockProps> = ({
  review,
  index,
  isEditing,
  hoveredText,
  hoveredImage,
  setHoveredImage,
  setHoveredText,
  updateReview,
  onImagePick,
}) => {
  const photoSize = review.withBorder ? "min(15%, 60px)" : "min(20%, 70px)";
  const gap = review.withBorder ? "3%" : "4%";

  return (
    <div
      className={`absolute ${review.withBorder ? "bg-[#EFE3D6] border border-primary" : ""}`}
      style={{
        left: review.left,
        top: review.top,
        width: review.width,
        padding: review.withBorder ? "1.5%" : undefined,
      }}
    >
      <div className="flex items-center mb-[1.5%]" style={{ gap }}>
        <div
          className="bg-[#EFE9E3] border border-primary flex-shrink-0"
          style={{
            padding: "4px",
            width: photoSize,
            height: photoSize,
            cursor: isEditing ? "pointer" : "default",
            outline:
              isEditing && hoveredImage === `review-${index}-photo`
                ? "2px solid #C65A32"
                : "none",
            outlineOffset:
              isEditing && hoveredImage === `review-${index}-photo` ? "2px" : "0px",
            transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
          }}
          onClick={() => onImagePick({ type: "review", index })}
          onMouseEnter={() => setHoveredImage(`review-${index}-photo`)}
          onMouseLeave={() => setHoveredImage(null)}
        >
          <div className="border border-primary overflow-hidden w-full h-full">
            <img
              src={review.photo || ivanPhoto}
              alt={review.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h3
          className="font-glametrix font-bold text-foreground flex-1"
          style={{
            fontSize: FONT_SIZES.subheading,
            maxWidth: "none",
            display: "inline-block",
            zIndex: 9998,
            cursor: isEditing ? "text" : "default",
            outline:
              isEditing && hoveredText === `review-${index}-name`
                ? "2px solid #C65A32"
                : "none",
            outlineOffset:
              isEditing && hoveredText === `review-${index}-name` ? "2px" : "0px",
            transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
          }}
          contentEditable={isEditing}
          suppressContentEditableWarning
          onBlur={(event) => updateReview(index, "name", event.currentTarget.innerText.trim())}
          onMouseEnter={() => setHoveredText(`review-${index}-name`)}
          onMouseLeave={() => setHoveredText(null)}
        >
          {review.name}
        </h3>
      </div>

      <p
        className="font-glametrix text-foreground"
        style={{
          fontSize: FONT_SIZES.body,
          whiteSpace: "pre",
          maxWidth: "none",
          display: "inline-block",
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline:
            isEditing && hoveredText === `review-${index}-text`
              ? "2px solid #C65A32"
              : "none",
          outlineOffset:
            isEditing && hoveredText === `review-${index}-text` ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditing}
        suppressContentEditableWarning
        onBlur={(event) => updateReview(index, "text", event.currentTarget.innerText)}
        onMouseEnter={() => setHoveredText(`review-${index}-text`)}
        onMouseLeave={() => setHoveredText(null)}
      >
        {review.text}
      </p>
    </div>
  );
};

const Reviews: React.FC<ReviewsProps> = ({ enableEditor = false }) => {
  const [content, setContent] = useState<ReviewsContent>(DEFAULT_CONTENT);
  const [isEditorAuthorized, setIsEditorAuthorized] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const isEditing = enableEditor && isEditorAuthorized && isEditorOpen;
  const [hoveredText, setHoveredText] = useState<string | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const historyRef = useRef<ReviewsContent[]>([DEFAULT_CONTENT]);
  const historyIndexRef = useRef(0);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const imageKeyRef = useRef<
    | { type: "background" }
    | { type: "review"; index: number }
    | null
  >(null);

  useEffect(() => {
    if (!enableEditor) return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Partial<ReviewsContent>;
        const normalizedReviews = DEFAULT_CONTENT.reviews.map((defaultReview, index) => {
          const parsedReview = parsed.reviews?.[index];
          return {
            ...defaultReview,
            ...parsedReview,
            photo:
              (parsedReview?.photo ?? defaultReview.photo ?? ivanPhoto) || defaultReview.photo,
          };
        });
        const normalized: ReviewsContent = {
          ...DEFAULT_CONTENT,
          ...parsed,
          backgroundImage: parsed.backgroundImage || DEFAULT_CONTENT.backgroundImage,
          reviews: normalizedReviews,
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
          const parsedDraft = JSON.parse(draft) as ReviewsContent;
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
  }, [content, isEditing, enableEditor]);

  const pushHistory = (nextContent: ReviewsContent) => {
    const history = historyRef.current.slice(0, historyIndexRef.current + 1);
    history.push(nextContent);
    historyRef.current = history;
    historyIndexRef.current = history.length - 1;
    setContent(nextContent);
    if (isEditing) {
      window.sessionStorage.setItem(DRAFT_KEY, JSON.stringify(nextContent));
    }
  };

  const saveContent = (nextContent: ReviewsContent = content) => {
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
    saveContent(DEFAULT_CONTENT);
  };

  const updateReview = (index: number, key: "name" | "text", value: string) => {
    const reviews = content.reviews.map((review, i) =>
      i === index ? { ...review, [key]: value } : review,
    );
    pushHistory({ ...content, reviews });
  };

  const updateTitle = (value: string) => {
    pushHistory({ ...content, title: value });
  };

  const updateSubtitle = (value: string) => {
    pushHistory({ ...content, subtitle: value });
  };

  const updateImage = (key: { type: "background" } | { type: "review"; index: number }, value: string) => {
    if (key.type === "background") {
      pushHistory({ ...content, backgroundImage: value });
      return;
    }
    const reviews = content.reviews.map((review, index) =>
      index === key.index ? { ...review, photo: value } : review,
    );
    pushHistory({ ...content, reviews });
  };

  const openImagePicker = (key: { type: "background" } | { type: "review"; index: number }) => {
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
          src={content.backgroundImage || backImage}
          alt=""
          className="absolute object-contain"
          style={{
            left: "25.0694%",
            top: "29.6159%",
            width: "16.6667%",
            height: "59.3556%",
            cursor: isEditing ? "pointer" : "default",
            outline:
              isEditing && hoveredImage === "background" ? "2px solid #C65A32" : "none",
            outlineOffset: isEditing && hoveredImage === "background" ? "2px" : "0px",
            transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
          }}
          onClick={() => openImagePicker({ type: "background" })}
          onMouseEnter={() => setHoveredImage("background")}
          onMouseLeave={() => setHoveredImage(null)}
        />

        <h1
          className="absolute font-ua-brand text-primary font-bold uppercase"
          style={{
            left: "8.3472%",
            top: "10%",
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
          onBlur={(event) => updateTitle(event.currentTarget.innerText.trim())}
          onMouseEnter={() => setHoveredText("title")}
          onMouseLeave={() => setHoveredText(null)}
        >
          {content.title}
        </h1>

        <p
          className="absolute font-glametrix text-foreground"
          style={{
            left: "40%",
            top: "13%",
            width: "fit-content",
            maxWidth: "none",
            display: "inline-block",
            fontSize: FONT_SIZES.body,
            whiteSpace: "pre",
            zIndex: 9998,
            cursor: isEditing ? "text" : "default",
            outline:
              isEditing && hoveredText === "subtitle" ? "2px solid #C65A32" : "none",
            outlineOffset: isEditing && hoveredText === "subtitle" ? "2px" : "0px",
            transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
          }}
          contentEditable={isEditing}
          suppressContentEditableWarning
          onBlur={(event) => updateSubtitle(event.currentTarget.innerText)}
          onMouseEnter={() => setHoveredText("subtitle")}
          onMouseLeave={() => setHoveredText(null)}
        >
          {content.subtitle}
        </p>

        {content.reviews.map((review, index) => (
          <ReviewBlock
            key={`${review.name}-${index}`}
            review={review}
            index={index}
            isEditing={isEditing}
            hoveredText={hoveredText}
            hoveredImage={hoveredImage}
            setHoveredImage={setHoveredImage}
            setHoveredText={setHoveredText}
            updateReview={updateReview}
            onImagePick={openImagePicker}
          />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
