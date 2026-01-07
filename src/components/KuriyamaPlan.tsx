import React, { useState } from 'react';
import mapBackground from '@/assets/3-map-background.png';
import rightCalligraphy from '@/assets/3-right-image.png';
import object1 from '@/assets/3-object-1.png';
import object4 from '@/assets/3-object-4.png';

const KuriyamaPlan = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const mapItems = [
    { id: 1, name: 'Апи-домики', x: '18%', y: '42%', image: object1, expanded: true },
    { id: 2, name: 'Пасека', x: '38%', y: '58%', image: object4 },
    { id: 3, name: 'Магазин', x: '48%', y: '65%', image: object4 },
    { id: 4, name: 'Чайная', x: '62%', y: '55%', image: object4 },
    { id: 5, name: 'Сад', x: '78%', y: '38%', image: object4 },
    { id: 6, name: 'Беседка', x: '58%', y: '45%', image: object4 },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#EFE9E3] py-12 md:py-16 overflow-hidden">
      {/* Header Section */}
      <div className="px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row justify-between items-start gap-4 mb-6">
        {/* Title */}
        <h2 className="font-['UA-brand'] font-bold text-5xl md:text-6xl lg:text-[80px] text-foreground uppercase leading-[0.95]">
          План Куриямы
        </h2>

        {/* Top Right Description */}
        <p className="max-w-sm font-['Glametrix'] text-lg lg:text-[22px] text-foreground leading-relaxed lg:text-right">
          Описание в две строчки о том, что есть на Курияме. 
          Про возможность выбрать и подробнее узнать про активность по клику
        </p>
      </div>

      {/* Main Content Container */}
      <div className="relative flex px-8 md:px-16 lg:px-24">
        {/* Map Section */}
        <div className="relative w-full lg:w-[70%]">
          {/* Map Image */}
          <img 
            src={mapBackground} 
            alt="Карта Куриямы" 
            className="w-full h-auto"
          />

          {/* Map Points */}
          {mapItems.map((item) => {
            const isExpanded = hoveredItem === item.id || item.expanded;
            
            return (
              <div 
                key={item.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                style={{ left: item.x, top: item.y }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Collapsed state - just image */}
                <div className={`
                  bg-[#EFE9E3] border border-primary p-0.5 
                  transition-all duration-300 ease-out
                  ${isExpanded ? 'flex items-center gap-2 pr-3 shadow-lg' : 'hover:shadow-md'}
                `}>
                  <div className="w-12 h-12 md:w-14 md:h-14 overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Expanded content */}
                  <div className={`
                    flex items-center gap-2 overflow-hidden transition-all duration-300
                    ${isExpanded ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'}
                  `}>
                    <span className="font-['Glametrix'] font-bold text-sm md:text-base text-foreground whitespace-nowrap">
                      {item.name}
                    </span>
                    <span className="text-primary text-lg">›</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Left Point Marker */}
          <div className="absolute left-[2%] top-[50%] transform -translate-y-1/2">
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
              <div className="absolute inset-[-6px] rounded-full border border-primary"></div>
            </div>
          </div>
        </div>

        {/* Right Calligraphy Image */}
        <div className="hidden lg:flex absolute right-8 md:right-16 lg:right-24 bottom-0 w-[180px] lg:w-[220px] items-end justify-end">
          <img 
            src={rightCalligraphy} 
            alt="Курияма каллиграфия" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-8 md:px-16 lg:px-24 mt-8">
        <div className="max-w-md">
          <p className="font-['Glametrix'] text-lg lg:text-[22px] text-foreground mb-6 leading-relaxed">
            Описание в две строчки о том, что есть на Курияме. 
            Про возможность выбрать и подробнее узнать про активность по клику
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-['Glametrix'] text-lg lg:text-xl flex items-center gap-3 hover:opacity-90 transition-opacity">
            Подробнее
            <span className="text-xl">›</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default KuriyamaPlan;
