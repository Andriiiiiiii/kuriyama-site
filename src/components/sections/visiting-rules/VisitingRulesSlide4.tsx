import React from "react";
import { FONT_FAMILIES, FONT_SIZES } from "@/config/typography";
import bgImage from "@/assets/visiting-rules/slide4/bg img.webp";

const VisitingRulesSlide4: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "calc(var(--layout-height-ratio, 56.25vw) * 0.44)" }}
    >
      <img
        src={bgImage}
        alt=""
        className="absolute inset-0 h-full w-full object-fill"
      />

      <h2
        className="absolute font-bold uppercase text-primary leading-[1.02]"
        style={{
          left: "8.625%",
          top: "19.4695%",
          width: "53.1592%",
          fontSize: FONT_SIZES.heading,
          fontFamily: FONT_FAMILIES.heading,
        }}
      >
        При ужалении
      </h2>

      <p
        className="absolute text-foreground"
        style={{
          left: "8.4176%",
          top: "44.7608%",
          width: "40.5003%",
          fontSize: FONT_SIZES.body,
          fontFamily: FONT_FAMILIES.body,
          lineHeight: 1.3,
        }}
      >
        Порядок действий при ужалении, согласие на использование средств и
        подобное
      </p>

      <span
        className="absolute text-foreground"
        style={{ left: "8.4689%", top: "60.5723%", fontSize: FONT_SIZES.subheading, fontFamily: FONT_FAMILIES.heading }}
      >
        1
      </span>
      <span
        className="absolute text-foreground"
        style={{ left: "36.6595%", top: "61.1461%", fontSize: FONT_SIZES.subheading, fontFamily: FONT_FAMILIES.heading }}
      >
        2
      </span>
      <span
        className="absolute text-foreground"
        style={{ left: "64.7872%", top: "60.5623%", fontSize: FONT_SIZES.subheading, fontFamily: FONT_FAMILIES.heading }}
      >
        3
      </span>

      <p
        className="absolute text-foreground"
        style={{
          left: "8.4176%",
          top: "72.7269%",
          width: "13.2994%",
          fontSize: FONT_SIZES.body,
          fontFamily: FONT_FAMILIES.body,
        }}
      >
        Первый шаг при ужалении
      </p>
      <p
        className="absolute text-foreground"
        style={{
          left: "36.6815%",
          top: "72.7269%",
          width: "13.0234%",
          fontSize: FONT_SIZES.body,
          fontFamily: FONT_FAMILIES.body,
        }}
      >
        Второй шаг при ужалении
      </p>
      <p
        className="absolute text-foreground"
        style={{
          left: "64.8223%",
          top: "72.7269%",
          width: "12.9742%",
          fontSize: FONT_SIZES.body,
          fontFamily: FONT_FAMILIES.body,
        }}
      >
        Третий шаг при ужалении
      </p>
    </section>
  );
};

export default VisitingRulesSlide4;
