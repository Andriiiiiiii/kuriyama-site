import React from "react";
import { motion } from "framer-motion";
import SelectTariffButton from "@/components/shared/SelectTariffButton";
import { FONT_FAMILIES, FONT_SIZES } from "@/config/typography";
import cherryImage from "@/assets/blog/7-cherry.webp";

const BASE_WIDTH = 1440;
const BASE_HEIGHT = 530;

const pX = (px: number): string => `${(px / BASE_WIDTH) * 100}%`;
const pY = (px: number): string => `${(px / BASE_HEIGHT) * 100}%`;

const BlogSlide7: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{ height: `calc(100vw * ${BASE_HEIGHT / BASE_WIDTH})` }}
    >
      <div className="absolute inset-0 w-full h-full">
        {/* Background shape */}
        <div
          className="absolute left-0 w-full border-t border-[#C65A32] bg-[#EFE3D6]"
          style={{
            top: pY(110),
            height: pY(420),
          }}
        />

        {/* Cherry image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -95 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -95.36 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute z-10"
          style={{
            left: pX(665.81),
            top: pY(29.95),
            width: pX(410.38),
            height: pY(410.38),
          }}
        >
          <img
            src={cherryImage}
            alt="Вишня"
          loading="lazy"
          decoding="async"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute z-20 font-bold uppercase text-[#2E261D] leading-none"
          style={{
            left: pX(127.2),
            top: pY(169.4),
            width: pX(504.73),
            height: pY(159.2),
            fontFamily: FONT_FAMILIES.heading,
            fontSize: FONT_SIZES.heading,
          }}
        >
          Есть новость?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="absolute z-20 text-[#2E261D]"
          style={{
            left: pX(120.66),
            top: pY(365.33),
            width: pX(186.14),
            height: pY(39.07),
            fontFamily: FONT_FAMILIES.body,
            fontSize: FONT_SIZES.body,
            lineHeight: 1.2,
          }}
        >
          Описание, подробнее раскрывающее заголовок
        </motion.p>

        {/* Component 7 button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute z-20"
          style={{
            left: pX(1100.23),
            top: pY(176.98),
            width: pX(218.81),
            height: pY(219),
          }}
        >
          <SelectTariffButton width="100%" text="Выбрать тариф" />
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSlide7;
