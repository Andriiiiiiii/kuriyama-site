import React from 'react';
import backgroundImage from '@/assets/11-background.png';

const DailyPass: React.FC = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[354px] overflow-hidden">
      {/* Background image */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative h-full max-w-[1440px] mx-auto px-6 md:px-16 py-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left side - Title */}
        <div>
          <h1 className="font-ua-brand text-white text-4xl md:text-6xl lg:text-[80px] font-bold uppercase leading-tight">
            daily pass.
            <br />
            пасека
          </h1>
        </div>

        {/* Right side - Button and description */}
        <div className="flex flex-col items-center mt-6 md:mt-0">
          {/* Circular button */}
          <button 
            className="w-[120px] h-[120px] md:w-[179px] md:h-[179px] rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 cursor-pointer"
            aria-label="Выбрать тариф"
          />
          
          {/* Button label */}
          <button className="font-glametrix text-white text-lg md:text-[22px] font-medium mt-4 md:mt-8 hover:text-white/80 transition-colors">
            Выбрать тариф
          </button>

          {/* Description */}
          <p className="font-glametrix text-white text-base md:text-[22px] font-medium mt-4 max-w-[239px] text-center">
            Пропуск на посещение на день со всеми активностями
          </p>
        </div>
      </div>
    </section>
  );
};

export default DailyPass;
