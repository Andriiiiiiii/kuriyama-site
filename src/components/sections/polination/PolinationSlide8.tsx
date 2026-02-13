import React, { useRef, useState, useEffect, useLayoutEffect  } from "react";
import { useInView } from "framer-motion";
import AnimatedLine, { Point } from '@/components/shared/AnimatedLine';
import { FONT_SIZES } from '@/config/typography';
import rightImg from '@/assets/pollination/eighth_right_image.png';

interface PolinationSlide8Props {
  step: number; 
  setStep: (step: number) => void;
  prevFinished?: boolean;
  onInView?: () => void;
}

const PolinationSlide8: React.FC<PolinationSlide8Props> = ({ step, setStep, prevFinished = true, onInView }) => {
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
        const pTopRight: Point    = { x: '70%', y: '5%' };
        const pTopLeft: Point   = { x: '14.2%', y: '5%' };
        const pBottom: Point    = { x: '14.2%', y: '100%' };
        const pBottomLeft: Point   = { x: '0%', y: '100%' };
    return (
        <section  
            ref={sectionRef} 
            className="relative w-full bg-white overflow-hidden"
            style={{ 
                height: '51.74vw' // 745 / 1440
            }}
        >
             {/* Vertical Line Decoration */}
             {(isInView || step > 0) && (
                <>
                    <AnimatedLine
                        start={pTopRight}
                        end={pTopLeft}
                        direction="to-left"
                        zIndex={0}
                        trigger={step >= 1} 
                        initial={step > 1 ? "visible" : "hidden"}
                        decoration="circle-end"
                        onComplete={() => { if (step < 2) setStep(2); }}
                    />
                    <AnimatedLine
                        start={pTopLeft}
                        end={pBottom}
                        direction="to-bottom"
                        zIndex={0}
                        trigger={step >= 2} 
                        initial={step > 2 ? "visible" : "hidden"}
                        onComplete={() => { if (step < 3) setStep(3); }}
                    />
                    <AnimatedLine
                        start={pBottom}
                        end={pBottomLeft}
                        direction="to-left"
                        zIndex={0}
                        trigger={step >= 3} 
                        initial={step > 3 ? "visible" : "hidden"}
                    />
                </>

            )}
             
             {/* Review Box Background */}
             <div
                className="absolute bg-[#EBE1D1] border border-[#C65A32] z-30"
                style={{
                    left: '15.42%',
                    top: '7.38%',
                    width: '37.5%',
                    height: '56.38%',
                }}
             />

             {/* Right Image */}
             <div
                className="absolute"
                style={{
                    left: '50.69%',
                    top: '0%',
                    width: '33.89%',
                    height: '91.41%',
                    zIndex: 20
                }}
             >
                <img src={rightImg} alt="Сергей Попов" className="w-full h-full object-cover shadow-lg" />
             </div>

             {/* Review Content */}
             
             {/* Quote Title */}
             <div
                className="absolute font-['Glametrix'] font-bold text-[#2E261D] z-40"
                style={{
                    left: '17.57%',
                    top: '13.65%',
                    width: '23.67%',
                    fontSize: FONT_SIZES.subheading,
                    lineHeight: '1.1'
                }}
             >
                “Ягода стала крупнее и слаще”
             </div>

             {/* Author */}
             <div
                className="absolute font-['Glametrix'] text-[#2E261D] text-right z-40"
                style={{
                    left: '29.20%',
                    top: '17.87%',
                    width: '20.74%',
                    fontSize: FONT_SIZES.body
                }}
             >
                - Сергей Попов, владелец ягодной фермы
             </div>

             {/* Review Text */}
             <div
                className="absolute font-['Glametrix'] text-[#2E261D] z-40 flex flex-col justify-between"
                style={{
                    left: '17.51%',
                    top: '24.49%',
                    width: '33.12%',
                    // height: '32.88%', // Let it grow naturally or clamp
                    fontSize: FONT_SIZES.body,
                    lineHeight: '1.4'
                }}
             >
                <p className="mb-4">
                    Мы выращиваем малину для премиальных кондитерских.
                    В прошлом году заметили: ягода мелкая, много пустоцвета,
                    урожайность упала. Пробовали менять агротехнику — результат
                    минимальный. Поняли, что проблема в опылении: своих пчёл нет,
                    а диких насекомых на 10 гектаров катастрофически мало.
                </p>
                <p>
                    Решили попробовать услугу профессионального опыления
                    от «Курьямы». Подобрали схему: 3 улья на гектар в пик цветения.
                    Результат превзошёл ожидания. Ягода стала крупнее и слаще,
                    а главное — её стало на 50% больше. Теперь это обязательный
                    пункт в нашем технологическом календаре.
                </p>
             </div>

             {/* Large Title */}
             <h2
                className="absolute font-['UA-brand'] font-bold text-[#2E261D] uppercase leading-none z-20"
                style={{
                    left: '8.97%',
                    top: '69.45%',
                    width: '43.49%',
                    fontSize: FONT_SIZES.heading // Or heading size. JSON height suggests it's huge. 21% of 745px is ~150px.
                }}
             >
                ПОМОЩЬ<br/>НАШИХ ПЧЕЛ
             </h2>

        </section>
    );
};

export default PolinationSlide8;
