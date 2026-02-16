import React from 'react';
import { Link } from 'react-router-dom';
import { FONT_SIZES } from '@/config/typography';
import backImage from '@/assets/visit/8-back-image.svg';
import photoSmall from '@/assets/visit/8-photo.webp';

const SeasonalActivities: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
      <div className="absolute inset-0">
        {/* 8 back image (37:504) - центрируется и масштабируется по наименьшей стороне */}
        <div
          className="absolute"
          style={{
            left: '6.4583%',
            top: '0%',
            width: '93.5417%',
            height: '100%',
          }}
        >
          <img
            src={backImage}
            alt=""
            className="w-full h-full object-contain"
            style={{
              objectPosition: 'center center',
            }}
          />
        </div>

        {/* 8 Title (1:126) */}
        <h1
          className="absolute font-ua-brand text-secondary font-bold uppercase leading-[1.1]"
          style={{
            left: '8.6389%',
            top: '10%',
            width: '36.9708%',
            height: '14.7817%',
            fontSize: FONT_SIZES.heading,
          }}
        >
          Сезонные
          <br />
          занятия
        </h1>

        {/* 8 small title 1 (1:199) */}
        <h2
          className="absolute font-glametrix text-secondary font-bold"
          style={{
            left: '8.3889%',
            top: '36.1635%',
            width: '7.7892%',
            height: '1.4559%',
            fontSize: FONT_SIZES.subheading,
          }}
        >
          Заголовок
        </h2>

        {/* 8 small subtitle 1 (1:212) */}
        <p
          className="absolute font-glametrix text-foreground"
          style={{
            left: '8.3996%',
            top: '39.8329%',
            width: '14.1821%',
            height: '3.1822%',
            fontSize: FONT_SIZES.body,
          }}
        >
          Описание, подробнее раскрывающее заголовок
        </p>

        {/* 8 small title 2 (1:203) */}
        <h2
          className="absolute font-glametrix text-secondary font-bold"
          style={{
            left: '22.6250%',
            top: '57.8905%',
            width: '7.7892%',
            height: '1.4559%',
            fontSize: FONT_SIZES.subheading,
          }}
        >
          Заголовок
        </h2>

        {/* 8 small subtitle 2 (1:216) */}
        <p
          className="absolute font-glametrix text-foreground"
          style={{
            left: '22.6357%',
            top: '61.5599%',
            width: '14.1821%',
            height: '3.1822%',
            fontSize: FONT_SIZES.body,
          }}
        >
          Описание, подробнее раскрывающее заголовок
        </p>

        {/* 8 small subtitle 4 (above) (1:194) */}
        <p
          className="absolute font-glametrix text-secondary"
          style={{
            left: '48.2399%',
            top: '65.8862%',
            width: '3.3957%',
            height: '1.6946%',
            fontSize: FONT_SIZES.body,
          }}
        >
          (natsu)
        </p>

        {/* 8 small title 4 (1:198) */}
        <h2
          className="absolute font-glametrix text-primary font-bold"
          style={{
            left: '48.2389%',
            top: '69.6044%',
            width: '3.4365%',
            height: '1.4411%',
            fontSize: FONT_SIZES.subheading,
          }}
        >
          Лето
        </h2>

        {/* 8 small title 3 (1:204) */}
        <h2
          className="absolute font-glametrix text-secondary font-bold"
          style={{
            left: '71.9305%',
            top: '65.2257%',
            width: '7.7892%',
            height: '1.4559%',
            fontSize: FONT_SIZES.subheading,
          }}
        >
          Заголовок
        </h2>

        {/* 8 small subtitle 3 (1:217) */}
        <p
          className="absolute font-glametrix text-foreground"
          style={{
            left: '71.9413%',
            top: '68.8951%',
            width: '14.1821%',
            height: '6.7105%',
            fontSize: FONT_SIZES.body,
          }}
        >
          Описание, подробнее раскрывающее заголовок
          <br />
          Описание, подробнее раскрывающее заголовок
        </p>

        {/* 8 photo (1:222) */}
        <img
          src={photoSmall}
          alt="Сезонное фото"
          className="absolute object-cover"
          style={{
            left: '8.3333%',
            top: '71.0306%',
            width: '12.7083%',
            height: '9.2851%',
          }}
        />

        {/* 8 more button (1:154) */}
        <Link
          to="/events"
          className="absolute bg-primary text-primary-foreground rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          style={{
            left: '45.4861%',
            top: '80.3157%',
            width: '10.0694%',
            height: '3.4355%',
          }}
        >
          {/* "Подробнее" (1:155) */}
          <span
            className="font-glametrix"
            style={{
              fontSize: FONT_SIZES.body,
            }}
          >
            Подробнее
          </span>
          {/* Vector 58 (стрелка) (1:156) */}
          <span style={{ fontSize: FONT_SIZES.body }}>›</span>
        </Link>
      </div>
    </section>
  );
};

export default SeasonalActivities;

