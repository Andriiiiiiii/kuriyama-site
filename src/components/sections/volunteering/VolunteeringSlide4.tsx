import React from 'react';
import { FONT_SIZES } from '@/config/typography';
import imgCenter from '@/assets/volonteering/imgs center 4.svg';

const VolunteeringSlide4: React.FC = () => {
    const textColor = '#2E261D';
    const accentColor = '#C65A32';

    return (
        <section className="relative w-full h-layout overflow-hidden bg-transparent -mt-[10%] z-30">
            {/* Background Layer to allow transparency at bottom for overlap */}
            <div 
                className="absolute top-0 left-0 w-full bg-white" 
                style={{ height: '83%', zIndex: 0 }} 
            />
            
            {/* Title: что мы предлагаем */}
            <div
                className="absolute z-10 font-ua-brand font-bold uppercase tracking-tight text-center flex items-center justify-center"
                style={{
                    left: '8.63%',
                    top: '2.80%',
                    width: '72.77%',
                    // height: '9.72%',
                    color: accentColor,
                    fontSize: FONT_SIZES.heading,
                    lineHeight: 1
                }}
            >
                что мы предлагаем
            </div>

            {/* Decorative Frames */}
            {/* Rectangle 223 - Outer Frame */}
            <div
                className="absolute border border-[#C65A32]"
                style={{
                    left: '7.71%',
                    top: '17.86%',
                    width: '84.58%',
                    height: '67.99%',
                    pointerEvents: 'none',
                    zIndex: 5
                }}
            />

            {/* Rectangle 200 - Inner Frame */}
            <div
                className="absolute border border-[#C65A32]"
                style={{
                    left: '8.33%',
                    top: '19.09%',
                    width: '83.33%',
                    height: '65.52%',
                    pointerEvents: 'none',
                    zIndex: 5
                }}
            />

            {/* Left Top Column */}
            <div
                className="absolute z-10 font-ua-brand font-bold"
                style={{
                    left: '11.14%',
                    top: '27.13%',
                    width: '18.92%', // Matched width with description for alignment
                    // height: '2.15%',
                    color: textColor,
                    fontSize: FONT_SIZES.medium, // Increased size
                    lineHeight: 1.2
                }}
            >
                Заголовок
            </div>
            <div
                className="absolute z-10 font-glametrix"
                style={{
                    left: '11.14%',
                    top: '32.89%',
                    width: '18.92%',
                    // height: '5.21%',
                    color: textColor,
                    fontSize: FONT_SIZES.body, // Increased size
                    lineHeight: 1.2
                }}
            >
                Две строчки дополнительного описания подкрепляющего заголовок
            </div>

            {/* Right Top Column */}
            <div
                className="absolute z-10 font-ua-brand font-bold"
                style={{
                    left: '69.13%', // Aligned with description
                    top: '27.13%',
                    width: '18.92%', // Matched width
                    // height: '2.15%',
                    color: textColor,
                    fontSize: FONT_SIZES.medium, // Increased size
                    lineHeight: 1.2
                }}
            >
                Заголовок
            </div>
            <div
                className="absolute z-10 font-glametrix"
                style={{
                    left: '69.13%',
                    top: '32.89%',
                    width: '18.92%',
                    // height: '5.21%',
                    color: textColor,
                    fontSize: FONT_SIZES.body, // Increased size
                    lineHeight: 1.2
                }}
            >
                Две строчки дополнительного описания подкрепляющего заголовок
            </div>

            {/* Left Bottom Column */}
            <div
                className="absolute z-10 font-ua-brand font-bold"
                style={{
                    left: '11.14%',
                    top: '66.40%',
                    width: '18.92%', // Matched width
                    // height: '2.15%',
                    color: textColor,
                    fontSize: FONT_SIZES.medium, // Increased size
                    lineHeight: 1.2
                }}
            >
                Заголовок
            </div>
            <div
                className="absolute z-10 font-glametrix"
                style={{
                    left: '11.14%',
                    top: '72.17%',
                    width: '18.92%',
                    // height: '5.21%',
                    color: textColor,
                    fontSize: FONT_SIZES.body, // Increased size
                    lineHeight: 1.2
                }}
            >
                Две строчки дополнительного описания подкрепляющего заголовок
            </div>

            {/* Right Bottom Column */}
            <div
                className="absolute z-10 font-ua-brand font-bold"
                style={{
                    left: '69.13%', // Aligned
                    top: '66.40%',
                    width: '18.92%', // Matched width
                    // height: '2.15%',
                    color: textColor,
                    fontSize: FONT_SIZES.medium, // Increased size
                    lineHeight: 1.2
                }}
            >
                Заголовок
            </div>
            <div
                className="absolute z-10 font-glametrix"
                style={{
                    left: '69.13%',
                    top: '72.17%',
                    width: '18.92%',
                    // height: '5.21%',
                    color: textColor,
                    fontSize: FONT_SIZES.body, // Increased size
                    lineHeight: 1.2
                }}
            >
                Две строчки дополнительного описания подкрепляющего заголовок
            </div>

            {/* Center Image Group */}
            <div
                className="absolute"
                style={{
                    left: '42.01%',
                    top: '20.47%',
                    width: '16.67%',
                    height: '65.79%',
                    zIndex: 0
                }}
            >
                <img src={imgCenter} alt="" className="w-full h-full object-contain" />
            </div>

        </section>
    );
};

export default VolunteeringSlide4;
