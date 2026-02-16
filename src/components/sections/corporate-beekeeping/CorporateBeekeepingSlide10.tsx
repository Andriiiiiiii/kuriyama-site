import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
// Images
import leftImage from '@/assets/corporate-beekeeping/10left.webp';
import rightImage from '@/assets/corporate-beekeeping/10right.webp';

const CorporateBeekeepingSlide10: React.FC = () => {
    // Canvas from JSON: width 1440, height 1110
    // Block position: x: 34032, y: 5665
    const BASE_WIDTH = 1440;
    const BASE_HEIGHT = 1110;
    
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

                {/* Right Image (Rectangle 188) */}
                {/* 35012 - 34032 = 980 X, 100 Y */}
                {/* 285 x 359 */}
                <div
                    className="absolute z-10"
                    style={{
                        left: pX(980),
                        top: pY(100),
                        width: pX(285),
                        height: pY(359),
                    }}
                >
                     <img 
                        src={rightImage} 
                        alt="Rest" 
                        className="w-full h-full object-cover"
                    />
                </div>
                
                {/* Title "Как компания использует свои улья" */}
                {/* 34156.8 - 34032 = 124.8 X */}
                {/* 5785.4 - 5665 = 120.4 Y */}
                <h2
                    className="absolute font-ua-brand font-bold uppercase leading-none text-[#C65A32]"
                    style={{
                        left: pX(124.8),
                        top: pY(120.4),
                        width: pX(761.8),
                        fontSize: FONT_SIZES.heading,
                        lineHeight: 1
                    }}
                >
                    КАК КОМПАНИЯ ИСПОЛЬЗУЕТ СВОИ УЛЬЯ
                </h2>

                {/* Left Image (Rectangle 223) */}
                {/* 34152 - 34032 = 120 X */}
                {/* 6124 - 5665 = 459 Y */}
                {/* 595 x 506 */}
                <div
                    className="absolute"
                    style={{
                        left: pX(120),
                        top: pY(459),
                        width: pX(595),
                        height: pY(506),
                    }}
                >
                     <img 
                        src={leftImage} 
                        alt="Using hives" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Left Image Caption "Для отдыха" */}
                {/* 34152.6 - 34032 = 120.6 X */}
                {/* 6677.6 - 5665 = 1012.6 Y */}
                <p
                    className="absolute font-glametrix font-bold"
                    style={{
                        left: pX(120.6),
                        top: pY(1012.6),
                        fontSize: FONT_SIZES.body,
                    }}
                >
                    Для отдыха
                </p>
                 {/* Left Image subtext */}
                 {/* 34152.4 - 34032 = 120.4 X */}
                 {/* 6719.4 - 5665 = 1054.4 Y */}
                <p
                    className="absolute font-glametrix"
                    style={{
                        left: pX(120.4),
                        top: pY(1054.4),
                        width: pX(272.5),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Две строчки дополнительного описания подкрепляющего заголовок
                </p>

                {/* Quote Box (Rectangle 162) */}
                {/* 34794 - 34032 = 762 X */}
                {/* 6264 - 5665 = 599 Y */}
                {/* 558 x 510.7 */}
                <div
                    className="absolute bg-[#EFE3D6] border border-[#C65A32]"
                    style={{
                        left: pX(762),
                        top: pY(599),
                        width: pX(558),
                        height: pY(510.7),
                    }}
                />

                {/* Quote Title "“КАК МЕДИТАЦИЯ”" */}
                {/* 34826 - 34032 = 794 X */}
                {/* 6319 - 5665 = 654 Y */}
                <h3
                    className="absolute font-ua-brand font-bold uppercase text-[#2E261D]"
                    style={{
                         left: pX(794),
                         top: pY(654),
                         fontSize: FONT_SIZES.body,
                    }}
                >
                    “КАК МЕДИТАЦИЯ”
                </h3>

                {/* Quote Author */}
                {/* 35009 - 34032 = 977 X */}
                {/* 6358 - 5665 = 693 Y */}
                <p
                     className="absolute font-glametrix text-[#2E261D] italic"
                     style={{
                         left: pX(977),
                         top: pY(693),
                         fontSize: FONT_SIZES.small,
                     }}
                >
                    - Михаил Иванов, директор компании Х
                </p>

                {/* Quote Text */}
                {/* 34825.5 - 34032 = 793.5 X */}
                {/* 6416 - 5665 = 751 Y */}
                <p
                     className="absolute font-glametrix text-[#2E261D]"
                     style={{
                         left: pX(793.5),
                         top: pY(751),
                         width: pX(493.4),
                         fontSize: FONT_SIZES.body,
                         lineHeight: 1.2
                     }}
                >
                    Сотрудники компании отдыхают над работающими ульями, вдыхая целебные ароматы и ощущая вибрации, которые успокаивают нервную систему, снимают стресс, улучшают сон и иммунитет. Это создаёт уникальный микроклимат с ионизированным воздухом, запахом меда и воска, а также успокаивающим жужжанием, сравнимым с медитацией.
                </p>

            </div>
        </section>
    );
};

export default CorporateBeekeepingSlide10;
