import React,  {useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import { useLayoutEffect, useRef } from "react";
import backOne from '@/assets/pollination/first_slide_back.png';
import rightImage from '@/assets/pollination/first_slide_right_image.png';
import leftImages from '@/assets/pollination/first_slide_left_images.png';
import SelectTariffButton from '@/components/shared/SelectTariffButton';
import { FONT_SIZES } from '@/config/typography';
import { useRelativePosition } from '@/hooks/useRelativePosition';
import AnimatedLine, { Point } from '@/components/shared/AnimatedLine'; 

interface PolinationHeroProps {
  step: number;
  setStep: (step: number) => void;
  onInView?: () => void;
}

const PolinationHero: React.FC<PolinationHeroProps> = ({ step, setStep, onInView }) => {
   // 1. Настройка ссылок
  const sectionRef = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
 
  // 2. Состояние последовательности анимации
  const [btnShow, setBtnShow] = useState(step > 0);
 
  // 3. Хук для координат. 
  // btnShow=true запускает расчет.
  const { isReady } = useRelativePosition(sectionRef, btnRef, 'btn', undefined, btnShow);
  
  useEffect(() => {
    if (step >= 1) {
        setBtnShow(true);
    }
  }, [step]);
  
  // Use Framer Motion InView to trigger global scheduler
  useEffect(() => {
     const observer = new IntersectionObserver(
        (entries) => {
           entries.forEach(entry => {
              if(entry.isIntersecting) {
                 onInView && onInView();
              }
           });
        },
        { threshold: 0.3 }
     );
     if(sectionRef.current) observer.observe(sectionRef.current);
     return () => observer.disconnect();
  }, [onInView]);
  
  useEffect(() => {
     if (isReady && sectionRef.current) {
       // 1. Достаем значение из текущей секции (inline-стиля)
       const val = sectionRef.current.style.getPropertyValue('--btn-x-mid');
       
       // 2. Записываем его глобально в :root под уникальным именем
       if (val) {
         document.documentElement.style.setProperty('--hero-center-x', val);
       }
     }
   }, [isReady]);
 
  
     {/**/}
  const pScreenTop: Point    = { x: '4%', y: '0%' }; 
  const pScreenRight: Point   = { x: '100%', y: 'var(--btn-y-mid)' };
  const pScreenBottom: Point    = { x: 'var(--btn-x-mid)', y: '100%' };
  const pBtnLeft: Point   = { x: 'var(--btn-x-left)',  y: 'var(--btn-y-mid)' };
  const pBtnRight: Point  = { x: 'var(--btn-x-right)', y: 'var(--btn-y-mid)' };
  const pBtnBottom: Point = { x: 'var(--btn-x-mid)',   y: 'var(--btn-y-bottom)' };
  const pTopLeftBranch: Point     = { x: '4%' , y: 'var(--btn-y-mid)' };
  

  return (
    <section ref={sectionRef} className="relative w-full h-layout overflow-hidden text-white">

      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
      >
        <img
          src={backOne}
          alt=""
          className="w-full h-full object-fill"
        />
      </div>

      {/* Breadcrumbs - left 8.14%, top 13.44% */}
      <div 
        className="absolute z-10 font-['Glametrix'] text-foreground/50 whitespace-nowrap"
        style={{
          left: '8.43%',
          top: '12.67%',
          fontSize: FONT_SIZES.body
        }}
      >
        Главная / Пчеловодство / Опыление
      </div>

      {/* Title "ОПЫЛеНИЕ" - left 8.39%, top 22.28%, width 38.14% */}
      <h1
        className="absolute z-10 font-['UA-brand'] font-bold uppercase tracking-tight text-[#2E261D]"
        style={{
          left: '8.39%',
          top: '22.28%',
          width: '38.14%',
          fontSize: FONT_SIZES.heading,
          lineHeight: '0.9'
        }}
      >
        ОПЫЛЕНИЕ
      </h1>

      {/* Description - left 29.28%, top 39.25%, width 18.93% */}
      <div
        className="absolute z-10 text-black font-['Glametrix']"
        style={{
          left: '29.28%',
          top: '39.25%',
          width: '18.93%',
          fontSize: FONT_SIZES.body,
          lineHeight: '1.2'
        }}
      >
        <p>Две строчки дополнительного<br/>описания подкрепляющего заголовок</p>
      </div>

      {/* Right Image - left 50.45%, top 15.82%, width 49.33% */}
      <div
        className="absolute z-10"
        style={{
          left: '50.45%',
          top: '15.82%',
          width: '49.33%',
          height: '71.60%'
        }}
      >
        <img
          src={rightImage}
          alt="Опыление"
          className="w-full h-full object-contain"
        />
      </div>

       {/* Left Images - left 8.06%, top 38.56%, width 19.38% */}
       <div
        className="absolute z-10"
        style={{
          left: '8.06%',
          top: '38.56%',
          width: '19.38%',
          height: '42.71%'
        }}
      >
        <img
          src={leftImages}
          alt="Галерея"
          className="w-full h-full object-contain"
        />
      </div>
      <motion.div   
        ref={btnRef}
        className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
        style={{
          left: "28.49%",
          top: "53.76%",
          width: "15.21%",
        }}
        initial={step > 0 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "backOut" }}
        onAnimationComplete={() => {
          if (step === 0) {
            setBtnShow(true); // Включаем расчет координат
            setTimeout(() => setStep(1), 40); // Через 0.5с запускаем первую линию
          }
        }}
        >
        <SelectTariffButton width="100%" />
        </motion.div>
       {isReady && (
          <>
            <AnimatedLine
              start={pScreenTop}
              end={{ ...pTopLeftBranch, y: `calc(${pTopLeftBranch.y} + 1px)` }}
              direction="to-bottom"
              zIndex={30}
              trigger={step >= 1} 
              initial={step > 1 ? "visible" : "hidden"}
              onComplete={() => { if (step < 2) setStep(2); }}
            />
             <AnimatedLine
              start={pScreenRight} 
              end={pBtnRight}
              direction="to-left"
              zIndex={30}
              trigger={step >= 2}
              initial={step > 2 ? "visible" : "hidden"}
            />
            <AnimatedLine
              start={pTopLeftBranch} 
              end={pBtnLeft}
              direction="to-right"
              zIndex={30}
              trigger={step >= 2} 
              initial={step > 2 ? "visible" : "hidden"}
              onComplete={() => { if (step < 3) setStep(3); }}
            />
             <AnimatedLine
              start={pBtnBottom} 
              end={pScreenBottom}
              direction="to-bottom"
              zIndex={30}
              trigger={step >= 3} 
              initial={step > 3 ? "visible" : "hidden"}
            />
          </>
        )}
                        
    </section>
  );
};

export default PolinationHero;
