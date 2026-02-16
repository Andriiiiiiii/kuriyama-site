import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '@/assets/visit/11-background.webp';
import SelectTariffButton from '@/components/shared/SelectTariffButton';
import AnimatedLine, { Point } from '@/components/shared/AnimatedLine';
import { FONT_SIZES } from '@/config/typography';

const DailyPass: React.FC = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (isInView && step === 0) {
      setStep(1);
    }
  }, [isInView, step]);

  const buttonWidth = '12vw';
  const buttonLeft = '83%';
  const buttonTop = '50%';

  const line1Start: Point = { x: '88.131%', y: buttonTop };
  const line1End: Point = { x: `calc(88.131% + ${buttonWidth})`, y: buttonTop };

  const line2StartY = `calc(${buttonTop} + (${buttonWidth} * 0.43))`;
  const line2Start: Point = { x: buttonLeft, y: line2StartY };
  const line2End: Point = { x: buttonLeft, y: `calc(${line2StartY} + 50vh)` };

  return (
    <section ref={sectionRef} className="relative w-screen overflow-hidden" style={{ height: '40vh' }}>
      <img src={backgroundImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <h2
        className="absolute font-ua-brand text-white font-bold uppercase"
        style={{
          left: '8.3472%',
          top: '10%',
          fontSize: FONT_SIZES.heading,
        }}
      >
        DAILY PASS.<br />
        ПАСЕКА
      </h2>

      <p
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
      </p>

      <div
        className="absolute"
        style={{
          left: buttonLeft,
          top: buttonTop,
          transform: 'translate(-50%, -50%)',
          width: buttonWidth,
        }}
      >
        <div className="hover:scale-105 transition-transform" style={{ width: '100%' }}>
          <SelectTariffButton width="100%" onClick={() => navigate('/prices-visit')} />
        </div>
      </div>

      <AnimatedLine
        start={line1Start}
        end={line1End}
        direction="to-right"
        trigger={step >= 1}
        onComplete={() => setStep(2)}
      />
      <AnimatedLine start={line2Start} end={line2End} direction="to-bottom" trigger={step >= 2} />
    </section>
  );
};

export default DailyPass;
