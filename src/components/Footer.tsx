import React from 'react';
import kuriyamaImage from '@/assets/15-image-1.png';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#2E261D] py-16 px-6 md:px-16 overflow-hidden">
      {/* Kuriyama calligraphy image */}
      <img
        src={kuriyamaImage}
        alt=""
        className="absolute left-8 bottom-8 h-[200px] md:h-[300px] w-auto opacity-20 mix-blend-darken pointer-events-none"
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left side - Contact form */}
          <div className="flex-1">
            <h3 className="font-ua-brand text-[#2E261D] bg-[#F5F5F0] inline-block px-4 py-2 text-2xl md:text-[35px] font-bold uppercase mb-8">
              обсудим ваш визит
            </h3>
            
            <div className="bg-transparent border-2 border-primary rounded-lg p-6 md:p-8 max-w-[400px]">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Имя"
                    className="w-full bg-transparent border-b border-primary/50 py-3 font-glametrix text-[#F5F5F0] placeholder-[#F5F5F0]/60 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full bg-transparent border-b border-primary/50 py-3 font-glametrix text-[#F5F5F0] placeholder-[#F5F5F0]/60 focus:outline-none focus:border-primary"
                  />
                </div>
                <button className="bg-primary hover:bg-primary/90 text-white font-glametrix text-lg px-8 py-3 rounded-full transition-colors mt-4">
                  Связаться
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Info */}
          <div className="flex-1 flex flex-col md:flex-row gap-12">
            {/* Contact info */}
            <div className="space-y-4">
              <a href="tel:+79999999999" className="block font-glametrix text-[#F5F5F0] text-lg md:text-[22px] hover:text-primary transition-colors">
                +79999999999
              </a>
              <a href="mailto:email@mail.ru" className="block font-glametrix text-[#F5F5F0] text-lg md:text-[22px] hover:text-primary transition-colors">
                email@mail.ru
              </a>
              <a href="https://t.me/tg12345" className="block font-glametrix text-[#F5F5F0] text-lg md:text-[22px] hover:text-primary transition-colors">
                @tg12345
              </a>
              <p className="font-glametrix text-[#F5F5F0] text-lg md:text-[22px] pt-4">
                ул. Такая-то, д. 12
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <a href="#" className="block font-glametrix text-white text-lg md:text-[22px] hover:text-primary transition-colors">
                Агротуризм
              </a>
              <a href="#" className="block font-glametrix text-white text-lg md:text-[22px] hover:text-primary transition-colors">
                Пчеловодство
              </a>
              <a href="#" className="block font-glametrix text-white text-lg md:text-[22px] hover:text-primary transition-colors">
                Ресурсы
              </a>
              <a href="#" className="block font-glametrix text-white text-lg md:text-[22px] hover:text-primary transition-colors">
                Цены
              </a>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-16">
          <p className="font-ua-brand text-primary text-3xl md:text-5xl lg:text-[80px] font-bold uppercase">
            природа. тишина. покой. Курияма.
          </p>
          <p className="font-glametrix text-white text-base md:text-lg mt-4 max-w-[500px]">
            Информация, которую необходимо расположить в футере.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
