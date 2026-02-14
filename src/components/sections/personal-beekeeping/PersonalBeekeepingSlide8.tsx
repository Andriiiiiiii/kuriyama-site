import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';

const PersonalBeekeepingSlide8: React.FC = () => {
    // Canvas from JSON block 8
    const BASE_WIDTH = 1440;
    const BASE_HEIGHT = 915;
    const BLOCK_X = 40010;
    const BLOCK_Y = 6146;
    
    // Helper to calculate percentages
    const pX = (px: number) => `${(px / BASE_WIDTH) * 100}%`;
    const pY = (px: number) => `${(px / BASE_HEIGHT) * 100}%`;

    // Cards Data
    const cards = [
        {
            id: 1,
            number: "1",
            title: "Обслуживание",
            desc: "Описание, подробнее раскрывающее заголовок",
            // Rectangle 162: x: 40230, y: 6531, w: 490, h: 225
            rectPos: { x: 40230 - BLOCK_X, y: 6531 - BLOCK_Y, w: 490, h: 225 }, // 220, 385
            // Number "1": x: 40258.05, y: 6564.6
            numPos: { x: 40258.05 - BLOCK_X, y: 6564.6 - BLOCK_Y }, // 248.05, 418.6
            // Title "Обслуживание": x: 40310.96, y: 6574.48
            titlePos: { x: 40310.96 - BLOCK_X, y: 6574.48 - BLOCK_Y }, // 300.96, 428.48
            // Desc: x: 40255.66, y: 6646.32
            descPos: { x: 40255.66 - BLOCK_X, y: 6646.32 - BLOCK_Y } // 245.66, 500.32
        },
        {
            id: 2,
            number: "2",
            title: "Мед",
            desc: "Описание, подробнее раскрывающее заголовок",
            // Rectangle 224: x: 40740, y: 6531, w: 488, h: 225
            rectPos: { x: 40740 - BLOCK_X, y: 6531 - BLOCK_Y, w: 488, h: 225 }, // 730, 385
            // Number "2": x: 40771.4, y: 6569.65
            numPos: { x: 40771.4 - BLOCK_X, y: 6569.65 - BLOCK_Y }, // 761.4, 423.65
            // Title "Мед": x: 40851.76, y: 6581.64
            titlePos: { x: 40851.76 - BLOCK_X, y: 6581.64 - BLOCK_Y }, // 841.76, 435.64
            // Desc: x: 40770.66, y: 6662.32
            descPos: { x: 40770.66 - BLOCK_X, y: 6662.32 - BLOCK_Y } // 760.66, 516.32
        },
        {
            id: 3,
            number: "3",
            title: "Отчеты",
            desc: "Описание, подробнее раскрывающее заголовок",
            // Rectangle 225: x: 40230, y: 6796, w: 490, h: 225
            rectPos: { x: 40230 - BLOCK_X, y: 6796 - BLOCK_Y, w: 490, h: 225 }, // 220, 650
            // Number "3": x: 40254.9, y: 6842.55
            numPos: { x: 40254.9 - BLOCK_X, y: 6842.55 - BLOCK_Y }, // 244.9, 696.55
            // Title "Отчеты": x: 40310.96, y: 6858.48
            titlePos: { x: 40310.96 - BLOCK_X, y: 6858.48 - BLOCK_Y }, // 300.96, 712.48
            // Desc: x: 40255.66, y: 6919.32
            descPos: { x: 40255.66 - BLOCK_X, y: 6919.32 - BLOCK_Y } // 245.66, 773.32
        },
        {
            id: 4,
            number: "4",
            title: "Посещение",
            desc: "Описание, подробнее раскрывающее заголовок",
            // Rectangle 226: x: 40740, y: 6796, w: 488, h: 225
            rectPos: { x: 40740 - BLOCK_X, y: 6796 - BLOCK_Y, w: 488, h: 225 }, // 730, 650
            // Number "4": x: 40771.95, y: 6829.75
            numPos: { x: 40771.95 - BLOCK_X, y: 6829.75 - BLOCK_Y }, // 761.95, 683.75
            // Title "Посещение": x: 40851.76, y: 6840.64
            titlePos: { x: 40851.76 - BLOCK_X, y: 6840.64 - BLOCK_Y }, // 841.76, 694.64
            // Desc: x: 40770.66, y: 6908.32
            descPos: { x: 40770.66 - BLOCK_X, y: 6908.32 - BLOCK_Y } // 760.66, 762.32
        }
    ];

    return (
        <section 
            className="relative w-full overflow-hidden bg-background text-[#2E261D]"
            style={{ 
                paddingTop: `${(BASE_HEIGHT / BASE_WIDTH) * 100}%`,
            }}
        >
            <div className="absolute inset-0 w-full h-full">
                
                {/* Title "ЧТО ВЫ ПОЛУЧИТЕ" */}
                {/* JSON x: 40134.32, y: 6166.4 -> 124.32, 20.4 */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute font-ua-brand font-bold uppercase leading-none text-[#C65A32]"
                    style={{
                        left: pX(124.32),
                        top: pY(20.4),
                        width: pX(516.45),
                        fontSize: FONT_SIZES.heading,
                        lineHeight: 1
                    }}
                >
                    ЧТО ВЫ <br />ПОЛУЧИТЕ
                </motion.h2>

                {/* Subtitle Description */}
                {/* JSON x: 40130.96, y: 6364.48 -> 120.96, 218.48 */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute font-glametrix text-[#2E261D]"
                    style={{
                        left: pX(120.96),
                        top: pY(218.48),
                        width: pX(500.125),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Описание, подробнее раскрывающее заголовок
                </motion.p>

                {/* Encapsulating Bordered Box (Rectangle 228) */}
                {/* JSON x: 40198, y: 6497 -> 188, 351 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute border border-[#C65A32]"
                    style={{
                        left: pX(188),
                        top: pY(351),
                        width: pX(1064),
                        height: pY(564),
                    }}
                />

                {/* Cards Loop */}
                {cards.map((card, i) => (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                        className="absolute inset-0 w-full h-full pointer-events-none"
                    >
                        {/* Background with Border */}
                        <div 
                            className="absolute bg-[#EFE3D6] border border-[#C65A32]"
                            style={{
                                left: pX(card.rectPos.x),
                                top: pY(card.rectPos.y),
                                width: pX(card.rectPos.w),
                                height: pY(card.rectPos.h),
                            }}
                        />
                        
                        {/* Number */}
                        <div 
                            className="absolute font-ua-brand font-bold text-[#2E261D]"
                            style={{
                                left: pX(card.numPos.x),
                                top: pY(card.numPos.y),
                                fontSize: FONT_SIZES.large, 
                                lineHeight: 1
                            }}
                        >
                            {card.number}
                        </div>

                         {/* Title */}
                        <h3 
                            className="absolute font-ua-brand font-bold text-[#2E261D]"
                            style={{
                                left: pX(card.titlePos.x),
                                top: pY(card.titlePos.y),
                                fontSize: FONT_SIZES.medium,
                            }}
                        >
                            {card.title}
                        </h3>

                         {/* Description */}
                        <p 
                            className="absolute font-glametrix text-[#2E261D]"
                            style={{
                                left: pX(card.descPos.x),
                                top: pY(card.descPos.y),
                                width: pX(343.8),
                                fontSize: FONT_SIZES.body,
                                lineHeight: 1.2
                            }}
                        >
                            {card.desc}
                        </p>
                    </motion.div>
                ))}

            </div>
        </section>
    );
};

export default PersonalBeekeepingSlide8;
