import React from "react";
import { motion } from "framer-motion";
import {
  FONT_FAMILIES,
  FONT_SIZES,
  TYPOGRAPHY_CONFIG,
} from "@/config/typography";
import groupImage from "@/assets/blog/3-group.webp";

const SLIDE_RATIO = 477 / 1440;

const BlogSlide3: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{ height: `calc(100vw * ${SLIDE_RATIO})` }}
    >
      <div className="relative w-full h-full">
        {/* Main frame: x=120, y=100, w=1203, h=377 */}
        <div
          className="absolute bg-[#EFE3D6]"
          style={{
            left: "8.33%",
            top: "20.96%",
            width: "83.54%",
            height: "79.04%",
            border: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
          }}
        />

        {/* Title: x=203.148, y=167.8, w=190.164, h=25.83 */}
        <h2
          className="absolute z-20 bold text-[#2E261D]"
          style={{
            left: "14.11%",
            top: "35.18%",
            width: "13.21%",
            height: "5.42%",
            fontFamily: FONT_FAMILIES.heading,
            fontSize: FONT_SIZES.medium,
            lineHeight: 1.05,
          }}
        >
          Новость 2
        </h2>

        {/* Description: x=200.602, y=230.645, w=389.918, h=52.4 */}
        <p
          className="absolute z-20 text-[#2E261D]"
          style={{
            left: "13.93%",
            top: "48.35%",
            width: "27.08%",
            height: "10.99%",
            fontFamily: FONT_FAMILIES.body,
            fontSize: FONT_SIZES.medium,
            lineHeight: 1.2,
          }}
        >
          Две строчки дополнительного описания подкрепляющего заголовок
        </p>

        {/* Contact button: x=200, y=367, w=132, h=43 */}
        <button
          type="button"
          className="absolute z-20 bg-[#C65A32] text-white rounded-full"
          style={{
            left: "13.89%",
            top: "76.94%",
            width: "9.17%",
            height: "9.01%",
            fontFamily: FONT_FAMILIES.body,
            fontSize: FONT_SIZES.body,
            lineHeight: 1,
          }}
        >
          Развернуть
        </button>

        {/* Group image: x=750, y=223, w=488, h=188 */}
        <motion.img
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src={groupImage}
          alt="Новость 2"
          loading="lazy"
          decoding="async"
          className="absolute z-20 object-cover"
          style={{
            left: "52.08%",
            top: "46.75%",
            width: "33.89%",
            height: "39.41%",
          }}
        />
      </div>
    </section>
  );
};

export default BlogSlide3;
