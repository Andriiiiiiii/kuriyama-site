import React from 'react';
import { motion } from 'framer-motion';
import heroPhoto from '@/assets/1-photo.png';
import heroBg from '@/assets/1-background.png';
import buttonBuy from '@/assets/1-button-buy.svg';
import buttonContact from '@/assets/1-button-contact.svg';
import buttonAllActions from '@/assets/1-button-all-actions.svg';
import { FONT_SIZES } from '@/config/typography';

const HeroVisit = () => {
  return (
    <section
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute"
        style={{ 
          left: '0%',
          top: '0%',
          width: '100%',
          height: '100%'
        }}
      >
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-fill"
        />
      </div>

      {/* Navigation - left 8.14%W, top 3.47%H, size 64.47%W Р В Р’В Р вЂ™Р’В Р В Р вЂ Р В РІР‚С™Р РЋРЎв„ўР В Р’В Р В РІР‚В Р В Р’В Р Р†Р вЂљРЎв„ўР В Р вЂ Р В РІР‚С™Р РЋРЎС™ 6.00%H */}
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
                {/* Logo - left 8.30%W, top 4.47%H, size 1.87%W Р В Р’В Р Р†Р вЂљРЎС™- 3.71%H */}
        <div
          className="absolute font-['Glametrix'] text-foreground"
          style={{
            left: '0.2%',
            top: '22%',
            width: '2.9%',
            height: '62%',
            fontSize: FONT_SIZES.subheading
          }}
        >
          K
        </div>

                {/* Nav Links */}
        <div
          className="absolute flex items-center font-['Glametrix'] text-foreground"
          style={{
            left: '23.4%',
            top: '48%',
            gap: '50px',
            fontSize: FONT_SIZES.body
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

      {/* Contact Button - left 83.22%W, top 4.13%H, size 8.40%W Р В Р’В Р вЂ™Р’В Р В Р вЂ Р В РІР‚С™Р РЋРЎв„ўР В Р’В Р В РІР‚В Р В Р’В Р Р†Р вЂљРЎв„ўР В Р вЂ Р В РІР‚С™Р РЋРЎС™ 5.73%H */}
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

            {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute z-10 font-['Glametrix'] text-foreground/50 whitespace-nowrap"
        style={{
          left: '8.43%',
          top: '12.67%',
          fontSize: FONT_SIZES.body
        }}
      >
        Главная/Посещение Куриямы
        </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute z-10 font-['UA-brand'] font-bold text-foreground uppercase tracking-tight"
        style={{
          left: '8.84%',
          top: '22.45%',
          width: '42.61%',
          height: '9.44%',
          fontSize: FONT_SIZES.heading
        }}
      >
        Посещение
        </motion.h1>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute z-10 font-['Glametrix'] font-bold text-foreground flex flex-col items-start"
        style={{
          left: '9.1%',
          top: '31.89%',
          width: '0.92%',
          height: '20.32%',
          fontSize: FONT_SIZES.subheading
        }}
      >
        <span>К</span>
        <span>У</span>
        <span>Р</span>
        <span>И</span>
        <span>Я</span>
        <span>М</span>
        <span>Ы</span>
      </motion.div>

                  {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute z-10 font-['Glametrix'] text-foreground"
        style={{
          left: '33.37%',
          top: '46.73%',
          width: '35%',
          fontSize: FONT_SIZES.body
        }}
      >
        Посетите пасеку Курияма - прогулки, отдых,<br/>
        знакомство с пчелами
      </motion.p>

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
        <img src={buttonAllActions} alt="Все активности" className="w-full h-full object-contain" />
      </motion.button>

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
          src={heroPhoto} alt="Пасека Курияма" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Decorative Lines */}
      <div 
        className="absolute bg-primary"
        style={{
          left: '22.43%',
          top: '9.67%',
          width: '67.11%',
          height: '1px'
        }}
      />
      
      <div 
        className="absolute bg-primary"
        style={{
          left: '22.43%',
          top: '9.73%',
          width: '1px',
          height: '49.33%'
        }}
      />
      
      <div 
        className="absolute bg-primary"
        style={{
          left: '0%',
          top: '72.33%',
          width: '15.60%',
          height: '1px'
        }}
      />
      
      {/* Line 4 - left 22.43%W, top 85.33%H, size 0.07%W Р В Р’В Р вЂ™Р’В Р В Р вЂ Р В РІР‚С™Р РЋРЎв„ўР В Р’В Р В РІР‚В Р В Р’В Р Р†Р вЂљРЎв„ўР В Р вЂ Р В РІР‚С™Р РЋРЎС™ 14.67%H */}
      <div 
        className="absolute bg-primary"
        style={{
          left: '22.43%',
          top: '85.33%',
          width: '1px',
          height: '14.67%'
        }}
      />
      
      {/* Line 5 - left 29.20%W, top 72.33%H, size 2.43%W Р В Р’В Р вЂ™Р’В Р В Р вЂ Р В РІР‚С™Р РЋРЎв„ўР В Р’В Р В РІР‚В Р В Р’В Р Р†Р вЂљРЎв„ўР В Р вЂ Р В РІР‚С™Р РЋРЎС™ 0.13%H */}
      <div 
        className="absolute bg-primary"
        style={{
          left: '29.20%',
          top: '72.33%',
          width: '2.43%',
          height: '1px'
        }}
      />
      
      {/* Line 6 - left 49.39%W, top 72.33%H, size 11.38%W Р В Р’В Р вЂ™Р’В Р В Р вЂ Р В РІР‚С™Р РЋРЎв„ўР В Р’В Р В РІР‚В Р В Р’В Р Р†Р вЂљРЎв„ўР В Р вЂ Р В РІР‚С™Р РЋРЎС™ 0.13%H */}
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
