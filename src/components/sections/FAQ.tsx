import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import backImage from '@/assets/visit/12-back-image.png';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    { question: 'Вопрос о посещении Куриямы', answer: 'Описание, подробнее раскрывающее заголовок' },
    { question: 'Вопрос о посещении Куриямы', answer: 'Описание, подробнее раскрывающее заголовок' },
    { question: 'Вопрос о посещении Куриямы', answer: 'Описание, подробнее раскрывающее заголовок' },
    { question: 'Вопрос о посещении Куриямы', answer: 'Описание, подробнее раскрывающее заголовок' },
    { question: 'Вопрос о посещении Куриямы', answer: 'Описание, подробнее раскрывающее заголовок' },
  ];

  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
      <div className="absolute inset-0">
        {/* 12 back image (1:83) */}
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          src={backImage}
          alt=""
          className="absolute object-contain"
          style={{
            left: '40.7639%',
            top: '0%',
            width: '18.5417%',
            height: '100%',
          }}
        />

        {/* 12 Title (1:124) */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="absolute font-ua-brand text-primary font-bold uppercase leading-[1.1]"
          style={{
            left: '8.3472%',
            top: '20.8535%',
            width: '33.6894%',
            height: '29.5360%',
            fontSize: FONT_SIZES.heading,
          }}
        >
          частые
          <br />
          вопросы
        </motion.h1>

        {/* FAQ List Container */}
        <div
          className="absolute"
          style={{
            left: '50.6944%',
            top: '18.6715%',
            width: '40.9722%',
          }}
        >
          {questions.map((item, index) => (
            <div key={index}>
              {/* Question Button */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                onClick={() => toggleItem(index)}
                className="w-full font-glametrix text-secondary font-bold text-left hover:opacity-80 transition-opacity flex items-center justify-between"
                style={{
                  fontSize: FONT_SIZES.subheading,
                  marginTop: index === 0 ? '0' : '1.5vh',
                }}
              >
                <span className="flex-1">{item.question}</span>
                <span
                  className="ml-4 flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: '20px',
                    height: '20px',
                  }}
                >
                  {openIndex === index ? (
                    <div className="bg-primary" style={{ width: '100%', height: '1px' }} />
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="1" className="text-primary" />
                      <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="1" className="text-primary" />
                    </svg>
                  )}
                </span>
              </motion.button>

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
                      className="font-glametrix text-foreground"
                      style={{
                        fontSize: FONT_SIZES.body,
                        marginTop: '1.5vh',
                      }}
                    >
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Line separator */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-primary origin-left"
                style={{
                  width: '100%',
                  height: '1px',
                  marginTop: '1.5vh',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
