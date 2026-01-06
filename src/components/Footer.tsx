import React from 'react';
import kuriyamaImage from '@/assets/15-image-1.png';
import inkSplash from '@/assets/15-image-2.png';
import paperBackground from '@/assets/15-background.png';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Dark background layer - behind everything, full height */}
      <div className="absolute inset-0 bg-[#2E261D]" />

      {/* Paper texture background - positioned to show edges */}
      <div className="relative z-10">
        <img
          src={paperBackground}
          alt=""
          className="w-full h-auto object-cover pointer-events-none"
          style={{ marginTop: '-1px' }}
        />
        
        {/* Content positioned over the paper */}
        <div className="absolute inset-0 flex flex-col">
          {/* Ink splash decoration - bottom left */}
          <img
            src={inkSplash}
            alt=""
            className="absolute bottom-0 left-0 h-[300px] md:h-[400px] lg:h-[500px] w-auto opacity-80 mix-blend-darken pointer-events-none"
          />

          {/* Kuriyama calligraphy - top right */}
          <img
            src={kuriyamaImage}
            alt=""
            className="absolute top-4 md:top-6 lg:top-8 right-12 md:right-20 lg:right-28 h-[160px] md:h-[220px] lg:h-[280px] w-auto pointer-events-none"
          />

          <div className="flex-1 max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 xl:gap-32 items-start">
              {/* Left side - Big tagline */}
              <div className="lg:flex-1 pt-8 md:pt-12 lg:pt-16">
                <h2 className="font-ua-brand text-primary text-[42px] md:text-[56px] lg:text-[72px] xl:text-[80px] font-bold uppercase leading-[1.0] tracking-tight">
                  природа.
                  <br />
                  тишина.
                  <br />
                  покой.
                  <br />
                  курияма.
                </h2>
              </div>

              {/* Right side - Contact form */}
              <div className="lg:flex-1 w-full max-w-[500px] lg:max-w-none">
                <div className="border-2 border-primary p-6 md:p-8 lg:p-10 bg-transparent max-w-[480px]">
                  <h3 className="font-ua-brand text-[#2E261D] text-[22px] md:text-[28px] lg:text-[35px] font-bold uppercase mb-6 md:mb-8 tracking-tight">
                    обсудим ваш визит
                  </h3>
                  
                  <div className="space-y-5 md:space-y-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Имя"
                        className="w-full bg-transparent border-b border-[#C65A32]/40 py-3 font-glametrix text-[#2E261D] placeholder-[#2E261D]/50 text-base md:text-lg focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Телефон"
                        className="w-full bg-transparent border-b border-[#C65A32]/40 py-3 font-glametrix text-[#2E261D] placeholder-[#2E261D]/50 text-base md:text-lg focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <button className="bg-primary hover:bg-primary/90 text-white font-glametrix text-base md:text-lg px-6 md:px-8 py-2.5 rounded-full transition-colors mt-2">
                      Связаться
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact info row */}
            <div className="flex flex-wrap gap-6 md:gap-10 lg:gap-16 mt-10 md:mt-14 lg:mt-16">
              <a href="tel:+79999999999" className="font-glametrix text-[#2E261D] text-base md:text-lg lg:text-[22px] hover:text-primary transition-colors">
                +79999999999
              </a>
              <a href="mailto:email@mail.ru" className="font-glametrix text-[#2E261D] text-base md:text-lg lg:text-[22px] hover:text-primary transition-colors">
                email@mail.ru
              </a>
              <a href="https://t.me/tg12345" className="font-glametrix text-[#2E261D] text-base md:text-lg lg:text-[22px] hover:text-primary transition-colors">
                @tg12345
              </a>
              <span className="font-glametrix text-[#2E261D] text-base md:text-lg lg:text-[22px]">
                ул. Такая-то, д. 12
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Dark footer bottom content */}
      <div className="relative z-20 bg-[#2E261D] py-8 md:py-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            {/* Navigation */}
            <div className="space-y-3">
              <a href="#" className="block font-glametrix text-white text-base md:text-lg lg:text-[22px] hover:text-primary transition-colors">
                Агротуризм
              </a>
              <a href="#" className="block font-glametrix text-white text-base md:text-lg lg:text-[22px] hover:text-primary transition-colors">
                Пчеловодство
              </a>
              <a href="#" className="block font-glametrix text-white text-base md:text-lg lg:text-[22px] hover:text-primary transition-colors">
                Ресурсы
              </a>
              <a href="#" className="block font-glametrix text-white text-base md:text-lg lg:text-[22px] hover:text-primary transition-colors">
                Цены
              </a>
            </div>

            {/* Footer note */}
            <p className="font-glametrix text-white/70 text-sm md:text-base max-w-[400px] md:text-right">
              Информация, которую необходимо расположить в футере.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
