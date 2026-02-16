import React from "react";
import SelectTariffButton from "@/components/shared/SelectTariffButton";
import { FONT_FAMILIES, FONT_SIZES } from "@/config/typography";

const Mark: React.FC<{ filled?: boolean }> = ({ filled = false }) => {
  return (
    <span
      className="relative inline-block rounded-full border border-primary"
      style={{
        width: "clamp(20px, calc(28 / 1440 * 100vw), 30px)",
        height: "clamp(20px, calc(28 / 1440 * 100vw), 30px)",
      }}
    >
      {filled && (
        <span
          className="absolute rounded-full bg-primary"
          style={{
            width: "45%",
            height: "45%",
            left: "27.5%",
            top: "27.5%",
          }}
        />
      )}
    </span>
  );
};

const tariffs = [
  { title: "Day Pass. \u042f\u043f\u043e\u043d\u0438\u044f", filled: true },
  { title: "Day Pass. \u041f\u0447\u0435\u043b\u044b", filled: false },
  { title: "Corporate Pass", filled: true },
  { title: "Season Pass", filled: true },
];

const StoneGardenSlide6: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#EAE1D4]"
      style={{
        height: "calc(var(--layout-height-ratio, 56.25vw) * 0.45)",
      }}
    >
      <div
        className="absolute flex items-center justify-center"
        style={{
          left: "76.46%",
          top: "18.61%",
          width: "15.21%",
          height: "60.83%",
          zIndex: 10,
        }}
      >
        <SelectTariffButton width="100%" />
      </div>

      <div
        className="h-full grid"
        style={{
          gridTemplateRows: "auto auto 1fr",
          paddingLeft: "8.4%",
          paddingRight: "31%",
          paddingTop: "6.5%",
          paddingBottom: "12%",
          rowGap: "clamp(10px, 1.8vw, 24px)",
        }}
      >
        <h2
          className="font-bold uppercase text-foreground leading-[0.95]"
          style={{
            maxWidth: "100%",
            fontSize: FONT_SIZES.large,
            fontFamily: FONT_FAMILIES.heading,
          }}
        >
          {"\u0412 \u043a\u0430\u043a\u0438\u0435 \u0442\u0430\u0440\u0438\u0444\u044b \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"}
        </h2>

        <div
          className="grid items-start"
          style={{
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            columnGap: "clamp(10px, 1.2vw, 22px)",
          }}
        >
          {tariffs.map((tariff) => (
            <div key={tariff.title} className="min-w-0">
              <Mark filled={tariff.filled} />
              <p
                className="mt-[clamp(8px,0.9vw,14px)] font-bold text-foreground"
                style={{
                  fontSize: FONT_SIZES.small,
                  fontFamily: FONT_FAMILIES.heading,
                  whiteSpace: "normal",
                }}
              >
                {tariff.title}
              </p>
            </div>
          ))}
        </div>

        <p
          className="text-foreground"
          style={{
            maxWidth: "42%",
            alignSelf: "end",
            fontSize: FONT_SIZES.small,
            fontFamily: FONT_FAMILIES.body,
          }}
        >
          {"\u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u043e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u043f\u0440\u043e\u043f\u0443\u0441\u043a"}
        </p>
      </div>

      <div
        className="absolute pointer-events-none"
        style={{
          left: 0,
          right: 0,
          bottom: "-1px",
          height: "5%",
          background:
            "radial-gradient(1.3vw 0.55vw at 1vw 0.1vw, transparent 98%, #fff 100%) repeat-x",
          backgroundSize: "2.2vw 100%",
        }}
      />
    </section>
  );
};

export default StoneGardenSlide6;
