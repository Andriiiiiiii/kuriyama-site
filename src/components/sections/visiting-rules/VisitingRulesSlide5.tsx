import React from "react";
import { FONT_FAMILIES, FONT_SIZES } from "@/config/typography";

const cards = [
  { left: "8.333%" },
  { left: "36.597%" },
  { left: "64.861%" },
];

const VisitingRulesSlide5: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-transparent"
      style={{ height: "var(--layout-height-ratio, 56.25vw)" }}
    >
      <h2
        className="absolute font-bold uppercase text-primary leading-[1.02]"
        style={{
          left: "8.833%",
          top: "20.312%",
          width: "63.92%",
          fontSize: FONT_SIZES.heading,
          fontFamily: FONT_FAMILIES.heading,
        }}
      >
        Предупреждения
      </h2>

      {cards.map((card, idx) => (
        <div
          key={idx}
          className="absolute border"
          style={{
            left: card.left,
            top: "38.699%",
            width: "26.875%",
            height: "45.041%",
            backgroundColor: "#D8CFC2",
            borderColor: "#D58C72",
          }}
        >
          <h3
            className="absolute font-bold text-foreground"
            style={{
              left: "8.2%",
              top: "55.84%",
              width: "48.35%",
              fontSize: FONT_SIZES.subheading,
              fontFamily: FONT_FAMILIES.body,
            }}
          >
            Предупрежение 1
          </h3>
          <p
            className="absolute text-foreground"
            style={{
              left: "7.9%",
              top: "70.88%",
              width: "48.10%",
              fontSize: FONT_SIZES.body,
              fontFamily: FONT_FAMILIES.body,
              lineHeight: 1.3,
            }}
          >
            Описание, подробнее раскрывающее заголовок
          </p>
        </div>
      ))}
    </section>
  );
};

export default VisitingRulesSlide5;
