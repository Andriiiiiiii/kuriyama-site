import React from 'react';
import imgCenter from '@/assets/concept/slide2/img center.png';
import { FONT_SIZES } from '@/config/typography';

const ConceptSlide2 = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-background">
      {/* Decorative Lines - Attempting to match screenshot structure */}
      
      {/* Left Line Structure */}
      <div 
        className="absolute border-l border-b border-[#D87A46]/40"
        style={{
          left: '8.5%',   // Approximate based on text alignment
          top: '4.5%',    // Starts near title top
          width: '30.8%', // Reaches to center image (39.31%)
          height: '36%'   // Goes down to about 40% (middle of circle)
        }}
      />

      {/* Right Line Structure */}
      <div 
        className="absolute border-t border-r border-[#D87A46]/40"
        style={{
          left: '60.7%',  // Starts from center image right edge (39.31 + 24.58 approx)
          top: '40.5%',   // Starts from middle
          width: '30.8%', // Extends to right text area
          height: '54%'   // Goes down to bottom
        }}
      />

      {/* Title "ИДЕЯ" - 429:153 */}
      <h2
        className="absolute font-['UA-brand'] font-bold text-[#D87A46] uppercase tracking-wider"
        style={{
          left: '11.61%',
          top: '4.47%',
          width: '17.37%',
          height: '10.01%',
          fontSize: '7vw', // Large title size, approximate from screenshot relative to container
          lineHeight: 1
        }}
      >
        ИДЕЯ
      </h2>

      {/* Left Description - 429:154 */}
      <p
        className="absolute font-['Glametrix'] text-foreground"
        style={{
          left: '11.19%',
          top: '26.08%',
          width: '22.77%',
          fontSize: FONT_SIZES.body,
          lineHeight: '1.4'
        }}
      >
        Несколько строчек о главной идее позади Куриямы. Можно добавить перевод названия и смысл стоящий за ним
      </p>

      {/* Center Image - 429:157 */}
      <div
        className="absolute"
        style={{
          left: '39.31%',
          top: '0.00%',
          width: '24.58%',
          height: '85.55%'
        }}
      >
        <img
          src={imgCenter}
          alt="Kuriyama Calligraphy"
          className="w-full h-full object-contain"
          style={{ objectPosition: 'top center' }}
        />
      </div>

      {/* Right Text Title - 429:156 */}
      <p
        className="absolute font-['Glametrix'] text-foreground font-bold"
        style={{
          left: '71.96%',
          top: '51.44%',
          width: '19.52%',
          fontSize: FONT_SIZES.body
        }}
      >
        Курияма (яп. 栗山) - каштановая гора
      </p>

      {/* Right Text Description - 429:155 */}
      <p
        className="absolute font-['Glametrix'] text-foreground"
        style={{
          left: '71.92%',
          top: '58.54%',
          width: '18.47%',
          fontSize: FONT_SIZES.body,
          lineHeight: '1.4'
        }}
      >
        О идее и философии названия, если имеется. Можно заменить на другую информацию
      </p>

    </section>
  );
};

export default ConceptSlide2;
