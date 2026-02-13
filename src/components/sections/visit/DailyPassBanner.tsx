import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import backgroundImage from '@/assets/visit/6-background.png';
import buttonBuy from '@/assets/visit/1-button-buy.svg';
import AnimatedLine, { Point } from '@/components/shared/AnimatedLine';
import { FONT_SIZES } from '@/config/typography';

const DailyPassBanner: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (isInView && step === 0) {
      setStep(1);
    }
  }, [isInView, step]);

  const line1Start: Point = { x: '84%', y: '0vh' };
  const line1End: Point = { x: '84%', y: '11.27vh' };

  const line2Start: Point = { x: '84%', y: '27.88vh' };
  const line2End: Point = { x: '84%', y: 'calc(27.88vh + 30%)' };

  return (
    <section ref={sectionRef} className="relative w-screen overflow-hidden" style={{ height: '40vh' }}>
      {/* Background */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="absolute font-ua-brand text-white font-bold uppercase"
        style={{
          left: '8.3472%',
          top: '30%',
          height: '13.51vh',
          fontSize: FONT_SIZES.heading,
        }}
      >
        DAILY PASS.<br />
        ЯПОНИЯ
      </motion.h2>

      {/* Main text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute font-glametrix text-white"
        style={{
          left: '65%',
          top: '70%',
          width: '15.42vw',
          height: '2.85vh',
          fontSize: FONT_SIZES.body,
        }}
      >
        Подарок на посещение на день со всеми активностями
      </motion.p>

      {/* Buy button (same as first slide) */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute hover:scale-105 transition-transform"
        style={{
          left: '76.49vw',
          top: '10.34vh',
          width: '15.21vw',
          height: '18.56vh',
        }}
      >
        <img src={buttonBuy} alt="Выбрать тариф" className="w-full h-full object-contain" />
      </motion.button>

      {/* Lines */}
      <AnimatedLine
        start={line1Start}
        end={line1End}
        direction="to-bottom"
        trigger={step >= 1}
        thickness="max(1px, 0.07vw)"
        onComplete={() => setStep(2)}
      />
      <AnimatedLine
        start={line2Start}
        end={line2End}
        direction="to-bottom"
        trigger={step >= 2}
        thickness="max(1px, 0.07vw)"
      />
    </section>
  );
};

export default DailyPassBanner;
