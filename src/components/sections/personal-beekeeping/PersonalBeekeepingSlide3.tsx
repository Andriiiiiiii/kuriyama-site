import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
// Images
import rightImage from '@/assets/corporate-beekeeping/3right.webp';

const PersonalBeekeepingSlide3: React.FC = () => {
    // Canvas from JSON: width 1437, height 797
    const BASE_WIDTH = 1437;
    const BASE_HEIGHT = 797;
    
    // Relative position helpers
    const pX = (px: number) => `${(px / BASE_WIDTH) * 100}%`;
    const pY = (px: number) => `${(px / BASE_HEIGHT) * 100}%`;

    const steps = [
        {
            id: 1,
            num: "1",
            title: "Шаг 1",
            desc: "Описание, подробнее раскрывающее заголовок",
            lineLeft: pX(116.5),
            lineTop: pY(370),
            numLeft: pX(136),
            numTop: pY(346),
            titleLeft: pX(138.7),
            titleTop: pY(462.6),
            descLeft: pX(137.6),
            descTop: pY(504.3),
            hasLine: true
        },
        {
            id: 2,
            num: "2",
            title: "Шаг 2",
            desc: "Описание, подробнее раскрывающее заголовок",
            lineLeft: pX(523.5),
            lineTop: pY(370),
            numLeft: pX(546.8),
            numTop: pY(346.3),
            titleLeft: pX(545.8),
            titleTop: pY(462.5),
            descLeft: pX(544.6),
            descTop: pY(504.3),
            hasLine: true
        },
        {
            id: 3,
            num: "3",
            title: "Шаг 3",
            desc: "Описание, подробнее раскрывающее заголовок",
            lineLeft: pX(0),
            lineTop: pY(0), 
            numLeft: pX(851.8),
            numTop: pY(346.1),
            titleLeft: pX(853.8),
            titleTop: pY(462.5),
            descLeft: pX(852.6),
            descTop: pY(504.3),
            hasLine: false
        }
    ];

    return (
        <section 
            className="relative w-full overflow-hidden bg-white text-[#333333]"
            style={{ 
                paddingTop: `${(BASE_HEIGHT / BASE_WIDTH) * 100}%`,
                position: 'relative'
            }}
        >
            <div
                className="absolute"
                style={{
                    left: '58%',
                    top: '13%',
                    height: '68%',
                    width: '25%'
                }}
            >   
                <img src={rightImage} alt="Wood texture" className="w-full h-auto shadow-lg" />
            </div>

                 {/* Title "КАК ЭТО РАБОТАЕТ" */}
                 <h2
                    className="absolute font-ua-brand font-bold uppercase leading-none text-[#2E261D]"
                    style={{
                        left: pX(124.2),
                        top: pY(120.4),
                        width: pX(483),
                        height: pY(159),
                        fontSize: FONT_SIZES.heading,
                        lineHeight: 1
                    }}
                >
                    КАК ЭТО<br/>РАБОТАЕТ
                </h2>

                {steps.map((step, index) => (
                    <React.Fragment key={step.id}>
                        {/* Vertical Line */}
                        {step.hasLine && (
                            <div 
                                className="absolute bg-[#C65A32]"
                                style={{
                                    left: step.lineLeft,
                                    top: step.lineTop,
                                    width: '1px',
                                    height: pY(201)
                                }}
                            />
                        )}

                        {/* Number - Now Text */}
                        <div
                            className="absolute font-['Han-Zi'] text-[#2E261D]"
                            style={{
                                left: step.numLeft,
                                top: step.numTop,
                                fontSize: FONT_SIZES.heading,
                                lineHeight: 1
                            }}
                        >
                            {step.num}
                        </div>

                        {/* Title */}
                        <h3
                            className="absolute font-glametrix font-bold text-[#2E261D]"
                            style={{
                                left: step.titleLeft,
                                top: step.titleTop,
                                fontSize: FONT_SIZES.subheading,
                            }}
                        >
                            {step.title}
                        </h3>

                        {/* Desc */}
                        <p
                            className="absolute font-glametrix text-[#2E261D]/70"
                            style={{
                                left: step.descLeft,
                                top: step.descTop,
                                width: pX(186),
                                fontSize: FONT_SIZES.body,
                                lineHeight: 1.2
                            }}
                        >
                            {step.desc}
                        </p>
                    </React.Fragment>
                ))}

                 

  </section>
    );
};

export default PersonalBeekeepingSlide3;
