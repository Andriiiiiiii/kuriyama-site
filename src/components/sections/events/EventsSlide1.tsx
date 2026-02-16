import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FONT_SIZES } from "@/config/typography";
import SelectTariffButton from "@/components/shared/SelectTariffButton";
import centerImage1 from "@/assets/events/center image 1.webp";
import imageRightBlock1 from "@/assets/events/image right block 1.webp";
import selectedDateBg from "@/assets/events/Rectangle 166.webp";
import comboImage from "@/assets/events/combo.webp";
import scrollImage1 from "@/assets/events/scroll 1 2.webp";
import scrollImage2 from "@/assets/events/scroll 2 2.webp";
import scrollImage3 from "@/assets/events/scroll 3 2.webp";
import scrollImage4 from "@/assets/events/scroll 4 2.webp";
import heroBg from "@/assets/1-background.webp";

const weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const months = [
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

type CalendarEvent = {
  title: string;
  dateLabel: string;
  image: string;
};

const EVENTS_BY_DAY: Record<string, CalendarEvent> = {
  "2-14": {
    title: "Медовая дегустация",
    dateLabel: "14.02 в 10:00 | г. Москва, ул. Ленина 1",
    image: scrollImage1,
  },
  "2-23": {
    title: "Мастер-класс на пасеке",
    dateLabel: "23.02 в 12:00 | г. Москва, ул. Ленина 1",
    image: scrollImage2,
  },
  "2-28": {
    title: "Семейный день на пасеке",
    dateLabel: "28.02 в 11:00 | г. Москва, ул. Ленина 1",
    image: scrollImage3,
  },
  "3-8": {
    title: "Весеннее мероприятие",
    dateLabel: "08.03 в 10:00 | г. Москва, ул. Ленина 1",
    image: scrollImage4,
  },
};

const getMonthMatrix = (monthDate: Date) => {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOffset = (firstDay.getDay() + 6) % 7;

  const cells: Array<number | null> = Array.from({ length: 42 }, () => null);
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells[startOffset + day - 1] = day;
  }

  return cells;
};

const EventsSlide1: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLElement | null>(null);

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [hoveredCell, setHoveredCell] = useState<number | null>(null);
  const [activeCardDate, setActiveCardDate] = useState<Date | null>(null);
  const [cardRect, setCardRect] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [cardButtonSize, setCardButtonSize] = useState({ width: 0, height: 0 });

  const days = useMemo(() => getMonthMatrix(currentMonth), [currentMonth]);

  const prevMonth = () => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const selectDay = (day: number | null) => {
    if (!day) return;
    setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
  };

  const selectedEvent = useMemo(() => {
    if (!activeCardDate) return null;
    const key = `${activeCardDate.getMonth() + 1}-${activeCardDate.getDate()}`;
    return EVENTS_BY_DAY[key] ?? null;
  }, [activeCardDate]);

  const positionCardNearCell = (target: HTMLButtonElement, isCompact: boolean) => {
    const section = sectionRef.current;
    if (!section) return;

    const sectionBounds = section.getBoundingClientRect();
    const cellBounds = target.getBoundingClientRect();

    const cardAspect = isCompact ? 2.55 : 33.89 / 31.5;
    const width = isCompact ? sectionBounds.width * 0.235 : sectionBounds.width * 0.3;
    const height = width / cardAspect;
    const gap = 6;
    const minOffset = 8;

    // Keep the button size visually unchanged compared to previous (larger) card logic.
    const fixedButtonWidth = sectionBounds.width * 0.26 * 0.2186;
    const fixedButtonHeight = sectionBounds.height * 0.3 * 0.0717;
    setCardButtonSize({ width: fixedButtonWidth, height: fixedButtonHeight });

    let left = cellBounds.right - sectionBounds.left + gap;
    if (left + width > sectionBounds.width - minOffset) {
      left = cellBounds.left - sectionBounds.left - width - gap;
    }
    if (left < minOffset) left = minOffset;

    let top = cellBounds.top - sectionBounds.top - height * 0.15;
    if (top < minOffset) top = minOffset;
    if (top + height > sectionBounds.height - minOffset) {
      top = sectionBounds.height - height - minOffset;
    }

    setCardRect({ left, top, width, height });
  };

  const handleCellEnter = (day: number | null, cellIndex: number) => {
    if (day === null) return;
    setHoveredCell(cellIndex);
  };

  const handleCellClick = (day: number | null, target: HTMLButtonElement) => {
    if (day === null) return;
    const clickedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const clickedKey = `${clickedDate.getMonth() + 1}-${clickedDate.getDate()}`;
    const hasEvent = Boolean(EVENTS_BY_DAY[clickedKey]);
    selectDay(day);
    setActiveCardDate(clickedDate);
    positionCardNearCell(target, !hasEvent);
  };

  const handleCellLeave = () => {
    setHoveredCell(null);
  };

  const showEventCard = activeCardDate !== null;

  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      const targetNode = event.target as Node;
      if (cardRef.current && cardRef.current.contains(targetNode)) return;

      const element = event.target as HTMLElement;
      if (element.closest("[data-calendar-cell='true']")) return;

      setActiveCardDate(null);
    };

    window.addEventListener("mousedown", onMouseDown);
    return () => {
      window.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-fill" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="absolute font-glametrix text-[#2E261D]/50"
        style={{ left: "8.42%", top: "11.94%", fontSize: FONT_SIZES.small }}
      >
        Главная / Мероприятия
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute font-ua-brand font-bold uppercase leading-none text-[#2E261D]"
        style={{ left: "8.78%", top: "21.03%", width: "50.72%", fontSize: FONT_SIZES.heading }}
      >
        МЕРОПРИЯТИЯ
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="absolute font-glametrix text-[#2E261D]"
        style={{ left: "29.54%", top: "34.86%", width: "18.92%", fontSize: FONT_SIZES.body, lineHeight: 1.15 }}
      >
        <span className="whitespace-nowrap">Две строчки дополнительного</span>
        <br />
        <span className="whitespace-nowrap">описания подкрепляющего заголовок</span>
      </motion.p>

      <div className="absolute" style={{ left: "29.86%", top: "52.52%", width: "15.21%" }}>
        <SelectTariffButton width="100%" text="Оставить заявку" variant="orange" />
      </div>

      <img
        src={imageRightBlock1}
        alt=""
        className="absolute object-contain object-top"
        style={{ left: "8.33%", top: "34.05%", width: "19.79%", height: "45.98%" }}
      />
      <img
        src={centerImage1}
        alt=""
        className="absolute object-cover mix-blend-multiply"
        style={{ left: "46.60%", top: "35.68%", width: "11.88%", height: "42.84%" }}
      />

      <div
        className="absolute z-20 flex items-center justify-center gap-[0.15vw] text-[#2E261D]"
        style={{ left: "57.78%", top: "24.9%", width: "33.89%" }}
      >
        <button
          type="button"
          onClick={prevMonth}
          className="flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer"
          style={{ width: "5.2%", aspectRatio: "1" }}
          aria-label="Предыдущий месяц"
        >
          <svg width="100%" height="100%" viewBox="0 0 36 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.5 11.0469L0.5 11.0469M0.5 11.0469L11.5 21.0469M0.5 11.0469L11.5 1.04688" stroke="#2E261D" strokeOpacity="0.3" strokeWidth="2"/>
          </svg>
        </button>
        <span className="font-glametrix font-bold uppercase" style={{ fontSize: FONT_SIZES.subheading }}>
          {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </span>
        <button
          type="button"
          onClick={nextMonth}
          className="flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer"
          style={{ width: "5.2%", aspectRatio: "1" }}
          aria-label="Следующий месяц"
        >
          <svg width="100%" height="100%" viewBox="0 0 36 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 11.0469L35.5 11.0469M35.5 11.0469L24.5 21.0469M35.5 11.0469L24.5 1.04688" stroke="#2E261D" strokeOpacity="0.3" strokeWidth="2"/>
          </svg>
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="absolute z-10"
        style={{ left: "57.78%", top: "25.5%", width: "33.89%", aspectRatio: "1 / 1" }}
      >
        <div className="absolute left-[4.8%] right-[4.8%] top-[4.8%] bg-[#EFE3D6]/85 aspect-square pointer-events-none" />
        <div className="absolute left-[4.8%] right-[4.8%] top-[4.8%] border border-[#C65A32] aspect-square pointer-events-none" />
        <div className="absolute left-[8.1%] right-[8.1%] top-[8.1%] border border-[#C65A32]/70 aspect-square pointer-events-none" />
        <div className="absolute left-[8.1%] right-[8.1%] top-[8.1%] grid grid-cols-7 grid-rows-7 border border-[#2E261D]/30 aspect-square gap-[1px]">
          {weekdays.map((w) => (
            <div
              key={`weekday-${w}`}
              className={`flex items-center justify-center border border-[#2E261D]/20 font-glametrix ${w === "Сб" || w === "Вс" ? "text-[#C65A32]" : "text-[#2E261D]"}`}
              style={{ fontSize: `calc(${FONT_SIZES.body} * 1.6)` }}
            >
              {w}
            </div>
          ))}
          {days.map((d, i) => {
            const isWeekend = i % 7 === 5 || i % 7 === 6;
            const isSelected =
              d !== null &&
              selectedDate.getFullYear() === currentMonth.getFullYear() &&
              selectedDate.getMonth() === currentMonth.getMonth() &&
              selectedDate.getDate() === d;
            const isHovered = d !== null && hoveredCell === i;
            const isActiveCell = isHovered || isSelected;

            return (
              <button
                key={`${d}-${i}`}
                data-calendar-cell="true"
                type="button"
                onClick={(event) => handleCellClick(d, event.currentTarget)}
                onMouseEnter={() => handleCellEnter(d, i)}
                onMouseLeave={handleCellLeave}
                className="relative flex items-center justify-center border border-[#2E261D]/20 font-glametrix disabled:cursor-default"
                style={{ fontSize: `calc(${FONT_SIZES.body} * 1.55)` }}
                disabled={d === null}
              >
                {isActiveCell ? (
                  <img
                    src={selectedDateBg}
                    alt=""
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                    style={isHovered ? { filter: "brightness(0.9)" } : undefined}
                  />
                ) : null}
                <span className={`${isWeekend ? "text-[#C65A32]" : "text-[#2E261D]"} relative z-[1]`}>
                  {d ?? ""}
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {showEventCard ? (
        <motion.article
          ref={cardRef}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22 }}
          className="absolute z-30"
          style={{ left: cardRect.left, top: cardRect.top, width: cardRect.width, height: cardRect.height }}
        >
          <div
            className="absolute inset-0 border border-[#C65A32]"
            style={{ backgroundColor: "rgba(239, 227, 214, 0.96)" }}
          />
          <button
            type="button"
            onClick={() => setActiveCardDate(null)}
            className="absolute z-10 flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer"
            style={{ right: "4.5%", top: "4.5%", width: "8.5%", aspectRatio: "1" }}
            aria-label="Закрыть"
          >
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5L19 19M19 5L5 19" stroke="#2E261D" strokeOpacity="0.3" strokeWidth="2" />
            </svg>
          </button>

          {selectedEvent ? (
            <>
              <img
                src={selectedEvent.image}
                alt=""
                className="absolute object-cover"
                style={{ left: "8.47%", top: "18.5%", width: "82.88%", height: "43.64%" }}
              />
              <h3
                className="absolute whitespace-nowrap font-glametrix font-bold text-[#2E261D]"
                style={{ left: "8.85%", top: "8.6%", width: "80%", fontSize: FONT_SIZES.subheading }}
              >
                {selectedEvent.title}
              </h3>
              <p
                className="absolute whitespace-nowrap font-glametrix text-[#2E261D]"
                style={{ left: "8.53%", top: "67.5%", width: "85%", fontSize: FONT_SIZES.body }}
              >
                {selectedEvent.dateLabel}
              </p>
              <div
                className="absolute"
                style={{
                  left: "8.47%",
                  top: "77.8%",
                  width: Math.max(cardButtonSize.width, 150),
                  height: Math.max(cardButtonSize.height, 40),
                }}
              >
                <button
                  type="button"
                  className="h-full w-full rounded-[18.5px] bg-[#C65A32] font-glametrix text-white hover:opacity-90 transition-opacity"
                  style={{ fontSize: FONT_SIZES.body }}
                >
                  Связаться
                </button>
              </div>
              <img
                src={comboImage}
                alt=""
                className="absolute object-contain mix-blend-multiply"
                style={{ left: "73.9%", top: "63.5%", width: "19.51%", height: "36.5%" }}
              />
            </>
          ) : (
            <div
              className="absolute flex items-center justify-center text-center font-glametrix text-[#2E261D]"
              style={{ inset: "10%", fontSize: FONT_SIZES.subheading, lineHeight: 1.25 }}
            >
              Сожалеем, но на данный день мероприятий не запланированно.
            </div>
          )}
        </motion.article>
      ) : null}
    </section>
  );
};

export default EventsSlide1;
