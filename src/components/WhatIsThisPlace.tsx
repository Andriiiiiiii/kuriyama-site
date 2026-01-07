import React from 'react';
import { motion } from 'framer-motion';
import leftObject from '@/assets/2-left-object.png';
import centralImage from '@/assets/2-central-image.png';
import rightImage from '@/assets/2-right-image.png';

const WhatIsThisPlace = () => {
  return (
    <section className="relative w-full min-h-screen bg-white py-16 pb-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start justify-center px-8 md:px-16 gap-8 lg:gap-16">
        {/* Left Side - Composite Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full lg:w-[35%] h-[450px] md:h-[550px]"
        >
          <img 
            src={leftObject} 
            alt="Курияма" 
            className="w-full h-full object-contain object-center"
          />
        </motion.div>

        {/* Right Side - Content */}
        <div className="flex-1 flex flex-col max-w-[600px]">
          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-['UA-brand'] font-bold text-5xl md:text-6xl lg:text-7xl text-primary uppercase leading-tight"
          >
            что это<br/>за место?
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 max-w-md font-['Glametrix'] text-lg md:text-xl text-foreground leading-relaxed"
          >
            Курияма — это уголок спокойствия, спрятанный в лесах Тульской области. 
            Здесь, на границе Московской области, мы создали уникальное пространство, 
            где философия созерцания и природная мудрость встречаются с русским раздольем.
          </motion.p>

          {/* Images Row */}
          <div className="mt-8 flex gap-4 items-end">
            {/* Central Image */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="w-[250px] md:w-[320px] h-auto"
            >
              <img 
                src={centralImage} 
                alt="Пчеловод" 
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="hidden lg:block w-[160px] md:w-[200px] h-[320px] md:h-[380px]"
            >
              <img 
                src={rightImage} 
                alt="Природа" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsThisPlace;
