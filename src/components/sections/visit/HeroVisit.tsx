import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import heroPhoto from '@/assets/visit/1-photo.png';
import heroBg from '@/assets/1-background.png';
import buttonAllActions from '@/assets/visit/1-button-all-actions.svg';
import SelectTariffButton from '@/components/shared/SelectTariffButton';
import { FONT_SIZES, TYPOGRAPHY_CONFIG } from '@/config/typography';
import { useRelativePosition } from '@/hooks/useRelativePosition';
import AnimatedLine, { Point } from '@/components/shared/AnimatedLine';

const HeroVisit = () => {
  const selectButtonWidth = '15vw'; // single source for button size
  const selectButtonLeft = '22.42%';
  const selectButtonTop = '72.5%';

  const sectionRef = useRef<HTMLElement>(null);
  const tariffRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLButtonElement>(null);

  const [step, setStep] = useState(0);
    const [btnShow, setBtnShow] = useState(false);

  const { isReady: isTariffReady } = useRelativePosition(sectionRef, tariffRef, 'tariff');
  // Используем scaleFactor < 1 (0.96), чтобы линии "проходили" сквозь прозрачные отступы к визуальному овалу
  const { isReady: isActionsReady } = useRelativePosition(sectionRef, actionsRef, 'actions', 0.96);

  // Trigger animations when coordinates are ready
  const isReady = isTariffReady && isActionsReady;

;

  // Points for AnimatedLines
  // Junction of top H-line and left V-line (aligns with Tariff Button Center X)
  const pJunction: Point = { x: 'var(--tariff-x-mid)', y: '19.67%' };
  const pTopRight: Point = { x: '100%', y: '19.67%' };
  const pButtonTop: Point = { x: 'var(--tariff-x-mid)', y: 'var(--tariff-y-top)' };
  const pButtonBottom: Point = { x: 'var(--tariff-x-mid)', y: 'var(--tariff-y-bottom)' };
  const pBottom: Point = { x: 'var(--tariff-x-mid)', y: '100%' };
  
  const pScreenLeft: Point = { x: '0%', y: 'var(--tariff-y-mid)' };
  const pTariffLeft: Point = { x: 'var(--tariff-x-left)', y: 'var(--tariff-y-mid)' };
  const pTariffRight: Point = { x: 'var(--tariff-x-right)', y: 'var(--tariff-y-mid)' };
  
  const pActionsLeft: Point = { x: 'var(--actions-x-left)', y: 'var(--actions-y-mid)' };
  const pActionsRight: Point = { x: 'var(--actions-x-right)', y: 'var(--actions-y-mid)' };
  // Line to the right of actions button
  const pContentRight: Point = { x: '60.67%', y: 'var(--actions-y-mid)' };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-layout overflow-hidden"
      style={{ '--select-btn-w': selectButtonWidth } as React.CSSProperties}
    >
      {/* Background Image */}
      <div
        className="absolute"
        style={{
          left: '0%',
          top: '0%',
          width: '100%',
          height: '100%'
        }}
      >
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-fill"
        />
      </div>

            {/* Breadcrumb */}
      <div
        className="absolute z-10 font-['Glametrix'] text-foreground/50 whitespace-nowrap"
        style={{
          left: '8.43%',
          top: '12.67%',
          fontSize: FONT_SIZES.body
        }}
      >
        Главная/Посещение Куриямы
        </div>

      <h1
        className="absolute z-10 font-['UA-brand'] font-bold text-foreground uppercase tracking-tight"
        style={{
          left: '8.84%',
          top: '22.45%',
          width: '42.61%',
          fontSize: FONT_SIZES.heading,
          lineHeight: '1.1'
        }}
      >
        Посещение<br/>
        Куриямы
      </h1>

      {/* Description */}
      <p
        className="absolute z-10 font-['Glametrix'] text-foreground"
        style={{
          left: '33.37%',
          top: '55%',
          width: '35%',
          fontSize: FONT_SIZES.body
        }}
      >
        Посетите пасеку Курияма - прогулки, отдых,<br/>
        знакомство с пчелами
      </p>

      {/* Select Tariff Button */}
       <motion.div   
        ref={tariffRef}
        className="absolute z-20"
        style={{
          left: selectButtonLeft,
          top: selectButtonTop,
          width: selectButtonWidth
        }}
        initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
        animate={{ scale: 1, opacity: 1, x: '-50%', y: '-50%' }}
        transition={{ duration: 0.6, ease: "backOut" }}
        onAnimationComplete={() => {
          setStep(1); // Запускаем первую анимацию линий после появления кнопки
          setBtnShow(true); 
        }}
        >
        <SelectTariffButton width="100%" />
        </motion.div>
      <button
        ref={actionsRef}
        className="absolute z-10 hover:opacity-80 transition-opacity"
        style={{
          left: '31.59%',
          top: '69.60%',
          width: '17.83%',
          height: '5.73%'
        }}
      >
        <img src={buttonAllActions} alt="Все активности" className="w-full h-full object-contain" />
      </button>

      <div
        className="absolute z-10"
        style={{
          left: '60.67%',
          top: '12.93%',
          width: '39.33%',
          height: '77.87%'
        }}
      >
        <img
          src={heroPhoto} alt="Пасека Курияма"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Animated Lines */}
      {isReady && (
        <>
            {/* Top Horizontal Line */}
            <AnimatedLine
                start={pTopRight}
                end={pJunction}
                direction="to-left"
                thickness={TYPOGRAPHY_CONFIG.lineStrokeWidth}
                trigger={step >= 1}
                onComplete={() => setStep(2)}
                zIndex={20}
            />

            {/* Left Vertical Line */}
            <AnimatedLine
                start={pJunction}
                end={pButtonTop}
                direction="to-bottom"
                thickness={TYPOGRAPHY_CONFIG.lineStrokeWidth}
                trigger={step >= 2}
                zIndex={8}
            />
            <AnimatedLine
                start={pButtonBottom}
                end={pBottom}
                direction="to-bottom"
                thickness={TYPOGRAPHY_CONFIG.lineStrokeWidth}
                trigger={step >= 3}
                zIndex={8}
            />

            {/* Line 1: Left -> Tariff Button */}
            <AnimatedLine
                start={pScreenLeft}
                end={pTariffLeft}
                direction="to-right"
                thickness={TYPOGRAPHY_CONFIG.lineStrokeWidth}
                trigger={step >= 2}
                zIndex={10}
            />

            {/* Line 2: Tariff Button -> Actions Button */}
            <AnimatedLine
                start={pActionsLeft}
                end={pTariffRight}
                direction="to-left"
                thickness={TYPOGRAPHY_CONFIG.lineStrokeWidth}
                trigger={step >= 2}
                 onComplete={() => setStep(3)}

                zIndex={10}
            />

            {/* Line 3: Actions Button -> Right */}
            <AnimatedLine
                start={pContentRight}
                end={pActionsRight}
                direction="to-left"
                thickness={TYPOGRAPHY_CONFIG.lineStrokeWidth}
                trigger={step >= 1}
                zIndex={10}
            />
        </>
      )}

    </section>
  );
};

export default HeroVisit;
