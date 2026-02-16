import React from "react";
import { FONT_FAMILIES, FONT_SIZES } from "@/config/typography";
import slideImage from "@/assets/visiting-rules/slide2/img (1).webp";

const VisitingRulesSlide2: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-transparent"
      style={{ height: "var(--layout-height-ratio, 56.25vw)" }}
    >
      <h2
        className="absolute font-bold uppercase text-foreground leading-[1.02]"
        style={{
          left: "8.22%",
          top: "4.45%",
          width: "47.71%",
          fontSize: FONT_SIZES.heading,
          fontFamily: FONT_FAMILIES.heading,
        }}
      >
        Мы рады вам
      </h2>

      <p
        className="absolute text-foreground"
        style={{
          left: "8.41%",
          top: "45.84%",
          width: "25.46%",
          fontSize: FONT_SIZES.body,
          fontFamily: FONT_FAMILIES.body,
          lineHeight: 1.35,
        }}
      >
        Небольшой вступительный текст и самое важное про посещение. Например, о
        бережном отношении к природе и пчелам
      </p>

      <img
        src={slideImage}
        alt="Посещение Куриямы"
        className="absolute object-cover"
        style={{
          left: "43.61%",
          top: "24.29%",
          width: "48.06%",
          height: "55.47%",
        }}
      />
    </section>
  );
};

export default VisitingRulesSlide2;
