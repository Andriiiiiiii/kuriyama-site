import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Review {
  name: string;
  text: string;
  isLarge?: boolean;
}

const reviews: Review[] = [
  {
    name: 'Иванов Иван',
    text: 'Отзыв в три-четыре строчки, подчеркивающий надежность, скорость и профит наших услуг. Здесь можно вставить отзыв покрупнее, чтобы он заполнил плашку. Впечатления о посещении и слова благодарности гидам и управляющим',
    isLarge: true,
  },
  {
    name: 'Лебедева Дарья',
    text: 'Отзыв в три-четыре строчки, подчеркивающий надежность, скорость.',
  },
  {
    name: 'Кулик Евгений',
    text: 'Отзыв в три-четыре строчки, подчеркивающий надежность, скорость.',
  },
  {
    name: 'Соболева Наталья',
    text: 'Отзыв в три-четыре строчки, подчеркивающий надежность, скорость.',
  },
  {
    name: 'Романов Сергей',
    text: 'Отзыв в три-четыре строчки, подчеркивающий надежность, скорость.',
  },
  {
    name: 'Соколов Яков',
    text: 'Отзыв в три-четыре строчки, подчеркивающий надежность, скорость.',
  },
];

const Reviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleWheel = (e: React.WheelEvent) => {
    if (scrollRef.current && isHovering) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#F5F5F0] py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Title */}
        <h2 className="font-ua-brand text-[#2E261D] text-5xl md:text-6xl lg:text-[80px] font-bold uppercase mb-4">
          Отзывы
        </h2>
        
        {/* Subtitle */}
        <p className="font-glametrix text-black text-lg md:text-[22px] max-w-[500px] mb-8">
          Текст, дополняющий заголовок. О ценности гостей и их визитов.
        </p>
      </div>

      {/* Reviews carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 px-6 md:px-16 overflow-x-auto pb-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onWheel={handleWheel}
      >
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className={`flex-shrink-0 bg-[#EFE3D6] border border-primary rounded-lg p-6 ${
              review.isLarge ? 'w-[350px] md:w-[450px]' : 'w-[280px] md:w-[320px]'
            }`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {/* Avatar placeholder */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-[#EFE9E3] border border-primary rounded-sm flex items-center justify-center">
                <div className="w-12 h-12 bg-gray-300 rounded-sm" />
              </div>
              <h3 className="font-glametrix-bold text-black text-xl md:text-2xl">
                {review.name}
              </h3>
            </div>
            
            {/* Review text */}
            <p className="font-glametrix text-black text-base md:text-lg leading-relaxed">
              {review.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Hide scrollbar */}
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Reviews;
