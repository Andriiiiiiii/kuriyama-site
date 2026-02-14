import React from 'react';
import { FONT_SIZES } from '@/config/typography';

// Images 6-1 to 6-6
import img1 from '@/assets/photo-video/6-1.png';
import img2 from '@/assets/photo-video/6-2.png';
import img3 from '@/assets/photo-video/6-3.png';
import img4 from '@/assets/photo-video/6-4.png';
import img5 from '@/assets/photo-video/6-5.png';
import img6 from '@/assets/photo-video/6-6.png';

const PhotoVideoSlide6: React.FC = () => {
  // Layout Logic (1440 x 754) (based on "block 6" container)
  // block 6: x=39116, y=2740 (Absolute reference)

  // 1. Title "Наши ульи" (576:552)
  // x: 39243 - 39116 = 127
  // y: 2862 - 2740 = 122
  // Left: 127/1440 = 8.82%
  // Top: 122/754 = 16.18%
  // Color: #C65A32 (Orange)

  // 2. Desc "Дополнительное описание..." (576:559)
  // x: 39236 - 39116 = 120
  // y: 2956 - 2740 = 216
  // Left: 120/1440 = 8.33%
  // Top: 216/754 = 28.64%
  // Color: #2E261D (Dark Brown)

  // 3. Grid of Images (All w=387, h=225)
  // Grid layout:
  // Row 1 Y: 3024 - 2740 = 284 => 37.66%
  // Row 2 Y: 3269 - 2740 = 529 => 70.15% (Gap ~245 diff in start, image 225 => 20px gap)

  // Col 1 X: 39236 - 39116 = 120 => 8.33%
  // Col 2 X: 39643 - 39116 = 527 => 36.60% (Gap 527 - (120+387=507) = 20px gap)
  // Col 3 X: 40050 - 39116 = 934 => 64.86% (Gap 934 - (527+387=914) = 20px gap)

  // Mapping Images to positions based on reading order (L-R, Top-Bottom):

  // 1: Rect 268 (x=120, y=284) -> Row 1 Col 1
  // 2: Rect 279 (x=527, y=284) -> Row 1 Col 2
  // 3: Rect 280 (x=934, y=284) -> Row 1 Col 3
  
  // 4: Rect 277 (x=120, y=529) -> Row 2 Col 1
  // 5: Rect 278 (x=527, y=529) -> Row 2 Col 2
  // 6: Rect 281 (x=934, y=529) -> Row 2 Col 3

  const images = [
    { id: 1, src: img1, left: '8.33%', top: '37.7%' },
    { id: 2, src: img2, left: '36.6%', top: '37.7%' },
    { id: 3, src: img3, left: '64.9%', top: '37.7%' },
    { id: 4, src: img4, left: '8.33%', top: '70.2%' },
    { id: 5, src: img5, left: '36.6%', top: '70.2%' },
    { id: 6, src: img6, left: '64.9%', top: '70.2%' },
  ];
  
  // Image Size %
  // W: 387/1440 = 26.88%
  // H: 225/754 = 29.84%

  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
        
      {/* Title */}
      <h2
        className="absolute font-['UA-brand'] uppercase text-[#C65A32]"
        style={{
          left: '8.8%',
          top: '16.2%',
          fontSize: FONT_SIZES.heading,
          lineHeight: '1',
          zIndex: 10
        }}
      >
        Наши ульи
      </h2>

      {/* Description */}
      <p
        className="absolute font-['Manrope'] text-[#2E261D]"
        style={{
          left: '8.3%',
          top: '28.6%',
          width: '27%', // 387 / 1440
          fontSize: FONT_SIZES.small,
          zIndex: 10
        }}
      >
        Дополнительное описание подкрепляющее заголовок
      </p>

      {/* Grid Images */}
      {images.map(img => (
          <div
            key={img.id}
            className="absolute z-10"
            style={{
                left: img.left,
                top: img.top,
                width: '26.9%',
                height: '29.8%'
            }}
          >
              <img 
                  src={img.src} 
                  alt={`Улей ${img.id}`} 
                  className="w-full h-full object-cover" 
              />
          </div>
      ))}
    </section>
  );
};

export default PhotoVideoSlide6;
