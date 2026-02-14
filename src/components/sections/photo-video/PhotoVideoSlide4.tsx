import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import middleImage from '@/assets/photo-video/4-middle.png';

const PhotoVideoSlide4: React.FC = () => {
  // Layout Logic based on 1440x814 Group "block 4"
  // Group Start: x=39116, y=1022
  
  // 1. Title "Видео с мероприятия" (576:580)
  // x: 39243 - 39116 = 127 => 8.82%
  // y: 1142 - 1022 = 120 => 14.74%
  // w: 1180 => 81.9%
  // Color: #C65A32 (Orange)

  // 2. Description (576:582)
  // x: 39236 - 39116 = 120 => 8.33%
  // y: 1238 - 1022 = 216 => 26.53%
  // w: 286 => 19.8%
  // Color: #2E261D (Dark Brown)

  // 3. Image (Rectangle 274) (576:581)
  // x: 39386 - 39116 = 270 => 18.75%
  // y: 1330 - 1022 = 308 => 37.83%
  // w: 900 => 62.5%
  // h: 506 => 62.16%
  // Centered-ish? (1440-900)/2 = 270. Yes, exactly centered horizontally.

  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
      
      {/* Title */}
      <h2
        className="absolute font-['UA-brand'] uppercase text-[#C65A32]"
        style={{
          left: '8.8%',
          top: '14.7%',
          width: '81.9%',
          fontSize: FONT_SIZES.heading,
          lineHeight: '1',
          zIndex: 10
        }}
      >
        Видео с мероприятия
      </h2>

      {/* Description */}
      <p
        className="absolute font-['Manrope'] text-[#2E261D]"
        style={{
          left: '8.3%',
          top: '26.5%',
          width: '19.8%',
          fontSize: FONT_SIZES.small,
          zIndex: 10
        }}
      >
        Две строчки дополнительного описания подкрепляющего заголовок
      </p>

      {/* Center Image */}
      <div
        className="absolute z-10"
        style={{
          left: '18.75%', // Perfectly centered
          top: '37.8%',
          width: '62.5%', 
          height: '62.2%'
        }}
      >
        <img 
            src={middleImage} 
            alt="Видео с мероприятия" 
            className="w-full h-full object-cover" 
        />
        {/* Play button overlay could be added here if it's a video preview, 
            but strictly following JSON only shows an IMAGE fill. */}
      </div>

    </section>
  );
};

export default PhotoVideoSlide4;
