import React, { useState } from 'react';
import { motion } from 'framer-motion';
import mapBackground from '@/assets/3-map-background.png';
import sectionBackground from '@/assets/3-background.png';
import rightCalligraphy from '@/assets/3-right-image.png';
import object1 from '@/assets/3-object-1.png';
import object4 from '@/assets/3-object-4.png';

const KuriyamaPlan = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const mapItems = [
    { id: 1, name: 'Апи-домики', x: '22%', y: '42%', image: object1 },
    { id: 2, name: 'Пасека', x: '40%', y: '55%', image: object4 },
    { id: 3, name: 'Магазин', x: '48%', y: '62%', image: object4 },
    { id: 4, name: 'Чайная', x: '62%', y: '52%', image: object4 },
    { id: 5, name: 'Сад', x: '72%', y: '38%', image: object4 },
    { id: 6, name: 'Беседка', x: '56%', y: '44%', image: object4 },
  ];

  return (
    <section className="relative w-full min-h-screen py-12 md:py-16 overflow-hidden">
      {/* Background Image - z-0 */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${sectionBackground})` }}
      />

      {/* Header Section - z-10 */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 flex flex-col lg:flex-row justify-between items-start gap-4 mb-6">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="font-['UA-brand'] font-bold text-5xl md:text-6xl lg:text-[80px] text-foreground uppercase leading-[0.95]"
        >
          План Куриямы
        </motion.h2>

        {/* Top Right Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-sm font-['Glametrix'] text-lg lg:text-[22px] text-foreground leading-relaxed lg:text-right"
        >
          Описание в две строчки о том, что есть на Курияме. 
          Про возможность выбрать и подробнее узнать про активность по клику
        </motion.p>
      </div>

      {/* Main Content Container - z-10 */}
      <div className="relative z-10 max-w-[1400px] mx-auto flex px-8 md:px-16">
        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full lg:w-[75%] mx-auto"
        >
          {/* Map Image */}
          <img 
            src={mapBackground} 
            alt="Карта Куриямы" 
            className="w-full h-auto"
          />

          {/* Map Points */}
          {mapItems.map((item, index) => {
            const isHovered = hoveredItem === item.id;
            
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                style={{ left: item.x, top: item.y }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className={`
                  bg-[#EFE9E3] border border-primary 
                  transition-all duration-300 ease-out
                  flex items-center
                  ${isHovered ? 'shadow-lg' : 'hover:shadow-md'}
                `}>
                  {/* Image container */}
                  <div className="w-12 h-12 md:w-14 md:h-14 overflow-hidden flex-shrink-0 border-r border-primary">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Text content - only visible on hover */}
                  <div className={`
                    flex items-center gap-2 px-3 overflow-hidden transition-all duration-300
                    ${isHovered ? 'max-w-[180px] opacity-100' : 'max-w-0 opacity-0 px-0'}
                  `}>
                    <span className="font-['Glametrix'] font-bold text-sm md:text-base text-foreground whitespace-nowrap">
                      {item.name}
                    </span>
                    <span className="text-primary text-lg font-light">›</span>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Left Point Marker */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute left-[5%] top-[50%] transform -translate-y-1/2"
          >
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
              <div className="absolute inset-[-6px] rounded-full border border-primary"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Calligraphy Image */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="hidden lg:flex absolute right-8 md:right-12 bottom-0 w-[150px] lg:w-[180px] items-end justify-end"
        >
          <img 
            src={rightCalligraphy} 
            alt="Курияма каллиграфия" 
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>

      {/* Bottom Section - z-10 */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 mt-8">
        <div className="max-w-md">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-['Glametrix'] text-lg lg:text-[22px] text-foreground mb-6 leading-relaxed"
          >
            Описание в две строчки о том, что есть на Курияме. 
            Про возможность выбрать и подробнее узнать про активность по клику
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-['Glametrix'] text-lg lg:text-xl flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            Подробнее
            <span className="text-xl">›</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default KuriyamaPlan;
