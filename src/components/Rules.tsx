import React from 'react';
import { ChevronRight } from 'lucide-react';
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
      <h1 className="text-primary text-4xl md:text-6xl lg:text-[80px] font-bold uppercase">
        правила
      </h1>

      {/* Photo 2 - top right */}
      <img
        src={photo2}
        alt="Правила фото"
        className="absolute right-4 md:right-0 top-0 w-[200px] md:w-[282px] h-auto object-cover"
      />

      {/* Rules list */}
      <div className="mt-12 md:mt-20 space-y-8 md:space-y-12">
        {rules.map((rule, index) => (
          <div
            key={index}
            className="ml-0"
            style={{ marginLeft: `${index * 100}px` }}
          >
            <h2 className="text-secondary text-xl md:text-2xl lg:text-[32px] font-bold">
              {rule.title}
            </h2>
            <p className="text-foreground text-sm md:text-base font-normal mt-2 max-w-[690px]">
              {rule.description}
            </p>
          </div>
        ))}
      </div>

      {/* Photo 1 - bottom left */}
      <img
        src={photo1}
        alt="Пчеловод"
        className="mt-8 w-[140px] md:w-[180px] h-auto object-cover"
      />

      {/* More button */}
      <div className="flex justify-end mt-8">
        <button className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-6 py-2 rounded-full text-lg md:text-[22px] font-medium hover:bg-primary/90 transition-colors">
          Подробнее
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default Rules;
