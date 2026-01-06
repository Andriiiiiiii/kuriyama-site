import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
  { src: photo2, size: 'small', orientation: 'vertical', offset: 10 },
  { src: photo3, size: 'big', orientation: 'horizontal', offset: -8 },
  { src: photo4, size: 'normal', orientation: 'vertical', offset: 5 },
  { src: photo5, size: 'big', orientation: 'horizontal', offset: -5 },
  { src: photo6, size: 'normal', orientation: 'horizontal', offset: 8 },
  { src: photo7, size: 'small', orientation: 'vertical', offset: -10 },
];

const getSizeClasses = (size: string, orientation: string) => {
  if (size === 'big') {
    return orientation === 'horizontal' 
      ? 'h-[35vh] w-[47vh] min-w-[220px]' 
      : 'h-[45vh] w-[34vh] min-w-[170px]';
  }
  if (size === 'normal') {
    return orientation === 'horizontal' 
      ? 'h-[28vh] w-[37vh] min-w-[180px]' 
      : 'h-[35vh] w-[26vh] min-w-[130px]';
  }
  // small
  return orientation === 'horizontal' 
    ? 'h-[20vh] w-[27vh] min-w-[130px]' 
    : 'h-[25vh] w-[19vh] min-w-[95px]';
};

const HorizontalGallery = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (isHovering) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [isHovering]);

  return (
    <section className="relative h-[60vh] overflow-hidden bg-[#F5F5F0]">
      <div 
        ref={scrollContainerRef}
        className="flex items-center gap-4 h-full px-8 py-6 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className={`relative flex-shrink-0 ${getSizeClasses(image.size, image.orientation)}`}
            style={{ 
              marginBottom: `${image.offset}vh`,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onMouseEnter={() => {
              setIsHovering(true);
              setHoveredIndex(index);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              setHoveredIndex(null);
            }}
          >
            <motion.img
              src={image.src}
              alt={`Gallery image ${index + 1}`}
              className="h-full w-full object-cover cursor-default"
              animate={{ 
                scale: hoveredIndex === index ? 1.1 : 1,
                zIndex: hoveredIndex === index ? 50 : 1,
              }}
              transition={{ duration: 0.3 }}
              style={{ 
                position: 'relative',
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalGallery;
