import React, { useState } from 'react';
import { motion } from 'framer-motion';
import inkSplash from '@/assets/visit/15-image-2.svg';
import paperBackground from '@/assets/visit/15-background.png';

interface FooterProps {
  formTitle?: string;
}

const Footer: React.FC<FooterProps> = ({ formTitle = "обсудим ваш визит" }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <footer className="relative w-full h-layout bg-transparent text-[#2E261D]"> 
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
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8 }}
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
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8 }}
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
      </motion.h1>

      {/* Contact window */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
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
            className="absolute font-ua-brand font-bold uppercase text-[#2E261D]"
            style={{
              left: '5.44%',
              top: '14.95%',
              width: '79%',
              height: '10.58%',
              fontSize: '2.08vw',
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

          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
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
          </motion.button>
        </div>
      </motion.div>

      {/* Contact info row */}
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
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
      </motion.a>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
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
      </motion.a>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
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
      </motion.a>

      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
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
      </motion.span>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute flex flex-col justify-between text-white"
        style={{
          left: '8.36%',
          top: '78.74%',
          width: '6.85%',
          height: '16.16%',
          fontSize: '1.11vw',
          zIndex: 30,
        }}
      >
        <a href="#" className="hover:text-primary transition-colors duration-200">
          Агротуризм
        </a>
        <a href="#" className="hover:text-primary transition-colors duration-200">
          Пчеловодство
        </a>
        <a href="#" className="hover:text-primary transition-colors duration-200">
          Ресурсы
        </a>
        <a href="#" className="hover:text-primary transition-colors duration-200">
          Цены
        </a>
      </motion.div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="absolute font-glametrix text-white/70"
        style={{
          left: '62.03%',
          top: '92.63%',
          width: '29.51%',
          height: '1.74%',
          fontSize: '0.90vw',
          zIndex: 30,
        }}
      >
        Информация, которую необходимо расположить в футере.
      </motion.p>
    </footer>
  );
};

export default Footer;
