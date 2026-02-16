import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FONT_FAMILIES, FONT_SIZES } from '@/config/typography';
import faqImage from '@/assets/photo-video/8-FAQ.webp';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  { question: "Можно фотографировать на пасеке?", answer: "Да, конечно. Мы приветствуем съемку на память." },
  { question: "У вас есть фотограф?", answer: "Мы можем порекомендовать проверенных специалистов." },
  { question: "Можно снимать на видео?", answer: "Да, видеосъемка разрешена без ограничений." },
  { question: "Можно устроить свою фотосессию?", answer: "Безусловно, заранее согласуйте время." },
  { question: "Вопрос про фото", answer: "Ответ на вопрос про фото." },
];

const PhotoVideoSlide8: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative w-full bg-white overflow-hidden isolate paint-boundary"
      style={{
        height: '42.29vw'
      }}
    >
      {/* Title */}
      <h2
        className="absolute font-bold text-[#C65A32] uppercase leading-none"
        style={{
          left: '8.15%',
          top: '18.46%',
          width: '33.69%',
          fontSize: FONT_SIZES.heading,
          fontFamily: FONT_FAMILIES.heading
        }}
      >
        Частые вопросы
      </h2>

      {/* Center Image */}
      <div
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
        <img src={faqImage} alt="" className="w-full h-full object-contain" />
      </div>

      {/* FAQ Container */}
      <div
        className="absolute flex flex-col z-20"
        style={{
          left: '50.69%',
          top: '17.41%',
          width: '40.97%'
        }}
      >
        {FAQ_DATA.map((item, index) => (
          <div key={index} className="w-full">
            {/* Item Header */}
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between py-4 group"
              style={{
                borderBottom: '1px solid #D97858'
              }}
            >
              <span
                className="font-bold text-[#2E261D] text-left"
                style={{
                  fontSize: FONT_SIZES.subheading,
                  fontFamily: FONT_FAMILIES.body
                }}
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
                    className="text-[#2E261D]/70 pt-2 pb-6"
                    style={{
                      fontSize: FONT_SIZES.body,
                      fontFamily: FONT_FAMILIES.body
                    }}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoVideoSlide8;
