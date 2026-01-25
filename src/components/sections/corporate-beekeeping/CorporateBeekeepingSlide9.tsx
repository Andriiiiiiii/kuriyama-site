import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';

const CorporateBeekeepingSlide9: React.FC = () => {
    // Canvas from JSON: width 1438 (use 1440), height 915
    // Block position: x: 34032, y: 4750
    const BASE_WIDTH = 1440;
    const BASE_HEIGHT = 915;
    
    // Helper to calculate percentages
    const pX = (px: number) => `${(px / BASE_WIDTH) * 100}%`;
    const pY = (px: number) => `${(px / BASE_HEIGHT) * 100}%`;

    // Data for the 4 cards
    const cards = [
        {
            id: 1,
            number: "1",
            title: "Обслуживание",
            desc: "Описание, подробнее раскрывающее заголовок",
            // Relative coordinates
            rect: { x: 220, y: 385, w: 490, h: 225 },
            numPos: { x: 248, y: 418.6 },
            titlePos: { x: 301, y: 428.5 },
            descPos: { x: 245.6, y: 500.3 },
        },
        {
            id: 2,
            number: "2",
            title: "Мед",
            desc: "Описание, подробнее раскрывающее заголовок",
            rect: { x: 730, y: 385, w: 488, h: 225 },
            numPos: { x: 761.4, y: 423.6 },
            titlePos: { x: 841.8, y: 435.6 },
            descPos: { x: 760.6, y: 516.3 },
        },
        {
            id: 3,
            number: "3",
            title: "Отчеты",
            desc: "Описание, подробнее раскрывающее заголовок",
            rect: { x: 220, y: 650, w: 490, h: 225 },
            numPos: { x: 244.9, y: 696.5 },
            titlePos: { x: 301, y: 712.5 },
            descPos: { x: 245.6, y: 773.3 },
        },
        {
            id: 4,
            number: "4",
            title: "Посещение",
            desc: "Описание, подробнее раскрывающее заголовок",
            rect: { x: 730, y: 650, w: 488, h: 225 },
            numPos: { x: 762, y: 683.7 },
            titlePos: { x: 841.8, y: 694.6 },
            descPos: { x: 760.6, y: 762.3 },
        }
    ];

    return (
        <section 
            className="relative w-full overflow-hidden bg-white text-[#2E261D]"
            style={{ 
                paddingTop: `${(BASE_HEIGHT / BASE_WIDTH) * 100}%`,
            }}
        >
            <div className="absolute inset-0 w-full h-full">
                
                {/* Title "ЧТО ВЫ ПОЛУЧИТЕ" */}
                {/* Rel X: 124.3, Rel Y: 20.4 */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute font-ua-brand font-bold uppercase leading-none text-[#C65A32]"
                    style={{
                        left: pX(124.3),
                        top: pY(20.4),
                        width: pX(516.4),
                        fontSize: FONT_SIZES.heading,
                        lineHeight: 1
                    }}
                >
                    ЧТО ВЫ <br />ПОЛУЧИТЕ
                </motion.h2>

                {/* Subtitle Description */}
                {/* Rel X: 121, Rel Y: 218.5 */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute font-glametrix text-[#2E261D]"
                    style={{
                        left: pX(121),
                        top: pY(218.5),
                        width: pX(500),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Описание, подробнее раскрывающее заголовок
                </motion.p>

                {/* Large Background Box (Rectangle 228) */}
                {/* Rel X: 186, Rel Y: 351, W: 1064, H: 564 */}
                {/* This box encloses the 4 grid items */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute border border-[#C65A32]"
                    style={{
                        left: pX(186),
                        top: pY(351),
                        width: pX(1064),
                        height: pY(564),
                    }}
                />

                {/* Cards Grid */}
                {cards.map((card, i) => (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                        className="absolute inset-0 pointer-events-none"
                    >
                        {/* Card Background Rect */}
                        <div 
                            className="absolute bg-[#EFE3D6] border border-[#C65A32]"
                            style={{
                                left: pX(card.rect.x),
                                top: pY(card.rect.y),
                                width: pX(card.rect.w),
                                height: pY(card.rect.h),
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
                            className="absolute font-ua-brand font-bold text-[#2E261D]" // Using UA-Brand for internal titles in this slide? JSON doesn't specify but visually seems likely or Glametrix Bold
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

export default CorporateBeekeepingSlide9;
