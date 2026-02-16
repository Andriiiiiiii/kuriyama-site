import React from 'react';
import { FONT_FAMILIES } from '@/config/typography';
// import frontImage from '@/assets/beekeeping/8_front_image.svg'; // Skipping generic image unless user provides one

const PhotoVideoClosing: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] bg-white flex flex-col items-center justify-center overflow-visible z-10">
      
      {/* 
      <div 
        className="absolute w-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
            top: '-15%', 
            zIndex: 50
        }}
      >
        <img 
            src={frontImage} 
            alt="Nature" 
            className="w-full h-auto object-contain" 
        />
      </div>
      */}

      <div className="flex flex-col items-center gap-4 z-10 mt-20">
         <h2
           className="text-4xl uppercase text-foreground"
           style={{ fontFamily: FONT_FAMILIES.heading }}
         >
             СПАСИБО ЗА ПРОСМОТР
         </h2>
      </div>
    </section>
  );
};

export default PhotoVideoClosing;
