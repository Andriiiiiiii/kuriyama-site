import React from "react";
import { FONT_FAMILIES, FONT_SIZES } from "@/config/typography";
import beeImage from "@/assets/visiting-rules/slide3/insect-background-closeup-pollination-beauty 1.webp";

const columns = [
  { title: "О пчелах", left: "10.483%" },
  { title: "О пчелах", left: "31.664%" },
  { title: "О пчелах", left: "52.844%" },
  { title: "О пчелах", left: "74.025%" },
];

const lines = ["8.299%", "29.479%", "50.660%", "71.840%"];

const VisitingRulesSlide3: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-transparent"
      style={{ height: "var(--layout-height-ratio, 56.25vw)" }}
    >
      <h2
        className="absolute font-bold uppercase text-foreground leading-[1.02]"
        style={{
          left: "8.833%",
          top: "3.953%",
          width: "65.987%",
          fontSize: FONT_SIZES.heading,
          fontFamily: FONT_FAMILIES.heading,
        }}
      >
        Главное о пчелах
      </h2>

      {lines.map((left) => (
        <div
          key={left}
          className="absolute bg-primary/55"
          style={{
            left,
            top: "26.163%",
            width: "0.069%",
            height: "44.961%",
          }}
        />
      ))}

      {columns.map((item, index) => (
        <React.Fragment key={`${item.left}-${index}`}>
          <h3
            className="absolute font-bold text-foreground"
            style={{
              left: item.left,
              top: "55.132%",
              width: "6.836%",
              fontSize: FONT_SIZES.subheading,
              fontFamily: FONT_FAMILIES.body,
            }}
          >
            {item.title}
          </h3>
          <p
            className="absolute text-foreground"
            style={{
              left: `calc(${item.left} - 0.021%)`,
              top: "63.240%",
              width: "12.927%",
              fontSize: FONT_SIZES.body,
              fontFamily: FONT_FAMILIES.body,
              lineHeight: 1.3,
            }}
          >
            Описание, подробнее раскрывающее заголовок
          </p>
        </React.Fragment>
      ))}

      <img
        src={beeImage}
        alt="Пчела и цветок"
        className="absolute object-contain"
        style={{
          left: "79.535%",
          top: "14.246%",
          width: "14.533%",
          height: "38.424%",
        }}
      />
    </section>
  );
};

export default VisitingRulesSlide3;
