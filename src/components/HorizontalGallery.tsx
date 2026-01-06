import React, { useRef, useState, useEffect, useCallback } from 'react';

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

// Lerp values: smaller = more inertia/lag
const getLerpValue = (size: string) => {
  if (size === 'big') return 0.03; // Most inertia, slowest
  if (size === 'normal') return 0.05; // Medium inertia
  return 0.08; // Least inertia, fastest response
};

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
  
  // Smooth scroll state
  const targetScrollX = useRef(0);
  const currentScrollX = useRef(0);
  const imagePositions = useRef<number[]>(galleryImages.map(() => 0));
  const [renderTrigger, setRenderTrigger] = useState(0);
  const animationFrame = useRef<number | null>(null);

  // Linear interpolation
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  const checkInfiniteScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container || isResetting.current) return;

    const scrollWidth = container.scrollWidth;
    const oneSetWidth = scrollWidth / 5;
    const minScroll = oneSetWidth;
    const maxScroll = oneSetWidth * 4;

    if (targetScrollX.current < minScroll) {
      isResetting.current = true;
      const offset = oneSetWidth * 2;
      targetScrollX.current += offset;
      currentScrollX.current += offset;
      imagePositions.current = imagePositions.current.map(pos => pos + offset);
      container.scrollLeft = targetScrollX.current;
      requestAnimationFrame(() => {
        isResetting.current = false;
      });
    } else if (targetScrollX.current > maxScroll) {
      isResetting.current = true;
      const offset = oneSetWidth * 2;
      targetScrollX.current -= offset;
      currentScrollX.current -= offset;
      imagePositions.current = imagePositions.current.map(pos => pos - offset);
      container.scrollLeft = targetScrollX.current;
      requestAnimationFrame(() => {
        isResetting.current = false;
      });
    }
  }, []);

  // Initialize scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const oneSetWidth = container.scrollWidth / 5;
    const initialScroll = oneSetWidth * 2;
    container.scrollLeft = initialScroll;
    targetScrollX.current = initialScroll;
    currentScrollX.current = initialScroll;
    imagePositions.current = galleryImages.map(() => initialScroll);
  }, []);

  // Animation loop for smooth lerp scrolling
  useEffect(() => {
    const animate = () => {
      const container = scrollContainerRef.current;
      if (!container) {
        animationFrame.current = requestAnimationFrame(animate);
        return;
      }

      // Lerp main scroll
      currentScrollX.current = lerp(currentScrollX.current, targetScrollX.current, 0.1);
      container.scrollLeft = currentScrollX.current;

      // Lerp each image position with different speeds
      let needsUpdate = false;
      imagePositions.current = imagePositions.current.map((pos, index) => {
        const imageIndex = index % baseImages.length;
        const lerpValue = getLerpValue(baseImages[imageIndex].size);
        const newPos = lerp(pos, targetScrollX.current, lerpValue);
        if (Math.abs(newPos - pos) > 0.01) needsUpdate = true;
        return newPos;
      });

      if (needsUpdate || Math.abs(currentScrollX.current - targetScrollX.current) > 0.1) {
        setRenderTrigger(prev => prev + 1);
      }

      animationFrame.current = requestAnimationFrame(animate);
    };

    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  // Handle wheel events
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (isHovering) {
        e.preventDefault();
        targetScrollX.current += e.deltaY;
        checkInfiniteScroll();
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [isHovering, checkInfiniteScroll]);

  // Calculate individual image offset based on its lerped position vs current scroll
  const getImageTransformX = (index: number) => {
    const imagePos = imagePositions.current[index];
    const diff = imagePos - currentScrollX.current;
    return diff * 0.3; // Scale down the effect
  };

  return (
    <section 
      className="relative h-[60vh] overflow-hidden bg-[#F5F5F0]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div 
        ref={scrollContainerRef}
        className="flex items-center h-full px-8 py-6 overflow-x-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`relative flex-shrink-0 ${getSizeClasses(image.size, image.orientation)} -mr-[6vh]`}
            style={{ 
              marginBottom: `${image.offset}vh`,
              zIndex: hoveredIndex === index ? 50 : (image.size === 'small' ? 2 : image.size === 'normal' ? 1 : 0),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={image.src}
              alt={`Gallery image ${(index % baseImages.length) + 1}`}
              className="h-full w-full object-cover cursor-default shadow-lg transition-transform duration-300"
              style={{ 
                transform: `translateX(${getImageTransformX(index)}px) scale(${hoveredIndex === index ? 1.15 : 1})`,
              }}
            />
          </div>
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
