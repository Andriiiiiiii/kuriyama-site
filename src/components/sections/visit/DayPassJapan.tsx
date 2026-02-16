import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FONT_SIZES } from '@/config/typography';
import AnimatedLine, { Point } from '@/components/shared/AnimatedLine';
import forestImage from '@/assets/visit/4-image-1.webp';
import gardenImage from '@/assets/visit/4-image-2.webp';
import photoshootImage from '@/assets/visit/4-image-3.webp';
import calligraphyImage from '@/assets/visit/4-central-image.svg';

const DayPassJapan: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const lineStart: Point = { x: '56.08%', y: '0%' };
  const lineEnd: Point = { x: '56.08%', y: '26.42%' };

  return (
    <section
      id="stone-garden"
      ref={sectionRef}
      className="relative w-full h-screen bg-white overflow-hidden"
    >
      {/* 4 line 2 - vertical */}
      <AnimatedLine
        start={lineStart}
        end={lineEnd}
        direction="to-bottom"
        trigger={isInView}
        zIndex={20}
      />

      {/* title 1 - DAY PASS */}
      <h2
        className="absolute font-['UA-brand'] font-bold text-primary uppercase"
        style={{
          left: '7.9%',
          top: '1.5%',
          width: '30.03%',
          height: '5.99%',
          fontSize: FONT_SIZES.heading,
        }}
      >
        DAY PASS
      </h2>

      {/* subtitle 1 */}
      <p
        className="absolute font-['Glametrix'] text-foreground"
        style={{
          left: '8.24%',
          top: '13.14%',
          width: '26.54%',
          height: '3.83%',
          fontSize: FONT_SIZES.body,
        }}
      >
        Описание, чуть подробнее раскрывающее заголовок. Про активности и атмосферу.
      </p>

      {/* subtitle 2 (above title 2) */}
      <p
        className="absolute font-['Glametrix'] text-foreground text-right"
        style={{
          left: '64.84%',
          top: '3.80%',
          width: '26.54%',
          height: '3.83%',
          fontSize: FONT_SIZES.body,
        }}
      >
        Описание, чуть подробнее раскрывающее заголовок. Про активности и атмосферу.
      </p>

      {/* title 2 - ЯПОНИЯ */}
      <h2
        className="absolute font-['UA-brand'] font-bold text-primary uppercase text-right"
        style={{
          left: '63.63%',
          top: '11.44%',
          width: '28.05%',
          height: '5.95%',
          fontSize: FONT_SIZES.heading,
        }}
      >
        ЯПОНИЯ
      </h2>

      {/* Left object - 4 image 1 */}
      <div
        className="absolute"
        style={{
          left: '8.33%',
          top: '21.45%',
          width: '40.97%',
          height: '56.25%',
        }}
      >
        <img
          src={forestImage}
          alt="Лесная прогулка"
          className="w-full h-full object-cover"
        />
      </div>

      {/* small title left */}
      <h3
        className="absolute font-['Glametrix'] font-bold text-foreground"
        style={{
          left: '8.37%',
          top: '79.57%',
          height: '2.05%',
          fontSize: FONT_SIZES.subheading,
        }}
      >
        Лесная прогулка
      </h3>

      {/* small subtitle left */}
      <p
        className="absolute font-['Glametrix'] text-foreground"
        style={{
          left: '8.37%',
          top: '84.56%',
          width: '21.02%',
          height: '3.83%',
          fontSize: FONT_SIZES.body,
        }}
      >
        Описание, чуть подробнее
      </p>

      {/* 4 button more left */}
      <Link
        to="/apiary-visit"
        className="absolute bg-primary text-primary-foreground rounded-full font-['Glametrix'] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        style={{
          left: '39.24%',
          top: '84.93%',
          width: '10.07%',
          height: '3.72%',
          fontSize: FONT_SIZES.body,
        }}
      >
        Подробнее
        <span>›</span>
      </Link>

      {/* 4 central image */}
      <div
        className="absolute"
        style={{
          left: '51.60%',
          top: '27.07%',
          width: '10.00%',
          height: '27.83%',
        }}
      >
        <img
          src={calligraphyImage}
          alt="Каллиграфия"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Right object 1 - 4 image 2 */}
      <div
        className="absolute"
        style={{
          left: '64.79%',
          top: '27.77%',
          width: '26.87%',
          height: '16.47%',
        }}
      >
        <img
          src={gardenImage}
          alt="Сад камней"
          className="w-full h-full object-cover"
        />
      </div>

      {/* small title right 1 */}
      <h3
        className="absolute font-['Glametrix'] font-bold text-foreground"
        style={{
          left: '64.85%',
          top: '45.98%',
          height: '1.90%',
          fontSize: FONT_SIZES.subheading,
        }}
      >
        Сад камней
      </h3>

      {/* small subtitle right 1 */}
      <p
        className="absolute font-['Glametrix'] text-foreground"
        style={{
          left: '64.84%',
          top: '50.10%',
          width: '26.34%',
          height: '1.52%',
          fontSize: FONT_SIZES.body,
        }}
      >
        Описание, чуть подробнее раскрывающее заголовок
      </p>

      {/* 4 button more right 1 */}
      <Link to="/stone-garden">
        <div
          className="absolute bg-primary text-primary-foreground rounded-full font-['Glametrix'] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          style={{
            left: '64.79%',
            top: '53.88%',
            width: '10.07%',
            height: '3.72%',
            fontSize: FONT_SIZES.body,
          }}
        >
          Подробнее
          <span>›</span>
        </div>
      </Link>

      {/* Right object 2 - 4 image 3 */}
      <div
        className="absolute"
        style={{
          left: '50.69%',
          top: '60.94%',
          width: '40.97%',
          height: '25.72%',
        }}
      >
        <img
          src={photoshootImage}
          alt="Фотосессия в японском тематике"
          className="w-full h-full object-cover"
        />
      </div>

      {/* small title right 2 */}
      <h3
        className="absolute font-['Glametrix'] font-bold text-foreground"
        style={{
          left: '50.74%',
          top: '88.53%',
          height: '1.46%',
          fontSize: FONT_SIZES.subheading,
        }}
      >
        Фотосессия в японском тематике
      </h3>

      {/* small subtitle right 2 */}
      <p
        className="absolute font-['Glametrix'] text-foreground"
        style={{
          left: '50.74%',
          top: '93.51%',
          width: '13.06%',
          height: '1.52%',
          fontSize: FONT_SIZES.body,
        }}
      >
        Описание, чуть подробнее
      </p>

      {/* 4 button more right 2 */}
      <Link
        to="/events"
        className="absolute bg-primary text-primary-foreground rounded-full font-['Glametrix'] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        style={{
          left: '81.60%',
          top: '92%',
          width: '10.07%',
          height: '3.72%',
          fontSize: FONT_SIZES.body,
        }}
      >
        Подробнее
        <span>›</span>
      </Link>
    </section>
  );
};

export default DayPassJapan;
