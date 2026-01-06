import React from 'react';
import kuriyamaImage from '@/assets/15-image-1.png';
import inkSplash from '@/assets/15-image-2.png';
import paperBackground from '@/assets/15-background.png';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* White background at very top to show paper edge */}
      <div className="h-8 md:h-12 lg:h-16 bg-white" />
      
      {/* Dark background layer - behind everything */}
      <div className="absolute bottom-0 left-0 right-0 h-[350px] md:h-[400px] lg:h-[450px] bg-[#2E261D] z-0" />

      {/* Paper texture background - on top with visible edges */}
      <div className="relative z-10">
        <img
          src={paperBackground}
          alt=""
          className="w-full h-auto object-contain pointer-events-none"
        />
        
        {/* Content positioned over the paper */}
        <div className="absolute inset-0">
          {/* Ink splash decoration - bottom left */}
          <img
            src={inkSplash}
            alt=""
            className="absolute bottom-[15%] left-0 h-[200px] md:h-[300px] lg:h-[400px] w-auto opacity-90 mix-blend-darken pointer-events-none"
          />

          {/* Kuriyama calligraphy - top right */}
          <img
            src={kuriyamaImage}
            alt=""
            className="absolute top-[10%] right-8 md:right-16 lg:right-20 h-[120px] md:h-[180px] lg:h-[250px] w-auto pointer-events-none"
          />

          <div className="max-w-[1440px] mx-auto py-8 md:py-12 lg:py-16 px-6 md:px-12 lg:px-20 h-full">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              {/* Left side - Big tagline */}
              <div className="lg:w-1/2">
                <h2 className="font-ua-brand text-primary text-3xl md:text-4xl lg:text-5xl xl:text-[70px] font-bold uppercase leading-[1.05]">
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
              <div className="lg:w-1/2 lg:pt-4">
                <div className="border-2 border-primary p-5 md:p-6 max-w-[450px] bg-transparent">
                  <h3 className="font-ua-brand text-[#2E261D] text-lg md:text-xl lg:text-2xl font-bold uppercase mb-4 md:mb-6">
                    обсудим ваш визит
                  </h3>
                  
                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Имя"
                        className="w-full bg-transparent border-b border-primary/50 py-2 font-glametrix text-[#2E261D] placeholder-[#2E261D]/60 text-sm md:text-base focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Телефон"
                        className="w-full bg-transparent border-b border-primary/50 py-2 font-glametrix text-[#2E261D] placeholder-[#2E261D]/60 text-sm md:text-base focus:outline-none focus:border-primary"
                      />
                    </div>
                    <button className="bg-primary hover:bg-primary/90 text-white font-glametrix text-sm md:text-base px-5 md:px-6 py-2 rounded-full transition-colors mt-2">
                      Связаться
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact info row */}
            <div className="flex flex-wrap gap-4 md:gap-8 lg:gap-12 mt-8 md:mt-12">
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
            </div>
          </div>
        </div>
      </div>

      {/* Dark footer bottom content */}
      <div className="relative z-20 bg-[#2E261D] py-6 md:py-8 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            {/* Navigation */}
            <div className="space-y-2 md:space-y-3">
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
            <p className="font-glametrix text-white/80 text-xs md:text-sm max-w-[350px] md:text-right">
              Информация, которую необходимо расположить в футере.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
