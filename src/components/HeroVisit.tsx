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
      {/* Background Image - left 0.05%W, top 0.00%H, size 99.93%W × 100.00%H */}
      <div 
        className="absolute bg-cover bg-center bg-no-repeat"
        style={{ 
          left: '0.05%',
          top: '0%',
          width: '99.93%',
          height: '100%',
          backgroundImage: `url(${heroBg})` 
        }}
      />

      {/* Navigation - left 8.14%W, top 3.47%H, size 64.47%W × 6.00%H */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute z-20 flex items-center justify-between"
        style={{
          left: '8.14%',
          top: '3.47%',
          width: '64.47%',
          height: '6%'
        }}
      >
        {/* Logo - left 8.30%W, top 4.47%H, size 1.87%W × 3.71%H */}
        <div 
          className="absolute font-['Glametrix'] text-[27px] text-foreground"
          style={{
            left: '0.2%',
            top: '22%',
            width: '2.9%',
            height: '62%'
          }}
        >
          К
        </div>
        
        {/* Nav Links */}
        <div 
          className="absolute flex items-center font-['Glametrix'] text-[15px] text-foreground"
          style={{
            left: '23.4%',
            top: '48%',
            gap: '50px'
          }}
        >
          <a href="#" className="hover:text-primary transition-colors">Агротуризм</a>
          <a href="#" className="hover:text-primary transition-colors">Пчеловодство</a>
          <a href="#" className="hover:text-primary transition-colors">Продукция</a>
          <a href="#" className="hover:text-primary transition-colors">История</a>
          <a href="#" className="hover:text-primary transition-colors">Цены</a>
          <a href="#" className="hover:text-primary transition-colors">Ресурсы</a>
        </div>
      </motion.nav>

      {/* Contact Button - left 83.22%W, top 4.13%H, size 8.40%W × 5.73%H */}
      <motion.button 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute z-20 hover:opacity-90 transition-opacity"
        style={{
          left: '83.22%',
          top: '4.13%',
          width: '8.40%',
          height: '5.73%'
        }}
      >
        <img src={buttonContact} alt="Связаться" className="w-full h-full object-contain" />
      </motion.button>

      {/* Breadcrumb - left 8.43%W, top 12.67%H, size 14.84%W × 2.18%H */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute z-10 font-['Glametrix'] text-[16px] text-foreground/50"
        style={{
          left: '8.43%',
          top: '12.67%',
          width: '14.84%',
          height: '2.18%'
        }}
      >
        Главная/Посещение Куриямы
      </motion.div>

      {/* Title "ПОСЕЩЕНИЕ" - left 8.84%W, top 22.45%H, size 42.61%W × 9.44%H */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute z-10 font-['UA-brand'] font-bold text-foreground uppercase leading-[0.88] tracking-tight"
        style={{
          left: '8.84%',
          top: '22.45%',
          width: '42.61%',
          height: '9.44%',
          fontSize: 'clamp(48px, 5.5vw, 80px)'
        }}
      >
        Посещение
      </motion.h1>

      {/* Vertical Text "Куриямы" - left 8.75%W, top 32.75%H, size 0.92%W × 20.32%H */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute z-10 font-['Glametrix'] font-bold text-[13px] text-foreground flex flex-col items-center leading-[1.6]"
        style={{
          left: '8.75%',
          top: '32.75%',
          width: '0.92%',
          height: '20.32%'
        }}
      >
        <span>К</span>
        <span>у</span>
        <span>р</span>
        <span>и</span>
        <span>я</span>
        <span>м</span>
        <span>ы</span>
      </motion.div>

      {/* Description - left 33.37%W, top 46.73%H, size 21.99%W × 4.49%H */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute z-10 font-['Glametrix'] text-[15px] text-foreground leading-relaxed"
        style={{
          left: '33.37%',
          top: '46.73%',
          width: '21.99%',
          height: '4.49%'
        }}
      >
        Посетите пасеку Курияма - прогулки, отдых, знакомство с пчелами
      </motion.p>

      {/* Buy Button - left 14.83%W, top 57.73%H, size 15.20%W × 29.20%H */}
      <motion.button 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute z-10 hover:scale-105 transition-transform"
        style={{
          left: '14.83%',
          top: '57.73%',
          width: '15.20%',
          height: '29.20%'
        }}
      >
        <img src={buttonBuy} alt="Выбрать тариф" className="w-full h-full object-contain" />
      </motion.button>

      {/* All Actions Button - left 31.59%W, top 69.60%H, size 17.83%W × 5.73%H */}
      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute z-10 hover:opacity-80 transition-opacity"
        style={{
          left: '31.59%',
          top: '69.60%',
          width: '17.83%',
          height: '5.73%'
        }}
      >
        <img src={buttonAllActions} alt="Просмотреть все активности" className="w-full h-full object-contain" />
      </motion.button>

      {/* Photo - left 60.67%W, top 12.93%H, size 39.33%W × 77.87%H */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute z-10"
        style={{
          left: '60.67%',
          top: '12.93%',
          width: '39.33%',
          height: '77.87%'
        }}
      >
        <img 
          src={heroPhoto} 
          alt="Пасека Курияма" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Decorative Lines */}
      {/* Line 1 - left 22.43%W, top 9.67%H, size 67.11%W × 0.13%H */}
      <div 
        className="absolute bg-primary"
        style={{
          left: '22.43%',
          top: '9.67%',
          width: '67.11%',
          height: '1px'
        }}
      />
      
      {/* Line 2 - left 22.39%W, top 9.73%H, size 0.07%W × 49.33%H */}
      <div 
        className="absolute bg-primary"
        style={{
          left: '22.43%',
          top: '9.73%',
          width: '1px',
          height: '49.33%'
        }}
      />
      
      {/* Line 3 - left 0.00%W, top 72.33%H, size 15.60%W × 0.13%H */}
      <div 
        className="absolute bg-primary"
        style={{
          left: '0%',
          top: '72.33%',
          width: '15.60%',
          height: '1px'
        }}
      />
      
      {/* Line 4 - left 22.43%W, top 85.33%H, size 0.07%W × 14.67%H */}
      <div 
        className="absolute bg-primary"
        style={{
          left: '22.43%',
          top: '85.33%',
          width: '1px',
          height: '14.67%'
        }}
      />
      
      {/* Line 5 - left 29.20%W, top 72.33%H, size 2.43%W × 0.13%H */}
      <div 
        className="absolute bg-primary"
        style={{
          left: '29.20%',
          top: '72.33%',
          width: '2.43%',
          height: '1px'
        }}
      />
      
      {/* Line 6 - left 49.39%W, top 72.33%H, size 11.38%W × 0.13%H */}
      <div 
        className="absolute bg-primary"
        style={{
          left: '49.39%',
          top: '72.33%',
          width: '11.38%',
          height: '1px'
        }}
      />
    </section>
  );
};

export default HeroVisit;
