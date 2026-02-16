
import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES, TYPOGRAPHY_CONFIG } from '@/config/typography';
import SelectTariffButton from '@/components/shared/SelectTariffButton';

// Images
import ropeLeft from '@/assets/corporate-beekeeping/7ropeleft.webp';
import ropeMiddle from '@/assets/corporate-beekeeping/7ropemiddle.webp';
import ropeRight from '@/assets/corporate-beekeeping/7roperight.webp';
import groupLeft from '@/assets/corporate-beekeeping/7groupleft.webp';
import groupMiddle from '@/assets/corporate-beekeeping/7groupmiddle.webp';
import groupRight from '@/assets/corporate-beekeeping/7groupright.webp';


type TicketCardProps = {
  image: string;
  title: string;
  price: string;
  left: string;
};

const benefits = [
  "Что получаете",
  "Что получаете",
  "Что получаете",
  "Что получаете",
  "Что получаете",
];
const priceSize = `calc(${FONT_SIZES.subheading} * 1.45)`;

const TicketCard: React.FC<TicketCardProps> = ({ image, title, price, left }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="absolute overflow-hidden"
      style={{ left, top: "2%", width: "22%", height: "86.8%" }}
    >
      <img src={image} alt={title} className="h-full w-full object-contain" />

      <h3
        className="absolute whitespace-nowrap font-ua-brand  leading-none text-[#2E261D]"
        style={{ left: "17.8%", top: "28%", width: "72%", fontSize: `calc(${FONT_SIZES.medium} * 1.06)` }}
      >
        {title}
      </h3>
      <p
        className="absolute font-glametrix text-[#2E261D]"
        style={{ left: "17.8%", top: "34%", width: "45%", lineHeight: 1.2, fontSize: FONT_SIZES.body }}
      >
        Небольшое описание в две строчки
      </p>

      {benefits.map((item, index) => (
        <div
          key={`${title}-${index}`}
          className="absolute flex items-start text-[#2E261D]"
          style={{ 
            left: "17.8%", 
            top: `${45 + index * 5}%`, 
            fontSize: FONT_SIZES.body,
            gap: `calc(${FONT_SIZES.body} * 0.4)`
          }}
        >
          <span className="font-['Han-Zi'] leading-none">{index + 1}</span>
          <span className="font-glametrix font-bold whitespace-nowrap">{item}</span>
        </div>
      ))}

      <p
        className="absolute font-['Han-Zi']  leading-none text-[#2E261D]"
        style={{ left: "17%", top: "70%", fontSize: priceSize }}
      >
        {price}
      </p>
      <p
        className="absolute font-glametrix text-[#2E261D]"
        style={{ left: "67.6%", top: "73%", fontSize: FONT_SIZES.body }}
      >
        руб.
      </p>
    </motion.article>
  );
};

const PersonalBeekeepingSlide7: React.FC = () => {
  return (
    <section 
      className="relative w-full overflow-hidden" 
      style={{ height: `calc(${TYPOGRAPHY_CONFIG.baseHeight} / ${TYPOGRAPHY_CONFIG.baseWidth} * 100vw)` }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute font-ua-brand font-bold uppercase leading-none text-[#C65A32]"
        style={{
          left: "8.83%",
          top: "0%",
          fontSize: FONT_SIZES.heading,
        }}
      >
        Типы ульев
      </motion.h2>

      

      <TicketCard image={groupLeft} title="Треть улья" price="15 000" left="8.33%" />
      <TicketCard image={groupMiddle} title="Целый улей" price="30 000" left="36.60%" />
      <TicketCard image={groupRight} title="1/8 улья" price="10 000" left="64.86%" />

      {/* Ropes */}
      <img
        src={ropeLeft}
        alt=""
        className="absolute object-cover object-bottom"
        style={{ left: "13.5%", top: "14%", width: "11%", height: "auto", zIndex: 10 }}
      />
      <img
        src={ropeMiddle}
        alt=""
        className="absolute object-cover object-bottom"
        style={{ left: "40.5%", top: "14%", width: "13.2%", height: "auto", zIndex: 10 }}
      />
      <img
        src={ropeRight}
        alt=""
        className="absolute object-cover object-bottom"
        style={{ left: "70%", top: "14%", width: "11%", height: "auto", zIndex: 10 }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.15 }}
        className="absolute"
        style={{ left: "51%", top: "62%", width: "15.21%" }}
      >
        <SelectTariffButton width="100%" text="Подобрать" variant="orange" />
      </motion.div>
    </section>
  );
};

export default PersonalBeekeepingSlide7;
