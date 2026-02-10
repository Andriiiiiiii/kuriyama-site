import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import backImage from '@/assets/visit/13-back-image.png';
import ivanPhoto from '@/assets/visit/ivan.png';

interface ReviewProps {
  left: string;
  top: string;
  width: string;
  name: string;
  text: string;
  delay?: number;
}

// Отзыв с рамкой
const ReviewWithBorder: React.FC<ReviewProps> = ({ left, top, width, name, text, delay = 0 }) => {
  const photoSize = 'min(15%, 60px)';
  // Уменьшенный отступ = 10% от ширины фото = 0.1 * 15% = 1.5%
  const padding = '1.5%';
  const gap = '1.5%';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="absolute bg-[#EFE3D6] border border-primary"
      style={{
        left,
        top,
        width,
        padding
      }}
    >
      {/* Верхняя строка: фото и имя - выровнены по вертикали */}
      <div className="flex items-center mb-[1.5%]" style={{ gap: '3%' }}>
        {/* Photo container with frame */}
        <div
          className="bg-[#EFE9E3] border border-primary flex-shrink-0"
          style={{
            padding: '4px',
            width: photoSize,
            height: photoSize,
          }}
        >
          {/* Inner frame with photo */}
          <div
            className="border border-primary overflow-hidden w-full h-full"
          >
            <img
              src={ivanPhoto}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name - выровнено с фото по вертикали */}
        <h3
          className="font-glametrix font-bold text-foreground flex-1"
          style={{
            fontSize: FONT_SIZES.subheading,
          }}
        >
          {name}
        </h3>
      </div>

      {/* Text - выровнен по левому краю, высота определяется содержимым */}
      <p
        className="font-glametrix text-foreground"
        style={{
          fontSize: FONT_SIZES.body,
        }}
      >
        {text}
      </p>
    </motion.div>
  );
};

// Отзыв без рамки
const ReviewWithoutBorder: React.FC<ReviewProps> = ({ left, top, width, name, text, delay = 0 }) => {
  const photoSize = 'min(20%, 70px)';
  // Уменьшенный отступ = 10% от ширины фото = 0.1 * 20% = 2%
  const gap = '2%';

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="absolute"
      style={{ left, top, width }}
    >
      {/* Верхняя строка: фото и имя - выровнены по вертикали */}
      <div className="flex items-center mb-[2%]" style={{ gap: '4%' }}>
        {/* Photo container with frame */}
        <div
          className="bg-[#EFE9E3] border border-primary flex-shrink-0"
          style={{
            padding: '4px',
            width: photoSize,
            height: photoSize,
          }}
        >
          {/* Inner frame with photo */}
          <div
            className="border border-primary overflow-hidden w-full h-full"
          >
            <img
              src={ivanPhoto}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name - выровнено с фото по вертикали */}
        <h3
          className="font-glametrix font-bold text-foreground flex-1"
          style={{
            fontSize: FONT_SIZES.subheading,
          }}
        >
          {name}
        </h3>
      </div>

      {/* Text - выровнен по левому краю, высота определяется содержимым */}
      <p
        className="font-glametrix text-foreground"
        style={{
          fontSize: FONT_SIZES.body,
        }}
      >
        {text}
      </p>
    </motion.div>
  );
};

const Reviews: React.FC = () => {
  return (
    <section className="relative w-full h-layout bg-white overflow-hidden">
      <div className="absolute inset-0">
        {/* 13 back image (1:307) */}
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          src={backImage}
          alt=""
          className="absolute object-contain"
          style={{
            left: '25.0694%',
            top: '29.6159%',
            width: '16.6667%',
            height: '59.3556%',
          }}
        />

        {/* 13 Title (1:122) */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="absolute font-ua-brand text-primary font-bold uppercase"
          style={{
            left: '8.3472%',
            top: '10%',
            width: '28.1439%',
            height: '7.3357%',
            fontSize: FONT_SIZES.heading,
          }}
        >
          отзывы
        </motion.h1>

        {/* 13 subtitle (1:299) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="absolute font-glametrix text-foreground"
          style={{
            left: '40%',
            top: '13%',
            width: '15.7843%',
            height: '4.5699%',
            fontSize: FONT_SIZES.body,
          }}
        >
          Текст, дополняющий заголовок. О ценности гостей и их визитов.
        </motion.p>

        {/* Review 1 - WITH border */}
        <ReviewWithBorder
          left="8.4028%"
          top="28.7485%"
          width="19.7917%"
          name="Иванов Иван"
          text="Отзыв в три-четыре строчки, подчеркивающий надежность, скорость и профит наших услуг. Здесь можно вставить отзыв покрупнее, чтобы он заполнил плашку. Впечатления о посещении и слова благодарности гидам и управляющим"
          delay={0.1}
        />

        {/* Review 2 - WITH border */}
        <ReviewWithBorder
          left="36.5972%"
          top="38.2900%"
          width="33.8889%"
          name="Лебедева Дарья"
          text="Отзыв в три-четыре строчки, подчеркивающий надежность, скорость."
          delay={0.2}
        />

        {/* Review 3 - WITHOUT border */}
        <ReviewWithBorder
          left="64.7917%"
          top="12.3916%"
          width="26.8750%"
          name="Кулик Евгений"
          text="Отзыв в три-четыре строчки, подчеркивающий надежность, скорость и профит наших услуг."
          delay={0.15}
        />

        {/* Review 4 - WITHOUT border */}
        <ReviewWithoutBorder
          left="71.6667%"
          top="40.3965%"
          width="20.0000%"
          name="Соколов Яков"
          text="Отзыв в три-четыре строчки, подчеркивающий надежность, скорость и профит наших услуг."
          delay={0.25}
        />

        {/* Review 5 - WITHOUT border */}
        <ReviewWithoutBorder
          left="29.5139%"
          top="68.2776%"
          width="27.1528%"
          name="Романов Сергей"
          text="Отзыв в три-четыре строчки, подчеркивающий надежность, скорость и профит."
          delay={0.3}
        />

        {/* Review 6 - WITH border */}
        <ReviewWithBorder
          left="57.7778%"
          top="64.1884%"
          width="33.8889%"
          name="Соболева Наталья"
          text="Отзыв в три-четыре строчки, подчеркивающий надежность, скорость."
          delay={0.35}
        />
      </div>
    </section>
  );
};

export default Reviews;
