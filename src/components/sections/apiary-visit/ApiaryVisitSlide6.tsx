import React from "react";
import { motion } from "framer-motion";
import { FONT_SIZES } from "@/config/typography";

const ApiaryVisitSlide6: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute font-ua-brand font-bold uppercase leading-none text-[#2E261D]"
        style={{
          left: "8.78%",
          top: "14.79%",
          width: "70.71%",
          fontSize: FONT_SIZES.heading,
        }}
      >
        Место проведения
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: "8.16%",
          top: "26.59%",
          width: "14.92%",
          fontSize: FONT_SIZES.body,
          lineHeight: 1.2,
        }}
      >
        Две строчки дополнительного описания как добраться
      </motion.p>

      <motion.iframe
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        src="https://yandex.ru/map-widget/v1/?text=%D0%B3.%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D1%83%D0%BB.%20%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0%201&z=16"
        title="Яндекс Карта: г. Москва, ул. Ленина 1"
        loading="lazy"
        className="absolute border border-[#C65A32]"
        style={{
          left: "8.33%",
          top: "37.84%",
          width: "83.33%",
          height: "62.16%",
        }}
      />
    </section>
  );
};

export default ApiaryVisitSlide6;
