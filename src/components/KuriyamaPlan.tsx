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
    { id: 1, name: 'Апи-домики', left: '18.403%', top: '35.202%', image: object1 },
    { id: 2, name: 'Пасека', left: '31.736%', top: '46.875%', image: object4 },
    { id: 3, name: 'Чайная', left: '41.736%', top: '54.136%', image: object4 },
    { id: 4, name: 'Магазин', left: '49.028%', top: '43.566%', image: object4 },
    { id: 5, name: 'Сад', left: '56.944%', top: '50.000%', image: object4 },
    { id: 6, name: 'Беседка', left: '69.444%', top: '32.904%', image: object4 },
  ];

  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{ 
        aspectRatio: '1440 / 816',
        maxHeight: '100vh'
      }}
    >
      {/* 3 line 1 - vertical left (behind everything) */}
      <div 
        className="absolute bg-primary z-[1]"
        style={{
          left: '3.854%',
          top: '0%',
          width: '1px',
          height: '82.445%'
        }}
      />

      {/* 3 line 2 - horizontal bottom (behind everything) */}
      <div 
        className="absolute bg-primary z-[1]"
        style={{
          left: '3.889%',
          top: '82.950%',
          width: '77.361%',
          height: '1px'
        }}
      />

      {/* 3 line 3 - vertical right (behind everything) */}
      <div 
        className="absolute bg-primary z-[1]"
        style={{
          left: '81.215%',
          top: '82.996%',
          width: '1px',
          height: '17.555%'
        }}
      />

      {/* 3 main background - full size to show torn edges */}
      <div 
        className="absolute z-[2]"
        style={{ 
          left: '0%',
          top: '8.824%',
          width: '100%',
          height: '82.353%'
        }}
      >
        <img 
          src={sectionBackground} 
          alt="" 
          className="w-full h-full object-fill"
        />
      </div>

      {/* 3 map background */}
      <div 
        className="absolute bg-cover bg-center bg-no-repeat z-[3]"
        style={{ 
          left: '6.250%',
          top: '11.213%',
          width: '86.875%',
          height: '71.783%',
          backgroundImage: `url(${mapBackground})`
        }}
      />

      {/* Title */}
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="absolute font-['UA-brand'] font-bold text-foreground uppercase leading-[0.95] z-[5]"
        style={{
          left: '8.833%',
          top: '7.353%',
          width: '53.454%',
          height: '5.324%',
          fontSize: 'clamp(60px, 8vw, 120px)'
        }}
      >
        План Куриямы
      </motion.h2>

      {/* main text up */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute font-['Glametrix'] text-foreground leading-relaxed z-[5]"
        style={{
          left: '64.281%',
          top: '15.655%',
          width: '25.709%',
          height: '5.614%',
          fontSize: 'clamp(14px, 1.25vw, 18px)'
        }}
      >
        Описание в две строчки о том, что есть на Курияме. 
        Про возможность выбрать и подробнее узнать про активность по клику
      </motion.p>

      {/* main text down */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute font-['Glametrix'] text-foreground leading-relaxed z-[5]"
        style={{
          left: '8.449%',
          top: '72.365%',
          width: '25.709%',
          height: '5.614%',
          fontSize: 'clamp(14px, 1.25vw, 18px)'
        }}
      >
        Описание в две строчки о том, что есть на Курияме. 
        Про возможность выбрать и подробнее узнать про активность по клику
      </motion.p>

      {/* 3 right image */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute z-[5]"
        style={{
          left: '81.667%',
          top: '56.066%',
          width: '13.472%',
          height: '35.938%'
        }}
      >
        <img 
          src={rightCalligraphy} 
          alt="Курияма каллиграфия" 
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Map Points - framed square items that expand on hover */}
      {mapItems.map((item, index) => {
        const isHovered = hoveredItem === item.id;
        
        return (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            className="absolute cursor-pointer z-[10]"
            style={{ 
              left: item.left, 
              top: item.top
            }}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Outer frame container */}
            <div 
              className="bg-[#EFE9E3] border border-primary transition-all duration-300 ease-out flex items-center"
              style={{
                padding: '4px',
                boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.15)' : 'none'
              }}
            >
              {/* Inner frame with photo */}
              <div 
                className="border border-primary overflow-hidden flex-shrink-0"
                style={{ 
                  width: 'clamp(40px, 4vw, 60px)',
                  height: 'clamp(40px, 4vw, 60px)'
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Text content - appears on hover */}
              <div 
                className="flex items-center gap-2 overflow-hidden transition-all duration-300"
                style={{
                  maxWidth: isHovered ? '150px' : '0px',
                  opacity: isHovered ? 1 : 0,
                  paddingLeft: isHovered ? '12px' : '0px',
                  paddingRight: isHovered ? '8px' : '0px'
                }}
              >
                <span 
                  className="font-['Glametrix'] font-bold text-foreground whitespace-nowrap" 
                  style={{ fontSize: 'clamp(12px, 1vw, 16px)' }}
                >
                  {item.name}
                </span>
                <span className="text-primary text-lg">›</span>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* 3 left point */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute z-[5]"
        style={{
          left: '2.708%',
          top: '43.566%',
          width: '2.361%',
          height: '3.125%'
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-[70%] h-[70%] rounded-full bg-primary"></div>
          <div className="absolute inset-0 rounded-full border border-primary"></div>
        </div>
      </motion.div>

      {/* 3 button more */}
      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute bg-primary text-primary-foreground rounded-full font-['Glametrix'] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity z-[5]"
        style={{
          left: '8.056%',
          top: '79.504%',
          width: '10.069%',
          height: '3.401%',
          fontSize: 'clamp(12px, 1.1vw, 16px)'
        }}
      >
        Подробнее
        <span>›</span>
      </motion.button>
    </section>
  );
};

export default KuriyamaPlan;
