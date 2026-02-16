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
            // Relative coordinates - Recalculated for smaller table moved up
            rect: { x: 300, y: 310, w: 410, h: 200 },
            numPos: { x: 328, y: 345 },
            titlePos: { x: 380, y: 355 },
            descPos: { x: 325, y: 425 },
        },
        {
            id: 2,
            number: "2",
            title: "Мед",
            desc: "Описание, подробнее раскрывающее заголовок",
            rect: { x: 730, y: 310, w: 410, h: 200 },
            numPos: { x: 758, y: 345 },
            titlePos: { x: 810, y: 355 },
            descPos: { x: 755, y: 425 },
        },
        {
            id: 3,
            number: "3",
            title: "Отчеты",
            desc: "Описание, подробнее раскрывающее заголовок",
            rect: { x: 300, y: 530, w: 410, h: 200 },
            numPos: { x: 328, y: 565 },
            titlePos: { x: 380, y: 575 },
            descPos: { x: 325, y: 645 },
        },
        {
            id: 4,
            number: "4",
            title: "Посещение",
            desc: "Описание, подробнее раскрывающее заголовок",
            rect: { x: 730, y: 530, w: 410, h: 200 },
            numPos: { x: 758, y: 565 },
            titlePos: { x: 810, y: 575 },
            descPos: { x: 755, y: 645 },
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
                <h2
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
                </h2>

                {/* Subtitle Description */}
                {/* Rel X: 121, Rel Y: 218.5 */}
                <p
                    className="absolute font-glametrix text-[#2E261D]"
                    style={{
                        left: pX(127),
                        top: pY(190),
                        width: pX(500),
                        fontSize: FONT_SIZES.subheading,
                        lineHeight: 1.2
                    }}
                >
                    Описание, подробнее раскрывающее заголовок
                </p>

                {/* Large Background Box (Rectangle 228) */}
                {/* Adjusted: Moved UP, Smaller Size */}
                <div
                    className="absolute border-2 border-[#C65A32]"
                    style={{
                        left: pX(250),
                        top: pY(260),
                        width: pX(940),
                        height: pY(520),
                    }}
                />

                {/* Cards Grid */}
                {cards.map((card, i) => (
                    <div
                        key={card.id}
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
                            className="absolute font-['Han-Zi'] text-[#2E261D]"
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
                            className="absolute font-['UA-Brand'] font-bold text-[#2E261D]" // Using UA-Brand for internal titles in this slide? JSON doesn't specify but visually seems likely or Glametrix Bold
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
                            className="absolute font-['Glametrix'] text-[#2E261D]"
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

                    </div>
                ))}

            </div>
        </section>
    );
};

export default CorporateBeekeepingSlide9;
