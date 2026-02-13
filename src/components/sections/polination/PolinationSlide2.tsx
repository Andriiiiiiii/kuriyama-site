import React, { useRef, useState, useEffect, useLayoutEffect  } from "react";
import { useInView } from "framer-motion";
import { useRelativePosition } from '@/hooks/useRelativePosition';
import AnimatedLine, { Point } from '@/components/shared/AnimatedLine';
import leftImages from '@/assets/pollination/second_slide_left_lower_corner_images.png';
import rightImages from '@/assets/pollination/second_slide_right_upper_corner_images.png';
import { FONT_SIZES } from '@/config/typography';

interface PolinationSlide2Props {
  step: number;
  setStep: (step: number) => void;
  prevFinished?: boolean;
  onInView?: () => void;
}

const PolinationSlide2: React.FC<PolinationSlide2Props> = ({ step, setStep, prevFinished = true, onInView }) => {
     // 1. Настройка ссылок
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.5 }); 
    
    // Notify parent
    useEffect(() => {
        if(isInView && onInView) onInView();
    }, [isInView, onInView]);

    useEffect(() => {
      // Start ONLY if prev finished OR if step forced higher (handled by parent prop)
      // But here we set step 1.
      if (isInView && step === 0 && prevFinished) {
        setStep(1);
      }
    }, [isInView, step, setStep, prevFinished]);
   
       {/**/}
    const pTop: Point    = { x: 'var(--hero-center-x)', y: '0%' };
    const pTopEnd: Point   = { x: 'var(--hero-center-x)', y: '4%' };
    const pSomewhereRight: Point    = { x: '75%', y: '3.9%' };
    const pSomewhereRightEnd: Point    = { x: '75%', y: '95%' };
    const pBottomCenter: Point   = { x: '45.79%',  y: '95%' };
    const pScreenBottom: Point  = { x: '45.79%', y: '100%' };
    
  return (
    <section ref={sectionRef} className="relative h-layout z-30 bg-white">
      

      {/* Title "ЧТО ЭТО?" */}
      <h2
        className="absolute font-['UA-brand'] font-bold uppercase tracking-tight text-[#C65A32] whitespace-nowrap"
        style={{
          left: '8.43%',
          top: '5.16%',
          width: 'auto', // Allow width to fit content due to nowrap
          fontSize: '5vw',
          lineHeight: '1'
        }}
      >
        ЧТО ЭТО?
      </h2>

      {/* Main Description */}
      <div
        className="absolute font-['Glametrix'] text-[#2E261D]"
        style={{
          left: '21%',
          top: '20.71%',
          width: '33%',
          fontSize: FONT_SIZES.body,
          lineHeight: '1.4'
        }}
      >
        <p>
          Описание подкрепляющее заголовок. Описание услуги, для чего 
          <br/> и зачем в три строчки максимум. Про главную цель, процесс, суть 
          помощи и пользу результата
        </p>
      </div>

      {/* Secondary Description */}
      <div
        className="absolute font-['Glametrix'] text-[#2E261D]"
        style={{
          left: '52.1%',
          top: '50%',
          width: '15.59%',
          fontSize: FONT_SIZES.body,
          lineHeight: '1.4'
        }}
      >
        <p>
          Продолжение описания услуги,
          для чего и зачем
        </p>
      </div>

      {/* Right Images (Bee + Calligraphy) */}
      <div
        className="absolute"
        style={{
          left: '49%',
          top: '2%',
          width: '27%',
          height: '46%'
        }}
      >
        <img
          src={rightImages}
          alt="Пчела и каллиграфия"
          className="w-full h-full object-contain object-top"
        />
      </div>

      {/* Left Images (Greenhouse + Ink Wash) */}
      <div
        className="absolute"
        style={{
          left: '10.5%',
          top: '31.5%',
          width: '40.556%',
          height: '70.78%'
        }}
      >
        <img
          src={leftImages}
          alt="Теплица"
          className="w-full h-full object-contain object-left-top"
        />
      </div>
      {(isInView || step > 0) && (
          <>
            <AnimatedLine
              start={pTop}
              end={pTopEnd}
              direction="to-bottom"
              zIndex={30}
              trigger={step >= 1} 
              initial={step > 1 ? "visible" : "hidden"}
              onComplete={() => { if (step < 2) setStep(2); }}
            />
             <AnimatedLine
              start={pTopEnd} 
              end={pSomewhereRight}
              direction="to-right"
              zIndex={30}
              trigger={step >= 2}
              initial={step > 2 ? "visible" : "hidden"}
              onComplete={() => { if (step < 3) setStep(3); }}
            />
            <AnimatedLine
              start={pSomewhereRight} 
              end={pSomewhereRightEnd}
              direction="to-bottom"
              zIndex={30}
              trigger={step >= 3} 
              initial={step > 3 ? "visible" : "hidden"}
              onComplete={() => { if (step < 4) setStep(4); }}
              decoration='ring-end'
              ringSize='15vw'
            />
             <AnimatedLine
              start={pSomewhereRightEnd} 
              end={pBottomCenter}
              direction="to-left"
              zIndex={30}
              trigger={step >= 4}
              initial={step > 4 ? "visible" : "hidden"}
              onComplete={() => { if (step < 5) setStep(5); }} 
            />
            <AnimatedLine
              start={pBottomCenter} 
              end={pScreenBottom}
              direction="to-bottom"
              zIndex={30}
              trigger={step >= 5} 
              initial={step > 5 ? "visible" : "hidden"}
            />
          </>
        )}

    </section>
  );
};

export default PolinationSlide2;
