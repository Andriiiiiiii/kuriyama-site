import React,  {useEffect, useState} from 'react';
import { motion, useInView } from 'framer-motion';
import { useLayoutEffect, useRef } from "react";
import backImg from '@/assets/pollination/fifth_slide_back_image.png';
import { FONT_SIZES } from '@/config/typography';
import SelectTariffButton from '@/components/shared/SelectTariffButton';
import { useRelativePosition } from '@/hooks/useRelativePosition';
import AnimatedLine, { Point } from '@/components/shared/AnimatedLine'; 

interface PolinationSlide5Props {
    step: number; 
    setStep: (step: number) => void;
    prevFinished?: boolean;
    onInView?: () => void;
}

const PolinationSlide5: React.FC<PolinationSlide5Props> = ({ step, setStep, prevFinished = true, onInView }) => {
    // 1. Настройка ссылок
    const sectionRef = useRef<HTMLElement>(null);
    const btnRef = useRef<HTMLDivElement>(null);
   
    // 2. Состояние последовательности анимации
    const [btnShow, setBtnShow] = useState(step > 0);
    
    const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

    useEffect(() => {
        if(isInView && onInView) onInView();
    }, [isInView, onInView]);
    
    useEffect(() => {
        if (isInView && step === 0 && prevFinished) {
            setStep(1);
        }
    }, [isInView, step, setStep, prevFinished]);

    // 3. Хук для координат. 
    // btnShow=true запускает расчет.
    const { isReady } = useRelativePosition(sectionRef, btnRef, 'btn', undefined, btnShow);
    useEffect(() => {
       if (isReady && sectionRef.current) {
         // 1. Достаем значение из текущей секции (inline-стиля)
         const val = sectionRef.current.style.getPropertyValue('--btn-x-mid');
         
         // 2. Записываем его глобально в :root под уникальным именем
         if (val) {
           document.documentElement.style.setProperty('--five-center-x', val);
         }
       }
     }, [isReady]);
   
    
       {/**/}
    const pScreenRight: Point   = { x: '100%', y: 'var(--btn-y-mid)' };
    const pScreenBottom: Point    = { x: 'var(--btn-x-mid)', y: '100%' };
    const pScreenCenter: Point    = { x: 'var(--btn-x-mid)', y: '50%' };
    const pBtnRight: Point  = { x: 'var(--btn-x-right)', y: 'var(--btn-y-mid)' };
  return (
    <section
      ref={sectionRef} 
      className="relative w-full overflow-hidden"
      style={{ 
        height: '24.58vw'
      }}
    >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
            <img 
                src={backImg} 
                alt="Leave a request" 
                className="w-full h-full object-cover"
            />
        </div>
        {/* Title: ОСТАВЬТЕ ЗАЯВКУ */}
        <h2 
            className="absolute font-['UA-brand'] font-bold text-white uppercase leading-none"
            style={{
                left: '8.5%',
                top: '19.89%',
                width: '33.57%',
                fontSize: FONT_SIZES.heading
            }}
        >
            ОСТАВЬТЕ<br/>ЗАЯВКУ
        </h2>

        {/* Description */}
        <div
            className="absolute font-['Glametrix'] text-white"
            style={{
                left: '8.23%',
                top: '74.98%',
                width: '15.42%',
                fontSize: FONT_SIZES.body,
                lineHeight: '1.2'
            }}
        >
            Пропуск на посещение на день<br/>
            со всеми активностями
        </div>

        {/* Button */}
        <motion.div   
            ref={btnRef}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            style={{
          left: "76.46%",
          top: "18.93%",
          width: "15.2%",
        }}
        initial={step >= 1 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        animate={step >= 1 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.6, ease: "backOut" }}
        onAnimationComplete={() => {
          if (step >= 1) {
            setBtnShow(true); 
          }
        }}
        >
        <SelectTariffButton width="100%" />
        </motion.div>
        {isReady && (
          <>
            <AnimatedLine
              start={pScreenRight}
              end={pBtnRight}
              direction="to-left"
              zIndex={30}
              trigger={step >= 1} 
              initial={step > 1 ? "visible" : "hidden"}
              onComplete={() => setStep(2)}
            />
          
          </>
        )}
    </section>
  );
};

export default PolinationSlide5;
