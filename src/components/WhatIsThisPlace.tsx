import React from 'react';
import { motion } from 'framer-motion';
import leftObject from '@/assets/2-left-object.png';
import centralImage from '@/assets/2-central-image.png';
import rightImage from '@/assets/2-right-image.png';

const WhatIsThisPlace = () => {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
      {/* 2 line 1 - Vertical Line */}
      <div 
        className="absolute bg-accent"
        style={{
          left: '22.40%',
          top: '0%',
          width: '0.07%',
          height: '99.94%'
        }}
      />
      
      {/* 2 line 2 - Horizontal Line */}
      <div 
        className="absolute bg-accent"
        style={{
          left: '3.89%',
          top: '99.89%',
          width: '18.54%',
          height: '0.11%'
        }}
      />

      {/* 2 left object 1 */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute"
        style={{
          left: '7.57%',
          top: '1.51%',
          width: '34.43%',
          height: '76.27%'
        }}
      >
        <img 
          src={leftObject} 
          alt="Курияма" 
          className="w-full h-full object-contain object-center"
        />
      </motion.div>

      {/* Title */}
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="absolute font-['UA-brand'] font-bold text-primary uppercase leading-[0.9]"
        style={{
          left: '57.83%',
          top: '5.98%',
          width: '36.48%',
          height: '18.16%',
          fontSize: 'clamp(48px, 5.5vw, 80px)'
        }}
      >
        что это<br/>за место?
      </motion.h2>

      {/* Main Text - same width as central image below */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute font-['Glametrix'] text-foreground"
        style={{
          left: '44.51%',
          top: '41.58%',
          width: '29.93%',
          height: '14.94%',
          fontSize: 'clamp(16px, 1.5vw, 22px)',
          lineHeight: '1.6'
        }}
      >
        Курияма — это уголок спокойствия, спрятанный<br/>
        в лесах Тульской области. Здесь, на границе<br/>
        Московской области, мы создали уникальное<br/>
        пространство, где философия созерцания<br/>
        и природная мудрость встречаются<br/>
        с русским раздольем.
      </motion.p>

      {/* 2 central image */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="absolute"
        style={{
          left: '44.51%',
          top: '59.10%',
          width: '29.93%',
          height: '27.72%'
        }}
      >
        <img 
          src={centralImage} 
          alt="Пчеловод" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* 2 right image */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute"
        style={{
          left: '76.23%',
          top: '41.07%',
          width: '21.98%',
          height: '54.08%'
        }}
      >
        <img 
          src={rightImage} 
          alt="Природа" 
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default WhatIsThisPlace;
