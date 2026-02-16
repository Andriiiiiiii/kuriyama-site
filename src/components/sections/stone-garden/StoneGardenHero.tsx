import React from "react";
import { FONT_FAMILIES, FONT_SIZES } from "@/config/typography";
import SelectTariffButton from "@/components/shared/SelectTariffButton";
import heroBackground from "@/assets/stone-garden/slide1/гл экран фон 1.webp";
import rightImage from "@/assets/stone-garden/slide1/Rectangle 316.webp";
import bottomDecor from "@/assets/stone-garden/slide1/31fe3c03-a7d2-4a4d-be8d-e56cae81009f 2 (1).webp";

const StoneGardenHero: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{ height: "var(--layout-height-ratio, 56.25vw)" }}
    >
      <img
        src={heroBackground}
        alt=""
        className="absolute inset-0 w-full h-full object-fill"
      />

      <div
        className="absolute text-foreground/50"
        style={{
          left: "8.4176%",
          top: "11.5027%",
          width: "17.0995%",
          fontSize: FONT_SIZES.body,
          fontFamily: FONT_FAMILIES.body,
          zIndex: 5,
        }}
      >
        Главная / Агротуризм / Сад камней
      </div>

      <h1
        className="absolute font-bold uppercase text-foreground leading-[1.03]"
        style={{
          left: "8.6667%",
          top: "26.6306%",
          width: "43.3487%",
          fontSize: FONT_SIZES.heading,
          fontFamily: FONT_FAMILIES.heading,
          zIndex: 5,
        }}
      >
        Сад камней
      </h1>

      <p
        className="absolute text-foreground leading-[1.35]"
        style={{
          left: "15.4473%",
          top: "59.2302%",
          width: "19.8559%",
          fontSize: FONT_SIZES.body,
          fontFamily: FONT_FAMILIES.body,
          zIndex: 5,
        }}
      >
        Две строчки дополнительного описания подкрепляющего заголовок
      </p>

      <div
        className="absolute"
        style={{
          left: "41.1805%",
          top: "51.8088%",
          width: "15.2058%",
          height: "28.2946%",
          zIndex: 6,
        }}
      >
        <SelectTariffButton width="100%" />
      </div>

      <img
        src={rightImage}
        alt="Сад камней"
        className="absolute object-cover"
        style={{
          left: "57.7778%",
          top: "11.3695%",
          width: "42.2222%",
          height: "76.615%",
          zIndex: 4,
        }}
      />

      <img
        src={bottomDecor}
        alt=""
        className="absolute object-contain pointer-events-none mix-blend-multiply"
        style={{
          left: "0%",
          top: "41.6021%",
          width: "24.0278%",
          height: "auto",
          zIndex: 4,
        }}
      />
    </section>
  );
};

export default StoneGardenHero;
