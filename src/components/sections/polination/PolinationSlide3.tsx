import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedLine, { Point } from '@/components/shared/AnimatedLine';

import img1 from '@/assets/pollination/third_slide_image_1.png';
import img2 from '@/assets/pollination/third_slide_image_2.png';
import img3 from '@/assets/pollination/third_slide_image_3.png';
import img4 from '@/assets/pollination/third_slide_image_4.png';
import { FONT_SIZES } from '@/config/typography'; 

const PolinationSlide3: React.FC = () => {
   // 1. Настройка ссылок
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 }); 
    // 2. Состояние последовательности анимации
    // 0 = ничего, 1 = входная линия, 2 = взрыв из кнопки, 3 = финальные ответвления
    const [step, setStep] = useState(1); 
   
       {/**/}
    const pTop: Point    = { x:'91.59%', y: '0%' };
    const pCenter: Point   = { x: '91.59%', y: '50%' };
    const pBottom: Point    = { x: '91.6%', y: '100%' };
    const pBottomLeft: Point    = { x: '0%', y: '100%' };
  const sectors = [
    {
      title: "Сельское хозяйство",
      desc: "Две строчки дополнительного описания подкрепляющего заголовок",
      img: img1,
      layout: "img-left"
    },
    {
      title: "Медицина",
      desc: "Две строчки дополнительного описания подкрепляющего заголовок",
      img: img2,
      layout: "text-left"
    },
    {
      title: "Семейный бизнес",
      desc: "Две строчки дополнительного описания подкрепляющего заголовок",
      img: img3,
      layout: "img-left"
    },
    {
      title: "Образование",
      desc: "Две строчки дополнительного описания подкрепляющего заголовок",
      img: img4,
      layout: "text-left"
    }
  ];

  return (
    <section ref={sectionRef} className="relative w-full flex bg-white min-h-layout-height items-stretch">
      {/* Sticky Left Title */}
      <div className="w-1/2 relative">
        <div className="sticky top-0 h-layout-height flex flex-col justify-center overflow-hidden">
            {/* Vertical Separator Line with Circle */}
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-['UA-brand'] font-bold uppercase tracking-tight text-[#2E261D]"
              style={{
                marginLeft: '16.24%',
                width: '75.72%',
                fontSize: FONT_SIZES.heading,
                lineHeight: '1'
              }}
            >
              ДЛЯ КАКИХ<br/>ОТРАСЛЕЙ
            </motion.h2>
        {isInView && (
          <>
            <AnimatedLine
              start={pTop}
              end={pCenter}
              direction="to-bottom"
              zIndex={30}
              trigger={step >= 1}
              decoration='circle-end'
              onComplete={() => setStep(2)}
            />
             <AnimatedLine
              start={pCenter} 
              end={pBottom}
              direction="to-bottom"
              zIndex={30}
              trigger={step >= 2}
              onComplete={() => setStep(3)}
            />
            <AnimatedLine
              start={pBottom} 
              end={pBottomLeft}
              direction="to-left"
              zIndex={30}
              trigger={step >= 3}
            />
          </>
        )}
       </div>
      </div>

      {/* Scrolling Right Content */}
      <div className="w-1/2 flex flex-col pt-[5.67vw] pb-[5.67vw]"> 
        {sectors.map((sector, index) => (
            <div 
                key={index} 
                className="relative w-full"
                style={{ 
                    height: '25.5vw',
                    marginTop: index === 0 ? '0' : '2.84vw'
                }}
            >
               <div className="relative w-full h-full"> 
                {/* Image */}
                <div
                    className="absolute rounded-sm overflow-hidden"
                    style={{
                        left: sector.layout === 'img-left' ? '0%' : '40%',
                        top: '0',
                        width: '28%', 
                        height: '15.8vw' 
                    }}
                >
                    <img src={sector.img} alt={sector.title} className="w-full h-full object-cover" />
                </div>

                {/* Text Group */}
                <div
                    className="absolute flex flex-col"
                    style={{
                        left: sector.layout === 'img-left' ? '32%' : '0%',
                        top: '2.2vw',
                    }}
                >
                    <div 
                        className="font-['Glametrix'] font-bold text-[#2E261D]"
                        style={{ fontSize: FONT_SIZES.subheading }}
                    >
                        {sector.title}
                    </div>
                    <div 
                         className="font-['Glametrix'] text-[#2E261D]/70 mt-2"
                         style={{ 
                             fontSize: FONT_SIZES.subheading,
                             lineHeight: '1.2',
                             width: '19vw' 
                         }}
                    >
                        {sector.desc}
                    </div>
                </div>
              </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default PolinationSlide3;
