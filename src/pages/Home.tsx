import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/shared/Header';
import MoreButton from '@/components/shared/MoreButton';
import FooterNavigation from '@/components/sections/FooterNavigation';
import { FONT_SIZES } from '@/config/typography';
import heroBg from '@/assets/home/hero-bg.webp';
import frontImage from '@/assets/home/front-image.webp';
import leftImage from '@/assets/home/left_image.webp';

const Home = () => {
  return (
    <main className="w-full relative bg-[#F5F5F5] overflow-x-hidden flex flex-col min-h-screen">
      <Header />
      
      <div className="relative w-full overflow-hidden flex-shrink-0" style={{ height: '53.50vw' }}>
        {/* Hero Background */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img 
            src={heroBg} 
            alt="Background" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Front Image Overlay */}
        <div 
          className="absolute z-10 pointer-events-none"
          style={{
            left: '5vw',
            top: '5vw',
            width: '90vw',
            height: '28vw'
          }}
        >
          <img
            src={frontImage}
            alt=""
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Title */}
        <div 
          className="absolute z-20"
          style={{
            left: '8vw',
            top: '13vw',
            width: '83.3664vw',
            height: '11.8610vw'
          }}
        >
          <h1 className="font-ua-brand text-white leading-none font-bold uppercase tracking-wider" style={{ fontSize: FONT_SIZES.heading }}>
            Пасека-сад<br />для отдыха и бизнеса
          </h1>
        </div>

        {/* Subtitle */}
        <div 
          className="absolute z-20"
          style={{
            left: '8vw',
            top: '28vw',
            width: '17.7142vw',
            height: '2.6363vw'
          }}
        >
          <p className="font-glametrix text-white font-normal leading-tight" style={{ fontSize: FONT_SIZES.body }}>
            Две строчки описания, про главные услуги и предложения
          </p>
        </div>

        {/* Cards Container */}
        <div 
          className="absolute z-30 flex w-full justify-center"
          style={{
            left: '0', 
            top: '34vw', 
            height: '13.8852vw'
          }}
        >
          {/* External Rectangle */}
          <div className="relative border border-[#C65A32] border-[1.5px]" style={{ width: '70.0000vw', height: '100%' }}>
            
            {/* Inner Rectangle (with equal margins) */}
            <div 
              className="absolute border-2 border-[#C65A32] pointer-events-none z-20 bg-transparent"
              style={{
                top: '0.6vw',
                bottom: '0.6vw',
                left: '0.6vw',
                right: '0.6vw'
              }}
            />

            {/* Content Container (Grid / Flex) */}
            <div className="relative w-full h-full flex z-10">
              <div
                className="absolute bg-[#C65A32] pointer-events-none z-20"
                style={{
                  left: '33.3333%',
                  top: '0.6vw',
                  bottom: '0.6vw',
                  width: '2px',
                  transform: 'translateX(-1px)',
                }}
              />
              <div
                className="absolute bg-[#C65A32] pointer-events-none z-20"
                style={{
                  left: '66.6666%',
                  top: '0.6vw',
                  bottom: '0.6vw',
                  width: '2px',
                  transform: 'translateX(-1px)',
                }}
              />
              
              {/* Card 1: Visit */}
              <Link to="/visit" className="w-1/3 relative group hover:bg-white/10 transition-colors flex-shrink-0">
                <div className="h-full w-full flex flex-col justify-between" style={{ padding: '2.5vw 2vw 2vw 2.5vw' }}>
                  <div>
                    <h3 className="font-ua-brand text-[#2E261D] mb-[1.5vw] leading-none" style={{ fontSize: FONT_SIZES.subheading }}>
                      Посещение
                    </h3>
                    <p className="font-glametrix text-[#2E261D] opacity-80 leading-tight" style={{ fontSize: FONT_SIZES.body }}>
                      Две строчки описания, про то, что предлагается
                    </p>
                  </div>
                  <div className="self-end" style={{ width: '8.3197vw', height: '2.1230vw' }}>
                    <MoreButton className="w-full h-full" />
                  </div>
                </div>
              </Link>

              {/* Card 2: Beekeeping */}
              <Link to="/beekeeping" className="w-1/3 relative group hover:bg-white/10 transition-colors flex-shrink-0">
                 <div className="h-full w-full flex flex-col justify-between" style={{ padding: '2.5vw 2vw 2vw 2.5vw' }}>
                  <div>
                    <h3 className="font-ua-brand text-[#2E261D] mb-[1.5vw] leading-none" style={{ fontSize: FONT_SIZES.subheading }}>
                      Пчеловодство
                    </h3>
                    <p className="font-glametrix text-[#2E261D] opacity-80 leading-tight" style={{ fontSize: FONT_SIZES.body }}>
                      Две строчки описания, про то, что предлагается
                    </p>
                  </div>
                  <div className="self-end" style={{ width: '8.3197vw', height: '2.1230vw' }}>
                    <MoreButton className="w-full h-full" />
                  </div>
                </div>
              </Link>

              {/* Card 3: Production */}
              <Link to="/production" className="w-1/3 relative group hover:bg-white/10 transition-colors flex-shrink-0">
                 <div className="h-full w-full flex flex-col justify-between" style={{ padding: '2.5vw 2vw 2vw 2.5vw' }}>
                  <div>
                    <h3 className="font-ua-brand text-[#2E261D] mb-[1.5vw] leading-none" style={{ fontSize: FONT_SIZES.subheading }}>
                      Продукция
                    </h3>
                    <p className="font-glametrix text-[#2E261D] opacity-80 leading-tight" style={{ fontSize: FONT_SIZES.body }}>
                      Две строчки описания, про то, что предлагается
                    </p>
                  </div>
                  <div className="self-end" style={{ width: '8.3197vw', height: '2.1230vw' }}>
                    <MoreButton className="w-full h-full" />
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>

      {/* Global left overlay: above hero and footer */}
      <img
        src={leftImage}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute mix-blend-multiply pointer-events-none"
        style={{
          left: '0%',
          top: '30vw',
          width: '15vw',
          height: '40vw',
          objectFit: 'contain',
          zIndex: 70,
        }}
      />

      <footer
        className="relative w-full bg-[#2E261D] overflow-hidden text-white z-30 shrink-0"
        style={{
          height: 'calc(var(--layout-height-ratio, 56.25vw) * 0.38663)'
        }}
      >
          <FooterNavigation
            navTop="36.76%"
            navHeight="48.07%"
            noteTop="78.08%"
            noteHeight="5.17%"
          />
      </footer>
    </main>
  );
};

export default Home;
