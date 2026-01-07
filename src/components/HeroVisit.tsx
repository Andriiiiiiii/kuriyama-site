import React from 'react';
import { motion } from 'framer-motion';
import heroPhoto from '@/assets/1-photo.png';
import heroBg from '@/assets/1-background.png';
import buttonBuy from '@/assets/1-button-buy.svg';
import buttonContact from '@/assets/1-button-contact.svg';
import buttonAllActions from '@/assets/1-button-all-actions.svg';

const HeroVisit = () => {
  return (
    <section className="relative w-full h-[750px] overflow-hidden">
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
        className="absolute z-20 top-[26px] left-[117px] right-[120px] flex items-center justify-between"
      >
        <div className="font-['Glametrix'] text-[27px] text-foreground">К</div>
        <div className="flex items-center gap-[50px] font-['Glametrix'] text-[15px] text-foreground">
          <a href="#" className="hover:text-primary transition-colors">Агротуризм</a>
          <a href="#" className="hover:text-primary transition-colors">Пчеловодство</a>
          <a href="#" className="hover:text-primary transition-colors">Продукция</a>
          <a href="#" className="hover:text-primary transition-colors">История</a>
          <a href="#" className="hover:text-primary transition-colors">Цены</a>
          <a href="#" className="hover:text-primary transition-colors">Ресурсы</a>
        </div>
        <button className="hover:opacity-90 transition-opacity">
          <img src={buttonContact} alt="Связаться" className="h-[43px] w-[121px]" />
        </button>
      </motion.nav>

      {/* Breadcrumb */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute z-10 top-[95px] left-[121px] font-['Glametrix'] text-[16px] text-foreground/50"
      >
        Главная/Посещение Куриямы
      </motion.div>

      {/* Title "ПОСЕЩЕНИЕ" */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute z-10 top-[168px] left-[127px] font-['UA-brand'] font-bold text-[80px] text-foreground uppercase leading-[0.88] tracking-tight"
      >
        Посещение
      </motion.h1>

      {/* Vertical Text "Куриямы" */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute z-10 top-[246px] left-[126px] font-['Glametrix'] font-bold text-[13px] text-foreground flex flex-col items-center leading-[1.6]"
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
        className="absolute z-10 top-[350px] left-[481px] w-[317px] font-['Glametrix'] text-[15px] text-foreground leading-relaxed"
      >
        Посетите пасеку Курияма - прогулки, отдых, знакомство с пчелами
      </motion.p>

      {/* Buy Button */}
      <motion.button 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute z-10 top-[433px] left-[214px] hover:scale-105 transition-transform"
      >
        <img src={buttonBuy} alt="Выбрать тариф" className="w-[219px] h-[219px]" />
      </motion.button>

      {/* All Actions Button */}
      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute z-10 top-[522px] left-[455px] hover:opacity-80 transition-opacity"
      >
        <img src={buttonAllActions} alt="Просмотреть все активности" className="w-[257px] h-[43px]" />
      </motion.button>

      {/* Photo */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute z-10 top-[97px] right-0 w-[567px] h-[584px]"
      >
        <img 
          src={heroPhoto} 
          alt="Пасека Курияма" 
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default HeroVisit;
