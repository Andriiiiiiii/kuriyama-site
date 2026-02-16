import React from "react";
import { FONT_FAMILIES, FONT_SIZES } from "@/config/typography";

const StoneGardenSlide5: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{
        height: "calc(var(--layout-height-ratio, 56.25vw) * 0.4274)",
      }}
    >
      <h2
        className="absolute font-bold uppercase text-primary leading-[1]"
        style={{
          left: "8.3333%",
          top: "4.7144%",
          width: "26.0713%",
          fontSize: FONT_SIZES.heading,
          fontFamily: FONT_FAMILIES.heading,
        }}
      >
        Детали
      </h2>

      <div
        className="absolute bg-primary/60"
        style={{
          left: "8.2986%",
          top: "29.0323%",
          width: "0.0694%",
          height: "49.8925%",
        }}
      />
      <div
        className="absolute bg-primary/60"
        style={{
          left: "36.5625%",
          top: "29.0323%",
          width: "0.0694%",
          height: "49.8925%",
        }}
      />
      <div
        className="absolute bg-primary/60"
        style={{
          left: "65.5556%",
          top: "0%",
          width: "0.0694%",
          height: "100%",
        }}
      />

      <div
        className="absolute rounded-full border border-white bg-primary"
        style={{
          left: "64.95%",
          top: "54.1%",
          width: "1.22%",
          aspectRatio: "1 / 1",
          boxShadow: "0 0 0 1px #C65A32",
        }}
      />

      <h3
        className="absolute font-bold text-foreground leading-[1.1]"
        style={{
          left: "10.5389%",
          top: "55.8367%",
          width: "9.7352%",
          fontSize: FONT_SIZES.medium,
          fontFamily: FONT_FAMILIES.heading,
        }}
      >
        Вместимость
      </h3>
      <p
        className="absolute text-foreground leading-[1.45]"
        style={{
          left: "10.4241%",
          top: "64.6136%",
          width: "23.9342%",
          fontSize: FONT_SIZES.body,
          fontFamily: FONT_FAMILIES.body,
        }}
      >
        Одновременно в саду камней могут находиться до 4 человек для сохранения
        атмосферы уединения.
      </p>

      <h3
        className="absolute font-bold text-foreground leading-[1.1]"
        style={{
          left: "38.7472%",
          top: "55.8023%",
          width: "8.3389%",
          fontSize: FONT_SIZES.medium,
          fontFamily: FONT_FAMILIES.heading,
        }}
      >
        Сезонность
      </h3>
      <p
        className="absolute text-foreground leading-[1.45]"
        style={{
          left: "38.7261%",
          top: "64.6136%",
          width: "19.7716%",
          fontSize: FONT_SIZES.body,
          fontFamily: FONT_FAMILIES.body,
        }}
      >
        Сад открыт для посещения круглый год
      </p>

      <h3
        className="absolute font-bold text-foreground leading-[1.1]"
        style={{
          left: "66.9417%",
          top: "55.8023%",
          width: "9.8493%",
          fontSize: FONT_SIZES.medium,
          fontFamily: FONT_FAMILIES.heading,
        }}
      >
        Ограничения
      </h3>
      <p
        className="absolute text-foreground leading-[1.45]"
        style={{
          left: "66.9362%",
          top: "64.8001%",
          width: "24.6175%",
          fontSize: FONT_SIZES.body,
          fontFamily: FONT_FAMILIES.body,
        }}
      >
        Вход в сад босиком или в одноразовых тапочках, которые мы предоставляем,
        чтобы сохранить чистоту «песчаного» моря
      </p>
    </section>
  );
};

export default StoneGardenSlide5;
