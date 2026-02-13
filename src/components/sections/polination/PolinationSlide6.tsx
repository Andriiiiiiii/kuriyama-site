import React, { useRef, useState, useEffect, useLayoutEffect  } from "react";
import { useInView } from 'framer-motion';
import AnimatedLine, { Point } from '@/components/shared/AnimatedLine';
import { FONT_SIZES } from '@/config/typography';
import rightImg from '@/assets/pollination/six_slide_right_image.png';

interface PolinationSlide6Props {
  step: number;
  setStep: (step: number) => void;
  prevFinished?: boolean;
  onInView?: () => void;
}

const PolinationSlide6: React.FC<PolinationSlide6Props> = ({ step, setStep, prevFinished = true, onInView }) => {
// 1. Настройка ссылок
const sectionRef = useRef<HTMLElement>(null);
const isInView = useInView(sectionRef, { once: true, amount: 0.5 }); 

    useEffect(() => {
        if(isInView && onInView) onInView();
    }, [isInView, onInView]);

    useEffect(() => {
      if (isInView && step === 0 && prevFinished) {
        setStep(1);
      }
    }, [isInView, step, setStep, prevFinished]);
   
       {/**/}
    const pTop: Point    = { x: 'var(--five-center-x)', y: '0%' };
    const pCenter: Point   = { x: 'var(--five-center-x)', y: '54.625%' };
    const pBottom: Point  = { x: 'var(--five-center-x)', y: '100%' };
    const pBottomCenter: Point   = { x: '70%',  y: '100%' };
  const staps = [
    {
      id: 1,
      num: "1",
      title: "Заявка и выезд",
      desc: "Описание, подробнее раскрывающее заголовок",
      // Row 1, Col 1
      lineLeft: 8.30, lineTop: 32.00,
      numLeft: 9.70, numTop: 32.22,
      textLeft: 9.80, textTop: 44.10,
      descLeft: 9.80, descTop: 48.36
    },
    {
      id: 2,
      num: "2",
      title: "Расчет и договор",
      desc: "Описание, подробнее раскрывающее заголовок",
      // Row 1, Col 2
      lineLeft: 36.40, lineTop: 32.00,
      numLeft: 37.80, numTop: 32.22,
      textLeft: 37.90, textTop: 44.10,
      descLeft: 37.90, descTop: 48.36
    },
    {
      id: 3,
      num: "3",
      title: "Доставка и размещение",
      desc: "Описание, подробнее раскрывающее заголовок",
      // Row 1, Col 3
      lineLeft: 64.50, lineTop: 32.00,
      numLeft: 65.90, numTop: 32.22,
      textLeft: 66.00, textTop: 44.10,
      descLeft: 66.00, descTop: 48.36,
      onWood: true,
    },
    {
      id: 4,
      num: "4",
      title: "Контроль на месте",
      desc: "Описание, подробнее раскрывающее заголовок",
      // Row 2, Col 1
      lineLeft: 8.30, lineTop: 58.00,
      numLeft: 9.70, numTop: 58.22,
      textLeft: 9.80, textTop: 70.10,
      descLeft: 9.80, descTop: 74.36
    },
    {
      id: 5,
      num: "5",
      title: "Результат и вызов",
      desc: "Описание, подробнее раскрывающее заголовок",
      // Row 2, Col 2
      lineLeft: 36.40, lineTop: 58.00,
      numLeft: 37.80, numTop: 58.22,
      textLeft: 37.90, textTop: 70.10,
      descLeft: 37.90, descTop: 74.36
    }
  ];

  return (
    <section ref={sectionRef} className="relative w-full h-[140vh] bg-white overflow-hidden">
      {/* Title */}
      <h2
        className="absolute font-['UA-brand'] font-bold uppercase tracking-tight text-[#2E261D]"
        style={{
          left: '8.8%',
          top: '15.8%',
          width: '35.2%',
          fontSize: FONT_SIZES.heading,
          lineHeight: '1'
        }}
      >
        КАК МЫ<br/>РАБОТАЕМ
      </h2>
      {(isInView || step > 0) && (
          <>
            <AnimatedLine
              start={pTop}
              end={pCenter}
              direction="to-bottom"
              zIndex={0}
              trigger={step >= 1} 
              initial={step > 1 ? "visible" : "hidden"}
              decoration='ring-end'
              ringSize='30vw'
              decorationZIndex={0}
              onComplete={() => { if (step < 2) setStep(2); }}
            />
             <AnimatedLine
              start={pCenter} 
              end={pBottom}
              direction="to-bottom"
              zIndex={0}
              trigger={step >= 2}
              initial={step > 2 ? "visible" : "hidden"}
              onComplete={() => { if (step < 3) setStep(3); }}
            />
            <AnimatedLine
              start={pBottom} 
              end={pBottomCenter}
              direction="to-left"
              zIndex={30}
              trigger={step >= 3} 
              initial={step > 3 ? "visible" : "hidden"}
              onComplete={() => { if (step < 4) setStep(4); }}
            />
            
          </>
        )}
    
    
      {/* Right Image (Wood) */}
      <div
        className="absolute"
        style={{
            left: '63.4%',
            top: '15.8%',
            height: '77.65%',
            width: '29.1%'
        }}
      >
          <img src={rightImg} alt="Wood texture" className="w-full h-auto shadow-lg" />
      </div>

      {/* Staps */}
      {staps.map((step) => (
        <React.Fragment key={step.id}>
           {/* Vertical Line */}
           <div
             className="absolute origin-top bg-[#D97858]"
             style={{
                left: `${step.lineLeft}%`,
                top: `${step.lineTop}%`,
                width: '0.07%', 
                height: '20.5%'
             }}
           />

           {/* Number */}
           <div
             className="absolute font-['Han-Zi'] text-[#2E261D]"
             style={{
                left: `${step.numLeft}%`,
                top: `${step.numTop}%`,
                fontSize: FONT_SIZES.heading,
                lineHeight: 1
             }}
           >
              {step.num}
           </div>

           {/* Title */}
           <div
             className="absolute font-['Glametrix'] font-bold text-[#2E261D]"
             style={{
                left: `${step.textLeft}%`,
                top: `${step.textTop}%`,
                fontSize: FONT_SIZES.subheading
             }}
           >
              {step.title}
           </div>

           {/* Desc */}
           <div
             className="absolute font-['Glametrix'] text-[#2E261D]/70"
             style={{
                left: `${step.descLeft}%`,
                top: `${step.descTop}%`,
                width: '20%',
                fontSize: FONT_SIZES.body,
                lineHeight: '1.4'
             }}
           >
              {step.desc}
           </div>

        </React.Fragment>
        
      ))}

    </section>
  );
};

export default PolinationSlide6;
