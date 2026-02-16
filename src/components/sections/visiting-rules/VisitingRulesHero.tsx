import React from "react";
import heroBackground from "@/assets/visiting-rules/slide1/гл экран фон 1.webp";
import bottomDecor from "@/assets/visiting-rules/slide1/img bottom.webp";
import { FONT_FAMILIES, FONT_SIZES } from "@/config/typography";

const VisitingRulesHero: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{ height: "var(--layout-height-ratio, 56.25vw)" }}
    >
      <img
        src={heroBackground}
        alt=""
        className="absolute left-0 top-0 w-full object-fill"
        style={{ height: "91.213%" }}
      />

      <div
        className="absolute text-foreground/50"
        style={{
          left: "8.418%",
          top: "15.647%",
          width: "21.388%",
          fontSize: FONT_SIZES.body,
          fontFamily: FONT_FAMILIES.body,
        }}
      >
        Главная / Агротуризм / Правила посещения
      </div>

      <h1
        className="absolute font-bold uppercase text-foreground leading-[1.03]"
        style={{
          left: "8.833%",
          top: "33.11%",
          width: "75.812%",
          fontSize: FONT_SIZES.heading,
          fontFamily: FONT_FAMILIES.heading,
        }}
      >
        Правила посещения
      </h1>

      <p
        className="absolute text-foreground"
        style={{
          left: "8.364%",
          top: "48.056%",
          width: "19.856%",
          fontSize: FONT_SIZES.body,
          fontFamily: FONT_FAMILIES.body,
          lineHeight: 1.35,
        }}
      >
        Две строчки дополнительного описания подкрепляющего заголовок
      </p>

      <img
        src={bottomDecor}
        alt=""
        className="absolute object-contain"
        style={{
          left: "84.583%",
          top: "62.566%",
          width: "8.819%",
          height: "37.434%",
        }}
      />
    </section>
  );
};

export default VisitingRulesHero;
