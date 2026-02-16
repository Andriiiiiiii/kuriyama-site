import React, { useEffect, useState } from "react";
import ContactButton from "@/components/shared/ContactButton";
import { MessageCircle, Send } from "lucide-react";
import {
  FONT_FAMILIES,
  FONT_SIZES,
  TYPOGRAPHY_CONFIG,
} from "@/config/typography";
import backgroundImage from "@/assets/prices-visit/background.png";
import inkImage from "@/assets/prices-visit/ink.png";
import kuriyamaImage from "@/assets/prices-visit/kuriyama.png";
import beehiveImage from "@/assets/prices-visit/beehive.png";
import qrImage from "@/assets/prices-visit/qr.png";

const BASE_WIDTH = 1440;
const BASE_HEIGHT = 1611;

const px = (value: number): string => `${(value / BASE_WIDTH) * 100}%`;
const py = (value: number): string => `${(value / BASE_HEIGHT) * 100}%`;

type PricesVisitTab = "day-pass" | "season-pass";

interface PassCardData {
  title: string;
  description: string;
  price: string;
  activities: string[];
  products: string[];
  showBeehive: boolean;
}

const PASS_DATA: Record<PricesVisitTab, PassCardData[]> = {
  "day-pass": [
    {
      title: "Day pass. Япония",
      description:
        "Три строчки дополнительного описания подкрепляющего заголовок. Краткое описание пропуска",
      price: "5500",
      activities: [
        "Сад камней",
        "Лабиринт",
        "Стрельба из лука",
        "Forest bathing",
        "Фотосессия в юката, кимоно",
        "Мангал или гриль",
        "Лесное караоке",
      ],
      products: [
        "Мёд 1 л",
        "Чай с местными травами",
        "Сезонные овощи и зелень - лук, кабачки, тыква, картошка",
        "Сезонный букет цветов",
        "Сезонные овощи - пакет",
      ],
      showBeehive: false,
    },
    {
      title: "Day pass. пчёлы",
      description:
        "Три строчки дополнительного описания подкрепляющего заголовок. Краткое описание пропуска",
      price: "5000",
      activities: [
        "Апидомик - терапия",
        "Фотосессия в костюме пчеловода",
        "Экскурсия на пасеку",
        "Петанк",
        "Лабиринт на медоносном поле",
        "Мангал или гриль",
      ],
      products: [
        "Мёд 1 л",
        "Чай с местными травами",
        "Сезонные овощи и зелень - лук, кабачки, тыква, картошка",
        "Сезонный букет цветов",
        "Сезонные овощи - пакет",
        "Сушенные травы - пучок",
      ],
      showBeehive: false,
    },
  ],
  "season-pass": [
    {
      title: "Corporate pass",
      description:
        "Три строчки дополнительного описания подкрепляющего заголовок. Краткое описание пропуска",
      price: "50000",
      activities: [
        "Апидомик - до 10 посещений",
        "Forest bathing без ограничений на двоих",
        "Посадить свое дерево или куст",
        "Баня - 2 посещения на двоих",
        "Ночевка под звездами",
        "Мангал или гриль",
        "Сад камней, петанк - без ограничений",
      ],
      products: [
        "Мёд 20 л",
        "Сезонные овощи и зелень - лук, кабачки, тыква, картошка - 5 пакетов",
        "5 букетов сезонных цветов",
        "Именной улей",
        "Дополнительная информация",
      ],
      showBeehive: true,
    },
    {
      title: "Season pass",
      description:
        "Три строчки дополнительного описания подкрепляющего заголовок. Краткое описание пропуска",
      price: "30000",
      activities: [
        "Апидомик - до 10 посещений",
        "Forest bathing без ограничений на двоих",
        "Посадить свое дерево или куст",
        "Баня - 2 посещения на двоих",
        "Ночевка под звездами",
        "Мангал или гриль",
        "Сад камней, петанк - без ограничений",
      ],
      products: [
        "Мёд 20 л",
        "Сезонные овощи и зелень - лук, кабачки, тыква, картошка - 5 пакетов",
        "5 букетов сезонных цветов",
        "Именной улей",
        "Дополнительная информация",
      ],
      showBeehive: true,
    },
  ],
};

const rowTop = [612, 1100];

const MODAL_BASE_WIDTH = 900;
const MODAL_BASE_HEIGHT = 1356;
const MODAL_WIDTH_EXPR = "min(90vw, calc(92vh * 0.6637168))";

const mx = (value: number): string => `${(value / MODAL_BASE_WIDTH) * 100}%`;
const my = (value: number): string => `${(value / MODAL_BASE_HEIGHT) * 100}%`;
const mf = (value: number): string =>
  `calc(${value} / ${MODAL_BASE_WIDTH} * var(--prices-modal-width))`;

interface PricesVisitPaymentModalProps {
  open: boolean;
  onClose: () => void;
}

const PricesVisitPaymentModal: React.FC<PricesVisitPaymentModalProps> = ({
  open,
  onClose,
}) => {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-[#2E261D]/45 px-[2vw] py-[2vh]"
      onClick={onClose}
    >
      <div
        className="relative bg-[#EFE3D6]"
        style={{
          "--prices-modal-width": MODAL_WIDTH_EXPR,
          width: "var(--prices-modal-width)",
          aspectRatio: "900 / 1356",
          border: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
        } as React.CSSProperties}
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={kuriyamaImage}
          alt="Каллиграфия Курияма"
          className="absolute object-contain pointer-events-none"
          style={{
            left: mx(536),
            top: my(25),
            width: mx(364),
            height: my(984),
            opacity: 0.18,
          }}
        />

        <button
          type="button"
          aria-label="Закрыть"
          className="absolute"
          onClick={onClose}
          style={{
            left: mx(849),
            top: my(30),
            width: mx(20.71),
            height: my(20.71),
          }}
        >
          <span
            className="absolute left-0 top-1/2 w-full"
            style={{
              height: TYPOGRAPHY_CONFIG.lineStrokeWidth,
              backgroundColor: "#C65A32",
              transform: "translateY(-50%) rotate(45deg)",
            }}
          />
          <span
            className="absolute left-0 top-1/2 w-full"
            style={{
              height: TYPOGRAPHY_CONFIG.lineStrokeWidth,
              backgroundColor: "#C65A32",
              transform: "translateY(-50%) rotate(-45deg)",
            }}
          />
        </button>

        <h3
          className="absolute uppercase text-black"
          style={{
            left: mx(83),
            top: my(129),
            width: mx(560),
            fontFamily: FONT_FAMILIES.heading,
            fontSize: mf(38),
            lineHeight: 1.05,
          }}
        >
          оплата услуги
        </h3>

        <img
          src={qrImage}
          alt="QR код для оплаты"
          className="absolute object-cover"
          style={{
            left: mx(68),
            top: my(213),
            width: mx(306),
            height: my(280),
          }}
        />

        <div
          className="absolute"
          style={{
            left: mx(390),
            top: my(213),
            width: mx(428),
            height: my(216),
            border: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
          }}
        />

        <p
          className="absolute text-black"
          style={{
            left: mx(411),
            top: my(252),
            width: mx(300),
            fontFamily: FONT_FAMILIES.heading,
            fontSize: mf(24),
            lineHeight: 1.2,
          }}
        >
          Аренда улья на пасеке
        </p>

        <p
          className="absolute text-[#2E261D]"
          style={{
            left: mx(411),
            top: my(392),
            width: mx(140),
            fontFamily: FONT_FAMILIES.heading,
            fontSize: mf(18),
            lineHeight: 1.1,
          }}
        >
          7000 руб.
        </p>

        <h4
          className="absolute text-[#2E261D]"
          style={{
            left: mx(82),
            top: my(521),
            width: mx(210),
            fontFamily: FONT_FAMILIES.heading,
            fontSize: mf(20),
            lineHeight: 1.05,
          }}
        >
          Как оплатить?
        </h4>

        <p
          className="absolute text-black"
          style={{
            left: mx(80),
            top: my(572),
            width: mx(360),
            fontFamily: FONT_FAMILIES.body,
            fontSize: mf(18),
            lineHeight: 1.35,
          }}
        >
          1. Отсканируйте QR и оплатите удобным способом
          <br />
          2. Сохраните чек об оплате
          <br />
          3. Свяжитесь с нами и пришлите чек
        </p>

        <h4
          className="absolute text-black"
          style={{
            left: mx(82),
            top: my(706),
            width: mx(500),
            fontFamily: FONT_FAMILIES.heading,
            fontSize: mf(30),
            lineHeight: 1.05,
          }}
        >
          Остались вопросы?
        </h4>

        <input
          type="text"
          placeholder="Имя"
          className="absolute bg-transparent outline-none text-[#2E261D] placeholder:text-[#2E261D]/50"
          style={{
            left: mx(85),
            top: my(780),
            width: mx(487),
            height: my(38),
            fontFamily: FONT_FAMILIES.body,
            fontSize: mf(20),
            borderBottom: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
          }}
        />

        <input
          type="tel"
          placeholder="Телефон"
          className="absolute bg-transparent outline-none text-[#2E261D] placeholder:text-[#2E261D]/50"
          style={{
            left: mx(85),
            top: my(838),
            width: mx(487),
            height: my(38),
            fontFamily: FONT_FAMILIES.body,
            fontSize: mf(20),
            borderBottom: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
          }}
        />

        <input
          type="text"
          placeholder="Дата звонка"
          className="absolute bg-transparent outline-none text-[#2E261D] placeholder:text-[#2E261D]/50"
          style={{
            left: mx(85),
            top: my(896),
            width: mx(487),
            height: my(38),
            fontFamily: FONT_FAMILIES.body,
            fontSize: mf(20),
            borderBottom: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
          }}
        />

        <button
          type="button"
          className="absolute rounded-full bg-[#C65A32] text-white"
          style={{
            left: mx(80),
            top: my(966),
            width: mx(121),
            height: my(43),
            fontFamily: FONT_FAMILIES.body,
            fontSize: mf(18),
            lineHeight: 1,
          }}
        >
          Связаться
        </button>

        <p
          className="absolute text-black"
          style={{
            left: mx(84),
            top: my(1077),
            width: mx(760),
            fontFamily: FONT_FAMILIES.heading,
            fontSize: mf(30),
            lineHeight: 1.05,
          }}
        >
          Предпочитаете другой способ связи?
        </p>

        <p
          className="absolute text-black"
          style={{
            left: mx(81),
            top: my(1160),
            width: mx(360),
            fontFamily: FONT_FAMILIES.body,
            fontSize: mf(18),
          }}
        >
          Напишите нам в один из мессенджеров
        </p>

        <div
          className="absolute flex items-center"
          style={{
            left: mx(83),
            top: my(1180),
            gap: mx(30),
          }}
        >
          <a
            href="https://wa.me/79999999999"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="text-black"
          >
            <MessageCircle size={30} strokeWidth={1.8} />
          </a>
          <a
            href="https://t.me/tg12345"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            className="text-black"
          >
            <Send size={30} strokeWidth={1.8} />
          </a>
        </div>

        <p
          className="absolute text-black"
          style={{
            left: mx(81),
            top: my(1248),
            width: mx(300),
            fontFamily: FONT_FAMILIES.body,
            fontSize: mf(18),
          }}
        >
          Или на почту mail@gmail.com
        </p>
      </div>
    </div>
  );
};

const PricesVisitSlide7: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PricesVisitTab>("day-pass");
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const rows = PASS_DATA[activeTab];

  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{ height: `calc(100vw * ${BASE_HEIGHT / BASE_WIDTH})` }}
    >
      <img
        src={backgroundImage}
        alt=""
        className="absolute left-0 object-cover"
        style={{
          top: py(0),
          width: "100%",
          height: py(519),
        }}
      />

      <div
        className="absolute"
        style={{
          left: px(0),
          top: py(153.5),
          width: px(1277.5),
          height: py(405.5),
          borderTop: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
          borderLeft: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
        }}
      />

      <div
        className="absolute rounded-full bg-[#C65A32]"
        style={{
          left: px(108),
          top: py(142),
          width: px(24),
          height: py(24),
        }}
      />
      <div
        className="absolute rounded-full border border-[#C65A32]"
        style={{
          left: px(103),
          top: py(137),
          width: px(34),
          height: py(34),
          borderWidth: TYPOGRAPHY_CONFIG.lineStrokeWidth,
        }}
      />

      <div
        className="absolute rounded-full border border-[#C65A32]"
        style={{
          left: px(1172),
          top: py(302),
          width: px(210),
          height: py(210),
          borderWidth: TYPOGRAPHY_CONFIG.lineStrokeWidth,
          zIndex: 6,
        }}
      />
      <img
        src={kuriyamaImage}
        alt="Курияма"
        className="absolute object-contain"
        style={{
          left: px(1206),
          top: py(263),
          width: px(171),
          height: py(285),
          zIndex: 7,
        }}
      />

      <p
        className="absolute text-[#2E261D]/50"
        style={{
          left: px(121),
          top: py(89),
          width: px(212),
          fontFamily: FONT_FAMILIES.body,
          fontSize: FONT_SIZES.small,
          zIndex: 10,
        }}
      >
        Главная/ Цены на посещение
      </p>

      <h1
        className="absolute uppercase text-[#2E261D]"
        style={{
          left: px(127),
          top: py(199),
          width: px(1078),
          fontFamily: FONT_FAMILIES.heading,
          fontSize: FONT_SIZES.heading,
          lineHeight: 1.05,
          zIndex: 10,
        }}
      >
        Цены на посещение
      </h1>

      <p
        className="absolute text-[#2E261D]"
        style={{
          left: px(120),
          top: py(314),
          width: px(286),
          fontFamily: FONT_FAMILIES.body,
          fontSize: FONT_SIZES.body,
          zIndex: 10,
        }}
      >
        Две строчки дополнительного описания подкрепляющего заголовок
      </p>

      <div
        className="absolute flex items-end gap-[2.5%]"
        style={{
          left: px(500),
          top: py(518),
          width: px(430),
          height: py(42),
          zIndex: 11,
        }}
      >
        <button
          type="button"
          onClick={() => setActiveTab("day-pass")}
          className="h-full bg-transparent text-[#2E261D] transition-opacity"
          style={{
            width: "43.72%",
            fontFamily: FONT_FAMILIES.body,
            fontSize: FONT_SIZES.medium,
            opacity: activeTab === "day-pass" ? 1 : 0.6,
            borderBottom:
              activeTab === "day-pass"
                ? `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`
                : "none",
          }}
        >
          Дневной пропуск
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("season-pass")}
          className="h-full bg-transparent text-[#2E261D] transition-opacity"
          style={{
            width: "46.28%",
            fontFamily: FONT_FAMILIES.body,
            fontSize: FONT_SIZES.medium,
            opacity: activeTab === "season-pass" ? 1 : 0.6,
            borderBottom:
              activeTab === "season-pass"
                ? `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`
                : "none",
          }}
        >
          Сезонный пропуск
        </button>
      </div>

      <div
        className="absolute"
        style={{
          left: px(69.5),
          top: py(511.5),
          width: px(1301),
          height: py(1100),
          border: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
          zIndex: 5,
        }}
      />

      {/* Vector 189/190/191/192 from layout */}
      {[
        { left: 629, top: 830.5 },
        { left: 913, top: 830.5 },
        { left: 629, top: 1318.5 },
        { left: 913, top: 1318.5 },
      ].map((line, index) => (
        <div
          key={`prices-visit-vector-${index}`}
          className="absolute"
          style={{
            left: px(line.left),
            top: py(line.top),
            width: px(21),
            borderTop: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
            zIndex: 9,
          }}
        />
      ))}

      {rows.map((row, index) => {
        const top = rowTop[index];
        return (
          <React.Fragment key={`${activeTab}-${row.title}`}>
            <div
              className="absolute bg-[#EFE3D6]"
              style={{
                left: px(243),
                top: py(top),
                width: px(387),
                height: py(438),
                border: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
                zIndex: 8,
              }}
            >
              <h3
                className="absolute uppercase text-[#2E261D]"
                style={{
                  left: "14%",
                  top: "13%",
                  width: "72%",
                  fontFamily: FONT_FAMILIES.heading,
                  fontSize: FONT_SIZES.subheading,
                  lineHeight: 1.1,
                  fontWeight: 700,
                }}
              >
                {row.title}
              </h3>
              <p
                className="absolute text-[#2E261D]"
                style={{
                  left: "14%",
                  top: "41%",
                  width: "72%",
                  fontFamily: FONT_FAMILIES.body,
                  fontSize: FONT_SIZES.small,
                }}
              >
                {row.description}
              </p>
              <div
                className="absolute inline-flex items-end whitespace-nowrap text-[#2E261D]"
                style={{
                  left: "50%",
                  top: "66%",
                  transform: "translateX(-50%)",
                  gap: "0.25em",
                  lineHeight: 1,
                }}
              >
                <span
                  style={{
                    fontFamily: FONT_FAMILIES.heading,
                    fontSize: FONT_SIZES.large,
                    lineHeight: 1,
                  }}
                >
                  {row.price}
                </span>
                <span
                  style={{
                    fontFamily: FONT_FAMILIES.body,
                    fontSize: FONT_SIZES.small,
                    lineHeight: 1.1,
                    paddingBottom: "0.08em",
                  }}
                >
                  руб.
                </span>
              </div>
              <div
                className="absolute"
                style={{
                  left: "30%",
                  top: "78.8%",
                  width: "31.3%",
                  height: "9.8%",
                }}
              >
                <ContactButton
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="!w-full !h-full !px-0"
                />
              </div>
            </div>

            <div
              className="absolute"
              style={{
                left: px(650),
                top: py(top + 31),
                width: px(264),
                height: py(376),
                border: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
                zIndex: 8,
              }}
            >
              <h4
                className="absolute text-[#2E261D]"
                style={{
                  left: "8%",
                  top: "8%",
                  fontFamily: FONT_FAMILIES.heading,
                  fontSize: FONT_SIZES.medium,
                }}
              >
                Активности
              </h4>
              <ul
                className="absolute text-[#2E261D]"
                style={{
                  left: "8.5%",
                  top: "22%",
                  width: "84%",
                  fontFamily: FONT_FAMILIES.body,
                  fontSize: FONT_SIZES.small,
                  lineHeight: 1.35,
                }}
              >
                {row.activities.map((item) => (
                  <li key={item} className="mb-[3.4%] list-none">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="absolute"
              style={{
                left: px(933),
                top: py(top + 31),
                width: px(264),
                height: py(376),
                border: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
                zIndex: 8,
              }}
            >
              <h4
                className="absolute text-[#2E261D]"
                style={{
                  left: "8%",
                  top: "8%",
                  fontFamily: FONT_FAMILIES.heading,
                  fontSize: FONT_SIZES.medium,
                }}
              >
                Продукция
              </h4>
              <ul
                className="absolute text-[#2E261D]"
                style={{
                  left: "8.5%",
                  top: "22%",
                  width: "84%",
                  fontFamily: FONT_FAMILIES.body,
                  fontSize: FONT_SIZES.small,
                  lineHeight: 1.35,
                }}
              >
                {row.products.map((item) => (
                  <li key={item} className="mb-[3.4%] list-none">
                    {item}
                  </li>
                ))}
              </ul>

              {row.showBeehive && (
                <img
                  src={beehiveImage}
                  alt="Именной улей"
                  className="absolute object-contain"
                  style={{
                    left: "70%",
                    top: "65%",
                    width: "48.9%",
                    height: "38.6%",
                  }}
                />
              )}
            </div>
          </React.Fragment>
        );
      })}

      <p
        className="absolute text-[#2E261D]"
        style={{
          left: px(243),
          top: py(1562),
          width: px(790),
          fontFamily: FONT_FAMILIES.body,
          fontSize: FONT_SIZES.small,
          zIndex: 11,
        }}
      >
        *Представлены пакеты услуг с фиксированной ценой. Отказ от составляющих
        пропуска не меняет стоимость.
      </p>

      <img
        src={inkImage}
        alt=""
        className="absolute pointer-events-none object-contain"
        style={{
          left: px(0),
          top: py(1285),
          width: px(260),
          height: py(320),
          zIndex: 6,
          opacity: 0.9,
        }}
      />

      <PricesVisitPaymentModal
        open={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />
    </section>
  );
};

export default PricesVisitSlide7;
