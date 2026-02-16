import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FONT_SIZES } from "@/config/typography";
import MoreButton from "@/components/shared/MoreButton";
import scrollImage1 from "@/assets/events/scroll 1 2.webp";
import scrollImage2 from "@/assets/events/scroll 2 2.webp";
import scrollImage3 from "@/assets/events/scroll 3 2.webp";
import scrollImage4 from "@/assets/events/scroll 4 2.webp";
import comboImage from "@/assets/events/combo.webp";

type EventCardProps = {
  image: string;
  delay: number;
};

const CARD_DATA = [scrollImage1, scrollImage2, scrollImage3, scrollImage4];

const EventCard: React.FC<EventCardProps> = ({ image, delay }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative h-full shrink-0"
      style={{ width: "40.97%" }}
    >
      <div
        className="absolute border border-[#C65A32] bg-[#EFE3D6]/60"
        style={{ left: 0, top: 0, width: "100%", height: "95.15%" }}
      />

      <img
        src={image}
        alt=""
        className="absolute object-cover"
        style={{ left: "8.47%", top: "19.06%", width: "82.88%", height: "37.64%" }}
      />

      <h3
        className="absolute whitespace-nowrap font-glametrix font-bold text-[#2E261D]"
        style={{ left: "8.85%", top: "9.69%", width: "60%", fontSize: FONT_SIZES.subheading }}
      >
        Название мероприятия
      </h3>

      <p
        className="absolute whitespace-nowrap font-glametrix text-[#2E261D]"
        style={{ left: "8.53%", top: "61.86%", width: "75%", fontSize: FONT_SIZES.body }}
      >
        25.01.2026 в 10:00 | г. Москва, ул. Ленина 1
      </p>

      <p
        className="absolute font-glametrix text-[#2E261D]"
        style={{ left: "8.55%", top: "68.19%", width: "46.19%", fontSize: FONT_SIZES.body, lineHeight: 1.2 }}
      >
        <span className="whitespace-nowrap">Две строчки дополнительного</span>
        <br />
        <span className="whitespace-nowrap">описания подкрепляющего заголовок</span>
      </p>

      <div
        className="absolute"
        style={{ left: "8.47%", top: "79.84%", width: "21.86%", height: "7.17%" }}
      >
        <MoreButton className="w-full h-full" />
      </div>

      <img
        src={comboImage}
        alt=""
        className="absolute object-contain mix-blend-multiply"
        style={{ left: "73.90%", top: "61.60%", width: "19.51%", height: "38.40%" }}
      />
    </motion.article>
  );
};

const EventsSlide2: React.FC = () => {
  const railRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
        return;
      }

      const maxScrollLeft = rail.scrollWidth - rail.clientWidth;
      const canScrollRight = rail.scrollLeft < maxScrollLeft - 1;
      const canScrollLeft = rail.scrollLeft > 1;

      if ((event.deltaY > 0 && canScrollRight) || (event.deltaY < 0 && canScrollLeft)) {
        event.preventDefault();
        rail.scrollLeft += event.deltaY;
      }
    };

    rail.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      rail.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute font-ua-brand font-bold uppercase leading-none text-[#C65A32]"
        style={{ left: "8.67%", top: "5.25%", width: "23.15%", fontSize: FONT_SIZES.heading }}
      >
        СКОРО
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="absolute font-glametrix text-[#2E261D]"
        style={{ left: "8.36%", top: "16.61%", width: "18.92%", fontSize: FONT_SIZES.body, lineHeight: 1.2 }}
      >
        <span className="whitespace-nowrap">Две строчки дополнительного</span>
        <br />
        <span className="whitespace-nowrap">описания подкрепляющего заголовок</span>
      </motion.p>

      <div
        className="absolute"
        style={{ left: "8.33%", top: "27.44%", width: "83.33%", height: "72.57%" }}
      >
        <div
          ref={railRef}
          className="h-full w-full overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex h-full items-start gap-[2%] pr-[2%]">
            {CARD_DATA.map((image, index) => (
              <EventCard key={`${image}-${index}`} image={image} delay={0.1 + index * 0.05} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSlide2;
