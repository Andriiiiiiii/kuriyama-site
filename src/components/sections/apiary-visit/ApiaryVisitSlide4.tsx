import React from "react";
import { motion } from "framer-motion";
import { FONT_SIZES } from "@/config/typography";
import leftImage1 from "@/assets/visit to the apiary/1 left image 4.webp";
import leftImage2 from "@/assets/visit to the apiary/2 left image 4.webp";
import leftImage3 from "@/assets/visit to the apiary/3 left image 4.webp";
import rightImage1 from "@/assets/visit to the apiary/1 right image 4.webp";
import rightImage2 from "@/assets/visit to the apiary/2 right image 4.webp";
import rightTopImage from "@/assets/visit to the apiary/right top image 4.webp";

const desc = (
  <>
    <span className="whitespace-nowrap">Две строчки дополнительного</span>
    <br />
    <span className="whitespace-nowrap">описания подкрепляющего заголовок</span>
  </>
);
const subtitleSize = `calc(${FONT_SIZES.body} * 1.5)`;
const numberSize = `calc(${FONT_SIZES.heading} * 1.1)`;

const ApiaryVisitSlide4: React.FC = () => {
  return (
    <section className="relative w-full h-[321.7vh] overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute font-ua-brand font-bold uppercase leading-none text-[#C65A32]"
        style={{
          left: "8.78%",
          top: "12.16%",
          width: "50.72%",
          fontSize: FONT_SIZES.heading,
        }}
      >
        ПРОГРАММА МЕРОПРИЯТИЯ
      </motion.h2>

      <motion.img
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        src={rightTopImage}
        alt=""
        className="absolute object-cover"
        style={{ left: "75.76%", top: "0%", width: "21.61%", height: "25.91%" }}
      />

      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        src={leftImage1}
        alt=""
        className="absolute object-cover"
        style={{ left: "15.42%", top: "21.78%", width: "33.89%", height: "13.77%" }}
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        src={rightImage1}
        alt=""
        className="absolute object-cover"
        style={{ left: "50.69%", top: "37.63%", width: "33.89%", height: "13.77%" }}
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        src={leftImage2}
        alt=""
        className="absolute object-cover"
        style={{ left: "15.42%", top: "53.48%", width: "33.89%", height: "13.77%" }}
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        src={rightImage2}
        alt=""
        className="absolute object-cover"
        style={{ left: "50.69%", top: "69.34%", width: "33.89%", height: "13.77%" }}
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
        src={leftImage3}
        alt=""
        className="absolute object-cover"
        style={{ left: "15.42%", top: "85.19%", width: "33.89%", height: "13.77%" }}
      />

      <p className="absolute font-['Han-Zi'] leading-none text-[#2E261D]" style={{ left: "60.28%", top: "26.96%", fontSize: numberSize }}>1</p>
      <p className="absolute font-glametrix font-bold text-[#2E261D]" style={{ left: "64.64%", top: "27.13%", fontSize: subtitleSize }}>Знакомство</p>
      <p className="absolute font-glametrix text-[#2E261D]" style={{ left: "64.61%", top: "28.93%", width: "18.92%", fontSize: FONT_SIZES.body, lineHeight: 1.15 }}>{desc}</p>

      <p className="absolute font-['Han-Zi'] leading-none text-[#2E261D]" style={{ left: "8.53%", top: "42.82%", fontSize: numberSize }}>2</p>
      <p className="absolute font-glametrix font-bold text-[#2E261D]" style={{ left: "15.21%", top: "42.99%", fontSize: subtitleSize }}>Сбор урожая</p>
      <p className="absolute font-glametrix text-[#2E261D]" style={{ left: "15.17%", top: "44.78%", width: "18.92%", fontSize: FONT_SIZES.body, lineHeight: 1.15 }}>{desc}</p>

      <p className="absolute font-['Han-Zi'] leading-none text-[#2E261D]" style={{ left: "57.76%", top: "58.66%", fontSize: numberSize }}>3</p>
      <p className="absolute font-glametrix font-bold text-[#2E261D]" style={{ left: "64.71%", top: "58.85%", fontSize: subtitleSize }}>Мероприятие</p>
      <p className="absolute font-glametrix text-[#2E261D]" style={{ left: "64.61%", top: "60.64%", width: "18.92%", fontSize: FONT_SIZES.body, lineHeight: 1.15 }}>{desc}</p>

      <p className="absolute font-['Han-Zi'] leading-none text-[#2E261D]" style={{ left: "8.60%", top: "74.53%", fontSize: numberSize }}>4</p>
      <p className="absolute font-glametrix font-bold text-[#2E261D]" style={{ left: "15.26%", top: "74.70%", fontSize: subtitleSize }}>Мероприятие</p>
      <p className="absolute font-glametrix text-[#2E261D]" style={{ left: "15.17%", top: "76.49%", width: "18.92%", fontSize: FONT_SIZES.body, lineHeight: 1.15 }}>{desc}</p>

      <p className="absolute font-['Han-Zi'] leading-none text-[#2E261D]" style={{ left: "57.33%", top: "90.36%", fontSize: numberSize }}>5</p>
      <p className="absolute font-glametrix font-bold text-[#2E261D]" style={{ left: "64.71%", top: "90.56%", fontSize: subtitleSize }}>Мероприятие</p>
      <p className="absolute font-glametrix text-[#2E261D]" style={{ left: "64.61%", top: "92.34%", width: "18.92%", fontSize: FONT_SIZES.body, lineHeight: 1.15 }}>{desc}</p>
    </section>
  );
};

export default ApiaryVisitSlide4;
