import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import mapBackground from '@/assets/visit/3-map-background.webp';
import sectionBackground from '@/assets/visit/3-background.webp';
import rightCalligraphy from '@/assets/visit/3-right-image.webp';
import object1 from '@/assets/visit/3-object-1.webp';
import object4 from '@/assets/visit/3-object-4.webp';
import moreButton from '@/assets/visit/more-button.svg';
import AnimatedLine, { Point } from '@/components/shared/AnimatedLine';
import { FONT_SIZES } from '@/config/typography';

const KuriyamaPlan = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (isInView && step === 0) {
      setStep(1);
    }
  }, [isInView, step]);

  const line1Start: Point = { x: '3.8542%', y: '0%' };
  const line1End: Point = { x: '3.8542%', y: '99.99%' };

  const line2Start: Point = { x: '3.8889%', y: '99.9%' };
  const line2End: Point = { x: 'calc(3.8889% + 52.23%)', y: '99.9%' };

  const mapItems = [
    { id: 1, name: 'Вход', path: '/visit', left: '18.403%', top: '35.202%', image: object1 },
    { id: 2, name: 'Пасека', path: '/beekeeping', left: '31.736%', top: '46.875%', image: object4 },
    { id: 3, name: 'Чайный дом', path: '/404', left: '41.736%', top: '54.136%', image: object4 },
    { id: 4, name: 'Сад', path: '/stone-garden', left: '49.028%', top: '43.566%', image: object4 },
    { id: 5, name: 'Медовая лавка', path: '/production', left: '56.944%', top: '50.000%', image: object4 },
    { id: 6, name: 'Фотозона', path: '/photo-video', left: '69.444%', top: '32.904%', image: object4 },
  ];

  return (
    <section ref={sectionRef} className="relative w-full h-layout overflow-hidden">
      <AnimatedLine
        start={line1Start}
        end={line1End}
        direction="to-bottom"
        trigger={step >= 1}
        zIndex={20}
        onComplete={() => setStep(2)}
      />

      <AnimatedLine
        start={line2Start}
        end={line2End}
        direction="to-right"
        trigger={step >= 2}
        zIndex={20}
      />

      <div
        className="absolute z-[2]"
        style={{
          left: '0%',
          top: '8.8235%',
          width: '100%',
          height: '90.3529%',
        }}
      >
        <img src={sectionBackground} alt="" className="w-full h-full object-fill" />
      </div>

      <div
        className="absolute z-[3]"
        style={{
          left: '6.250%',
          top: '11.2132%',
          width: '86.875%',
          height: '71.7831%',
        }}
      >
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${mapBackground})`,
          }}
        />

        {mapItems.map((item, index) => {
          const isHovered = hoveredItem === item.id;

          return (
            <Link
              key={item.id}
              to={item.path}
              className="absolute cursor-pointer"
              style={{
                left: item.left,
                top: item.top,
                zIndex: isHovered ? 40 : 10 + index,
              }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div
                className="bg-[#EFE9E3] border border-primary transition-all duration-300 ease-out flex items-center"
                style={{
                  padding: '4px',
                  boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
                }}
              >
                <div
                  className="border border-primary overflow-hidden flex-shrink-0"
                  style={{
                    width: 'clamp(40px, 4vw, 60px)',
                    height: 'clamp(40px, 4vw, 60px)',
                  }}
                >
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div
                  className="flex items-center gap-2 overflow-hidden transition-all duration-300"
                  style={{
                    maxWidth: isHovered ? '150px' : '0px',
                    opacity: isHovered ? 1 : 0,
                    paddingLeft: isHovered ? '12px' : '0px',
                    paddingRight: isHovered ? '8px' : '0px',
                  }}
                >
                  <span
                    className="font-['Glametrix'] font-bold text-foreground whitespace-nowrap"
                    style={{ fontSize: FONT_SIZES.body }}
                  >
                    {item.name}
                  </span>
                  <span className="text-primary text-lg">›</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div
        className="absolute z-[5]"
        style={{
          left: '2.9%',
          top: '43.5662%',
          width: '2vw',
          height: '2vw',
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-[70.6%] h-[70.6%] rounded-full bg-primary"></div>
          <div className="absolute inset-0 rounded-full border border-primary"></div>
        </div>
      </div>

      <h2
        className="absolute font-['UA-brand'] font-bold text-foreground uppercase z-[5] whitespace-nowrap"
        style={{
          left: '8.8333%',
          top: '7.3529%',
          width: '53.4547%',
          height: '5.3235%',
          fontSize: FONT_SIZES.heading,
        }}
      >
        План Куриямы
      </h2>

      <p
        className="absolute font-['Glametrix'] text-foreground z-[5]"
        style={{
          left: '64.8372%',
          top: '15.0122%',
          width: '25.7089%',
          height: '5.6132%',
          fontSize: FONT_SIZES.body,
        }}
      >
        На карте отмечены ключевые зоны Куриямы: пасека, чайный дом, сад и точки отдыха.
        Выбирайте маршрут и двигайтесь в своем темпе.
      </p>

      <p
        className="absolute font-['Glametrix'] text-foreground z-[5]"
        style={{
          left: '8.2%',
          bottom: '23%',
          width: '25.7089%',
          fontSize: FONT_SIZES.body,
        }}
      >
        Каждая точка - отдельная история и активность, доступная в течение дня.
        Прогулки, дегустации и спокойные виды.
      </p>

      <div
        className="absolute z-[5]"
        style={{
          left: '81.6667%',
          top: '56.4338%',
          width: '13.4722%',
          height: '35.9375%',
        }}
      >
        <img
          src={rightCalligraphy}
          alt="Каллиграфия Курияма"
          className="w-full h-full object-contain"
        />
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        onClick={() => navigate('/apiary-visit')}
        className="absolute hover:opacity-90 transition-opacity z-[5]"
        style={{
          left: '8.0556%',
          bottom: '17.5552%',
          width: '10.0694%',
        }}
      >
        <img src={moreButton} alt="More" className="block w-full h-auto" />
      </motion.button>
    </section>
  );
};

export default KuriyamaPlan;
