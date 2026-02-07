import React from 'react';
import imgCentral from '@/assets/concept/slide4/image 115.png'; // Abstract strokes
import imgBee from '@/assets/concept/slide4/insect-background-closeup-pollination-beauty 1.png'; // Bee photo
import { FONT_SIZES } from '@/config/typography';

const ConceptSlide4 = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-background">
      
      {/* Rectangles (Frames) */}
      {/* Outer Rectangle 223 - 429:133 */}
      <div 
        className="absolute border border-[#D87A46] z-30"
        style={{
          left: '7.71%',
          top: '17.93%',
          width: '84.58%',
          height: '68.28%'
        }}
      />
      {/* Inner Rectangle 200 - 429:132 */}
       <div 
        className="absolute border border-[#D87A46] z-30"
        style={{
          left: '8.33%',
          top: '19.17%',
          width: '83.33%',
          height: '65.79%'
        }}
      />

       {/* Title "НАШ ПОДХОД" - 429:123 */}
      <h2
        className="absolute font-['UA-brand'] font-bold text-[#D87A46] uppercase tracking-wider"
        style={{
          left: '8.83%',
          top: '2.81%',
          width: '45.90%',
          fontSize: '5vw', 
          lineHeight: 1
        }}
      >
        НАШ ПОДХОД
      </h2>
      
      {/* Decorative Lines from screenshot (Vertical line on right from title level down?) */}
      {/* The screenshot shows a line from the top going down on the right side. */}
      {/* Assuming similar to previous slides theme of connecting blocks */}
      <div 
         className="absolute border-r border-[#D87A46]/40"
         style={{
           left: '85.5%', // Approx right edge of frame
           top: '0%', 
           height: '18%', // Until frame
         }}
      />
      
       <div 
         className="absolute border-r border-[#D87A46]/40"
         style={{
           left: '85.5%', 
           top: '86%', // From bottom of frame
           height: '14%', // To bottom
         }}
      />


      {/* --- Illustrations --- */}
      
      {/* Central Illustration (Strokes) - 429:134 */}
      <div
        className="absolute z-10"
        style={{
          left: '42.01%',
          top: '20.55%',
          width: '16.67%',
          height: '66.07%'
        }}
      >
        <img 
          src={imgCentral} 
          alt="Abstract Strokes" 
          className="w-full h-full object-contain" 
        />
      </div>

      {/* Bee Image - 429:135 */}
      <div
        className="absolute z-20"
        style={{
          left: '42.94%',
          top: '38.83%',
          width: '14.58%',
          height: '27.37%'
        }}
      >
         <img 
          src={imgBee} 
          alt="Bee close-up" 
          className="w-full h-full object-contain" 
        />
      </div>

      {/* --- Text Blocks --- */}

      {/* Top Left Group */}
      {/* Title - 429:128 */}
      <h3
        className="absolute font-['Glametrix'] font-bold text-foreground"
        style={{
          left: '11.17%',
          top: '27.24%',
          width: '10%', // Giving slightly more width
          fontSize: FONT_SIZES.medium
        }}
      >
        Заголовок
      </h3>
      {/* Desc - 429:124 */}
      <p
        className="absolute font-['Glametrix'] text-foreground"
        style={{
          left: '11.14%',
          top: '33.03%',
          width: '18.92%',
          fontSize: FONT_SIZES.body,
          lineHeight: '1.4'
        }}
      >
        Две строчки дополнительного описания подкрепляющего заголовок
      </p>


      {/* Bottom Left Group */}
       {/* Title - 429:129 */}
      <h3
        className="absolute font-['Glametrix'] font-bold text-foreground"
        style={{
          left: '11.17%',
          top: '66.69%',
          width: '10%',
          fontSize: FONT_SIZES.medium
        }}
      >
        Заголовок
      </h3>
      {/* Desc - 429:125 */}
      <p
        className="absolute font-['Glametrix'] text-foreground"
        style={{
          left: '11.14%',
          top: '72.47%',
          width: '18.92%',
          fontSize: FONT_SIZES.body,
          lineHeight: '1.4'
        }}
      >
        Две строчки дополнительного описания подкрепляющего заголовок
      </p>


       {/* Top Right Group */}
       {/* Title - 429:131 */}
      <h3
        className="absolute font-['Glametrix'] font-bold text-foreground"
        style={{
          left: '69.15%',
          top: '27.24%',
          width: '10%',
          fontSize: FONT_SIZES.medium
        }}
      >
        Заголовок
      </h3>
      {/* Desc - 429:127 */}
      <p
        className="absolute font-['Glametrix'] text-foreground"
        style={{
          left: '69.13%',
          top: '33.03%',
          width: '18.92%',
          fontSize: FONT_SIZES.body,
          lineHeight: '1.4'
        }}
      >
        Две строчки дополнительного описания подкрепляющего заголовок
      </p>


      {/* Bottom Right Group */}
       {/* Title - 429:130 */}
      <h3
        className="absolute font-['Glametrix'] font-bold text-foreground"
        style={{
          left: '69.15%',
          top: '66.69%',
          width: '10%',
          fontSize: FONT_SIZES.medium
        }}
      >
        Заголовок
      </h3>
      {/* Desc - 429:126 */}
      <p
        className="absolute font-['Glametrix'] text-foreground"
        style={{
          left: '69.13%',
          top: '72.47%',
          width: '18.92%',
          fontSize: FONT_SIZES.body,
          lineHeight: '1.4'
        }}
      >
        Две строчки дополнительного описания подкрепляющего заголовок
      </p>

    </section>
  );
};

export default ConceptSlide4;
