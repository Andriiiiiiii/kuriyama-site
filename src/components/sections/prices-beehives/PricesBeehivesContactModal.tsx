import React, { useEffect, useMemo, useState } from "react";
import { Calendar, MessageCircle, Send } from "lucide-react";
import { FONT_FAMILIES, TYPOGRAPHY_CONFIG } from "@/config/typography";
import kuriyamaImage from "@/assets/prices-beehives/kuriyama.png";
import bgDayImage from "@/assets/prices-beehives/bg-day.png";

const BASE_WIDTH = 900;
const BASE_HEIGHT = 830;
const MODAL_WIDTH_EXPR = "min(92vw, calc(92vh * 1.084337349))";
const CALENDAR_BASE_WIDTH = 216;
const CALENDAR_BASE_HEIGHT = 222;

const mx = (value: number): string => `${(value / BASE_WIDTH) * 100}%`;
const my = (value: number): string => `${(value / BASE_HEIGHT) * 100}%`;
const mf = (value: number): string =>
  `calc(${value} / ${BASE_WIDTH} * var(--prices-beehives-contact-modal-width))`;
const cx = (value: number): string =>
  `${(value / CALENDAR_BASE_WIDTH) * 100}%`;
const cy = (value: number): string =>
  `${(value / CALENDAR_BASE_HEIGHT) * 100}%`;

const WEEK_LABELS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const MONTH_LABELS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

interface PricesBeehivesContactModalProps {
  open: boolean;
  onClose: () => void;
}

const formatDateValue = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const sameDay = (a: Date, b: Date): boolean =>
  a.getDate() === b.getDate() &&
  a.getMonth() === b.getMonth() &&
  a.getFullYear() === b.getFullYear();

const buildCalendarCells = (viewMonth: Date): Date[] => {
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const firstDay = new Date(year, month, 1);
  const offset = (firstDay.getDay() + 6) % 7;
  const startDate = new Date(year, month, 1 - offset);

  return Array.from({ length: 35 }, (_, index) => {
    const cellDate = new Date(startDate);
    cellDate.setDate(startDate.getDate() + index);
    return cellDate;
  });
};

const PricesBeehivesContactModal: React.FC<PricesBeehivesContactModalProps> = ({
  open,
  onClose,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewMonth, setViewMonth] = useState<Date>(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      setIsCalendarOpen(false);
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  const calendarCells = useMemo(() => buildCalendarCells(viewMonth), [viewMonth]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[140] flex items-center justify-center bg-[#2E261D]/45 px-[2vw] py-[2vh]"
      onClick={onClose}
    >
      <div
        className="relative bg-[#EFE3D6]"
        style={{
          "--prices-beehives-contact-modal-width": MODAL_WIDTH_EXPR,
          width: "var(--prices-beehives-contact-modal-width)",
          aspectRatio: "900 / 830",
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
            top: my(0),
            width: mx(364),
            height: my(830),
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
            width: mx(620),
            fontFamily: FONT_FAMILIES.heading,
            fontSize: mf(38),
            lineHeight: 1.05,
          }}
        >
          свяжитесь с нами
        </h3>

        <p
          className="absolute text-black"
          style={{
            left: mx(80),
            top: my(203),
            width: mx(330),
            fontFamily: FONT_FAMILIES.body,
            fontSize: mf(18),
            lineHeight: 1.25,
          }}
        >
          Обсудим детали и забронируем посещение
        </p>

        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="absolute bg-transparent outline-none text-[#2E261D] placeholder:text-[#2E261D]/50"
          style={{
            left: mx(85),
            top: my(255),
            width: mx(487),
            height: my(36),
            fontFamily: FONT_FAMILIES.body,
            fontSize: mf(18),
            borderBottom: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
          }}
        />

        <input
          type="tel"
          placeholder="Телефон"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="absolute bg-transparent outline-none text-[#2E261D] placeholder:text-[#2E261D]/50"
          style={{
            left: mx(85),
            top: my(312),
            width: mx(487),
            height: my(36),
            fontFamily: FONT_FAMILIES.body,
            fontSize: mf(18),
            borderBottom: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
          }}
        />

        <button
          type="button"
          onClick={() => setIsCalendarOpen((prev) => !prev)}
          className="absolute bg-transparent text-left text-[#2E261D]/50"
          style={{
            left: mx(85),
            top: my(370),
            width: mx(487),
            height: my(36),
            fontFamily: FONT_FAMILIES.body,
            fontSize: mf(18),
            borderBottom: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
          }}
        >
          {selectedDate ? formatDateValue(selectedDate) : "Дата звонка"}
        </button>

        <button
          type="button"
          aria-label="Открыть календарь"
          onClick={() => setIsCalendarOpen((prev) => !prev)}
          className="absolute text-[#C65A32]"
          style={{
            left: mx(533),
            top: my(364),
            width: mx(24),
            height: my(24),
          }}
        >
          <Calendar size={24} strokeWidth={1.8} />
        </button>

        <button
          type="button"
          className="absolute rounded-full bg-[#C65A32] text-white"
          style={{
            left: mx(80),
            top: my(440),
            width: mx(121),
            height: my(43),
            fontFamily: FONT_FAMILIES.body,
            fontSize: mf(16),
            lineHeight: 1,
          }}
        >
          Связаться
        </button>

        <p
          className="absolute text-black"
          style={{
            left: mx(84),
            top: my(551),
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
            top: my(624),
            width: mx(360),
            fontFamily: FONT_FAMILIES.body,
            fontSize: mf(16),
          }}
        >
          Напишите нам в один из мессенджеров
        </p>

        <div
          className="absolute flex items-center"
          style={{
            left: mx(83),
            top: my(656),
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
            top: my(711),
            width: mx(320),
            fontFamily: FONT_FAMILIES.body,
            fontSize: mf(16),
          }}
        >
          Или на почту mail@gmail.com
        </p>

        {isCalendarOpen && (
          <div
            className="absolute"
            style={{
              left: mx(351),
              top: my(398),
              width: mx(216),
              height: my(222),
              backgroundColor: "#EFE3D6",
              border: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
              zIndex: 3,
            }}
          >
            <div
              className="absolute flex items-center justify-center"
              style={{
                left: cx(0),
                top: cy(8),
                width: cx(216),
                height: cy(22),
                gap: cx(18),
              }}
            >
              <button
                type="button"
                className="text-[#2E261D]"
                style={{ fontSize: mf(20), lineHeight: 1 }}
                onClick={() =>
                  setViewMonth(
                    (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
                  )
                }
              >
                {"←"}
              </button>
              <p
                className="text-[#2E261D]"
                style={{
                  fontFamily: FONT_FAMILIES.heading,
                  fontSize: mf(16),
                  letterSpacing: "0.06em",
                  lineHeight: 1,
                  textTransform: "uppercase",
                }}
              >
                {MONTH_LABELS[viewMonth.getMonth()]}
              </p>
              <button
                type="button"
                className="text-[#2E261D]"
                style={{ fontSize: mf(20), lineHeight: 1 }}
                onClick={() =>
                  setViewMonth(
                    (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
                  )
                }
              >
                {"→"}
              </button>
            </div>

            <div
              className="absolute grid"
              style={{
                left: cx(6),
                top: cy(36),
                width: cx(204),
                height: cy(180),
                gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
                gridTemplateRows: "repeat(6, minmax(0, 1fr))",
                border: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
              }}
            >
              {WEEK_LABELS.map((label, index) => (
                <div
                  key={label}
                  className="flex items-center justify-center"
                  style={{
                    fontFamily: FONT_FAMILIES.body,
                    fontSize: mf(11),
                    color: index >= 5 ? "#C65A32" : "#2E261D",
                    lineHeight: 1,
                    borderRight:
                      index === WEEK_LABELS.length - 1
                        ? "none"
                        : `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid rgba(46, 38, 29, 0.2)`,
                    borderBottom: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid rgba(46, 38, 29, 0.3)`,
                  }}
                >
                  {label}
                </div>
              ))}

              {calendarCells.map((date, index) => {
                const isCurrentMonth = date.getMonth() === viewMonth.getMonth();
                const weekdayIndex = (date.getDay() + 6) % 7;
                const isWeekend = weekdayIndex >= 5;
                const isSelected = selectedDate ? sameDay(date, selectedDate) : false;
                const columnIndex = index % 7;
                const rowIndex = Math.floor(index / 7);

                return (
                  <button
                    key={`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}
                    type="button"
                    onClick={() => {
                      setSelectedDate(date);
                      setIsCalendarOpen(false);
                    }}
                    className="relative flex items-center justify-center bg-transparent"
                    style={{
                      fontFamily: FONT_FAMILIES.body,
                      fontSize: mf(13),
                      lineHeight: 1,
                      color: isWeekend ? "#C65A32" : "#2E261D",
                      opacity: isCurrentMonth ? 1 : 0.3,
                      borderRight:
                        columnIndex === 6
                          ? "none"
                          : `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid rgba(46, 38, 29, 0.2)`,
                      borderBottom:
                        rowIndex === 4
                          ? "none"
                          : `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid rgba(46, 38, 29, 0.3)`,
                    }}
                  >
                    {isSelected && (
                      <span
                        className="absolute pointer-events-none"
                        style={{
                          width: "78%",
                          height: "78%",
                          backgroundImage: `url(${bgDayImage})`,
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          opacity: 0.9,
                        }}
                      />
                    )}
                    <span className="relative">{date.getDate()}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricesBeehivesContactModal;
