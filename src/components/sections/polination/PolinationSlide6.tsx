import React, { useRef, useState, useEffect, useLayoutEffect  } from "react";
import { useInView } from 'framer-motion';
import AnimatedLine, { Point } from '@/components/shared/AnimatedLine';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import rightImg from '@/assets/pollination/six_slide_right_image.png';

const PolinationSlide6: React.FC = () => {
// 1. Настройка ссылок
const sectionRef = useRef<HTMLElement>(null);
const isInView = useInView(sectionRef, { once: true, amount: 0.5 }); 
// 2. Состояние последовательности анимации
// 0 = ничего, 1 = входная линия, 2 = взрыв из кнопки, 3 = финальные ответвления
const [step, setStep] = useState(1); 
   
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
      lineLeft: 8.30, lineTop: 25.00,
      numLeft: 9.66, numTop: 25.50,
      textLeft: 9.77, textTop: 39.0,
      descLeft: 9.77, descTop: 44.0
    },
    {
      id: 2,
      num: "2",
      title: "Расчет и договор",
      desc: "Описание, подробнее раскрывающее заголовок",
      lineLeft: 36.42, lineTop: 25.00,
      numLeft: 37.55, numTop: 25.50,
      textLeft: 37.97, textTop: 39.0,
      descLeft: 37.89, descTop: 44.0
    },
    {
      id: 3,
      num: "3",
      title: "Доставка и размещение",
      desc: "Описание, подробнее раскрывающее заголовок",
      lineLeft: 64.76, lineTop: 25.00,
      numLeft: 65.68, numTop: 25.50,
      textLeft: 66.22, textTop: 39.0,
      descLeft: 66.22, descTop: 44.0,
      onWood: true,
    },
    {
      id: 4,
      num: "4",
      title: "Контроль на месте",
      desc: "Описание, подробнее раскрывающее заголовок",
      lineLeft: 8.30, lineTop: 56.00,
      numLeft: 9.50, numTop: 56.50,
      textLeft: 9.84, textTop: 70.0,
      descLeft: 9.77, descTop: 75.0
    },
    {
      id: 5,
      num: "5",
      title: "Результат и вызов",
      desc: "Описание, подробнее раскрывающее заголовок",
      lineLeft: 36.42, lineTop: 56.00,
      numLeft: 36.90, numTop: 56.50,
      textLeft: 37.97, textTop: 70.0,
      descLeft: 37.89, descTop: 75.0
    }
    
  ];

  return (
    <section ref={sectionRef} className="relative w-full bg-white overflow-hidden" style={{ height: '56.25vw' }}>
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute font-['UA-brand'] font-bold uppercase tracking-tight text-[#2E261D]"
        style={{
          left: '8.8%',
          top: '8%',
          width: '35.2%',
          fontSize: FONT_SIZES.heading,
          lineHeight: '1'
        }}
      >
        КАК МЫ<br/>РАБОТАЕМ
      </motion.h2>
      {isInView && (
          <>
            <AnimatedLine
              start={pTop}
              end={pCenter}
              direction="to-bottom"
              zIndex={0}
              trigger={step >= 1} 
              decoration='ring-end'
              ringSize='30vw'
              decorationZIndex={0}
              onComplete={() => setStep(2)}
            />
             <AnimatedLine
              start={pCenter} 
              end={pBottom}
              direction="to-bottom"
              zIndex={0}
              trigger={step >= 2}
              onComplete={() => setStep(3)}
            />
            <AnimatedLine
              start={pBottom} 
              end={pBottomCenter}
              direction="to-left"
              zIndex={30}
              trigger={step >= 3} 
              onComplete={() => setStep(4)}
            />
            
          </>
        )}
    
    
      {/* Right Image (Wood) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute"
        style={{
            left: '63.4%',
            top: '8%',
            height: '84%',
            width: 'auto'
        }}
      >
          <img src={rightImg} alt="Wood texture" className="h-full w-auto object-contain shadow-lg" />
      </motion.div>

      {/* Staps */}
      {staps.map((step) => (
        <React.Fragment key={step.id}>
           {/* Vertical Line */}
           <motion.div
             initial={{ scaleY: 0 }}
             whileInView={{ scaleY: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 + step.id * 0.1 }}
             className="absolute origin-top bg-[#D97858]"
             style={{
                left: `${step.lineLeft}%`,
                top: `${step.lineTop}%`,
                width: '0.07%', 
                height: '20.5%'
             }}
           />

           {/* Number */}
           <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.3 + step.id * 0.1 }}
             className="absolute font-['han-zi'] text-[#2E261D]"
             style={{
                left: `${step.numLeft}%`,
                top: `${step.numTop}%`,
                fontSize: FONT_SIZES.heading,
                lineHeight: 1
             }}
           >
              {step.num}
           </motion.div>

           {/* Title */}
           <motion.div
             initial={{ opacity: 0, x: -10 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.4 + step.id * 0.1 }}
             className="absolute font-['Glametrix'] font-bold text-[#2E261D]"
             style={{
                left: `${step.textLeft}%`,
                top: `${step.textTop}%`,
                fontSize: FONT_SIZES.subheading
             }}
           >
              {step.title}
           </motion.div>

           {/* Desc */}
           <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.5 + step.id * 0.1 }}
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
           </motion.div>

        </React.Fragment>
        
      ))}

    </section>
  );
};

export default PolinationSlide6;
