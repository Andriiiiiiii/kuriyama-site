import React, { useRef, useState, useEffect, useCallback } from 'react';
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

const baseImages: GalleryImage[] = [
  { src: photo1, size: 'normal', orientation: 'vertical', offset: 0 },
  { src: photo2, size: 'small', orientation: 'vertical', offset: 10 },
  { src: photo3, size: 'big', orientation: 'horizontal', offset: -8 },
  { src: photo4, size: 'normal', orientation: 'vertical', offset: 5 },
  { src: photo5, size: 'big', orientation: 'horizontal', offset: -5 },
  { src: photo6, size: 'normal', orientation: 'horizontal', offset: 8 },
  { src: photo7, size: 'small', orientation: 'vertical', offset: -10 },
];

// Repeat images 5 times for seamless loop
const galleryImages = [...baseImages, ...baseImages, ...baseImages, ...baseImages, ...baseImages];

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
  const isResetting = useRef(false);

  const checkInfiniteScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container || isResetting.current) return;

    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const scrollLeft = container.scrollLeft;
    
    // Calculate the width of one set of images (1/5 of total)
    const oneSetWidth = scrollWidth / 5;
    
    // Start in the middle (at 2nd set)
    const minScroll = oneSetWidth;
    const maxScroll = oneSetWidth * 4;

    if (scrollLeft < minScroll) {
      isResetting.current = true;
      container.scrollLeft = scrollLeft + oneSetWidth * 2;
      requestAnimationFrame(() => {
        isResetting.current = false;
      });
    } else if (scrollLeft > maxScroll) {
      isResetting.current = true;
      container.scrollLeft = scrollLeft - oneSetWidth * 2;
      requestAnimationFrame(() => {
        isResetting.current = false;
      });
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Start in the middle
    const oneSetWidth = container.scrollWidth / 5;
    container.scrollLeft = oneSetWidth * 2;
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (isHovering) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
        checkInfiniteScroll();
      }
    };

    const handleScroll = () => {
      checkInfiniteScroll();
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('scroll', handleScroll);
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('scroll', handleScroll);
    };
  }, [isHovering, checkInfiniteScroll]);

  return (
    <section className="relative h-[60vh] overflow-hidden bg-white">
      <div 
        ref={scrollContainerRef}
        className="flex items-center h-full px-8 py-6 overflow-x-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className={`relative flex-shrink-0 ${getSizeClasses(image.size, image.orientation)} -mr-[6vh]`}
            style={{ 
              marginBottom: `${image.offset}vh`,
              zIndex: hoveredIndex === index ? 50 : (image.size === 'small' ? 2 : image.size === 'normal' ? 1 : 0),
            }}
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
              alt={`Gallery image ${(index % baseImages.length) + 1}`}
              className="h-full w-full object-cover cursor-default shadow-lg"
              animate={{ 
                scale: hoveredIndex === index ? 1.15 : 1,
              }}
              transition={{ duration: 0.3 }}
              style={{ 
                position: 'relative',
              }}
            />
          </motion.div>
        ))}
      </div>
      
      {/* Hide scrollbar */}
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default HorizontalGallery;
