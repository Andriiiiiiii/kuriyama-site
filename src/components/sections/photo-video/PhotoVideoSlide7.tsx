import React from 'react';
import { FONT_SIZES } from '@/config/typography';
import leftImage from '@/assets/photo-video/7-left.png';
import rightImage from '@/assets/photo-video/7-right.png';

const PhotoVideoSlide7: React.FC = () => {
  // Layout Logic based on 1440x652 Group "block 7"
  // Group Start: x=39116, y=3494

  // 1. Title "видео с пасеки" (576:545)
  // x: 39243 - 39116 = 127 => 8.82%
  // y: 3614 - 3494 = 120 => 18.4%
  // Color: #2E261D (Dark Brown) as per JSON (unlike previous orange titles)

  // 2. Left Description (576:548)
  // x: 39236 - 39116 = 120 => 8.33%
  // y: 3710 - 3494 = 216 => 33.13%
  // Color: #2E261D

  // 3. Right Description (576:549)
  // x: 39846 - 39116 = 730 => 50.69%
  // y: 3710 - 3494 = 216 => 33.13%
  // Color: #2E261D

  // 4. Left Image (Rectangle 274)
  // x: 39236 - 39116 = 120 => 8.33%
  // y: 3778 - 3494 = 284 => 43.56%
  // w: 590 => 40.97%
  // h: 368 => 56.44%

  // 5. Right Image (Rectangle 275)
  // x: 39846 - 39116 = 730 => 50.69% (Gap: 50.69 - (8.33 + 40.97 = 49.3) = 1.4% gap?)
  // Actually 39846 - (39236 + 590 = 39826) = 20px gap.
  // y: 3778 - 3494 = 284 => 43.56%
  // w: 590 => 40.97%
  // h: 368 => 56.44%

  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
      
      {/* Title */}
      <h2
        className="absolute font-['UA-brand'] uppercase text-[#2E261D]"
        style={{
          left: '8.82%',
          top: '18.4%',
          fontSize: FONT_SIZES.heading,
          lineHeight: '1',
          zIndex: 10
        }}
      >
        Видео с пасеки
      </h2>

      {/* Left Description */}
      <p
        className="absolute font-['Manrope'] text-[#2E261D]"
        style={{
          left: '8.33%',
          top: '33.1%',
          width: '26.9%', // 387 / 1440
          fontSize: FONT_SIZES.small,
          zIndex: 10
        }}
      >
        Дополнительное описание подкрепляющее заголовок
      </p>

      {/* Right Description */}
      <p
        className="absolute font-['Manrope'] text-[#2E261D]"
        style={{
          left: '50.69%',
          top: '33.1%',
          width: '26.9%',
          fontSize: FONT_SIZES.small,
          zIndex: 10
        }}
      >
        Дополнительное описание подкрепляющее заголовок
      </p>

      {/* Left Image */}
      <div
        className="absolute z-10"
        style={{
          left: '8.33%',
          top: '43.56%',
          width: '40.97%', 
          height: '56.44%'
        }}
      >
        <img 
            src={leftImage} 
            alt="Видео с пасеки 1" 
            className="w-full h-full object-cover" 
        />
      </div>

      {/* Right Image */}
      <div
        className="absolute z-10"
        style={{
          left: '50.69%',
          top: '43.56%',
          width: '40.97%', 
          height: '56.44%'
        }}
      >
        <img 
            src={rightImage} 
            alt="Видео с пасеки 2" 
            className="w-full h-full object-cover" 
        />
      </div>

    </section>
  );
};

export default PhotoVideoSlide7;
