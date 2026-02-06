import React from 'react';
import heroBg from '@/assets/1-background.png'; // Assuming same background as others or generic
import imgRight from '@/assets/volonteering/img right 1.png';
import imgCenter from '@/assets/volonteering/img center 1.png';
// Ellipse 34 and Vector 203 seem to be decorative SVG shapes. 
// "Vector 203" is likely a line or path. "Ellipse 34" is a circle.
// Since I don't have the assets for these specific vector shapes exported as files in the list provided (only images), 
// I will either render them as CSS shapes or SVGs if simple, or placeholders.
// Looking at file list: no "Ellipse 34.svg" or "Vector 203.svg".
// "img 5.svg", "imgs center 4.svg" etc exist.
// Vector 203 is quite large (width 77%). It might be a decorative stroke.
// I will implement them as CSS/SVG inline for now based on descriptions, or try to use generic assets if they match.

import SelectTariffButton from '@/components/shared/SelectTariffButton';
import { FONT_SIZES } from '@/config/typography';

const VolunteeringHero: React.FC = () => {
    const textColor = '#2E261D';

    return (
        <section className="relative w-full h-screen overflow-hidden bg-background">
             {/* Background */}
             <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt=""
                    className="w-full h-full object-fill"
                />
            </div>

            {/* Breadcrumb */}
            <div
                className="absolute z-10 font-['Glametrix'] text-foreground/50 whitespace-nowrap"
                style={{
                    left: '8.42%',
                    top: '11.50%',
                    fontSize: FONT_SIZES.body,
                    width: '11.58%',
                    height: '2.12%'
                }}
            >
                Главная/ Волонтерство
            </div>

            {/* Title */}
            <h1
                className="absolute z-10 font-ua-brand font-bold text-foreground uppercase tracking-tight leading-none"
                style={{
                    left: '8.83%',
                    top: '24.34%',
                    width: '54.09%',
                    fontSize: FONT_SIZES.heading
                }}
            >
                Волонтерство
            </h1>

            {/* Description */}
            <p
                className="absolute z-10 font-['Glametrix'] text-foreground leading-tight"
                style={{
                    left: '8.36%',
                    top: '36.63%',
                    width: '19.86%',
                    fontSize: FONT_SIZES.body
                }}
            >
                Две строчки дополнительного описания подкрепляющего заголовок
            </p>

            {/* Japanese Text 1: 塵 が 積 も っ て (Dust piles up...) */}
             <div
                className="absolute z-10 font-ua-brand select-none flex flex-col items-center justify-start text-center"
                style={{
                    left: '53.33%',
                    top: '37.91%',
                    width: '2.64%',
                    height: '36.16%',
                    fontSize: '2.5vw', 
                    lineHeight: 1.2,
                    writingMode: 'vertical-rl',
                    textOrientation: 'upright',
                    color: textColor,
                    fontWeight: 400
                }}
            >
                 塵が積もって
            </div>

            {/* Japanese Text 2: 山 を 形 成 す る (...to form a mountain) */}
            <div
                className="absolute z-10 font-ua-brand select-none flex flex-col items-center justify-start text-center"
                style={{
                    left: '58.16%',
                    top: '50.16%',
                    width: '2.59%',
                    height: '36.11%',
                    fontSize: '2.5vw',
                    lineHeight: 1.2,
                    writingMode: 'vertical-rl',
                    textOrientation: 'upright',
                    color: textColor,
                    fontWeight: 400
                }}
             >
                 山を形成する
            </div>

            {/* Translation Text */}
             <div
                className="absolute z-10 font-['Glametrix'] text-foreground leading-tight"
                style={{
                    left: '65.05%',
                    top: '63.01%',
                    width: '24.27%',
                    fontSize: FONT_SIZES.body
                }}
            >
                (с яп. «Пыль, нагромождаясь, образует горы») - японская пословица о значительном результате, который складывается из множества скромных, но постоянных усилий
            </div>

            {/* Lead Button Group */}
            <div
                className="absolute z-20"
                style={{
                    left: '8.33%',
                    top: '49.61%',
                    width: '15.21%',
                    height: '28.29%'
                }}
            >
                <SelectTariffButton width="100%" /> 
            </div>

            {/* Images */}
            {/* img right 1 */}
            <div
                className="absolute z-10"
                style={{
                    left: '64.79%',
                    top: '12.53%',
                    width: '26.88%',
                    height: '43.54%'
                }}
            >
                <img src={imgRight} alt="" className="w-full h-full object-contain" />
            </div>

            {/* img center 1 */}
             <div
                className="absolute z-10"
                style={{
                    left: '36.53%',
                    top: '38.50%',
                    width: '12.78%', // Adjusted from pixel conversion if needed, assumed 100% relative to container width
                    height: '39.28%'
                }}
            >
                <img src={imgCenter} alt="" className="w-full h-full object-contain" />
            </div>

             {/* Decorative Elements - Vector 203 (Line) */}
             <svg
                className="absolute pointer-events-none"
                style={{
                    left: '22.74%',
                    top: '34.30%',
                    width: '77.26%',
                    height: '29.26%',
                    zIndex: 5
                }}
                viewBox="0 0 1113 422" // approximated viewbox based on aspect ratio of container width/height
                fill="none"
             >
                 {/* A simple curve approximation since we don't have the path data. 
                     Vector 203 usually implies a line. 
                     The box is wide and somewhat tall. 
                     I'll draw a simple path or leave empty if exact shape unknown, 
                     but better to put something if it's "decorative".
                     If it connects things, a path is good.
                     For now, I'll omit the path d="" as I can't guess the curve. 
                 */}
                  {/* <path d="..." stroke="#C65A32" /> */}
             </svg>
             
             {/* Ellipse 34 - likely a background circle or decorative blob */}
              <div
                className="absolute rounded-full border border-[#C65A32] opacity-30 pointer-events-none"
                style={{
                    left: '84.38%',
                    top: '21.06%',
                    width: '14.58vw', // Using vw for width to keep circle ratio if height is auto or calculate
                    height: '14.58vw', // height in spec is 27.13% (of 1080 ~ 290px). width 14.58% (of 1440 ~ 210px). So it's not a perfect circle in pixels? 
                    // Let's use the percentage directly.
                    // width: '14.58%', height: '27.13%' -> heavily distorted ellipse? 
                    // 14.58% w = 210px. 27.13% h = 293px. Indeed an oval.
                }}
             />

             {/* Actually reusing exact percentages for the ellipse div: */}
             <div
                className="absolute border border-[#C65A32] opacity-50 rounded-[50%] pointer-events-none"
                style={{
                    left: '84.38%',
                    top: '21.06%',
                    width: '14.58%',
                    height: '27.13%'
                }}
             />

        </section>
    );
};

export default VolunteeringHero;
