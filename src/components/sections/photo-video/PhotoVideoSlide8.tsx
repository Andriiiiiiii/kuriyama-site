import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import faqImage from '@/assets/photo-video/8-FAQ.png';

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

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full h-[599px] bg-white overflow-visible z-30">
      {/* Title */}
      <h2
        className="absolute font-['UA-brand'] text-[#C65A32] uppercase"
        style={{
          left: '8.61%',
          top: '28.7%',
          width: '33.7%', 
          fontSize: FONT_SIZES.heading,
          lineHeight: '1',
          zIndex: 10
        }}
      >
        Частые вопросы
      </h2>

      {/* Vertical Image in Middle Area */}
      <div 
        className="absolute z-0"
        style={{
            left: '40.76%',
            top: '5%',
            width: '18.54%',
            height: '125%', // Increased height container for overlap
            zIndex: 30
        }}
      >
          <img 
            src={faqImage} 
            alt="FAQ" 
            className="w-full h-full object-contain object-top" // Use contain to prevent cropping and align top
          />
      </div>

     {/* FAQ Accordion List - Starting at question X=39847 */}
     <div 
        className="absolute flex flex-col gap-6"
        style={{
            left: '50.76%',
            top: '15%', // Adjusted to start higher based on Q1 pos 4304/4146=~0.03 (wait 4304-4146=158/599=26%)
            width: '41%',
            zIndex: 10
        }}
     >
         {FAQ_DATA.map((item, i) => (
             <div key={i} className="border-b border-[#C65A32] pb-4">
                 <button 
                    onClick={() => toggle(i)}
                    className="flex justify-between items-center w-full text-left bg-transparent border-none cursor-pointer p-0"
                 >
                     <span className="font-['Manrope'] text-[#2E261D] text-lg font-medium">
                        {item.question}
                     </span>
                     <span className="text-[#C65A32] text-2xl font-light ml-4">
                         {openIndex === i ? '−' : '+'}
                     </span>
                 </button>
                 <AnimatePresence>
                     {openIndex === i && (
                         <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                         >
                             <div className="pt-4 font-['Manrope'] text-[#2E261D] text-sm opacity-80 leading-relaxed">
                                 {item.answer}
                             </div>
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
