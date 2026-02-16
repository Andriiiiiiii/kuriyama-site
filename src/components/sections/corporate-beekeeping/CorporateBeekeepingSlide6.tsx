import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import groupImage from '@/assets/corporate-beekeeping/6group.webp';

const CorporateBeekeepingSlide6: React.FC = () => {
    const BASE_WIDTH = 1440;
    const BASE_HEIGHT = 840;
    
    // Helper to calculate percentages
    const pX = (px: number) => `${(px / BASE_WIDTH) * 100}%`;
    const pY = (px: number) => `${(px / BASE_HEIGHT) * 100}%`;

    return (
        <section 
            className="relative w-full overflow-hidden bg-white text-[#2E261D]"
            style={{ 
                paddingTop: `${(BASE_HEIGHT / BASE_WIDTH) * 100}%`,
            }}
        >
            <div className="absolute inset-0 w-full h-full">
                
                {/* Title "АРЕНДА МЕСТА" */}
                {/* x: 120.8, y: 112.4 */}
                <h2
                    className="absolute font-ua-brand font-bold uppercase leading-none"
                    style={{
                        left: pX(120.8),
                        top: pY(112.4),
                        width: '100%',
                        fontSize: FONT_SIZES.heading,
                        lineHeight: 1
                    }}
                >
                    АРЕНДА МЕСТА <br/>
                    <span style={{ paddingLeft: '37%', whiteSpace: 'nowrap' }}>ДЛЯ УЛЬЯ</span>
                </h2>

                {/* Left Image Group */}
                {/* x: 120, y: 257 */}
                <div
                    className="absolute"
                    style={{
                        left: pX(130),
                        top: pY(240),
                        width: pX(500), // Increased slightly
                        height: pY(520), // Increased slightly
                    }}
                >
                     <img 
                        src={groupImage} 
                        alt="Apiary views" 
                        className="w-full h-full object-contain"
                    />
                </div>


                {/* Description */}
                {/* x: 730.66, y: 303.33 */}
                <p 
                    className="absolute font-glametrix"
                    style={{
                        left: pX(660.7),
                        top: pY(280),
                        width: pX(346.7),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Описание, подробнее раскрывающее заголовок.
                </p>

                {/* Bordered Box Container */}
                <div
                    className="absolute border-2 border-[#C65A32] flex flex-col justify-between"
                    style={{
                        left: pX(660), 
                        top: pY(340),
                        width: pX(450), // Increased slightly
                        height: pY(430), // Increased slightly
                        padding: '3% 4%', // Responsive padding
                    }}
                >
                    {/* Items using flexbox distribution */}
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="relative">
                            <h3 
                                className="font-glametrix font-bold"
                                style={{ fontSize: FONT_SIZES.subheading }}
                            >
                                Пасека {item}
                            </h3>
                            <p 
                                className="font-glametrix mt-2"
                                style={{
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

export default CorporateBeekeepingSlide6;
