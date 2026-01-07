import React from 'react';
import { motion } from 'framer-motion';
import leftObject from '@/assets/2-left-object.png';
import centralImage from '@/assets/2-central-image.png';
import rightImage from '@/assets/2-right-image.png';

const WhatIsThisPlace = () => {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
      {/* Vertical Line 1 */}
      <div 
        className="absolute bg-accent"
        style={{
          left: '20.97%',
          top: '0%',
          width: '1px',
          height: '99.83%'
        }}
      />
      
      {/* Horizontal Line 2 */}
      <div 
        className="absolute bg-accent"
        style={{
          left: '0%',
          top: '99.89%',
          width: '21.01%',
          height: '1px'
        }}
      />

      {/* Left Object */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute"
        style={{
          left: '4.96%',
          top: '3.65%',
          width: '36.82%',
          height: '71.99%'
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
          left: '57.46%',
          top: '5.98%',
          width: '41.33%',
          fontSize: 'clamp(48px, 8vw, 120px)'
        }}
      >
        что это<br/>за место?
      </motion.h2>

      {/* Main Text */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute font-['Glametrix'] text-foreground leading-relaxed"
        style={{
          left: '45.09%',
          top: '41.58%',
          width: '27.59%',
          fontSize: 'clamp(14px, 1.4vw, 20px)'
        }}
      >
        Курияма — это уголок спокойствия, спрятанный в лесах Тульской области. 
        Здесь, на границе Московской области, мы создали уникальное пространство, 
        где философия созерцания и природная мудрость встречаются с русским раздольем.
      </motion.p>

      {/* Central Image */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="absolute"
        style={{
          left: '45.00%',
          top: '59.10%',
          width: '30.21%',
          height: '27.72%'
        }}
      >
        <img 
          src={centralImage} 
          alt="Пчеловод" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right Image */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute"
        style={{
          left: '77.03%',
          top: '41.07%',
          width: '22.19%',
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
