import React from 'react';
import kuriyamaImage from '@/assets/15-image-1.png';
import inkSplash from '@/assets/15-image-2.png';
import paperBackground from '@/assets/15-background.png';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Main content area with paper background */}
      <div className="relative min-h-[600px] md:min-h-[700px]">
        {/* Paper texture background */}
        <img
          src={paperBackground}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Ink splash decoration - bottom left */}
        <img
          src={inkSplash}
          alt=""
          className="absolute bottom-0 left-0 h-[250px] md:h-[350px] lg:h-[450px] w-auto opacity-90 mix-blend-darken pointer-events-none"
        />

        {/* Kuriyama calligraphy - top right */}
        <img
          src={kuriyamaImage}
          alt=""
          className="absolute top-8 md:top-12 right-8 md:right-16 lg:right-20 h-[150px] md:h-[200px] lg:h-[280px] w-auto pointer-events-none"
        />

        <div className="relative z-10 max-w-[1440px] mx-auto py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Left side - Big tagline */}
            <div className="lg:w-1/2">
              <h2 className="font-ua-brand text-primary text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold uppercase leading-[1.05]">
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
            <div className="lg:w-1/2 lg:pt-8">
              <div className="border-2 border-primary p-6 md:p-8 max-w-[500px] bg-transparent">
                <h3 className="font-ua-brand text-[#2E261D] text-xl md:text-2xl lg:text-[35px] font-bold uppercase mb-6 md:mb-8">
                  обсудим ваш визит
                </h3>
                
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Имя"
                      className="w-full bg-transparent border-b border-primary/50 py-3 font-glametrix text-[#2E261D] placeholder-[#2E261D]/60 text-base md:text-lg focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Телефон"
                      className="w-full bg-transparent border-b border-primary/50 py-3 font-glametrix text-[#2E261D] placeholder-[#2E261D]/60 text-base md:text-lg focus:outline-none focus:border-primary"
                    />
                  </div>
                  <button className="bg-primary hover:bg-primary/90 text-white font-glametrix text-base md:text-lg px-6 md:px-8 py-2.5 md:py-3 rounded-full transition-colors mt-2">
                    Связаться
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact info row */}
          <div className="flex flex-wrap gap-6 md:gap-12 lg:gap-16 mt-12 md:mt-16">
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

      {/* Dark footer bottom */}
      <div className="relative bg-[#2E261D] py-8 md:py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            {/* Navigation */}
            <div className="space-y-3 md:space-y-4">
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
            <p className="font-glametrix text-white/80 text-sm md:text-base max-w-[400px] md:text-right">
              Информация, которую необходимо расположить в футере.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
