import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "@/assets/blog/1-bg.webp";
import groupImage from "@/assets/blog/1-group.webp";
import SelectTariffButton from "@/components/shared/SelectTariffButton";
import { FONT_SIZES } from "@/config/typography";

const BlogHero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-visible">
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-fill"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="absolute z-20 font-glametrix text-[#2E261D]/50"
        style={{
          left: "8.42%",
          top: "11.94%",
          width: "7.05%",
          height: "1.68%",
          fontSize: FONT_SIZES.small,
        }}
      >
        Главная/ Блог
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="absolute z-20 font-ua-brand uppercase text-[#2E261D] tracking-tight"
        style={{
          left: "8.63%",
          top: "21.03%",
          width: "46.56%",
          height: "7.44%",
          fontSize: FONT_SIZES.heading,
          lineHeight: 1.05,
        }}
      >
        ЧТО НОВОГО?
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="absolute z-20 font-glametrix text-[#2E261D]"
        style={{
          left: "29.54%",
          top: "34.85%",
          width: "18.92%",
          height: "4.89%",
          fontSize: FONT_SIZES.small,
        }}
      >
        Две строчки дополнительного описания подкрепляющего заголовок
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="absolute z-10"
        style={{
          left: "8.33%",
          top: "18.47%",
          width: "83.33%",
          height: "69.22%",
        }}
      >
        <img
          src={groupImage}
          alt="Коллаж с пчёлами"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-contain object-left-top"
        />
      </motion.div>

      <div
        className="absolute z-30"
        style={{
          left: "29.86%",
          top: "52.51%",
          width: "15.21%",
          height: "27.51%",
        }}
      >
        <SelectTariffButton width="100%" text="Оставить заявку" />
      </div>
    </section>
  );
};

export default BlogHero;
