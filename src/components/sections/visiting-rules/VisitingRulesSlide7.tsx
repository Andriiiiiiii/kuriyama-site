import React from "react";
import { FONT_FAMILIES, FONT_SIZES } from "@/config/typography";

const rows = [
  "37.5835%",
  "45.6511%",
  "53.7186%",
  "61.7862%",
  "69.8537%",
  "77.9213%",
];

const itemText = "Описание, подробнее раскрывающее заголовок";

const VisitingRulesSlide7: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-transparent"
      style={{ height: "var(--layout-height-ratio, 56.25vw)" }}
    >
      <h2
        className="absolute font-bold uppercase text-foreground leading-[1.02]"
        style={{
          left: "8.8333%",
          top: "3.8271%",
          width: "78.2206%",
          fontSize: FONT_SIZES.heading,
          fontFamily: FONT_FAMILIES.heading,
        }}
      >
        Правила в агропарке
      </h2>

      <h3
        className="absolute font-bold uppercase text-foreground"
        style={{
          left: "8.5816%",
          top: "26.6043%",
          width: "17.6316%",
          fontSize: FONT_SIZES.subheading,
          fontFamily: FONT_FAMILIES.heading,
        }}
      >
        Разрешено
      </h3>

      <h3
        className="absolute font-bold uppercase text-foreground"
        style={{
          left: "50.8443%",
          top: "26.6043%",
          width: "18.2294%",
          fontSize: FONT_SIZES.subheading,
          fontFamily: FONT_FAMILIES.heading,
        }}
      >
        Запрещено
      </h3>

      {rows.map((top) => (
        <p
          key={`left-${top}`}
          className="absolute text-foreground"
          style={{
            left: "8.3788%",
            top,
            width: "23.8782%",
            fontSize: FONT_SIZES.body,
            fontFamily: FONT_FAMILIES.body,
            lineHeight: 1.2,
          }}
        >
          {itemText}
        </p>
      ))}

      {rows.map((top) => (
        <p
          key={`right-${top}`}
          className="absolute text-foreground"
          style={{
            left: "50.74%",
            top,
            width: "23.8782%",
            fontSize: FONT_SIZES.body,
            fontFamily: FONT_FAMILIES.body,
            lineHeight: 1.2,
          }}
        >
          {itemText}
        </p>
      ))}
    </section>
  );
};

export default VisitingRulesSlide7;
