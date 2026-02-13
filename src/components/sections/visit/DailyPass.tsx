import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import backgroundImage from '@/assets/visit/11-background.png';
import SelectTariffButton from '@/components/shared/SelectTariffButton';
import AnimatedLine, { Point } from '@/components/shared/AnimatedLine';
import { FONT_SIZES, TYPOGRAPHY_CONFIG } from '@/config/typography';

const DailyPass: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (isInView && step === 0) {
      setStep(1);
    }
  }, [isInView, step]);

  const lineStroke = TYPOGRAPHY_CONFIG.lineStrokeWidth;
  const buttonWidth = '12vw';
  const buttonLeft = '83%';
  const buttonTop = '50%';
  
  // Line 1: Horizontal right from button
  const line1Start: Point = { x: '88.131%', y: buttonTop };
  const line1End: Point = { x: `calc(88.131% + ${buttonWidth})`, y: buttonTop };

  // Line 2: Vertical down from button
  const line2StartY = `calc(${buttonTop} + (${buttonWidth} * 0.43))`;
  const line2Start: Point = { x: buttonLeft, y: line2StartY };
  const line2End: Point = { x: buttonLeft, y: `calc(${line2StartY} + 50vh)` };

  return (
    <section ref={sectionRef} className="relative w-screen overflow-hidden" style={{ height: '40vh' }}>
      {/* Background */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="absolute font-ua-brand text-white font-bold uppercase"
        style={{
          left: '8.3472%',
          top: '10%',
          fontSize: FONT_SIZES.heading,
        }}
      >
        DAILY PASS.<br />
        ПАСЕКА
      </motion.h2>

      {/* Main text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute font-glametrix text-white"
        style={{
          left: '8.3472%',
          top: '75%',
          width: '15.42vw',
          height: '2.85vh',
          fontSize: FONT_SIZES.body,
        }}
      >
        Пропуск на посещение на день со всеми активностями
      </motion.p>

      {/* Buy button */}
      <div
        className="absolute"
        style={{
          left: buttonLeft,
          top: buttonTop,
          transform: 'translate(-50%, -50%)',
          width: buttonWidth,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hover:scale-105 transition-transform"
          style={{ width: '100%' }}
        >
          <SelectTariffButton width="100%" />
        </motion.div>
      </div>

      {/* Decorative guide lines */}
      <AnimatedLine
        start={line1Start}
        end={line1End}
        direction="to-right"
        trigger={step >= 1}
        thickness={lineStroke}
        onComplete={() => setStep(2)}
      />
      <AnimatedLine
        start={line2Start}
        end={line2End}
        direction="to-bottom"
        trigger={step >= 2}
        thickness={lineStroke}
      />
    </section>
  );
};

export default DailyPass;
