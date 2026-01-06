import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import backImage from '@/assets/12-back-image.png';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Вопрос о посещении Куриямы',
    answer: 'Описание, чуть подробнее раскрывающее заголовок. Здесь размещается развернутый ответ на вопрос посетителя.',
  },
  {
    question: 'Вопрос о посещении Куриямы',
    answer: 'Описание, чуть подробнее раскрывающее заголовок. Здесь размещается развернутый ответ на вопрос посетителя.',
  },
  {
    question: 'Вопрос о посещении Куриямы',
    answer: 'Описание, чуть подробнее раскрывающее заголовок. Здесь размещается развернутый ответ на вопрос посетителя.',
  },
  {
    question: 'Вопрос о посещении Куриямы',
    answer: 'Описание, чуть подробнее раскрывающее заголовок. Здесь размещается развернутый ответ на вопрос посетителя.',
  },
  {
    question: 'Вопрос о посещении Куриямы',
    answer: 'Описание, чуть подробнее раскрывающее заголовок. Здесь размещается развернутый ответ на вопрос посетителя.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full min-h-screen bg-[#F5F5F0] py-16 px-6 md:px-16 overflow-hidden">
      {/* Background image */}
      <img
        src={backImage}
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[80%] w-auto opacity-30 pointer-events-none"
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Title */}
        <h2 className="font-ua-brand text-[#2E261D] text-5xl md:text-6xl lg:text-[80px] font-bold uppercase mb-4">
          частые вопросы
        </h2>
        
        {/* Subtitle */}
        <p className="font-glametrix text-black text-lg md:text-[22px] max-w-[500px] mb-12">
          Описание, чуть подробнее раскрывающее заголовок
        </p>

        {/* FAQ items */}
        <div className="max-w-[800px] space-y-0">
          {faqItems.map((item, index) => (
            <div key={index} className="border-t border-primary">
              <button
                className="w-full py-6 flex items-center justify-between text-left group"
                onClick={() => toggleItem(index)}
              >
                <span className="font-glametrix-bold text-black text-xl md:text-2xl pr-4">
                  {item.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-primary text-3xl font-light"
                  >
                    +
                  </motion.div>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="font-glametrix text-black text-base md:text-lg pb-6 pr-12">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-primary" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
