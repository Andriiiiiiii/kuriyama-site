import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import SelectTariffButton from '@/components/shared/SelectTariffButton';

// Images
import ropeLeft from '@/assets/personal-beekeeping/7-rope-left.png';
import ropeMiddle from '@/assets/personal-beekeeping/7-rope-middle.png';
import ropeRight from '@/assets/personal-beekeeping/7-rope-right.png';
import groupLeft from '@/assets/personal-beekeeping/7-group-left.png';
import groupMiddle from '@/assets/personal-beekeeping/7-group-middle.png';
import groupRight from '@/assets/personal-beekeeping/7-group-right.png';

const PersonalBeekeepingSlide7: React.FC = () => {
    // Canvas from JSON block 7
    // position: x: 40012, y: 4991
    // size: w: 1438, h: 1153
    // Note: Standard width is usually 1440. 1438 is very close. I will use 1440 for consistency with other slides if possible, or 1438 if strictly required. 
    // Usually these designs are 1440. Let's use 1440 as BASE_WIDTH to match standard grid, but calculate relative to the block's content.
    // However, the JSON says width 1438. Let's check relative positions.
    const BASE_WIDTH = 1440;
    const BASE_HEIGHT = 1153;
    const BLOCK_X = 40012;
    const BLOCK_Y = 4991;
    
    const pX = (px: number) => `${(px / BASE_WIDTH) * 100}%`;
    const pY = (px: number) => `${(px / BASE_HEIGHT) * 100}%`;

    // Coordinates mapping from JSON
    const cards = [
        {
            // 1 type (Left) - "Треть улья"
            id: 1,
            title: "Треть улья",
            desc: "Небольшое описание \nв две строчки",
            price: "15 000",
            image: groupLeft,
            rope: ropeLeft,
            
            // Rope 1: x: 40224, y: 5208, w: 183, h: 169
            ropePos: { 
                x: 40224 - BLOCK_X, // 212
                y: 5208 - BLOCK_Y,  // 217
                w: 183, 
                h: 169 
            },
            
            // Group 1: x: 40128, y: 5208
            // The image/card container seems to start at y: 5312 (Mask Group) inside the Type Group
            // Actually, "1 type" group is at 40128, 5208. Inside is "Group 23" at 40128, 5312.
            // Let's position the main card visual (Group 23)
            cardPos: {
                x: 40128 - BLOCK_X, // 116
                y: 5312 - BLOCK_Y,  // 321
                w: 375.79,
                h: 597
            },
            
            // Text positions relative to global block
            // Title: "Треть улья" - x: 40249.68, y: 5386.68
            titlePos: { x: 40249.68 - BLOCK_X, y: 5386.68 - BLOCK_Y }, // 237.68, 395.68
            
            // Desc: "Небольшое описание..." - x: 40211.1, y: 5467.33
            descPos: { x: 40211.1 - BLOCK_X, y: 5467.33 - BLOCK_Y }, // 199.1, 476.33
            
            // Price: "15 000" - x: 40238.95, y: 5778.33
            pricePos: { x: 40238.95 - BLOCK_X, y: 5778.33 - BLOCK_Y }, // 226.95, 787.33
            
            // List start (roughly "Что получаете" first item): x: 40230.99, y: 5565.44
            listPos: { x: 40230.99 - BLOCK_X, y: 5565.44 - BLOCK_Y } // 218.99, 574.44
        },
        {
            // 2 type (Middle) - "Целый улей"
            id: 2,
            title: "Целый улей",
            desc: "Небольшое описание \nв две строчки",
            price: "30 000",
            image: groupMiddle,
            rope: ropeMiddle,
            
            // Rope 2: x: 40609.79, y: 5219, w: 199, h: 170
            ropePos: { 
                x: 40609.79 - BLOCK_X, // 597.79
                y: 5219 - BLOCK_Y,     // 228
                w: 199, 
                h: 170 
            },
            
            // Card Group 24: x: 40531, y: 5312
            cardPos: {
                x: 40531 - BLOCK_X, // 519
                y: 5312 - BLOCK_Y,  // 321
                w: 375.79,
                h: 597
            },
            
            // Title: "Целый улей" - x: 40647.87, y: 5385.15
            titlePos: { x: 40647.87 - BLOCK_X, y: 5385.15 - BLOCK_Y }, // 635.87, 394.15
            
            // Desc: x: 40617.1, y: 5467.33
            descPos: { x: 40617.1 - BLOCK_X, y: 5467.33 - BLOCK_Y }, // 605.1, 476.33
            
            // Price: "30 000" - x: 40635.94, y: 5778.39
            pricePos: { x: 40635.94 - BLOCK_X, y: 5778.39 - BLOCK_Y }, // 623.94, 787.39
            
             // List start
            listPos: { x: 40636.99 - BLOCK_X, y: 5565.44 - BLOCK_Y } // 624.99, 574.44
        },
        {
            // 3 type (Right) - "1/8 улья"
            id: 3,
            title: "1/8 улья",
            desc: "Небольшое описание \nв две строчки",
            price: "10 000",
            image: groupRight,
            rope: ropeRight,
            
            // Rope 3: x: 41037, y: 5208, w: 183, h: 169
            ropePos: { 
                x: 41037 - BLOCK_X, // 1025
                y: 5208 - BLOCK_Y,  // 217
                w: 183, 
                h: 169 
            },
            
            // Card Group 23: x: 40941, y: 5312
            cardPos: {
                x: 40941 - BLOCK_X, // 929
                y: 5312 - BLOCK_Y,  // 321
                w: 375.79,
                h: 597
            },
            
            // Title: "1/8 улья" - x: 41081.85, y: 5384.4
            titlePos: { x: 41081.85 - BLOCK_X, y: 5384.4 - BLOCK_Y }, // 1069.85, 393.4
            
            // Desc: x: 41024.1, y: 5467.33
            descPos: { x: 41024.1 - BLOCK_X, y: 5467.33 - BLOCK_Y }, // 1012.1, 476.33
            
            // Price: "10 000" - x: 41051.95, y: 5778.42
            pricePos: { x: 41051.95 - BLOCK_X, y: 5778.42 - BLOCK_Y }, // 1039.95, 787.42
            
            // List start
            listPos: { x: 41043.99 - BLOCK_X, y: 5565.44 - BLOCK_Y } // 1031.99, 574.44
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
                {/* Main Title "Типы ульев" - 338:518 */}
                {/* x: 40130.56, y: 5112.92 */}
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute font-ua-brand font-bold uppercase leading-none text-[#C65A32]"
                    style={{
                        left: pX(40130.56 - BLOCK_X), // 118.56
                        top: pY(5112.92 - BLOCK_Y),   // 121.92
                        width: pX(608.89),
                        fontSize: FONT_SIZES.heading,
                        lineHeight: 1
                    }}
                >
                    Типы ульев
                </motion.h2>

                {/* Cards Loop */}
                {cards.map((card, i) => (
                    <React.Fragment key={card.id}>
                        {/* Rope Image */}
                        <motion.img 
                            src={card.rope}
                            alt="rope"
                            className="absolute z-10"
                            initial={{ height: 0 }}
                            whileInView={{ height: pY(card.ropePos.h) }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            style={{
                                left: pX(card.ropePos.x),
                                top: pY(card.ropePos.y),
                                width: pX(card.ropePos.w),
                                objectFit: 'contain',
                                objectPosition: 'top' // Make it grow from top
                            }}
                        />

                        {/* Card Container (Image + Content) */}
                        <motion.div
                            className="absolute"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
                            style={{
                                left: pX(card.cardPos.x),
                                top: pY(card.cardPos.y),
                                width: pX(card.cardPos.w),
                                height: pY(card.cardPos.h),
                            }}
                        >
                            {/* Card Background Image (Group) */}
                            <img 
                                src={card.image} 
                                alt={card.title}
                                className="absolute inset-0 w-full h-full object-contain" 
                            />
                        </motion.div>

                        {/* TEXT CONTENT - Absolute to Section for easier positioning based on JSON global coords */}
                        
                        {/* Title */}
                        <h3 
                            className="absolute font-glametrix font-bold text-[#2E261D]"
                            style={{
                                left: pX(card.titlePos.x),
                                top: pY(card.titlePos.y),
                                fontSize: FONT_SIZES.subheading, // Or specific size? JSON says width 120, height 23.
                                // Visual check suggests it's a heading inside the card.
                                whiteSpace: 'nowrap' 
                            }}
                        >
                            {card.title}
                        </h3>

                        {/* Description */}
                        <p 
                             className="absolute font-glametrix text-[#2E261D] text-center"
                             style={{
                                 left: pX(card.descPos.x),
                                 top: pY(card.descPos.y),
                                 width: pX(150.3),
                                 height: pY(39),
                                 fontSize: FONT_SIZES.body,
                                 lineHeight: 1.2,
                                 whiteSpace: 'pre-line' // Handle newlines
                             }}
                        >
                            {card.desc}
                        </p>

                        {/* List Items - Mocked based on JSON Text Nodes 1, 2, 3, 4, 5 + "Что получаете" */}
                        {/* The list items in JSON are absolute. I'll recreate the structure roughly relative to listPos */}
                        <div 
                            className="absolute font-glametrix text-[#2E261D]"
                             style={{
                                 left: pX(card.listPos.x),
                                 top: pY(card.listPos.y), // Starting from first item roughly
                                 width: pX(120), // Slightly wider to fit
                             }}
                        >
                            {[1, 2, 3, 4, 5].map((num, idx) => (
                                <div key={num} className="flex justify-between items-end border-b border-[#2E261D] pb-0 mb-[9px]" style={{height: '18px'}}>
                                    <span style={{ fontSize: '10px', lineHeight: '14px' }}>Что получаете</span>
                                    <span style={{ fontSize: '12px', lineHeight: '16px' }}>{num}</span>
                                </div>
                            ))}
                        </div>

                        {/* Price & Currency */}
                        <div
                            className="absolute flex items-baseline gap-1 font-glametrix font-bold text-[#2E261D]"
                            style={{
                                left: pX(card.pricePos.x),
                                top: pY(card.pricePos.y),
                            }}
                        >
                            <span style={{ fontSize: '24px' }}>{card.price}</span>
                            <span style={{ fontSize: '15px', fontWeight: 'normal' }}>руб.</span>
                        </div>

                    </React.Fragment>
                ))}

                {/* Button "Подобрать" / "Выбрать тариф" */}
                {/* Component 7: x: 40724, y: 5825 */}
                {/* 40724 - 40012 = 712 */}
                {/* 5825 - 4991 = 834 */}
                <div 
                    className="absolute"
                    style={{
                        left: pX(712),
                        top: pY(834),
                        width: pX(219),
                        height: pX(219), // Aspect ratio maintained
                    }}
                >
                    <SelectTariffButton 
                        width="100%" 
                        variant="orange"
                        onClick={() => console.log('Select Tariff')}
                    />
                </div>

            </div>
        </section>
    );
};

export default PersonalBeekeepingSlide7;
