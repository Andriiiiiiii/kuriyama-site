import React from 'react';
import { FONT_SIZES } from '@/config/typography';
import imgRight from '@/assets/volonteering/img right 2.png';
import imgLeft from '@/assets/volonteering/img left 2.png';
import imgCenter from '@/assets/volonteering/img center 2.png';
import imgBottom from '@/assets/volonteering/img bottom 2.svg';

const VolunteeringSlide2: React.FC = () => {
    const textColor = '#2E261D';
    const accentColor = '#C65A32';

    return (
        <section className="relative w-full h-screen overflow-hidden bg-white">
            
            {/* Title: наша миссия */}
            <div
                className="absolute z-10 font-ua-brand font-bold uppercase tracking-tight text-center flex items-center justify-center"
                style={{
                    left: '24.94%',
                    top: '10.83%',
                    width: '50.16%',
                    // height: '8.18%', // Height can be restrictive for text if font size doesn't match perfectly, but let's keep it for positioning reference
                    color: accentColor,
                    fontSize: FONT_SIZES.heading,
                    lineHeight: 1
                }}
            >
                наша миссия
            </div>

            {/* Text */}
            <p
                className="absolute z-10 font-glametrix text-center"
                style={{
                    left: '36.67%',
                    top: '25.20%',
                    width: '23.66%',
                    // height: '5.38%',
                    color: textColor,
                    fontSize: FONT_SIZES.body,
                    lineHeight: 1.2
                }}
            >
                Небольшой текст про то, почему мы это делаем и зачем нужны волонтёры
            </p>

            {/* Images */}

            {/* img right 2 */}
            <div
                className="absolute"
                style={{
                    left: '68%',
                    top: '0.00%',
                    width: '19.79%',
                    height: '37.71%',
                    zIndex: 0
                }}
            >
                <img src={imgRight} alt="" className="w-full h-full object-contain" />
            </div>

            {/* img left 2 */}
            <div
                className="absolute"
                style={{
                    left: '8.33%',
                    top: '24.59%',
                    width: '19.79%',
                    height: '38.54%'
                }}
            >
                <img src={imgLeft} alt="" className="w-full h-full object-contain" />
            </div>

            {/* img center 2 */}
            <div
                className="absolute"
                style={{
                    left: '48.21%',
                    top: '43.09%',
                    width: '19.79%',
                    height: '31.22%'
                }}
            >
                <img src={imgCenter} alt="" className="w-full h-full object-contain" />
            </div>

            {/* img bottom 2 */}
            <div
                className="absolute"
                style={{
                    left: '78.19%',
                    top: '61.74%',
                    width: '6.39%',
                    height: '38.26%'
                }}
            >
                <img src={imgBottom} alt="" className="w-full h-full object-contain" />
            </div>

        </section>
    );
};

export default VolunteeringSlide2;
