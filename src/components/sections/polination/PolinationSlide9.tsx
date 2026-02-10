import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import centerImg from '@/assets/pollination/ninth_slide_center_image.png';

const PolinationSlide9: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    { question: 'Вопрос о посещении Куриямы', answer: 'Описание, чуть подробнее раскрывающее заголовок' },
    { question: 'Вопрос о посещении Куриямы', answer: 'Описание, чуть подробнее раскрывающее заголовок' },
    { question: 'Вопрос о посещении Куриямы', answer: 'Описание, чуть подробнее раскрывающее заголовок' },
    { question: 'Вопрос о посещении Куриямы', answer: 'Описание, чуть подробнее раскрывающее заголовок' },
    { question: 'Вопрос о посещении Куриямы', answer: 'Описание, чуть подробнее раскрывающее заголовок' },
  ];

  return (
    <section 
        className="relative w-full bg-white overflow-hidden"
        style={{ 
            height: '42.29vw' // 609/1440
        }}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute font-['UA-brand'] font-bold text-[#C65A32] uppercase leading-none"
        style={{
          left: '8.15%',
          top: '18.46%',
          width: '33.69%',
          fontSize: FONT_SIZES.heading
        }}
      >
        ЧАСТЫЕ
        <br />
        ВОПРОСЫ
      </motion.h2>

      {/* Center Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute"
        style={{
            left: '37.5%',
            top: '0%',
            width: '23.61%',
            height: '93.27%',
            zIndex: 10,
            pointerEvents: 'none'
        }}
      >
        <img src={centerImg} alt="" className="w-full h-full object-contain" />
      </motion.div>

      {/* FAQ Container */}
      <div 
        className="absolute flex flex-col z-20"
        style={{
            left: '50.69%',
            top: '17.41%',
            width: '40.97%'
        }}
      >
        {questions.map((item, index) => (
             <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="w-full"
             >
                {/* Item Header */}
                <button 
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between py-4 group"
                    style={{
                        borderBottom: '1px solid #D97858'
                    }}
                >
                    <span 
                        className="font-['Glametrix'] font-bold text-[#2E261D] text-left"
                        style={{ fontSize: FONT_SIZES.subheading }}
                    >
                        {item.question}
                    </span>
                    
                    {/* Plus/Minus Icon */}
                    <span className="relative w-6 h-6 flex items-center justify-center">
                        {/* Horizontal Line (always visible) */}
                        <span className="absolute w-full h-[1px] bg-[#D97858]" />
                        {/* Vertical Line (visible when closed) */}
                        <motion.span 
                            initial={false}
                            animate={{ 
                                rotate: openIndex === index ? 0 : 90, 
                                opacity: openIndex === index ? 0 : 1 
                            }}
                            className="absolute w-full h-[1px] bg-[#D97858]" 
                        />
                    </span>
                </button>

                {/* Answer */}
                <AnimatePresence>
                    {openIndex === index && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <p 
                                className="font-['Glametrix'] text-[#2E261D]/70 pt-2 pb-6"
                                style={{ fontSize: FONT_SIZES.body }}
                            >
                                {item.answer}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
             </motion.div>
        ))}
      </div>

    </section>
  );
};

export default PolinationSlide9;
