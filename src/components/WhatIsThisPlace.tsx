import React from 'react';
import leftObject from '@/assets/2-left-object.png';
import centralImage from '@/assets/2-central-image.png';
import rightImage from '@/assets/2-right-image.png';

const WhatIsThisPlace = () => {
  return (
    <section className="relative w-full min-h-screen bg-white py-16 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start justify-between px-8 md:px-16 gap-8">
        {/* Left Side - Composite Image */}
        <div className="relative w-full lg:w-[40%] h-[500px] md:h-[600px]">
          <img 
            src={leftObject} 
            alt="Курияма" 
            className="w-full h-full object-contain object-left"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 flex flex-col">
          {/* Title */}
          <h2 className="font-['UA-brand'] font-bold text-5xl md:text-6xl lg:text-7xl text-primary uppercase leading-tight">
            что это<br/>за место?
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-lg font-['Glametrix'] text-lg md:text-xl text-foreground leading-relaxed">
            Курияма — это уголок спокойствия, спрятанный в лесах Тульской области. 
            Здесь, на границе Московской области, мы создали уникальное пространство, 
            где философия созерцания и природная мудрость встречаются с русским раздольем.
          </p>

          {/* Images Row */}
          <div className="mt-8 flex gap-6 items-end">
            {/* Central Image */}
            <div className="w-[280px] md:w-[350px] h-auto">
              <img 
                src={centralImage} 
                alt="Пчеловод" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right Image */}
            <div className="hidden lg:block w-[180px] md:w-[220px] h-[350px] md:h-[400px]">
              <img 
                src={rightImage} 
                alt="Природа" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsThisPlace;
