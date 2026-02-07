import React from 'react';
import imgMan from '@/assets/concept/slide6/img.png';
import SelectTariffButton from '@/components/shared/SelectTariffButton'; // Using reusable component for the button logic
import { FONT_SIZES } from '@/config/typography';

const ConceptSlide6 = () => {
    // Aspect ratio: Height based on content
    // Based on bg shape height (71.71 needs to be visible part + overlap)
    
  return (
    <section 
        className="relative w-full"
        style={{
            height: '40vw', 
            minHeight: '500px',
            marginTop: '-10vw', // Negative margin to pull it UP over the previous slide
            position: 'relative',
            zIndex: 20, 
            pointerEvents: 'none' // Click-through wrapper
        }}
    >
       {/* To allow interactions with children, reset pointer-events */}
       <div className="absolute inset-0 pointer-events-auto">
      
      {/* Background Shape - 429:83 */}
      {/* Beige background starts at 28% down */}
      <div 
         className="absolute bg-[#F3E6D8]" // Beige color from screenshot
         style={{
           left: '0%', 
           top: '28.29%', 
           width: '100%', 
           height: '71.71%' 
         }}
      />

      {/* Text "ХОТИТЕ ПРИСОЕДИНИТЬСЯ?" - 429:85 */}
      {/* Visual hierarchy: Behind image? Text seems to be BEHIND the man's arm? Check screenshot. */}
      {/* Man is on right (x=58%). Text is left (x=8%). Overlap? x=8 + w=68 = 76%. Yes, overlaps. */}
      {/* Screenshot shows text BEHIND man. */}
      
      <h2
        className="absolute font-['UA-brand'] font-bold text-[#D87A46] uppercase leading-none"
        style={{
          left: '8.36%',
          top: '42.31%',
          width: '68.05%', 
          fontSize: '5.5vw', // Reduced from 7vw
          zIndex: 10
        }}
      >
        ХОТИТЕ <br/>
        ПРИСОЕДИНИТЬСЯ?
      </h2>

      {/* Description - 429:87 */}
      <p
        className="absolute font-['Glametrix'] text-[#2E261D]"
        style={{
          left: '8.42%',
          top: '79.17%',
          width: '23.27%',
          fontSize: FONT_SIZES.small
        }}
      >
        Приглашение посетить страницу с вакансиями
      </p>

      {/* Man Image - 429:84 */}
      <div
        className="absolute"
        style={{
          left: '58.68%',
          top: '-15.00%', // Moved up to increase overlap (eyes -> neck level)
          width: '36.88%',
          height: '111.22%', // Increased height to keep anchored to bottom roughly
          zIndex: 20 
        }}
      >
        <img src={imgMan} alt="Beekeeper" className="w-full h-full object-contain object-bottom" />
      </div>

      {/* Button - 429:86 */}
      {/* Reusing SelectTariffButton but customization might be needed to match exact "orange circle" look */}
      {/* The component supports 'variant="orange"' */}
      <div
         className="absolute z-30"
         style={{
           left: '76.46%',
           top: '41.63%',
           width: '15.21%',
         }}
      >
         <div className="w-full relative" style={{ paddingBottom: '100%' }}>
            <div className="absolute inset-0">
                 <SelectTariffButton 
                    width="100%" 
                    text="Выбрать тариф" 
                    variant="orange"
                 />
            </div>
         </div>
      </div>

       {/* Correction: The provided button component might be specific style. 
           The screenshot shows a large Orange Circle with text inside.
           Our SelectTariffButton is a complex SVG structure.
           Let's check if we can resize it easily or if we need to wrap it.
       */}

       </div>
    </section>
  );
};

export default ConceptSlide6;
