import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import ContactButton from '@/components/shared/ContactButton';
// Assets
import bgImage from '@/assets/beekeeping/6_background.png';
import yellowHoney from '@/assets/beekeeping/yellow_honey.png';
import brownHoney from '@/assets/beekeeping/brown_honey.png';
import whiteHoney from '@/assets/beekeeping/white_honey.png';
import blackHoney from '@/assets/beekeeping/black_honey.png';


const BeekeepingSlide6: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animation Transforms
  // Item 1 (Yellow): 0.1 -> 0.25
  const opacity1 = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const y1 = useTransform(scrollYProgress, [0.1, 0.25], [100, 0]);

  // Item 2 (Brown): 0.3 -> 0.45
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.45], [100, 0]);

  // Item 3 (White): 0.5 -> 0.65
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.65], [100, 0]);

  // Item 4 (Black): 0.7 -> 0.85
  const opacity4 = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
  const y4 = useTransform(scrollYProgress, [0.7, 0.85], [100, 0]);

  // Button: 0.85 -> 0.95
  const opacityBtn = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const yBtn = useTransform(scrollYProgress, [0.85, 0.95], [50, 0]);


  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-white">
      <div className="sticky top-0 w-full h-layout overflow-hidden">
          
          {/* Background - left 14.87%, top 0.00%, width 70.26%, height 100.00% */}
          <div
            className="absolute z-0"
            style={{
              left: '14.87%',
              top: '0.00%',
              width: '70.26%',
              height: '100.00%'
            }}
          >
            <img
                src={bgImage}
                alt=""
                className="w-full h-full object-contain"
            />
          </div>

          {/* Title - left 10.16%, top 16.83%, width 79.43% */}
          <h2
            className="absolute z-10 font-ua-brand font-bold uppercase text-center text-[#C65A32]"
            style={{
              left: '10.16%',
              top: '16.83%',
              width: '79.43%',
              fontSize: FONT_SIZES.heading,
              lineHeight: 1
            }}
          >
            ПОПРОБУЙТЕ НАШ МЕД
          </h2>

          {/* Yellow Honey (Left Top) */}
          <motion.div
            className="absolute z-10"
            style={{
              left: '22.38%',
              top: '29.18%',
              width: '30.51%',
              height: '20.47%',
              opacity: opacity1,
              y: y1
            }}
          >
             <HoneyCard 
                title="Заголовок"
                description="О типе меда, его вкусе и прочее"
                image={yellowHoney}
                direction="left"
             />
          </motion.div>

          {/* Brown Honey (Right Top) */}
          <motion.div
            className="absolute z-10"
            style={{
              left: '53.65%',
              top: '29.08%',
              width: '23.91%',
              height: '20.38%',
              opacity: opacity2,
              y: y2
            }}
          >
              <HoneyCard 
                title="Заголовок"
                description="О типе меда, его вкусе и прочее"
                image={brownHoney}
                direction="right"
             />
          </motion.div>

          {/* White Honey (Left Bottom) */}
          <motion.div
            className="absolute z-10"
            style={{
              left: '8.27%',
              top: '55.29%',
              width: '30.78%',
              height: '20.47%',
              opacity: opacity3,
              y: y3
            }}
          >
             <HoneyCard 
                title="Заголовок"
                description="О типе меда, его вкусе и прочее"
                image={whiteHoney}
                direction="left"
             />
          </motion.div>

          {/* Black Honey (Right Bottom) */}
          <motion.div
            className="absolute z-10"
            style={{
              left: '67.41%',
              top: '54.20%',
              width: '24.26%',
              height: '20.47%',
              opacity: opacity4,
              y: y4
            }}
          >
             <HoneyCard 
                title="Заголовок"
                description="О типе меда, его вкусе и прочее"
                image={blackHoney}
                direction="right"
             />
          </motion.div>


          {/* Button - left 43.09%, top 63.80% */}
          <motion.div
            className="absolute z-20 flex justify-center"
            style={{
              left: '43.09%',
              top: '73.80%', // Slightly lower than JSON (63.80) to clear the center maybe? JSON had it quite high.
              width: '13.83%',
              height: '3.66%',
              opacity: opacityBtn,
              y: yBtn
            }}
          >
            <div className="w-full h-full transform scale-125 origin-center">
                 <ContactButton text="Перейти в каталог >" className="!w-full !h-full !text-base" />
            </div>
          </motion.div>
      </div>
    </section>
  );
};

interface HoneyCardProps {
    title: string;
    description: string;
    image: string;
    direction: 'left' | 'right';
}

const HoneyCard: React.FC<HoneyCardProps> = ({ title, description, image, direction }) => {
    const isImageLeft = direction === 'left';

    return (
        <div 
            className={`flex items-center h-full w-full ${isImageLeft ? 'flex-row' : 'flex-row-reverse'}`}
        >
            {/* Image Container */}
            <div className="h-full w-1/3 relative shrink-0">
                <img src={image} alt={title} className="w-full h-full object-contain" />
            </div>

            {/* Spacer */}
            <div className="w-4" />

            {/* Text Container */}
            <div className={`flex flex-col ${isImageLeft ? 'text-left' : 'text-right'}`}>
                <h3 className="font-ua-brand font-bold uppercase text-[#231F20]" style={{ fontSize: FONT_SIZES.subheading }}>
                    {title}
                </h3>
                <p className="font-glametrix text-black mt-2" style={{ fontSize: FONT_SIZES.body, lineHeight: 1.2 }}>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default BeekeepingSlide6;
