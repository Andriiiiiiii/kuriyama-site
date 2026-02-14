import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';

// Images 3-1 to 3-4
import img1 from '@/assets/photo-video/3-1.png';
import img2 from '@/assets/photo-video/3-2.png';
import img3 from '@/assets/photo-video/3-3.png';
import img4 from '@/assets/photo-video/3-4.png';

const PhotoVideoSlide3: React.FC = () => {
  // JSON Analysis:
  // "block 3" (Group)
  // Position: x=39116, y=258
  // Size: w=1440, h=764

  // RELATIVE CALCULATIONS (based on 1440x764 viewport):
  // NOTE: User requested "width and height of screen - 100%".
  // So I'll map these coordinates to percentages of the container.
  
  // 1. TEXT "НА ПАСЕКЕ" (576:592)
  // x: 39243 - 39116 = 127
  // y: 378 - 258 = 120
  // w: 527, h: 59
  // Left: 127/1440 = 8.81%
  // Top: 120/764 = 15.70%

  // 2. TEXT "Две строчки..." (576:597)
  // x: 39236 - 39116 = 120
  // y: 474 - 258 = 216
  // w: 286, h: 39
  // Left: 120/1440 = 8.33%
  // Top: 216/764 = 28.27%

  // IMAGES (All have w=285, h=456) -> Aspect Ratio ~0.625
  // Top relative Y: 566 - 258 = 308
  // Top %: 308/764 = 40.31%
  // Height %: 456/764 = 59.68%
  // Width %: 285/1440 = 19.79%

  // 3. Rectangle 249 (Image 1) - 576:593
  // x: 39236 - 39116 = 120
  // Left: 8.33%

  // 4. Rectangle 268 (Image 2) - 576:594
  // x: 39541 - 39116 = 425
  // Left: 29.51%
  // Gap calc: 425 - (120+285) = 20px gap

  // 5. Rectangle 255 (Image 3) - 576:595
  // x: 39846 - 39116 = 730
  // Left: 50.69%

  // 6. Rectangle 274 (Image 4) - 576:596
  // x: 40151 - 39116 = 1035
  // Left: 71.87%

  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
      
      {/* Title "НА ПАСЕКЕ" */}
      <h2
        className="absolute font-['UA-brand'] uppercase text-[#2E261D]"
        style={{
          left: '8.8%',
          top: '15.7%',
          fontSize: FONT_SIZES.heading,
          lineHeight: '1',
          zIndex: 10
        }}
      >
        НА ПАСЕКЕ
      </h2>

      {/* Description */}
      <p
        className="absolute font-['Manrope'] text-[#2E261D]"
        style={{
          left: '8.3%',
          top: '28.3%',
          width: '19.8%', // Matches image width logic roughly
          fontSize: FONT_SIZES.small,
          zIndex: 10
        }}
      >
        Две строчки дополнительного описания подкрепляющего заголовок
      </p>

      {/* Image 1 */}
      <div
        className="absolute z-10"
        style={{
          left: '8.3%',
          top: '40.3%',
          width: '19.8%',
          height: '59.7%'
        }}
      >
        <img src={img1} alt="Пасека 1" className="w-full h-full object-cover" />
      </div>

      {/* Image 2 */}
      <div
        className="absolute z-10"
        style={{
          left: '29.5%',
          top: '40.3%',
          width: '19.8%',
          height: '59.7%'
        }}
      >
        <img src={img2} alt="Пасека 2" className="w-full h-full object-cover" />
      </div>

      {/* Image 3 */}
      <div
        className="absolute z-10"
        style={{
          left: '50.7%',
          top: '40.3%',
          width: '19.8%',
          height: '59.7%'
        }}
      >
        <img src={img3} alt="Пасека 3" className="w-full h-full object-cover" />
      </div>

      {/* Image 4 */}
      <div
        className="absolute z-10"
        style={{
          left: '71.9%',
          top: '40.3%',
          width: '19.8%',
          height: '59.7%'
        }}
      >
        <img src={img4} alt="Пасека 4" className="w-full h-full object-cover" />
      </div>

    </section>
  );
};

export default PhotoVideoSlide3;
