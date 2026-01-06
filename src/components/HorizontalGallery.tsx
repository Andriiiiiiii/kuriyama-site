import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import photo1 from '@/assets/gallery/photo-1.png';
import photo2 from '@/assets/gallery/photo-2.png';
import photo3 from '@/assets/gallery/photo-3.png';
import photo4 from '@/assets/gallery/photo-4.png';
import photo5 from '@/assets/gallery/photo-5.png';
import photo6 from '@/assets/gallery/photo-6.png';
import photo7 from '@/assets/gallery/photo-7.png';

interface GalleryImage {
  src: string;
  size: 'big' | 'normal' | 'small';
  orientation: 'vertical' | 'horizontal';
  offset: number;
}

const galleryImages: GalleryImage[] = [
  { src: photo1, size: 'normal', orientation: 'vertical', offset: 0 },
  { src: photo2, size: 'small', orientation: 'vertical', offset: 15 },
  { src: photo3, size: 'big', orientation: 'horizontal', offset: -10 },
  { src: photo4, size: 'normal', orientation: 'vertical', offset: 5 },
  { src: photo5, size: 'big', orientation: 'horizontal', offset: -5 },
  { src: photo6, size: 'normal', orientation: 'horizontal', offset: 10 },
  { src: photo7, size: 'small', orientation: 'vertical', offset: -15 },
];

const getSizeClasses = (size: string, orientation: string) => {
  if (size === 'big') {
    return orientation === 'horizontal' 
      ? 'h-[60vh] w-[80vh] min-w-[400px]' 
      : 'h-[80vh] w-[60vh] min-w-[300px]';
  }
  if (size === 'normal') {
    return orientation === 'horizontal' 
      ? 'h-[45vh] w-[60vh] min-w-[300px]' 
      : 'h-[60vh] w-[45vh] min-w-[225px]';
  }
  // small
  return orientation === 'horizontal' 
    ? 'h-[30vh] w-[40vh] min-w-[200px]' 
    : 'h-[40vh] w-[30vh] min-w-[150px]';
};

const HorizontalGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-[#F5F5F0]"
    >
      <motion.div 
        style={{ x }}
        className="flex items-center gap-[-10vh] h-full px-[10vh] py-[10vh]"
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className={`relative flex-shrink-0 ${getSizeClasses(image.size, image.orientation)} -mr-[10vh]`}
            style={{ 
              marginBottom: `${image.offset}vh`,
              zIndex: image.size === 'small' ? 2 : image.size === 'normal' ? 1 : 0
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <motion.img
              src={image.src}
              alt={`Gallery image ${index + 1}`}
              className="h-full w-full object-cover cursor-default"
              whileHover={{ 
                scale: 1.08, 
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
              style={{ 
                position: 'relative',
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HorizontalGallery;
