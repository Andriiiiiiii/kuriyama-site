import React from 'react';
import img1 from '@/assets/concept/slide3/img 1.png';
import img2 from '@/assets/concept/slide3/img 2.png';
import img3 from '@/assets/concept/slide3/img 3.png';
import { FONT_SIZES } from '@/config/typography';

const ConceptSlide3 = () => {
  return (
    <section className="relative w-full h-layout overflow-hidden bg-background">
      {/* Decorative Lines */}
      {/* Line connecting to 2023 (Dot 1) */}
      <div 
        className="absolute border-r border-[#D87A46]/40"
        style={{
          left: '94%', // Far right vertical line
          top: '0%',
          height: '24%', // Down to the horiz line level
        }}
      />
      <div 
        className="absolute border-b border-[#D87A46]/40"
        style={{
          left: '77%', 
          top: '24%', // Level of the dot
          width: '17%', // Connecting right vert line to dot
        }}
      />
       {/* Dot 1 (Top Right) */}
      <div
        className="absolute rounded-full border-2 border-[#D87A46] bg-white z-10"
        style={{
          left: '77%', 
          top: '24%',
          width: '1.5vw',
          height: '1.5vw',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="absolute inset-0 m-auto w-2/3 h-2/3 bg-[#D87A46] rounded-full opacity-60" />
      </div>

       {/* Line connecting to 2025 (Dot 2) - guessing path: Dot 1 -> Left -> Down -> Left -> Dot 2 */}
       {/* Actually, looking at screenshot, there is a line going from Dot 1 LEFT to some point, then DOWN to Dot 2 level, then RIGHT? 
           Or maybe:
           From Dot 1 (x:77) -> Down? No.
           Let's look at the bottom left dot (Dot 2).
           Location: x:27%, y:95% approx (below 2025 image).
           Line goes Left from Dot 2 to x:14%? Then Up?
           Let's assume a "Snake" shape:
           Start Top Right -> Left -> Down -> Right -> Down -> Left.
           But let's keep it simple: Just the visible segments near the dots or connecting them.
           
           I see a line segment going LEFT from Dot 1? Yes.
           I see a line segment near Dot 2 going LEFT and RIGHT?
           
           Let's try to match the screenshot "stepped" line.
           Path: 
           1. Top Right (94%, 0%) -> Down (94%, 24%) -> Left to Dot 1 (77%, 24%).
           2. Dot 1 (77%, 24%) -> Left to x:27%? -> Down to y:95%? -> Right to Dot 2?
           
           Let's just recreate the "frame" visible.
           There is a vertical line on the left? No.
           There is a large vertical line descending from x:27? area?
           
           Let's place the content first, then lines will be easier to adjust relative to them.
       */}
       
       {/* Line from Dot 1 going Left then Down */}
       <div 
         className="absolute border-t border-l border-[#D87A46]/40"
         style={{
           left: '14.5%', // Left vertical line position (left of 2025 img?)
           top: '24%',    // Top horizontal line (from Dot 1 level)
           width: '62.5%', // 77 - 14.5
           height: '71%', // Down to bottom dot level (95 - 24)
         }}
       />
       {/* Bottom horizontal line to Dot 2 */}
        <div 
         className="absolute border-b border-[#D87A46]/40"
         style={{
           left: '14.5%',
           top: '95%',
           width: '12.5%', // To Dot 2 (x=27 approx)
         }}
       />
        {/* Dot 2 (Bottom Left) */}
       <div
        className="absolute rounded-full border-2 border-[#D87A46] bg-white z-10"
        style={{
          left: '27%', // Approx below img 3
          top: '95%',
          width: '1.5vw',
          height: '1.5vw',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="absolute inset-0 m-auto w-2/3 h-2/3 bg-[#D87A46] rounded-full opacity-60" />
      </div>
       
       {/* Extra tail to the right of Dot 2? Screenshot cuts off. */}
       <div 
         className="absolute border-b border-[#D87A46]/40"
         style={{
           left: '27%',
           top: '95%',
           width: '58%', // To right edge
         }}
       />
       {/* Right vertical line up from bottom? */}
        <div 
         className="absolute border-r border-[#D87A46]/40"
         style={{
           left: '85%', 
           top: '95%',
           height: '5%', // Just a stub
         }}
       />


      {/* Page Title - 429:138 */}
      <h2
        className="absolute font-['UA-brand'] font-bold text-foreground uppercase tracking-widest"
        style={{
          left: '8.83%',
          top: '1.70%',
          width: '31.56%',
          fontSize: '4vw',
          lineHeight: 1
        }}
      >
        ИСТОРИЯ
      </h2>

      {/* --- 2021 Group --- */}
      
      {/* Img 1 (2021) - 429:141 */}
      <div
        className="absolute"
        style={{
          left: '15.42%',
          top: '11.70%',
          width: '26.81%',
          height: '24.56%'
        }}
      >
        <img src={img1} alt="2021 history" className="w-full h-full object-cover" />
      </div>

      {/* Year 2021 - 429:144 */}
      <div
        className="absolute font-['UA-brand'] flex flex-col items-center justify-between font-bold text-foreground"
        style={{
          left: '12.26%',
          top: '12.26%',
          width: '1.59%',
          height: '12.13%',
          fontSize: FONT_SIZES.subheading,
          lineHeight: 1
        }}
      >
        <span>2</span>
        <span>0</span>
        <span>2</span>
        <span>1</span>
      </div>

      {/* 2021 Title - 429:149 */}
      <h3
        className="absolute font-['Glametrix'] font-bold text-foreground"
        style={{
          left: '43.67%',
          top: '12.40%',
          width: '7.79%',
          fontSize: FONT_SIZES.medium
        }}
      >
        Заголовок
      </h3>

      {/* 2021 Desc - 429:150 */}
      <p
        className="absolute font-['Glametrix'] text-foreground"
        style={{
          left: '43.68%',
          top: '15.71%',
          width: '27.34%',
          fontSize: FONT_SIZES.body,
          lineHeight: '1.4'
        }}
      >
        Описание, подробнее раскрывающее заголовок. Описание вехи истории пасеки в две-три строчки
      </p>


      {/* --- 2023 Group --- */}

      {/* Img 2 (2023) - 429:140 */}
      <div
        className="absolute"
        style={{
          left: '57.78%',
          top: '29.49%',
          width: '19.79%',
          height: '41.19%'
        }}
      >
        <img src={img2} alt="2023 history" className="w-full h-full object-cover" />
      </div>

      {/* Year 2023 - 429:143 */}
      <div
        className="absolute font-['UA-brand'] flex flex-col items-center justify-between font-bold text-foreground"
        style={{
          left: '79.14%',
          top: '30.06%',
          width: '1.59%',
          height: '12.19%',
          fontSize: FONT_SIZES.subheading,
          lineHeight: 1
        }}
      >
         <span>2</span>
        <span>0</span>
        <span>2</span>
        <span>3</span>
      </div>

      {/* 2023 Title - 429:147 */}
      <h3
        className="absolute font-['Glametrix'] font-bold text-foreground text-right"
        style={{
          left: '38.04%',
          top: '44.40%',
          width: '18.79%', 
          fontSize: FONT_SIZES.medium
        }}
      >
         Заголовок
      </h3>



      {/* 2023 Desc - 429:148 */}
      <p
        className="absolute font-['Glametrix'] text-foreground text-right"
        style={{
          left: '38.05%',
          top: '47.70%',
          width: '16.96%',
          fontSize: FONT_SIZES.body,
          lineHeight: '1.4'
        }}
      >
        Описание, подробнее раскрывающее заголовок. Описание вехи истории пасеки в две-три строчки
      </p>

      {/* --- 2025 Group --- */}

      {/* Img 3 (2025) - 429:139 */}
      <div
        className="absolute"
        style={{
          left: '22.43%',
          top: '61.32%',
          width: '26.88%',
          height: '30.33%'
        }}
      >
        <img src={img3} alt="2025 history" className="w-full h-full object-cover" />
      </div>

      {/* Year 2025 - 429:142 */}
      <div
        className="absolute font-['UA-brand'] flex flex-col items-center justify-between font-bold text-foreground"
        style={{
          left: '19.28%',
          top: '61.89%',
          width: '1.59%',
          height: '12.19%',
          fontSize: FONT_SIZES.subheading,
          lineHeight: 1
        }}
      >
         <span>2</span>
        <span>0</span>
        <span>2</span>
        <span>5</span>
      </div>

      {/* 2025 Title - 429:145 */}
      <h3
        className="absolute font-['Glametrix'] font-bold text-foreground"
        style={{
          left: '50.75%',
          top: '82.25%',
          width: '7.79%',
          fontSize: FONT_SIZES.medium
        }}
      >
        Заголовок
      </h3>

      {/* 2025 Desc - 429:146 */}
      <p
        className="absolute font-['Glametrix'] text-foreground"
        style={{
          left: '50.76%',
          top: '85.55%',
          width: '26.66%',
          fontSize: FONT_SIZES.body,
          lineHeight: '1.4'
        }}
      >
        Описание, подробнее раскрывающее заголовок. Описание вехи истории пасеки в две-три строчки
      </p>

    </section>
  );
};

export default ConceptSlide3;
