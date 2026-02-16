import React from "react";
import { FONT_FAMILIES, FONT_SIZES } from "@/config/typography";
import imageTopRight from "@/assets/stone-garden/slide2/Rectangle 317.webp";
import imageBottomLeft from "@/assets/stone-garden/slide2/Rectangle 318.webp";

const StoneGardenSlide2: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{ height: "var(--layout-height-ratio, 56.25vw)" }}
    >
      <h2
        className="absolute font-bold uppercase text-primary leading-[1]"
        style={{
          left: "8.63%",
          top: "3.18%",
          width: "28.3%",
          fontSize: FONT_SIZES.heading,
          fontFamily: FONT_FAMILIES.heading,
        }}
      >
        Что это
      </h2>

      <p
        className="absolute text-foreground leading-[1.45]"
        style={{
          left: "8.37%",
          top: "21.31%",
          width: "25.96%",
          fontSize: FONT_SIZES.body,
          fontFamily: FONT_FAMILIES.body,
        }}
      >
        Классический японский сад камней (карэсансуй), где гравий, расчерченный
        волнистыми линиями, символизирует океан, а группы валунов - острова или
        горы. Здесь нет растений, только камень, песок и тишина, побуждающие к
        созерцанию и внутреннему сосредоточению.
      </p>

      <img
        src={imageTopRight}
        alt="Японский сад камней"
        className="absolute object-cover"
        style={{
          left: "57.78%",
          top: "0%",
          width: "26.81%",
          height: "61.31%",
        }}
      />

      <img
        src={imageBottomLeft}
        alt="Камни в песке"
        className="absolute object-cover"
        style={{
          left: "36.6%",
          top: "35.41%",
          width: "19.79%",
          height: "48.99%",
        }}
      />

      <p
        className="absolute text-foreground leading-[1.45]"
        style={{
          left: "57.83%",
          top: "67.6%",
          width: "24.38%",
          fontSize: FONT_SIZES.body,
          fontFamily: FONT_FAMILIES.body,
        }}
      >
        Это место для медитации, где можно уединиться и найти гармонию через
        простые формы.
      </p>
    </section>
  );
};

export default StoneGardenSlide2;
