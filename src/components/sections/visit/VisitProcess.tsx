import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import AnimatedLine, { Point } from '@/components/shared/AnimatedLine';
import woodImage from '@/assets/visit/7-right-image.png';
import number1 from '@/assets/visit/number-1.svg';
import number2 from '@/assets/visit/number-2.svg';
import number3 from '@/assets/visit/number-3.svg';

const VisitProcess: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (isInView && step === 0) {
      setStep(1);
    }
  }, [isInView, step]);

  const line1Start: Point = { x: '8.2986%', y: '42.5743%' };
  const line1End: Point = { x: '8.2986%', y: 'calc(42.5743% + 24.8762%)' };

  const line2Start: Point = { x: '36.5625%', y: '42.5743%' };
  const line2End: Point = { x: '36.5625%', y: 'calc(42.5743% + 24.8762%)' };

  return (
    <section ref={sectionRef} className="relative w-full bg-white overflow-hidden">
      <div className="relative w-full mx-auto" style={{ paddingTop: '56.111%' }}>
        <div className="absolute inset-0">
          {/* 7 Title (1:120) */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="absolute font-ua-brand text-primary font-bold uppercase leading-[1.1]"
            style={{
              left: '8.3472%',
              top: '14.9010%',
              width: '42.6635%',
              height: '21.1386%',
              fontSize: FONT_SIZES.heading,
            }}
          >
            ПРОЦЕСС<br />
            ПОСЕЩЕНИЯ
          </motion.h2>

          {/* 7 line 1 (37:493) */}
          <AnimatedLine
            start={line1Start}
            end={line1End}
            direction="to-bottom"
            trigger={step >= 1}
            thickness="0.0694%"
            onComplete={() => setStep(2)}
          />

          {/* 7 line 2 (37:491) */}
          <AnimatedLine
            start={line2Start}
            end={line2End}
            direction="to-bottom"
            trigger={step >= 2}
            thickness="0.0694%"
          />

          {/* 7 text 1 (group) (37:499) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute"
            style={{
              left: '9.2361%',
              top: '40.2228%',
              width: '17.0833%',
              height: '27.2277%',
            }}
          >
            {/* "1" (1:315) */}
            <img
              src={number1}
              alt="1"
              className="absolute"
              style={{
                left: '4.9383%',
                top: '9.6591%',
                width: '12.5975%',
                height: '34.8101%',
              }}
            />

            {/* 7 small title 1 (1:197) */}
            <h3
              className="absolute font-glametrix font-bold text-[#2E261D]"
              style={{
                left: '6.3415%',
                top: '61.9318%',
                width: '73.7013%',
                height: '10.7614%',
                fontSize: FONT_SIZES.subheading,
              }}
            >
              Выберите тариф
            </h3>

            {/* 7 small subtitle 1 (1:193) */}
            <p
              className="absolute font-glametrix text-[#2E261D]"
              style={{
                left: '3.1067%',
                top: '81.2500%',
                width: '75.6623%',
                height: '17.3011%',
                fontSize: FONT_SIZES.body,
              }}
            >
              Описание, подробнее раскрывающее заголовок
            </p>
          </motion.div>

          {/* 7 text 2 (group) (37:500) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute"
            style={{
              left: '37.9861%',
              top: '40.2228%',
              width: '16.5972%',
              height: '27.2277%',
            }}
          >
            {/* "2" (1:316) */}
            <img
              src={number2}
              alt="2"
              className="absolute"
              style={{
                left: '1.1719%',
                top: '9.7619%',
                width: '29.1667%',
                height: '35.1852%',
              }}
            />

            {/* 7 small title 2 (1:205) */}
            <h3
              className="absolute font-glametrix font-bold text-[#2E261D]"
              style={{
                left: '0.7367%',
                top: '62.5568%',
                width: '70.5882%',
                height: '9.8920%',
                fontSize: FONT_SIZES.subheading,
              }}
            >
              Назначьте дату
            </h3>

            {/* 7 small subtitle 2 (1:195) */}
            <p
              className="absolute font-glametrix text-[#2E261D]"
              style={{
                left: '0.2740%',
                top: '81.2500%',
                width: '77.9070%',
                height: '17.3011%',
                fontSize: FONT_SIZES.body,
              }}
            >
              Описание, подробнее раскрывающее заголовок
            </p>
          </motion.div>

          {/* 7 right image 1 (37:498) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute"
            style={{
              left: '63.4028%',
              top: '12.3762%',
              width: '23.1250%',
              height: '73.8861%',
            }}
          >
            <img
              src={woodImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* 7 text 3 (group) (37:501) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute z-10"
            style={{
              left: '64.9861%',
              top: '40.2228%',
              width: '16.6111%',
              height: '27.2277%',
            }}
          >
            {/* "3" (1:317) */}
            <img
              src={number3}
              alt="3"
              className="absolute"
              style={{
                left: '0%',
                top: '9.5960%',
                width: '25.4545%',
                height: '34.9010%',
              }}
            />

            {/* 7 small title 3 (1:206) */}
            <h3
              className="absolute font-glametrix font-bold text-[#2E261D]"
              style={{
                left: '0.8182%',
                top: '62.5568%',
                width: '76.8750%',
                height: '9.8920%',
                fontSize: FONT_SIZES.subheading,
              }}
            >
              Мы вас встретим
            </h3>

            {/* 7 small subtitle 3 (1:196) */}
            <p
              className="absolute font-glametrix text-[#2E261D]"
              style={{
                left: '0.3576%',
                top: '81.2500%',
                width: '77.8261%',
                height: '17.3011%',
                fontSize: FONT_SIZES.body,
              }}
            >
              Описание, подробнее раскрывающее заголовок
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitProcess;
