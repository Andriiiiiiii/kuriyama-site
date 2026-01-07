import React from 'react';
import { motion } from 'framer-motion';
import MoreButton from '@/components/MoreButton';
import photo1 from '@/assets/9-photo-1.png';
import photo2 from '@/assets/9-photo-2.png';

const Rules: React.FC = () => {
  const rules = [
    {
      title: "Заголовок",
      description: "Описание, подробнее раскрывающее заголовок. Описание одного из главных правил посещения Куриямы",
    },
    {
      title: "Заголовок",
      description: "Описание, подробнее раскрывающее заголовок. Описание одного из главных правил посещения Куриямы",
    },
    {
      title: "Заголовок",
      description: "Описание, подробнее раскрывающее заголовок. Описание одного из главных правил посещения Куриямы",
    },
  ];

  return (
    <section className="relative w-full max-w-[1204px] mx-auto px-4 md:px-8 py-12 md:py-20">
      {/* Title */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="font-ua-brand text-primary text-4xl md:text-6xl lg:text-[80px] font-bold uppercase"
      >
        правила
      </motion.h1>

      {/* Photo 2 - top right */}
      <motion.img
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        src={photo2}
        alt="Правила фото"
        className="absolute right-4 md:right-0 top-0 w-[200px] md:w-[282px] h-auto object-cover"
      />

      {/* Rules list */}
      <div className="mt-12 md:mt-20 space-y-8 md:space-y-12">
        {rules.map((rule, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="ml-0"
            style={{ marginLeft: `${index * 100}px` }}
          >
            <h2 className="font-glametrix text-secondary text-xl md:text-2xl lg:text-[32px] font-bold">
              {rule.title}
            </h2>
            <p className="font-inter text-foreground text-sm md:text-base font-normal mt-2 max-w-[690px]">
              {rule.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Photo 1 - bottom left */}
      <motion.img
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        src={photo1}
        alt="Пчеловод"
        className="mt-8 w-[140px] md:w-[180px] h-auto object-cover"
      />

      {/* More button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex justify-end mt-8"
      >
        <MoreButton onClick={() => console.log('More clicked')} />
      </motion.div>
    </section>
  );
};

export default Rules;
