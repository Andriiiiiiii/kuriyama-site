import React from 'react';
import { motion } from 'framer-motion';
import MoreButton from '@/components/MoreButton';
import backImage from '@/assets/8-back-image.svg';
import photoSmall from '@/assets/8-photo.png';

const SeasonalActivities: React.FC = () => {
  return (
    <section className="relative w-full max-w-[1347px] mx-auto mt-24 md:mt-32 lg:mt-40">
      {/* Background SVG */}
      <motion.img
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        src={backImage}
        alt=""
        className="w-full h-auto"
      />
      
      {/* Content overlay */}
      <div className="absolute inset-0 p-6 md:p-12">
        {/* Main title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-ua-brand text-secondary text-4xl md:text-6xl lg:text-[80px] font-bold uppercase leading-tight mt-16 md:mt-24"
        >
          Сезонные
          <br />
          занятия
        </motion.h1>

        {/* First content block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-20"
        >
          <h2 className="font-glametrix text-secondary text-xl md:text-2xl lg:text-[32px] font-bold">
            Заголовок
          </h2>
          <p className="font-inter text-foreground text-sm md:text-base font-normal mt-2 max-w-[234px]">
            Описание, подробнее раскрывающее заголовок
          </p>
        </motion.div>

        {/* Second content block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-24 ml-0 md:ml-48"
        >
          <h2 className="font-glametrix text-secondary text-xl md:text-2xl lg:text-[32px] font-bold">
            Заголовок
          </h2>
          <p className="font-inter text-foreground text-sm md:text-base font-normal mt-2 max-w-[234px]">
            Описание, подробнее раскрывающее заголовок
          </p>
        </motion.div>

        {/* Season label */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute left-1/2 -translate-x-1/2 md:left-[44%] top-[60%] md:top-[65%]"
        >
          <p className="font-glametrix text-secondary text-lg md:text-[22px] font-medium">
            (natsu)
          </p>
          <h2 className="font-glametrix text-primary text-xl md:text-2xl lg:text-[32px] font-bold mt-2">
            Лето
          </h2>
        </motion.div>

        {/* Third content block */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute right-6 md:right-24 top-[60%] md:top-[64%]"
        >
          <h2 className="font-glametrix text-secondary text-xl md:text-2xl lg:text-[32px] font-bold">
            Заголовок
          </h2>
          <p className="font-inter text-foreground text-sm md:text-base font-normal mt-2 max-w-[234px]">
            Описание, подробнее раскрывающее заголовок
            <br />
            Описание, подробнее раскрывающее заголовок
          </p>
        </motion.div>

        {/* Small photo */}
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          src={photoSmall}
          alt="Сезонное фото"
          className="absolute left-6 md:left-8 bottom-28 md:bottom-32 w-[140px] md:w-[183px] h-auto object-cover"
        />

        {/* More button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-16 md:bottom-20"
        >
          <MoreButton onClick={() => console.log('More clicked')} />
        </motion.div>
      </div>
    </section>
  );
};

export default SeasonalActivities;
