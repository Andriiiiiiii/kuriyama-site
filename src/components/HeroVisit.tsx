import React from 'react';
import { motion } from 'framer-motion';
import heroPhoto from '@/assets/1-photo.png';
import heroBg from '@/assets/1-background.png';

const HeroVisit = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-20 flex items-center justify-between px-8 md:px-16 lg:px-24 py-6"
      >
        <div className="font-['Glametrix'] text-3xl text-foreground">К</div>
        <div className="hidden md:flex items-center gap-6 lg:gap-10 font-['Glametrix'] text-xl lg:text-[22px] text-foreground">
          <a href="#" className="hover:text-primary transition-colors">Агротуризм</a>
          <a href="#" className="hover:text-primary transition-colors">Пчеловодство</a>
          <a href="#" className="hover:text-primary transition-colors">Продукция</a>
          <a href="#" className="hover:text-primary transition-colors">История</a>
          <a href="#" className="hover:text-primary transition-colors">Цены</a>
          <a href="#" className="hover:text-primary transition-colors">Ресурсы</a>
        </div>
        <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-['Glametrix'] text-xl hover:opacity-90 transition-opacity">
          Связаться
        </button>
      </motion.nav>

      {/* Breadcrumb */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 px-8 md:px-16 lg:px-24 mt-6 font-['Glametrix'] text-xl lg:text-[22px] text-foreground"
      >
        Главная/Посещение Куриямы
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex px-8 md:px-16 lg:px-24 mt-8">
        {/* Left Side */}
        <div className="w-full lg:w-[55%] relative">
          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-['UA-brand'] font-bold text-6xl md:text-7xl lg:text-[80px] xl:text-[100px] text-foreground uppercase leading-[0.95] tracking-tight"
          >
            Посещение
          </motion.h1>

          {/* Vertical Text "Куриямы" */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute left-0 top-[110px] md:top-[130px] lg:top-[140px] font-['Glametrix'] font-bold text-xl md:text-2xl lg:text-[30px] text-foreground flex flex-col items-center" 
            style={{ lineHeight: '0.75' }}
          >
            <span className="mb-1">К</span>
            <span className="mb-1">у</span>
            <span className="mb-1">р</span>
            <span className="mb-1">и</span>
            <span className="mb-1">я</span>
            <span className="mb-1">м</span>
            <span>ы</span>
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-24 md:mt-32 lg:mt-36 ml-[60px] md:ml-[120px] lg:ml-[280px] max-w-[340px] font-['Glametrix'] text-lg md:text-xl lg:text-[22px] text-foreground leading-relaxed"
          >
            Посетите пасеку Курияма - прогулки, отдых, знакомство с пчелами
          </motion.p>

          {/* Buttons Container */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-16 md:mt-20 lg:mt-24 ml-[60px] md:ml-[100px] lg:ml-[140px] flex items-center gap-6 lg:gap-10"
          >
            {/* Circle Button with decorative rings */}
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-primary opacity-60"></div>
              {/* Main circle button */}
              <button className="relative w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full bg-primary flex items-center justify-center group hover:scale-105 transition-transform">
                <span className="font-['Glametrix'] text-lg md:text-xl lg:text-[22px] text-primary-foreground text-center px-4">
                  Выбрать тариф
                </span>
              </button>
              {/* Decorative lines from button */}
              <div className="absolute top-1/2 -left-8 w-8 h-px bg-primary opacity-40"></div>
              <div className="absolute -bottom-12 left-1/2 w-px h-12 bg-primary opacity-40"></div>
            </div>

            {/* Outline Button */}
            <button className="px-8 py-4 border border-primary rounded-full font-['Glametrix'] text-lg md:text-xl lg:text-[22px] text-foreground hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap">
              Просмотреть все активности
            </button>
          </motion.div>
        </div>

        {/* Right Side - Photo */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block absolute right-0 top-0 w-[45%] h-full"
        >
          <img 
            src={heroPhoto} 
            alt="Пасека Курияма" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>

      {/* Mobile Photo */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="lg:hidden mt-12 px-8"
      >
        <img 
          src={heroPhoto} 
          alt="Пасека Курияма" 
          className="w-full h-auto object-cover"
        />
      </motion.div>

    </section>
  );
};

export default HeroVisit;
