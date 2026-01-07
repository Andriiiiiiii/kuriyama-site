import React from 'react';
import leftObject from '@/assets/2-left-object.png';
import centralImage from '@/assets/2-central-image.png';
import rightImage from '@/assets/2-right-image.png';

const WhatIsThisPlace = () => {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden flex items-center">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start justify-center px-8 md:px-16 lg:px-24 gap-8 lg:gap-16">
        {/* Left Side - Composite Image */}
        <div className="relative w-full lg:w-[35%] h-[450px] md:h-[550px]">
          <img 
            src={leftObject} 
            alt="Курияма" 
            className="w-full h-full object-contain object-center"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 flex flex-col max-w-[600px]">
          {/* Title */}
          <h2 className="font-['UA-brand'] font-bold text-5xl md:text-6xl lg:text-7xl text-primary uppercase leading-tight">
            что это<br/>за место?
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-md font-['Glametrix'] text-lg md:text-xl text-foreground leading-relaxed">
            Курияма — это уголок спокойствия, спрятанный в лесах Тульской области. 
            Здесь, на границе Московской области, мы создали уникальное пространство, 
            где философия созерцания и природная мудрость встречаются с русским раздольем.
          </p>

          {/* Images Row */}
          <div className="mt-8 flex gap-4 items-end">
            {/* Central Image */}
            <div className="w-[250px] md:w-[320px] h-auto">
              <img 
                src={centralImage} 
                alt="Пчеловод" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right Image */}
            <div className="hidden lg:block w-[160px] md:w-[200px] h-[320px] md:h-[380px]">
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
