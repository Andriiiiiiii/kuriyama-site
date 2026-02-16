import React from "react";
import { motion } from "framer-motion";
import { FONT_SIZES } from "@/config/typography";
import leftImage3 from "@/assets/events/left image 3.webp";
import rightImage3 from "@/assets/events/right image 3.webp";

const EventsSlide3: React.FC = () => {
  return (
    <section className="relative w-full h-[175.6vh] overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute font-ua-brand font-bold uppercase leading-none text-[#2E261D]"
        style={{
          left: "8.23%",
          top: "9.20%",
          width: "45.83%",
          fontSize: FONT_SIZES.heading,
        }}
      >
        УЖЕ ПРОШЛИ
      </motion.h2>

      <motion.img
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        src={leftImage3}
        alt=""
        className="absolute object-cover"
        style={{
          left: "8.14%",
          top: "19.11%",
          width: "41.06%",
          height: "38.53%",
        }}
      />

      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.15 }}
        className="absolute font-glametrix font-bold text-[#2E261D]"
        style={{
          left: "51.02%",
          top: "19.84%",
          width: "19.18%",
          fontSize: FONT_SIZES.subheading,
        }}
      >
        Название мероприятия
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: "50.92%",
          top: "23.19%",
          width: "11.63%",
          fontSize: FONT_SIZES.body,
          lineHeight: 1.2,
        }}
      >
        <span className="whitespace-nowrap">Две строчки дополнительного</span>
        <br />
        <span className="whitespace-nowrap">описания подкрепляющего заголовок</span>
      </motion.p>

      <motion.img
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        src={rightImage3}
        alt=""
        className="absolute object-cover"
        style={{
          left: "50.52%",
          top: "61.47%",
          width: "41.06%",
          height: "38.53%",
        }}
      />

      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.3 }}
        className="absolute font-glametrix font-bold text-[#2E261D]"
        style={{
          left: "8.30%",
          top: "62.19%",
          width: "19.18%",
          fontSize: FONT_SIZES.subheading,
        }}
      >
        Название мероприятия
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.35 }}
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: "8.19%",
          top: "65.55%",
          width: "11.63%",
          fontSize: FONT_SIZES.body,
          lineHeight: 1.2,
        }}
      >
        <span className="whitespace-nowrap">Две строчки дополнительного</span>
        <br />
        <span className="whitespace-nowrap">описания подкрепляющего заголовок</span>
      </motion.p>
    </section>
  );
};

export default EventsSlide3;
