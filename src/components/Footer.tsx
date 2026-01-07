import React from 'react';
import { motion } from 'framer-motion';
import kuriyamaImage from '@/assets/15-image-1.png';
import inkSplash from '@/assets/15-image-2.svg';
import paperBackground from '@/assets/15-background.png';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full overflow-visible">
      {/* Dark background layer - smaller height, positioned at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 bg-[#2E261D]"
        style={{ height: '40%' }}
      />

      {/* Paper texture background - positioned to show top edge */}
      <div className="relative z-10 pt-8 md:pt-12">
        <img
          src={paperBackground}
          alt=""
          className="w-full h-auto object-cover pointer-events-none"
        />
        
        {/* Content positioned over the paper */}
        <div className="absolute inset-0 flex flex-col">
          {/* Ink splash decoration - bottom left, positioned higher */}
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src={inkSplash}
            alt=""
            className="absolute bottom-20 md:bottom-28 lg:bottom-36 left-0 h-[280px] md:h-[380px] lg:h-[480px] w-auto mix-blend-darken pointer-events-none"
          />

          {/* Kuriyama calligraphy - raised higher, not overlapping contact form */}
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src={kuriyamaImage}
            alt=""
            className="absolute -top-20 md:-top-28 lg:-top-36 right-[20%] md:right-[25%] lg:right-[30%] h-[280px] md:h-[400px] lg:h-[520px] w-auto pointer-events-none"
          />

          <div className="flex-1 max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-10 lg:py-12">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 xl:gap-24 items-start">
              {/* Left side - Big tagline - lower in white area */}
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="lg:flex-1 pt-40 md:pt-56 lg:pt-72"
              >
                <h2 className="font-ua-brand text-primary text-[36px] md:text-[48px] lg:text-[60px] xl:text-[68px] font-bold uppercase leading-[1.0] tracking-tight">
                  природа.
                  <br />
                  тишина.
                  <br />
                  покой.
                  <br />
                  курияма.
                </h2>
              </motion.div>

              {/* Right side - Contact form - aligned with text, wider */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:flex-1 w-full max-w-[520px] lg:max-w-none pt-40 md:pt-56 lg:pt-72"
              >
                <div className="border-2 border-primary p-6 md:p-8 lg:p-10 bg-transparent max-w-[520px] w-full">
                  <h3 className="font-ua-brand text-[#2E261D] text-[18px] md:text-[22px] lg:text-[28px] font-bold uppercase mb-4 md:mb-6 tracking-tight">
                    обсудим ваш визит
                  </h3>
                  
                  <div className="space-y-4 md:space-y-5">
                    <div>
                      <input
                        type="text"
                        placeholder="Имя"
                        className="w-full bg-transparent border-b border-[#C65A32]/40 py-2.5 font-glametrix text-[#2E261D] placeholder-[#2E261D]/50 text-sm md:text-base focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Телефон"
                        className="w-full bg-transparent border-b border-[#C65A32]/40 py-2.5 font-glametrix text-[#2E261D] placeholder-[#2E261D]/50 text-sm md:text-base focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <button className="bg-primary hover:bg-primary/90 text-white font-glametrix text-sm md:text-base px-5 md:px-6 py-2 rounded-full transition-colors mt-1">
                      Связаться
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact info row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 md:gap-8 lg:gap-12 mt-6 md:mt-8 lg:mt-10"
            >
              <a href="tel:+79999999999" className="font-glametrix text-[#2E261D] text-sm md:text-base lg:text-lg hover:text-primary transition-colors">
                +79999999999
              </a>
              <a href="mailto:email@mail.ru" className="font-glametrix text-[#2E261D] text-sm md:text-base lg:text-lg hover:text-primary transition-colors">
                email@mail.ru
              </a>
              <a href="https://t.me/tg12345" className="font-glametrix text-[#2E261D] text-sm md:text-base lg:text-lg hover:text-primary transition-colors">
                @tg12345
              </a>
              <span className="font-glametrix text-[#2E261D] text-sm md:text-base lg:text-lg">
                ул. Такая-то, д. 12
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Dark footer bottom content */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-20 bg-[#2E261D] py-6 md:py-8 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            {/* Navigation */}
            <div className="space-y-2">
              <a href="#" className="block font-glametrix text-white text-sm md:text-base lg:text-lg hover:text-primary transition-colors">
                Агротуризм
              </a>
              <a href="#" className="block font-glametrix text-white text-sm md:text-base lg:text-lg hover:text-primary transition-colors">
                Пчеловодство
              </a>
              <a href="#" className="block font-glametrix text-white text-sm md:text-base lg:text-lg hover:text-primary transition-colors">
                Ресурсы
              </a>
              <a href="#" className="block font-glametrix text-white text-sm md:text-base lg:text-lg hover:text-primary transition-colors">
                Цены
              </a>
            </div>

            {/* Footer note */}
            <p className="font-glametrix text-white/70 text-xs md:text-sm max-w-[350px] md:text-right">
              Информация, которую необходимо расположить в футере.
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
