import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FONT_SIZES } from "@/config/typography";
import SelectTariffButton from "@/components/shared/SelectTariffButton";
import card1Image from "@/assets/visit to the apiary/card 1 5.webp";
import card2Image from "@/assets/visit to the apiary/card 2 5.webp";
import card3Image from "@/assets/visit to the apiary/card 3 5.webp";
import rightTopPicture from "@/assets/visit to the apiary/right top picture 5.webp";

type TicketCardContent = {
  title: string;
  description: string;
  benefits: string[];
  price: string;
  currency: string;
};

type SlideContent = {
  heading: string;
  buttonText: string;
  cards: TicketCardContent[];
};

const STORAGE_KEY = "apiary-visit-slide5-content";
const AUTH_KEY = "apiary-visit-editor-auth";
const EDITOR_OPEN_KEY = "apiary-visit-editor-open";
const DRAFT_KEY = "apiary-visit-slide5-draft";

const DEFAULT_CONTENT: SlideContent = {
  heading: "Билеты",
  buttonText: "Подобрать",
  cards: [
    {
      title: "1 человек",
      description: "Небольшое описание в две строчки",
      benefits: [
        "Что получаете",
        "Что получаете",
        "Что получаете",
        "Что получаете",
        "Что получаете",
      ],
      price: "10 000",
      currency: "руб.",
    },
    {
      title: "С другом",
      description: "Небольшое описание в две строчки",
      benefits: [
        "Что получаете",
        "Что получаете",
        "Что получаете",
        "Что получаете",
        "Что получаете",
      ],
      price: "15 000",
      currency: "руб.",
    },
    {
      title: "Компания",
      description: "Небольшое описание в две строчки",
      benefits: [
        "Что получаете",
        "Что получаете",
        "Что получаете",
        "Что получаете",
        "Что получаете",
      ],
      price: "30 000",
      currency: "руб.",
    },
  ],
};

const priceSize = `calc(${FONT_SIZES.subheading} * 1.45)`;

type TicketCardProps = {
  image: string;
  left: string;
  card: TicketCardContent;
  cardIndex: number;
  isEditing: boolean;
  hoveredText: string | null;
  setHoveredText: (value: string | null) => void;
  updateCard: (index: number, next: TicketCardContent) => void;
};

const TicketCard: React.FC<TicketCardProps> = ({
  image,
  left,
  card,
  cardIndex,
  isEditing,
  hoveredText,
  setHoveredText,
  updateCard,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="absolute overflow-hidden"
      style={{ left, top: "18.82%", width: "26.11%", height: "60.80%" }}
    >
      <img src={image} alt={card.title} className="h-full w-full object-contain" />

      <h3
        className="absolute whitespace-nowrap font-ua-brand font-bold uppercase leading-none text-[#2E261D]"
        style={{
          left: "17.8%",
          top: "27.6%",
          width: "fit-content",
          maxWidth: "none",
          display: "inline-block",
          fontSize: `calc(${FONT_SIZES.subheading} * 1.06)`,
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline:
            isEditing && hoveredText === `card-${cardIndex}-title`
              ? "2px solid #C65A32"
              : "none",
          outlineOffset:
            isEditing && hoveredText === `card-${cardIndex}-title` ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditing}
        suppressContentEditableWarning
        onBlur={(event) =>
          updateCard(cardIndex, { ...card, title: event.currentTarget.innerText.trim() })
        }
        onMouseEnter={() => setHoveredText(`card-${cardIndex}-title`)}
        onMouseLeave={() => setHoveredText(null)}
      >
        {card.title}
      </h3>
      <p
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: "17.8%",
          top: "35.52%",
          width: "fit-content",
          maxWidth: "none",
          display: "inline-block",
          lineHeight: 1.2,
          fontSize: FONT_SIZES.body,
          whiteSpace: "pre",
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline:
            isEditing && hoveredText === `card-${cardIndex}-desc`
              ? "2px solid #C65A32"
              : "none",
          outlineOffset:
            isEditing && hoveredText === `card-${cardIndex}-desc` ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditing}
        suppressContentEditableWarning
        onBlur={(event) =>
          updateCard(cardIndex, {
            ...card,
            description: event.currentTarget.innerText,
          })
        }
        onMouseEnter={() => setHoveredText(`card-${cardIndex}-desc`)}
        onMouseLeave={() => setHoveredText(null)}
      >
        {card.description}
      </p>

      {card.benefits.map((item, index) => (
        <div
          key={`${card.title}-${index}`}
          className="absolute flex items-start gap-2 text-[#2E261D]"
          style={{
            left: "17.8%",
            top: `${46.5 + index * 6.14}%`,
            fontSize: FONT_SIZES.body,
            zIndex: 9998,
            cursor: isEditing ? "text" : "default",
            outline:
              isEditing && hoveredText === `card-${cardIndex}-benefit-${index}`
                ? "2px solid #C65A32"
                : "none",
            outlineOffset:
              isEditing && hoveredText === `card-${cardIndex}-benefit-${index}` ? "2px" : "0px",
            transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
          }}
          onMouseEnter={() => setHoveredText(`card-${cardIndex}-benefit-${index}`)}
          onMouseLeave={() => setHoveredText(null)}
        >
          <span className="font-['Han-Zi'] font-bold leading-none">{index + 1}</span>
          <span
            className="font-glametrix"
            contentEditable={isEditing}
            suppressContentEditableWarning
            onBlur={(event) => {
              const nextBenefits = [...card.benefits];
              nextBenefits[index] = event.currentTarget.innerText;
              updateCard(cardIndex, { ...card, benefits: nextBenefits });
            }}
          >
            {item}
          </span>
        </div>
      ))}

      <p
        className="absolute font-['Han-Zi'] font-bold leading-none text-[#2E261D]"
        style={{
          left: "20%",
          top: "79.2%",
          maxWidth: "none",
          display: "inline-block",
          fontSize: priceSize,
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline:
            isEditing && hoveredText === `card-${cardIndex}-price`
              ? "2px solid #C65A32"
              : "none",
          outlineOffset:
            isEditing && hoveredText === `card-${cardIndex}-price` ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditing}
        suppressContentEditableWarning
        onBlur={(event) =>
          updateCard(cardIndex, { ...card, price: event.currentTarget.innerText.trim() })
        }
        onMouseEnter={() => setHoveredText(`card-${cardIndex}-price`)}
        onMouseLeave={() => setHoveredText(null)}
      >
        {card.price}
      </p>
      <p
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: "65.8%",
          top: "82.9%",
          maxWidth: "none",
          display: "inline-block",
          fontSize: FONT_SIZES.body,
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline:
            isEditing && hoveredText === `card-${cardIndex}-currency`
              ? "2px solid #C65A32"
              : "none",
          outlineOffset:
            isEditing && hoveredText === `card-${cardIndex}-currency` ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditing}
        suppressContentEditableWarning
        onBlur={(event) =>
          updateCard(cardIndex, { ...card, currency: event.currentTarget.innerText.trim() })
        }
        onMouseEnter={() => setHoveredText(`card-${cardIndex}-currency`)}
        onMouseLeave={() => setHoveredText(null)}
      >
        {card.currency}
      </p>
    </motion.article>
  );
};

const ApiaryVisitSlide5: React.FC = () => {
  const [content, setContent] = useState<SlideContent>(DEFAULT_CONTENT);
  const [isEditorAuthorized, setIsEditorAuthorized] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const isEditing = isEditorAuthorized && isEditorOpen;
  const [hoveredText, setHoveredText] = useState<string | null>(null);

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
          cards: parsed.cards ?? DEFAULT_CONTENT.cards,
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

  const updateCard = (index: number, next: TicketCardContent) => {
    const cards = content.cards.map((card, i) => (i === index ? next : card));
    pushHistory({ ...content, cards });
  };

  const updateHeading = (value: string) => {
    pushHistory({ ...content, heading: value });
  };

  const updateButton = (value: string) => {
    pushHistory({ ...content, buttonText: value });
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
    <section className="relative w-full h-[155vh] overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute font-ua-brand font-bold uppercase leading-none text-[#2E261D]"
        style={{
          left: "8.83%",
          top: "10.57%",
          width: "fit-content",
          maxWidth: "none",
          display: "inline-block",
          fontSize: FONT_SIZES.heading,
          zIndex: 9998,
          cursor: isEditing ? "text" : "default",
          outline: isEditing && hoveredText === "heading" ? "2px solid #C65A32" : "none",
          outlineOffset: isEditing && hoveredText === "heading" ? "2px" : "0px",
          transition: "outline-color 0.2s ease, outline-offset 0.2s ease",
        }}
        contentEditable={isEditing}
        suppressContentEditableWarning
        onBlur={(event) => updateHeading(event.currentTarget.innerText.trim())}
        onMouseEnter={() => setHoveredText("heading")}
        onMouseLeave={() => setHoveredText(null)}
      >
        {content.heading}
      </motion.h2>

      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        src={rightTopPicture}
        alt=""
        className="absolute object-cover object-left"
        style={{ right: "0%", top: "2.43%", width: "16.53%", height: "17.35%" }}
      />

      <TicketCard
        image={card1Image}
        left="8.33%"
        card={content.cards[0]}
        cardIndex={0}
        isEditing={isEditing}
        hoveredText={hoveredText}
        setHoveredText={setHoveredText}
        updateCard={updateCard}
      />
      <TicketCard
        image={card2Image}
        left="36.60%"
        card={content.cards[1]}
        cardIndex={1}
        isEditing={isEditing}
        hoveredText={hoveredText}
        setHoveredText={setHoveredText}
        updateCard={updateCard}
      />
      <TicketCard
        image={card3Image}
        left="64.86%"
        card={content.cards[2]}
        cardIndex={2}
        isEditing={isEditing}
        hoveredText={hoveredText}
        setHoveredText={setHoveredText}
        updateCard={updateCard}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.15 }}
        className="absolute"
        style={{ left: "49.44%", top: "72.33%", width: "15.21%" }}
      >
        <SelectTariffButton width="100%" text={content.buttonText} variant="orange" />
      </motion.div>
    </section>
  );
};

export default ApiaryVisitSlide5;
