import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES, TYPOGRAPHY_CONFIG } from '@/config/typography';
// Images
import group8 from '@/assets/corporate-beekeeping/8group.webp';

const CorporateBeekeepingSlide8: React.FC = () => {
    // Canvas from JSON: width 1440, height 754
    // Block position: x: 34032, y: 3996
    const BASE_WIDTH = 1440;
    const BASE_HEIGHT = 670;
    
    // Helper to calculate vw-based values consistent with typography
    // Using 1440 as base to match Figma coordinates exactly, but scaling to 100vw
    const toVw = (px: number) => `calc(${px} / ${BASE_WIDTH} * 100vw)`;

    return (
        <section 
            className="relative w-full overflow-hidden bg-white text-[#2E261D]"
            style={{ 
                height: toVw(BASE_HEIGHT),
            }}
        >
            <div className="absolute inset-0 w-full h-full">
                
                {/* Image Group Right */}
                {/* Figma: Group 83 (x: 34714, y: 4067) -> Rel X: 682, Rel Y: 71 
                    Size: 558 x 583
                */}
                 <div
                    className="absolute"
                    style={{
                        left: toVw(650),
                        top: toVw(71),
                        width: toVw(548),
                        height: toVw(583),
                    }}
                >
                     <img 
                        src={group8} 
                        alt="Audience" 
                        className="w-full h-full object-contain"
                    />
                </div>


                {/* Title "КОМУ ПОДОЙДЕТ" */}
                {/* Figma: x: 34159.2 -> Rel X: 127.2
                    y: 4001.1 -> Rel Y: 5.1
                */}
                <h2
                    className="absolute font-ua-brand font-bold uppercase leading-none text-black"
                    style={{
                        left: toVw(127.2),
                        top: toVw(5.1), 
                        width: toVw(847.9),
                        fontSize: FONT_SIZES.heading,
                        lineHeight: 1
                    }}
                >
                    КОМУ ПОДОЙДЕТ
                </h2>

                {/* Subtitle / Intro Text */}
                {/* "Описание, подробнее раскрывающее заголовок" id: 293:437
                    Figma: x: 34153, y: 4114.5 -> Rel X: 121, Rel Y: 118.5
                */}
                <p
                    className="absolute font-glametrix text-[#2E261D]"
                    style={{
                        left: toVw(130),
                        top: toVw(90),
                        width: toVw(500),
                        fontSize: FONT_SIZES.subheading,
                        lineHeight: 1.2
                    }}
                >
                    Описание, подробнее раскрывающее заголовок
                </p>
                
              

                {/* List Items (Inside/Over Box) */}


                 {/* Bordered Box Container */}
                                <div
                                    className="absolute border-2 border-[#C65A32] flex flex-col justify-center"
                                    style={{
                                        left: toVw(120), 
                                        top: toVw(150),
                                        width: toVw(450), // Increased slightly
                                        height: toVw(430), // Increased slightly
                                        padding: `${toVw(20)} ${toVw(25)}`, // Lock padding effectively
                                        gap: toVw(40)
                                    }}
                                >
                                    {/* Items using flexbox distribution */}
                                    {[1, 2, 3].map((item, index) => (
                                        <div key={item} className="relative">
                                            <h3 
                                                className="font-glametrix font-bold whitespace-nowrap"
                                                style={{ fontSize: FONT_SIZES.subheading }}
                                            >
                                                Для кого {item} 
                                            </h3>
                                            <p 
                                                className="font-glametrix"
                                                style={{
                                                    marginTop: `calc(${FONT_SIZES.body} * 0.8)`,
                                                    fontSize: FONT_SIZES.body,
                                                    lineHeight: 1.2
                                                }}
                                            >
                                                Описание, подробнее раскрывающее заголовок
                                            </p>
                                        </div>
                                    ))}
                                </div>
            
            </div>
        </section>
    );
};

export default CorporateBeekeepingSlide8;
