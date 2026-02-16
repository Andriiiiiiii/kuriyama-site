import React from "react";
import { FONT_FAMILIES, FONT_SIZES } from "@/config/typography";

const VisitingRulesSlide8: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "var(--layout-height-ratio, 56.25vw)" }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#D8CFC2" }}
      />

      <h2
        className="absolute font-bold uppercase leading-[1.02] text-primary"
        style={{
          left: "8.47%",
          top: "15.38%",
          width: "45.57%",
          fontSize: FONT_SIZES.large,
          fontFamily: FONT_FAMILIES.heading,
        }}
      >
        Администрация не несёт ответственности за любой ущерб, полученный в
        результате нарушения данных правил
      </h2>

      <p
        className="absolute text-foreground"
        style={{
          left: "57.92%",
          top: "34.75%",
          width: "32.71%",
          fontSize: FONT_SIZES.body,
          fontFamily: FONT_FAMILIES.body,
          lineHeight: 1.45,
        }}
      >
        Мы создали все условия для вашей безопасности. Выполнение настоящих
        правил является обязательным для всех посетителей. Посещение территории
        осуществляется на свой страх и риск.
        <br />
        <br />
        Перед началом экскурсии вы подтверждаете, что ознакомлены с правилами и
        не имеете медицинских противопоказаний.
      </p>
    </section>
  );
};

export default VisitingRulesSlide8;
