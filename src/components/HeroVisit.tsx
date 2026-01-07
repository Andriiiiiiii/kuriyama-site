import React from 'react';
import { motion } from 'framer-motion';
import heroPhoto from '@/assets/1-photo.png';
import heroBg from '@/assets/1-background.png';
import buttonBuy from '@/assets/1-button-buy.svg';
import buttonContact from '@/assets/1-button-contact.svg';
import buttonAllActions from '@/assets/1-button-all-actions.svg';

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
        className="relative z-20 flex items-center justify-between px-8 md:px-12 lg:px-16 py-6"
      >
        <div className="font-['Glametrix'] text-3xl text-foreground">К</div>
        <div className="hidden md:flex items-center gap-6 lg:gap-8 font-['Glametrix'] text-lg lg:text-xl text-foreground">
          <a href="#" className="hover:text-primary transition-colors">Агротуризм</a>
          <a href="#" className="hover:text-primary transition-colors">Пчеловодство</a>
          <a href="#" className="hover:text-primary transition-colors">Продукция</a>
          <a href="#" className="hover:text-primary transition-colors">История</a>
          <a href="#" className="hover:text-primary transition-colors">Цены</a>
          <a href="#" className="hover:text-primary transition-colors">Ресурсы</a>
        </div>
        <button className="hover:opacity-90 transition-opacity">
          <img src={buttonContact} alt="Связаться" className="h-[43px] w-auto" />
        </button>
      </motion.nav>

      {/* Breadcrumb */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 px-8 md:px-12 lg:px-16 mt-4 font-['Glametrix'] text-lg lg:text-xl text-foreground"
      >
        Главная/Посещение Куриямы
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex px-8 md:px-12 lg:px-16 mt-6">
        {/* Left Side */}
        <div className="w-full lg:w-[55%] relative">
          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-['UA-brand'] font-bold text-5xl md:text-6xl lg:text-[80px] xl:text-[90px] text-foreground uppercase leading-[0.95] tracking-tight"
          >
            Посещение
          </motion.h1>

          {/* Vertical Text "Куриямы" */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute left-0 top-[80px] md:top-[100px] lg:top-[110px] font-['Glametrix'] font-bold text-lg md:text-xl lg:text-2xl text-foreground flex flex-col items-center" 
            style={{ lineHeight: '1.4' }}
          >
            <span>К</span>
            <span>у</span>
            <span>р</span>
            <span>и</span>
            <span>я</span>
            <span>м</span>
            <span>ы</span>
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 md:mt-24 lg:mt-28 ml-[50px] md:ml-[100px] lg:ml-[280px] max-w-[320px] font-['Glametrix'] text-base md:text-lg lg:text-xl text-foreground leading-relaxed"
          >
            Посетите пасеку Курияма - прогулки, отдых, знакомство с пчелами
          </motion.p>

          {/* Buttons Container */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-12 md:mt-16 lg:mt-20 ml-[30px] md:ml-[60px] lg:ml-[100px] flex items-center gap-6 lg:gap-8"
          >
            {/* Circle Button - using SVG */}
            <button className="hover:scale-105 transition-transform flex-shrink-0">
              <img src={buttonBuy} alt="Выбрать тариф" className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] lg:w-[219px] lg:h-[219px]" />
            </button>

            {/* Outline Button - using SVG */}
            <button className="hover:opacity-80 transition-opacity flex-shrink-0">
              <img src={buttonAllActions} alt="Просмотреть все активности" className="h-[40px] md:h-[43px] w-auto" />
            </button>
          </motion.div>
        </div>

        {/* Right Side - Photo */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block absolute right-0 top-[-80px] w-[42%] h-[calc(100vh-40px)]"
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
