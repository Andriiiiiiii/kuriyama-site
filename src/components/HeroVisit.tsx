import React from 'react';
import heroPhoto from '@/assets/1-photo.png';

const HeroVisit = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#EFE9E3] overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 md:px-16 py-6">
        <div className="font-['Glametrix'] text-3xl text-foreground">К</div>
        <div className="hidden md:flex items-center gap-8 font-['Glametrix'] text-lg text-foreground">
          <a href="#" className="hover:text-primary transition-colors">Агротуризм</a>
          <a href="#" className="hover:text-primary transition-colors">Пчеловодство</a>
          <a href="#" className="hover:text-primary transition-colors">Продукция</a>
          <a href="#" className="hover:text-primary transition-colors">История</a>
          <a href="#" className="hover:text-primary transition-colors">Цены</a>
          <a href="#" className="hover:text-primary transition-colors">Ресурсы</a>
        </div>
        <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-['Glametrix'] text-lg hover:opacity-90 transition-opacity">
          Связаться
        </button>
      </nav>

      {/* Breadcrumb */}
      <div className="px-8 md:px-16 mt-4 font-['Glametrix'] text-lg text-foreground">
        Главная/Посещение Куриямы
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row px-8 md:px-16 mt-8 gap-8">
        {/* Left Side */}
        <div className="flex-1 relative">
          {/* Title */}
          <h1 className="font-['UA-brand'] font-bold text-6xl md:text-7xl lg:text-8xl text-foreground uppercase leading-tight">
            Посещение
          </h1>

          {/* Vertical Text */}
          <div className="absolute left-0 top-[120px] md:top-[140px] font-['Glametrix'] font-bold text-2xl md:text-3xl text-foreground flex flex-col items-center leading-[0.75]">
            <span>К</span>
            <span>у</span>
            <span>р</span>
            <span>и</span>
            <span>я</span>
            <span>м</span>
            <span>ы</span>
          </div>

          {/* Description */}
          <p className="mt-32 md:mt-40 ml-12 md:ml-24 max-w-md font-['Glametrix'] text-lg md:text-xl text-foreground">
            Посетите пасеку Курияма - прогулки, отдых, знакомство с пчелами
          </p>

          {/* Buttons */}
          <div className="mt-12 ml-12 md:ml-24 flex items-center gap-6 flex-wrap">
            {/* Circle Button */}
            <button className="relative w-40 h-40 md:w-48 md:h-48">
              <div className="absolute inset-0 rounded-full bg-primary"></div>
              <div className="absolute inset-[-8px] rounded-full border border-primary"></div>
              <span className="absolute inset-0 flex items-center justify-center font-['Glametrix'] text-lg md:text-xl text-primary-foreground">
                Выбрать тариф
              </span>
            </button>

            {/* Outline Button */}
            <button className="px-6 py-3 border border-primary rounded-full font-['Glametrix'] text-lg text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              Просмотреть все активности
            </button>
          </div>
        </div>

        {/* Right Side - Photo */}
        <div className="flex-1 relative">
          <img 
            src={heroPhoto} 
            alt="Пасека Курияма" 
            className="w-full h-auto max-h-[70vh] object-cover"
          />
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-24">
        <svg className="w-full h-full" viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
          <path d="M0 50 Q 360 0, 720 50 T 1440 50" stroke="hsl(var(--primary))" strokeWidth="1" fill="none"/>
          <path d="M0 60 Q 360 10, 720 60 T 1440 60" stroke="hsl(var(--primary))" strokeWidth="1" fill="none"/>
          <path d="M0 70 Q 360 20, 720 70 T 1440 70" stroke="hsl(var(--primary))" strokeWidth="1" fill="none"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroVisit;
