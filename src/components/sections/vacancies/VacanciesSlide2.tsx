import React from 'react';
import { FONT_SIZES } from '@/config/typography';
import leftImage from '@/assets/vacancies/left_image_2.png';
import rightImage from '@/assets/vacancies/right_image_2.png';

const VacanciesSlide2: React.FC = () => {
    // Colors from JSON
    const textColor = '#2E261D';
    const accentColor = '#C65A32';

    return (
        <section className="relative w-full h-screen overflow-hidden bg-transparent">
            {/* Background color approximation or use a class if defined */}
            
            {/* 1. Header 1 (Top Left) */}
            <div
                className="absolute z-10 font-ua-brand font-bold uppercase"
                style={{
                    left: '15.13%',
                    top: '1.70%',
                    width: '7.79%',
                    color: textColor,
                    fontSize: FONT_SIZES.body, // approximated
                    lineHeight: 1.2
                }}
            >
                Заголовок
            </div>
            <div
                className="absolute z-10 font-glametrix"
                style={{
                    left: '15.10%',
                    top: '10.13%',
                    width: '18.92%',
                    color: textColor,
                    fontSize: FONT_SIZES.small, // approximated
                    lineHeight: 1.2
                }}
            >
                Две строчки дополнительного описания подкрепляющего заголовок
            </div>

            {/* 2. Header 2 (Top Right) */}
            <div
                className="absolute z-10 font-ua-brand font-bold uppercase"
                style={{
                    left: '65.5%',
                    top: '10.74%',
                    width: '7.79%',
                    color: textColor,
                    fontSize: FONT_SIZES.body,
                    lineHeight: 1.2
                }}
            >
                Заголовок
            </div>
            <div
                className="absolute z-10 font-glametrix"
                style={{
                    left: '65.5%',
                    top: '19.16%',
                    width: '18.92%',
                    color: textColor,
                    fontSize: FONT_SIZES.small,
                    lineHeight: 1.2
                }}
            >
                Две строчки дополнительного описания подкрепляющего заголовок
            </div>

            {/* 3. Central Big Text */}
            <div
                className="absolute z-10 font-ua-brand font-bold uppercase tracking-tight"
                style={{
                    left: '23.00%',
                    top: '37.63%',
                    width: '54.12%',
                    color: accentColor,
                    fontSize: FONT_SIZES.heading, // "giant" might be too big if container was small, but let's try heading or large
                    lineHeight: 1
                }}
            >
                кого мы ищем
            </div>

            {/* 4. Header 3 (Bottom Left - seemingly below center) */}
            <div
                className="absolute z-10 font-ua-brand font-bold uppercase"
                style={{
                    left: '22.49%',
                    top: '63.35%',
                    width: '7.79%',
                    color: textColor,
                    fontSize: FONT_SIZES.body,
                    lineHeight: 1.2
                }}
            >
                Заголовок
            </div>
            <div
                className="absolute z-10 font-glametrix"
                style={{
                    left: '22.46%',
                    top: '71.78%',
                    width: '18.92%',
                    color: textColor,
                    fontSize: FONT_SIZES.small,
                    lineHeight: 1.2
                }}
            >
                Две строчки дополнительного описания подкрепляющего заголовок
            </div>

            {/* Images */}
            {/* right_image_2 */}
            <div
                className="absolute"
                style={{
                    left: '64.79%',
                    top: '61.65%',
                    width: '12.78%',
                    height: '18.27%'
                }}
            >
                 <img src={rightImage} alt="" className="w-full h-full object-contain" />
            </div>

            {/* left_image_2 - z-index might need adjustment if it overlaps text, but following list order it is on top */}
            <div
                className="absolute"
                style={{
                    left: '5.07%',
                    top: '15.06%',
                    width: '16.67%',
                    height: '84.94%'
                }}
            >
                <img src={leftImage} alt="" className="w-full h-full object-contain" />
            </div>

        </section>
    );
};

export default VacanciesSlide2;
