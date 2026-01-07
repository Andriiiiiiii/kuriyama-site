import React from 'react';
import mapBackground from '@/assets/3-map-background.png';
import leftObject from '@/assets/2-left-object.png';

const KuriyamaPlan = () => {
  const mapItems = [
    { id: 1, name: 'Апи-домики', x: '15%', y: '40%', image: '/placeholder.svg' },
    { id: 2, name: 'Чайная', x: '35%', y: '55%', image: '/placeholder.svg' },
    { id: 3, name: 'Магазин', x: '45%', y: '60%', image: '/placeholder.svg' },
    { id: 4, name: 'Пасека', x: '60%', y: '50%', image: '/placeholder.svg' },
    { id: 5, name: 'Сад', x: '75%', y: '35%', image: '/placeholder.svg' },
    { id: 6, name: 'Беседка', x: '55%', y: '40%', image: '/placeholder.svg' },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#EFE9E3] py-16 overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute left-[3%] top-0 h-full w-px bg-primary opacity-30"></div>
      <div className="absolute left-[6%] top-0 h-full w-px bg-primary opacity-20"></div>

      <div className="px-8 md:px-16">
        {/* Title */}
        <h2 className="font-['UA-brand'] font-bold text-5xl md:text-6xl lg:text-7xl text-foreground uppercase mb-4">
          План Куриямы
        </h2>

        {/* Top Description */}
        <p className="max-w-md font-['Glametrix'] text-lg text-foreground ml-auto mr-8 md:mr-16 mb-8">
          Описание в две строчки о том, что есть на Курияме. 
          Про возможность выбрать и подробнее узнать про активность по клику
        </p>
      </div>

      {/* Map Container */}
      <div className="relative w-full px-8 md:px-16">
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Map Image */}
          <img 
            src={mapBackground} 
            alt="Карта Куриямы" 
            className="w-full h-auto opacity-90"
          />

          {/* Map Points */}
          {mapItems.map((item) => (
            <div 
              key={item.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: item.x, top: item.y }}
            >
              <div className="bg-[#EFE9E3] border border-primary rounded-sm p-1 flex items-center gap-2 hover:shadow-lg transition-shadow">
                <div className="w-12 h-10 bg-muted overflow-hidden">
                  <div className="w-full h-full bg-primary/20"></div>
                </div>
                <span className="font-['Glametrix'] font-bold text-sm text-foreground pr-2 whitespace-nowrap">
                  {item.name}
                </span>
                <span className="text-primary">›</span>
              </div>
            </div>
          ))}

          {/* Left Point Marker */}
          <div className="absolute left-[5%] top-[50%] transform -translate-y-1/2">
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
              <div className="absolute inset-[-4px] rounded-full border border-primary"></div>
            </div>
          </div>
        </div>

        {/* Kuriyama Symbol */}
        <div className="absolute right-8 md:right-16 bottom-8 w-[120px] md:w-[180px]">
          <img 
            src={leftObject} 
            alt="Курияма символ" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-8 md:px-16 mt-8 flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="max-w-md">
          <p className="font-['Glametrix'] text-lg text-foreground mb-4">
            Описание в две строчки о том, что есть на Курияме. 
            Про возможность выбрать и подробнее узнать про активность по клику
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-['Glametrix'] text-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
            Подробнее
            <span>›</span>
          </button>
        </div>
      </div>

      {/* Decorative line right */}
      <div className="absolute right-[5%] top-[10%] h-[80%] w-px bg-primary opacity-20"></div>
    </section>
  );
};

export default KuriyamaPlan;
