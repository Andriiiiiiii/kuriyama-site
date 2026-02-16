import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import leftObject from '@/assets/visit/2-left-object.webp';
import centralImage from '@/assets/visit/2-central-image.webp';
import rightImage from '@/assets/visit/2-right-image.webp';
import { FONT_SIZES, TYPOGRAPHY_CONFIG } from '@/config/typography';
import AnimatedLine, { Point } from '@/components/shared/AnimatedLine';

const WhatIsThisPlace = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (isInView && step === 0) {
      setStep(1);
    }
  }, [isInView, step]);

  const line1Start: Point = { x: '22.40%', y: '0%' };
  const line1End: Point = { x: '22.40%', y: '99.94%' };

  // Horizontal line connecting to the bottom of the vertical line and going left
  const line2Start: Point = { x: '22.40%', y: '99.89%' };
  const line2End: Point = { x: '3.85%', y: '99.89%' };

  return (
    <section ref={sectionRef} className="relative w-full h-layout bg-white overflow-hidden">
      {/* 2 line 1 - Vertical Line */}
      <AnimatedLine
        start={line1Start}
        end={line1End}
        direction="to-bottom"
        trigger={step >= 1}
        onComplete={() => setStep(2)}
        zIndex={0}
      />
      
      {/* 2 line 2 - Horizontal Line */}
      <AnimatedLine
        start={line2Start}
        end={line2End}
        direction="to-left"
        trigger={step >= 2}
        zIndex={20}
      />

      {/* 2 left object 1 */}
      <div 
        className="absolute"
        style={{
          left: '7.57%',
          top: '1.51%',
          width: '34.43%',
          height: '76.27%'
        }}
      >
        <img 
          src={leftObject} alt="Курияма" 
          className="w-full h-full object-contain object-center"
        />
      </div>

            {/* Title */}
      <h2
        className="absolute font-['UA-brand'] font-bold text-primary uppercase"
        style={{
          left: '57.83%',
          top: '5.98%',
          width: '36.48%',
          height: '18.16%',
          fontSize: FONT_SIZES.heading
        }}
      >
        ЧТО ЭТО<br/>
        ЗА МЕСТО?
      </h2>

                  {/* Main Text - slightly wider and larger */}
      <p
        className="absolute font-['Glametrix'] text-foreground"
        style={{
          left: '44.51%',
          bottom: '40.9%',
          width: '28%',
          fontSize: FONT_SIZES.body
        }}
      >
        Курияма — это уголок спокойствия, спрятанный<br/>
        в лесах Тульской области. Здесь, на границе<br/>
        Московской области, мы создали уникальное<br/>
        пространство, где философия созерцания<br/>
        и природная мудрость встречаются с русским<br/>
        раздольем.
      </p>

      {/* 2 central image */}
      <div 
        className="absolute"
        style={{
          left: '44.51%',
          top: '59.10%',
          width: '29.93%',
          height: '27.72%'
        }}
      >
        <img 
          src={centralImage} alt="Центральный образ" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2 right image */}
      <div 
        className="absolute"
        style={{
          left: '76.23%',
          top: '41.07%',
          width: '21.98%',
          height: '54.08%'
        }}
      >
        <img 
          src={rightImage} alt="Японский сад" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default WhatIsThisPlace;
