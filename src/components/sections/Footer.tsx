import React, { useState } from 'react';
import inkSplash from '@/assets/visit/15-image-2.svg';
import paperBackground from '@/assets/visit/15-background.webp';
import FooterNavigation from './FooterNavigation';

interface FooterProps {
  formTitle?: string;
}

const Footer: React.FC<FooterProps> = ({ formTitle = "хочу своё мероприятие" }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <footer
      className="relative w-full h-layout bg-transparent text-[#2E261D]"
      style={{ height: 'calc(var(--layout-height-ratio, 56.25vw) * 1.15)' }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-0 bg-[#2E261D]"
          style={{ top: '66.38%', width: '100%', height: '33.62%', zIndex: 0 }}
        />
        <div
          className="absolute left-0 top-0 w-full pointer-events-none"
          style={{ height: '80.73%', zIndex: 12 }}
        >
          <img
            src={paperBackground}
            alt=""
            className="w-full h-full"
            style={{ objectFit: 'fill', objectPosition: 'center top' }}
          />
        </div>
      </div>

      {/* Decorative splash */}
      <img
        src={inkSplash}
        alt=""
        className="absolute mix-blend-darken pointer-events-none"
        style={{
          left: '0%',
          top: '45.50%',
          width: '19.17%',
          height: '54.50%',
          objectFit: 'contain',
          zIndex: 15,
        }}
      />

      {/* Title */}
      <h1
        className="absolute font-ua-brand font-bold uppercase leading-tight tracking-tight text-primary"
        style={{
          left: '7.89%',
          top: '10.54%',
          width: '34.18%',
          height: '38.49%',
          fontSize: '5.55vw',
          lineHeight: 1,
          zIndex: 20,
        }}
      >
        природа.
        <br />
        тишина.
        <br />
        покой.
        <br />
        курияма.
      </h1>

      {/* Contact window */}
      <div
        className="absolute"
        style={{
          left: '50.69%',
          top: '13.92%',
          width: '40.97%',
          height: '31.37%',
          zIndex: 20,
        }}
      >
        <div
          className="relative w-full h-full"
          style={{ border: '0.12vw solid #C65A32' }}
        >
          <h3
            className="absolute whitespace-nowrap font-ua-brand font-bold uppercase text-[#2E261D]"
            style={{
              left: '5.44%',
              top: '14.95%',
              width: '90%',
              height: '10.58%',
              fontSize: '1.9vw',
              lineHeight: 1.05,
            }}
          >
            {formTitle}
          </h3>

          <input
            id="footer-name"
            type="text"
            placeholder="Имя"
            className="absolute bg-transparent border-0 outline-none font-glametrix text-[#2E261D]"
            style={{
              left: '4.42%',
              top: '37.40%',
              width: '90.20%',
              height: '6%',
              fontSize: '1.11vw',
              padding: 0,
              borderBottom: '0.10vw solid #C65A32',
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            id="footer-phone"
            type="tel"
            placeholder="Телефон"
            className="absolute bg-transparent border-0 outline-none font-glametrix text-[#2E261D]"
            style={{
              left: '4.42%',
              top: '55.70%',
              width: '90.20%',
              height: '6%',
              fontSize: '1.11vw',
              padding: 0,
              borderBottom: '0.10vw solid #C65A32',
            }}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button
            type="button"
            className="absolute bg-primary text-white font-glametrix"
            style={{
              left: '4.42%',
              top: '72.90%',
              width: '20.50%',
              height: '14.66%',
              fontSize: '1.11vw',
              borderRadius: '50vw',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Связаться
          </button>
        </div>
      </div>

      {/* Contact info row */}
      <a
        href="tel:+79999999999"
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: '50.00%',
          top: '58.07%',
          width: '6.89%',
          height: '1.15%',
          fontSize: '1.11vw',
          zIndex: 20,
        }}
      >
        +79999999999
      </a>

      <a
        href="mailto:email@mail.ru"
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: '62.50%',
          top: '58.07%',
          width: '6.88%',
          height: '1.60%',
          fontSize: '1.11vw',
          zIndex: 20,
        }}
      >
        email@mail.ru
      </a>

      <a
        href="https://t.me/tg12345"
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: '72.50%',
          top: '58.07%',
          width: '4.42%',
          height: '1.63%',
          fontSize: '1.11vw',
          zIndex: 20,
        }}
        target="_blank"
        rel="noreferrer"
      >
        @tg12345
      </a>

      <span
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: '83.00%',
          top: '58.07%',
          width: '8.40%',
          height: '1.61%',
          fontSize: '1.11vw',
          zIndex: 20,
        }}
      >
        ул. Такая-то, д. 12
      </span>

      <FooterNavigation />
    </footer>
  );
};

export default Footer;
