import React from 'react';
import leftTablet from '@/assets/14-left-back-image.png';
import rightTablet from '@/assets/14-right-back-image.png';

interface Activity {
  title: string;
  description: string;
}

const leftActivities: Activity[] = [
  { title: 'Прогулка по лесу', description: 'Небольшое описание активности в две строчки' },
  { title: 'Сад камней', description: 'Небольшое описание активности в две строчки' },
  { title: 'Фотоссесия в японской\nтематике', description: 'Небольшое описание активности в две строчки' },
];

const rightActivities: Activity[] = [
  { title: 'Апи-домики', description: 'Небольшое описание активности в две строчки' },
  { title: 'Медоносное поле', description: 'Небольшое описание активности в две строчки' },
  { title: 'Фотоссесия с пчелами', description: 'Небольшое описание активности в две строчки' },
];

const Tariffs: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#F5F5F0] py-16 px-6 md:px-16 overflow-hidden">
      {/* Title */}
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-ua-brand text-[#2E261D] text-5xl md:text-6xl lg:text-[80px] font-bold uppercase mb-4">
          тарифы
        </h2>
        
        {/* Vertical labels */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-12">
          {/* Left column - Japan */}
          <div className="flex-1 flex flex-col md:flex-row gap-6">
            {/* Vertical text */}
            <div className="flex md:flex-col justify-center items-center gap-2">
              {'япония'.split('').map((letter, i) => (
                <span key={i} className="font-ua-brand text-[#2E261D] text-2xl md:text-[35px] font-bold uppercase leading-[0.9]">
                  {letter}
                </span>
              ))}
            </div>
            
            {/* Tablet with activities */}
            <div className="relative flex-1">
              <img src={leftTablet} alt="" className="w-full max-w-[400px] h-auto" />
              <div className="absolute top-[15%] left-[10%] right-[10%] space-y-4">
                {leftActivities.map((activity, index) => (
                  <div key={index}>
                    <h3 className="font-glametrix-bold text-black text-lg md:text-xl whitespace-pre-line">
                      {activity.title}
                    </h3>
                    <p className="font-glametrix text-black text-sm md:text-base opacity-80">
                      {activity.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Day pass label */}
            <div className="text-center md:text-left">
              <span className="font-ua-brand text-[#2E261D] text-2xl md:text-[35px] font-bold uppercase">
                daypass.
              </span>
            </div>
          </div>

          {/* Right column - Paseka */}
          <div className="flex-1 flex flex-col md:flex-row-reverse gap-6">
            {/* Vertical text */}
            <div className="flex md:flex-col justify-center items-center gap-2">
              {'пасека'.split('').map((letter, i) => (
                <span key={i} className="font-ua-brand text-[#2E261D] text-2xl md:text-[35px] font-bold uppercase leading-[0.9]">
                  {letter}
                </span>
              ))}
            </div>
            
            {/* Tablet with activities */}
            <div className="relative flex-1">
              <img src={rightTablet} alt="" className="w-full max-w-[400px] h-auto ml-auto" />
              <div className="absolute top-[15%] left-[15%] right-[10%] space-y-4 text-right">
                {rightActivities.map((activity, index) => (
                  <div key={index}>
                    <h3 className="font-glametrix-bold text-black text-lg md:text-xl">
                      {activity.title}
                    </h3>
                    <p className="font-glametrix text-black text-sm md:text-base opacity-80">
                      {activity.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Day pass label */}
            <div className="text-center md:text-right">
              <span className="font-ua-brand text-[#2E261D] text-2xl md:text-[35px] font-bold uppercase">
                daypass.
              </span>
            </div>
          </div>
        </div>

        {/* Visit button */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="font-glametrix text-white text-lg">→</span>
            </div>
            <span className="font-glametrix text-black text-lg md:text-[22px]">
              Посетить Курияму
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tariffs;
