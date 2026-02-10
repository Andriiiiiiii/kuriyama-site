import React, { useRef, useState, useEffect, useLayoutEffect  } from "react";
import { useInView, motion  } from 'framer-motion';
import AnimatedLine, { Point } from '@/components/shared/AnimatedLine';
import { useRelativePosition } from '@/hooks/useRelativePosition';
import { FONT_SIZES } from '@/config/typography';
import slideImage from '@/assets/pollination/tenth_slide_image.png';
import SelectTariffButton from '@/components/shared/SelectTariffButton';

const PolinationSlide10: React.FC = () => {
     // 1. Настройка ссылок
        const sectionRef = useRef<HTMLElement>(null);
        const btnRef = useRef<HTMLDivElement>(null);
       
        // 2. Состояние последовательности анимации
        // 0 = ничего, 1 = входная линия, 2 = взрыв из кнопки, 3 = финальные ответвления
        const [step, setStep] = useState(0); 
        const [btnShow, setBtnShow] = useState(false);
       
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
        const pScreenBottom: Point    = { x: 'var(--btn-x-mid)', y: '94%' };
        const pBtnBottom: Point    = { x: 'var(--btn-x-mid)', y: 'var(--btn-y-mid)' };
        const pBtnRight: Point  = { x: 'var(--btn-x-right)', y: 'var(--btn-y-mid)' };
    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden bg-white"
            style={{
                height: '35.28vw' // 508 / 1440
            }}
        >
            {/* Background Shape (Beige Band) */}
            <div
                className="absolute w-full bg-[#EFE8DE]" // Beige color picked from similar slides (e.g. Slide 6 or Hero)
                style={{
                    top: '11.61%',
                    height: '82.68%',
                    left: 0
                }}
            />

            {/* Main Image (Flower Branch + Bee) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute z-10"
                style={{
                    left: '46.04%',
                    top: '0%',
                    width: '38.54%',
                    height: '100%',
                }}
            >
                <img 
                    src={slideImage} 
                    alt="Flowering branch with bees" 
                    className="w-full h-full object-contain object-top" 
                />
            </motion.div>

            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute font-['UA-brand'] font-bold text-[#2E261D] uppercase leading-none z-20"
                style={{
                    left: '8.5%',
                    top: '25.28%',
                    width: '33.57%',
                    fontSize: FONT_SIZES.heading
                }}
            >
                ОСТАВЬТЕ
                <br />
                ЗАЯВКУ
            </motion.h2>

            {/* Description Text */}
            <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute font-['Glametrix'] text-[#2E261D]/80 z-20"
                style={{
                    left: '8.23%',
                    top: '63.67%',
                    width: '15.42%',
                    fontSize: FONT_SIZES.body,
                    lineHeight: '1.4'
                }}
            >
                Пропуск на посещение на день
                <br />
                со всеми активностями
            </motion.p>

             {/* Button */}
            <motion.div   
            ref={btnRef}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            style={{
          left: "76.46%",
          top: "24.8%",
          width: "15.21%",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "backOut" }}
        onAnimationComplete={() => {
          setBtnShow(true); // Включаем расчет координат
          setTimeout(() => setStep(1), 40); // Через 0.5с запускаем первую линию
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
              onComplete={() => setStep(2)} 
            />
            <AnimatedLine
              start={pBtnBottom}
              end={pScreenBottom}
              direction="to-bottom"
              zIndex={30}
              trigger={step >= 2} 
            />
          
          </>
        )}
        </section>
    );
};

export default PolinationSlide10;
