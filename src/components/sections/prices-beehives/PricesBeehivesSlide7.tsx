import React, { useEffect, useState } from "react";
import ContactButton from "@/components/shared/ContactButton";
import { MessageCircle, Send } from "lucide-react";
import {
  FONT_FAMILIES,
  FONT_SIZES,
  TYPOGRAPHY_CONFIG,
} from "@/config/typography";
import backgroundImage from "@/assets/prices-beehives/background.png";
import kuriyamaImage from "@/assets/prices-beehives/kuriyama.png";
import qrImage from "@/assets/prices-beehives/qr.png";

const BASE_WIDTH = 1440;
const BASE_HEIGHT = 1206;
const LEFT_CARD_WIDTH = 468;
const LEFT_CARD_HEIGHT = 438;
const RIGHT_CARD_WIDTH = 264;
const RIGHT_CARD_HEIGHT = 376;

const px = (value: number): string => `${(value / BASE_WIDTH) * 100}%`;
const py = (value: number): string => `${(value / BASE_HEIGHT) * 100}%`;
const lcX = (value: number): string => `${(value / LEFT_CARD_WIDTH) * 100}%`;
const lcY = (value: number): string => `${(value / LEFT_CARD_HEIGHT) * 100}%`;
const rcX = (value: number): string => `${(value / RIGHT_CARD_WIDTH) * 100}%`;
const rcY = (value: number): string => `${(value / RIGHT_CARD_HEIGHT) * 100}%`;

type PricesBeehivesTab = "kuriyama" | "own-territory";

const MODAL_BASE_WIDTH = 900;
const MODAL_BASE_HEIGHT = 1356;
const MODAL_WIDTH_EXPR = "min(90vw, calc(92vh * 0.6637168))";

const mx = (value: number): string => `${(value / MODAL_BASE_WIDTH) * 100}%`;
const my = (value: number): string => `${(value / MODAL_BASE_HEIGHT) * 100}%`;
const mf = (value: number): string =>
  `calc(${value} / ${MODAL_BASE_WIDTH} * var(--prices-modal-width))`;

interface PricesBeehivesPaymentModalProps {
  open: boolean;
  onClose: () => void;
}

const PricesBeehivesPaymentModal: React.FC<PricesBeehivesPaymentModalProps> = ({
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

const PricesBeehivesSlide7: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PricesBeehivesTab>("kuriyama");
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

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
          width: px(216),
          fontFamily: FONT_FAMILIES.body,
          fontSize: FONT_SIZES.small,
          zIndex: 10,
        }}
      >
        Главная/ Цены на заказ ульев
      </p>

      <h1
        className="absolute uppercase text-[#2E261D]"
        style={{
          left: px(127),
          top: py(199),
          width: px(1086.47),
          fontFamily: FONT_FAMILIES.heading,
          fontSize: FONT_SIZES.heading,
          lineHeight: 1.05,
          zIndex: 10,
        }}
      >
        Цены на заказ ульев
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

      <button
        type="button"
        onClick={() => setActiveTab("kuriyama")}
        className="absolute bg-transparent transition-colors"
        style={{
          left: px(458.48),
          top: py(518),
          width: px(182.53),
          height: py(42),
          fontFamily: FONT_FAMILIES.body,
          fontSize: FONT_SIZES.medium,
          color: activeTab === "kuriyama" ? "#2E261D" : "rgba(46, 38, 29, 0.55)",
          fontWeight: activeTab === "kuriyama" ? 700 : 500,
          borderBottom:
            activeTab === "kuriyama"
              ? `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`
              : "none",
          zIndex: 11,
        }}
      >
        Улей на Курияме
      </button>

      <button
        type="button"
        onClick={() => setActiveTab("own-territory")}
        className="absolute bg-transparent transition-colors"
        style={{
          left: px(698.48),
          top: py(518),
          width: px(281.2),
          height: py(42),
          fontFamily: FONT_FAMILIES.body,
          fontSize: FONT_SIZES.medium,
          color:
            activeTab === "own-territory" ? "#2E261D" : "rgba(46, 38, 29, 0.55)",
          fontWeight: activeTab === "own-territory" ? 700 : 500,
          borderBottom:
            activeTab === "own-territory"
              ? `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`
              : "none",
          zIndex: 11,
        }}
      >
        Улей на своей территории
      </button>

      <div
        className="absolute"
        style={{
          left: px(69.5),
          top: py(511.5),
          width: px(1301),
          height: py(594.5),
          border: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
          zIndex: 5,
        }}
      />

      <div
        className="absolute"
        style={{
          left: px(343),
          top: py(612),
          width: px(468),
          height: py(438),
          border: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
          backgroundColor: "#EFE3D6",
          zIndex: 8,
        }}
      >
        <h3
          className="absolute text-[#2E261D]"
          style={{
            left: lcX(57.35),
            top: lcY(59.47),
            width: lcX(352.41),
            fontFamily: FONT_FAMILIES.heading,
            fontSize: FONT_SIZES.subheading,
            lineHeight: 1.1,
            fontWeight: 700,
          }}
        >
          Аренда улья на пасеке
        </h3>

        <p
          className="absolute text-[#2E261D]"
          style={{
            left: lcX(57.44),
            top: lcY(178.44),
            width: lcX(275.36),
            fontFamily: FONT_FAMILIES.body,
            fontSize: FONT_SIZES.small,
            lineHeight: 1.25,
          }}
        >
          Три строчки дополнительного описания подкрепляющего заголовок. Краткое
          описание пропуска
        </p>

        <p
          className="absolute inline-flex items-end whitespace-nowrap text-[#2E261D]"
          style={{
            left: lcX(163.8),
            top: lcY(292.36),
            lineHeight: 1,
            gap: "0.25em",
          }}
        >
          <span
            style={{
              fontFamily: FONT_FAMILIES.heading,
              fontSize: FONT_SIZES.large,
              lineHeight: 1,
            }}
          >
            7000
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
        </p>

        <div
          className="absolute"
          style={{
            left: lcX(169),
            top: lcY(345),
            width: lcX(121),
            height: lcY(43),
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
          left: px(832),
          top: py(643),
          width: px(264),
          height: py(376),
          border: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
          zIndex: 8,
        }}
      >
        <h4
          className="absolute text-[#2E261D]"
          style={{
            left: rcX(22.44),
            top: rcY(10),
            width: rcX(150.62),
            fontFamily: FONT_FAMILIES.heading,
            fontSize: 43,
            lineHeight: 1.1,
          }}
        >
          Что включено
        </h4>

        <p
          className="absolute text-[#2E261D]"
          style={{
            left: rcX(21.33),
            top: rcY(100.44),
            width: rcX(98.12),
            fontFamily: FONT_FAMILIES.body,
            fontSize: FONT_SIZES.small,
            lineHeight: 1.2,
          }}
        >
          Аренда места
        </p>

        <p
          className="absolute text-[#2E261D]"
          style={{
            left: rcX(23.21),
            top: rcY(133.44),
            width: rcX(124.17),
            fontFamily: FONT_FAMILIES.body,
            fontSize: FONT_SIZES.small,
            lineHeight: 1.2,
          }}
        >
          Медоносное поле
        </p>

        <p
          className="absolute text-[#2E261D]"
          style={{
            left: rcX(22.21),
            top: rcY(166.44),
            width: rcX(52.36),
            fontFamily: FONT_FAMILIES.body,
            fontSize: FONT_SIZES.small,
            lineHeight: 1.2,
          }}
        >
          Костюм
        </p>

        <p
          className="absolute text-[#2E261D]"
          style={{
            left: rcX(22.66),
            top: rcY(199.33),
            width: rcX(113.6),
            fontFamily: FONT_FAMILIES.body,
            fontSize: FONT_SIZES.small,
            lineHeight: 1.2,
          }}
        >
          Сотохранилище
        </p>

        <p
          className="absolute text-[#2E261D]"
          style={{
            left: rcX(22.33),
            top: rcY(232.32),
            width: rcX(167.86),
            fontFamily: FONT_FAMILIES.body,
            fontSize: FONT_SIZES.small,
            lineHeight: 1.2,
          }}
        >
          Аренда оборудования - инструменты, дымарь медогонка
        </p>

        <p
          className="absolute text-[#2E261D]"
          style={{
            left: rcX(23.21),
            top: rcY(311.44),
            width: rcX(178),
            fontFamily: FONT_FAMILIES.body,
            fontSize: FONT_SIZES.small,
            lineHeight: 1.2,
          }}
        >
          Консультация пчеловода
        </p>
      </div>

      <div
        className="absolute"
        style={{
          left: px(811),
          top: py(830.5),
          width: px(21),
          borderTop: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
          zIndex: 9,
        }}
      />

      <PricesBeehivesPaymentModal
        open={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />
    </section>
  );
};

export default PricesBeehivesSlide7;
