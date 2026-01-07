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
    answer: 'Описание, чуть подробнее раскрывающее заголовок',
  },
  {
    question: 'Вопрос о посещении Куриямы',
    answer: 'Описание, чуть подробнее раскрывающее заголовок',
  },
  {
    question: 'Вопрос о посещении Куриямы',
    answer: 'Описание, чуть подробнее раскрывающее заголовок',
  },
  {
    question: 'Вопрос о посещении Куриямы',
    answer: 'Описание, чуть подробнее раскрывающее заголовок',
  },
  {
    question: 'Вопрос о посещении Куриямы',
    answer: 'Описание, чуть подробнее раскрывающее заголовок',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full min-h-[80vh] bg-white py-12 md:py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left side - Title */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-[35%]"
          >
            <h2 className="font-ua-brand text-[#2E261D] text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold uppercase leading-[0.95]">
              частые
              <br />
              вопросы
            </h2>
          </motion.div>

          {/* Center - Calligraphy image */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block lg:w-[20%] relative"
          >
            <img
              src={backImage}
              alt=""
              className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] xl:h-[500px] w-auto opacity-100"
            />
          </motion.div>

          {/* Right side - FAQ items */}
          <div className="lg:w-[45%]">
            {faqItems.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="border-b border-primary"
              >
                <button
                  className="w-full py-5 md:py-6 flex items-center justify-between text-left group"
                  onClick={() => toggleItem(index)}
                >
                  <span className="font-glametrix font-bold text-black text-lg md:text-xl lg:text-2xl pr-4">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 text-primary text-2xl md:text-3xl font-light transition-transform duration-200">
                    {openIndex === index ? '−' : '+'}
                  </span>
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
                      <p className="font-glametrix text-black text-sm md:text-base lg:text-lg pb-5 md:pb-6 pr-12">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
