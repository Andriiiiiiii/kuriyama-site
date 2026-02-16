import React from "react";
import { FONT_FAMILIES, FONT_SIZES } from "@/config/typography";
import leftImage from "@/assets/stone-garden/slide3/left_image.webp";
import rightImage from "@/assets/stone-garden/slide3/right_image.webp";

const StoneGardenSlide3: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{ height: "var(--layout-height-ratio, 56.25vw)" }}
    >
      <h2
        className="absolute font-bold uppercase text-foreground text-center leading-[1]"
        style={{
          left: "25.86%",
          top: "37.98%",
          width: "48.61%",
          fontSize: FONT_SIZES.heading,
          fontFamily: FONT_FAMILIES.heading,
        }}
      >
        Что вас ждет
      </h2>

      <h3
        className="absolute font-bold text-foreground leading-[1.1]"
        style={{
          left: "16.73%",
          top: "1.53%",
          width: "8.75%",
          fontSize: FONT_SIZES.subheading,
          fontFamily: FONT_FAMILIES.heading,
        }}
      >
        Созерцание
      </h3>
      <p
        className="absolute text-foreground leading-[1.45]"
        style={{
          left: "16.70%",
          top: "9.08%",
          width: "25.00%",
          fontSize: FONT_SIZES.body,
          fontFamily: FONT_FAMILIES.body,
        }}
      >
        Погрузитесь в медитативное состояние, наблюдая за порядком камней и
        умиротворяющим рисунком на песке, который помогает остановить бег мыслей.
      </p>

      <h3
        className="absolute font-bold text-foreground leading-[1.1]"
        style={{
          left: "64.83%",
          top: "10.40%",
          width: "7.99%",
          fontSize: FONT_SIZES.subheading,
          fontFamily: FONT_FAMILIES.heading,
        }}
      >
        Уединение
      </h3>
      <p
        className="absolute text-foreground leading-[1.45]"
        style={{
          left: "64.82%",
          top: "17.77%",
          width: "26.50%",
          fontSize: FONT_SIZES.body,
          fontFamily: FONT_FAMILIES.body,
        }}
      >
        Насладитесь тишиной в специально организованном пространстве,
        отгороженном от остальной территории, где можно побыть наедине с собой.
      </p>

      <h3
        className="absolute font-bold text-foreground leading-[1.1]"
        style={{
          left: "24.07%",
          top: "62.58%",
          width: "9.39%",
          fontSize: FONT_SIZES.subheading,
          fontFamily: FONT_FAMILIES.heading,
        }}
      >
        Фотография
      </h3>
      <p
        className="absolute text-foreground leading-[1.45]"
        style={{
          left: "24.07%",
          top: "70.30%",
          width: "25.02%",
          fontSize: FONT_SIZES.body,
          fontFamily: FONT_FAMILIES.body,
        }}
      >
        Получите уникальные кадры в аутентичной японской атмосфере, где каждый
        ракурс наполнен смыслом и минималистичной эстетикой.
      </p>

      <img
        src={leftImage}
        alt=""
        className="absolute object-contain mix-blend-multiply pointer-events-none"
        style={{
          left: "6.67%",
          top: "13.54%",
          width: "16.67%",
          height: "86.46%",
        }}
      />

      <img
        src={rightImage}
        alt="Небо"
        className="absolute object-cover"
        style={{
          left: "66.39%",
          top: "61.37%",
          width: "12.78%",
          height: "16.43%",
        }}
      />
    </section>
  );
};

export default StoneGardenSlide3;
