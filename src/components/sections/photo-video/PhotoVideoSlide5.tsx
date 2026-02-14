import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';

// Images 5-1 to 5-6
import img1 from '@/assets/photo-video/5-1.png';
import img2 from '@/assets/photo-video/5-2.png';
import img3 from '@/assets/photo-video/5-3.png';
import img4 from '@/assets/photo-video/5-4.png';
import img5 from '@/assets/photo-video/5-5.png';
import img6 from '@/assets/photo-video/5-6.png';

const PhotoVideoSlide5: React.FC = () => {
  // Layout Logic (1440 x 904)
  // block 5: x=39116, y=1836 (Absolute reference)
  
  // 1. Title "Собираем МЁД"
  // x: 125, y: 105
  // Left: 8.68%, Top: 11.6%
  
  // 2. Desc 1
  // x: 120, y: 216
  // Left: 8.33%, Top: 23.9%
  
  // 3. Desc 2
  // x: 730, y: 692
  // Left: 50.7%, Top: 76.5%

  // Images Sorted by Y first, then X (Reading Order)
  // 5-1: Rect 276 (x=730, y=210) -> Top-Rightish
  // 5-2: Rect 274 (x=1035, y=210) -> Top-Far-Right (Tall)
  // 5-3: Rect 249 (x=120, y=448)  -> Bottom-Left (Tall)
  // 5-4: Rect 268 (x=425, y=448)  -> Center-Middle
  // 5-5: Rect 255 (x=730, y=448)  -> Center-Right
  // 5-6: Rect 275 (x=425, y=686)  -> Bottom-Center

  const images = [
      { id: 1, src: img1, left: '50.7%', top: '23.2%', w: '19.8%', h: '24.1%' },
      { id: 2, src: img2, left: '71.9%', top: '23.2%', w: '19.8%', h: '50.4%' },
      { id: 3, src: img3, left: '50.7%', top: '49.6%', w: '19.8%', h: '24.1%' },
      { id: 4, src: img4, left: '29.5%', top: '49.6%', w: '19.8%', h: '24.1%' },
      { id: 5, src: img5, left: '8.33%', top: '49.6%', w: '19.8%', h: '50.4%' },
      { id: 6, src: img6, left: '29.5%', top: '75.9%', w: '19.8%', h: '24.1%' },
  ];

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2 // Delay between each image
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
        
      {/* Title */}
      <h2
        className="absolute font-['UA-brand'] uppercase text-[#2E261D]"
        style={{
          left: '8.7%',
          top: '11.6%',
          fontSize: FONT_SIZES.heading,
          lineHeight: '1',
          zIndex: 10
        }}
      >
        Собираем МЁД
      </h2>

      {/* Desc 1 */}
      <p
        className="absolute font-['Manrope'] text-[#2E261D]"
        style={{
          left: '8.33%',
          top: '23.9%',
          width: '27%', // 387 / 1440
          fontSize: FONT_SIZES.small,
          zIndex: 10
        }}
      >
        Дополнительное описание подкрепляющее заголовок
      </p>

      {/* Desc 2 */}
      <p
        className="absolute font-['Manrope'] text-[#2E261D]"
        style={{
          left: '50.7%',
          top: '76.5%',
          width: '27%',
          fontSize: FONT_SIZES.small,
          zIndex: 10
        }}
      >
        Дополнительное описание подкрепляющее заголовок
      </p>

      {/* Images Container */}
      <motion.div
        className="absolute w-full h-full inset-0 pointer-events-none" // pointer-events-none to let click through if needed
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {images.map((img) => (
            <motion.div
                key={img.id}
                variants={itemVariants}
                className="absolute overflow-hidden"
                style={{
                    left: img.left,
                    top: img.top,
                    width: img.w,
                    height: img.h,
                }}
            >
                <img 
                    src={img.src} 
                    alt={`Собираем мёд ${img.id}`} 
                    className="w-full h-full object-cover" 
                />
            </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default PhotoVideoSlide5;
