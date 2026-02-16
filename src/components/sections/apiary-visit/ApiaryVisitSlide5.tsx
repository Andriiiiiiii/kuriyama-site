import React from "react";
import { motion } from "framer-motion";
import { FONT_SIZES } from "@/config/typography";
import SelectTariffButton from "@/components/shared/SelectTariffButton";
import card1Image from "@/assets/visit to the apiary/card 1 5.webp";
import card2Image from "@/assets/visit to the apiary/card 2 5.webp";
import card3Image from "@/assets/visit to the apiary/card 3 5.webp";
import rightTopPicture from "@/assets/visit to the apiary/right top picture 5.webp";

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
      style={{ left, top: "18.82%", width: "26.11%", height: "60.80%" }}
    >
      <img src={image} alt={title} className="h-full w-full object-contain" />

      <h3
        className="absolute whitespace-nowrap font-ua-brand font-bold uppercase leading-none text-[#2E261D]"
        style={{ left: "17.8%", top: "27.6%", width: "72%", fontSize: `calc(${FONT_SIZES.subheading} * 1.06)` }}
      >
        {title}
      </h3>
      <p
        className="absolute font-glametrix text-[#2E261D]"
        style={{ left: "17.8%", top: "35.52%", width: "40%", lineHeight: 1.2, fontSize: FONT_SIZES.body }}
      >
        Небольшое описание в две строчки
      </p>

      {benefits.map((item, index) => (
        <div
          key={`${title}-${index}`}
          className="absolute flex items-start gap-2 text-[#2E261D]"
          style={{ left: "17.8%", top: `${46.5 + index * 6.14}%`, fontSize: FONT_SIZES.body }}
        >
          <span className="font-['Han-Zi'] font-bold leading-none">{index + 1}</span>
          <span className="font-glametrix">{item}</span>
        </div>
      ))}

      <p
        className="absolute font-['Han-Zi'] font-bold leading-none text-[#2E261D]"
        style={{ left: "20%", top: "79.2%", fontSize: priceSize }}
      >
        {price}
      </p>
      <p
        className="absolute font-glametrix text-[#2E261D]"
        style={{ left: "65.8%", top: "82.9%", fontSize: FONT_SIZES.body }}
      >
        руб.
      </p>
    </motion.article>
  );
};

const ApiaryVisitSlide5: React.FC = () => {
  return (
    <section className="relative w-full h-[155vh] overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute font-ua-brand font-bold uppercase leading-none text-[#2E261D]"
        style={{
          left: "8.83%",
          top: "10.57%",
          width: "26.99%",
          fontSize: FONT_SIZES.heading,
        }}
      >
        Билеты
      </motion.h2>

      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        src={rightTopPicture}
        alt=""
        className="absolute object-cover object-left"
        style={{ right: "0%", top: "2.43%", width: "16.53%", height: "17.35%" }}
      />

      <TicketCard image={card1Image} title="1 человек" price="10 000" left="8.33%" />
      <TicketCard image={card2Image} title="С другом" price="15 000" left="36.60%" />
      <TicketCard image={card3Image} title="Компания" price="30 000" left="64.86%" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.15 }}
        className="absolute"
        style={{ left: "49.44%", top: "72.33%", width: "15.21%" }}
      >
        <SelectTariffButton width="100%" text="Подобрать" variant="orange" />
      </motion.div>
    </section>
  );
};

export default ApiaryVisitSlide5;
