import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import SelectTariffButton from '@/components/shared/SelectTariffButton';

// Images
import ropeLeft from '@/assets/corporate-beekeeping/7ropeleft.png';
import ropeMiddle from '@/assets/corporate-beekeeping/7ropemiddle.png';
import ropeRight from '@/assets/corporate-beekeeping/7roperight.png';
import groupLeft from '@/assets/corporate-beekeeping/7groupleft.png';
import groupMiddle from '@/assets/corporate-beekeeping/7groupmiddle.png';
import groupRight from '@/assets/corporate-beekeeping/7groupright.png';

const CorporateBeekeepingSlide7: React.FC = () => {
    const BASE_WIDTH = 1440;
    const BASE_HEIGHT = 1153;
    
    const pX = (px: number) => `${(px / BASE_WIDTH) * 100}%`;
    const pY = (px: number) => `${(px / BASE_HEIGHT) * 100}%`;

    const cards = [
        {
            id: 1,
            title: "Треть улья",
            desc: "Небольшое описание в две строчки",
            price: "15 000 руб.",
            image: groupLeft,
            rope: ropeLeft,
            ropePos: { x: 214, y: 217, w: 183, h: 168 },
            cardPos: { x: 118, y: 321, w: 375, h: 597 },
            titlePos: { x: 240, y: 395 }, // Approx relative to block
            descPos: { x: 201, y: 476 },
            pricePos: { x: 228, y: 787 },
            listOffset: { x: 200, y: 571 }
        },
        {
            id: 2,
            title: "Целый улей",
            desc: "Небольшое описание в две строчки",
            price: "30 000 руб.",
            image: groupMiddle,
            rope: ropeMiddle,
            ropePos: { x: 596, y: 228, w: 199, h: 170 }, // Adjusted
            cardPos: { x: 518, y: 321, w: 375, h: 597 },
            titlePos: { x: 635, y: 394 },
            descPos: { x: 604, y: 476 },
            pricePos: { x: 622, y: 787 },
            listOffset: { x: 600, y: 571 }
        },
        {
            id: 3,
            title: "1/8 улья",
            desc: "Небольшое описание в две строчки",
            price: "10 000 руб.",
            image: groupRight,
            rope: ropeRight,
            ropePos: { x: 1024, y: 217, w: 183, h: 168 },
            cardPos: { x: 928, y: 321, w: 375, h: 597 },
            titlePos: { x: 1069, y: 393 },
            descPos: { x: 1011, y: 476 },
            pricePos: { x: 1039, y: 787 },
            listOffset: { x: 1010, y: 571 }
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
                {/* Main Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute font-ua-brand font-bold uppercase leading-none text-[#C65A32]"
                    style={{
                        left: pX(118.5),
                        top: pY(122),
                        width: pX(608),
                        fontSize: FONT_SIZES.heading,
                        lineHeight: 1
                    }}
                >
                    ТИПЫ УЛЬЕВ
                </motion.h2>

                {cards.map((card, i) => (
                    <React.Fragment key={card.id}>
                        {/* Rope */}
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
                                objectFit: 'cover',
                                objectPosition: 'top'
                            }}
                        />

                        {/* Card Group */}
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
                            {/* Background Image of the Card */}
                            <img 
                                src={card.image} 
                                alt={card.title}
                                className="w-full h-full object-contain" // Assuming the image contains the box graphic
                            />

                            {/* Content Overlays - positioned relative to the card container? 
                                No, I calculated positions relative to global block. 
                                Need to convert to relative to card or use global absolute. 
                                Using global absolute is easier with my calc helpers.
                            */}
                        </motion.div>

                        {/* Text Content Layer (Absolute to Section) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 + (i * 0.1) }}
                        >
                             {/* Title */}
                            <h3 
                                className="absolute font-glametrix font-bold text-center"
                                style={{
                                    left: pX(card.titlePos.x - 70), // Roughly centering based on width estimation or text align
                                    width: pX(200), // Estimate width for centering
                                    top: pY(card.titlePos.y),
                                    fontSize: FONT_SIZES.medium,
                                    color: '#2E261D'
                                }}
                            >
                                {card.title}
                            </h3>
                             
                             {/* Desc */}
                            <p
                                className="absolute font-glametrix text-center"
                                style={{
                                    left: pX(card.descPos.x - 20),
                                    width: pX(200), // Estimate
                                    top: pY(card.descPos.y),
                                    fontSize: FONT_SIZES.body,
                                    lineHeight: 1.2
                                }}
                            >
                                {card.desc}
                            </p>

                             {/* Price */}
                            <div
                                className="absolute font-glametrix font-bold text-center"
                                style={{
                                    left: pX(card.pricePos.x - 20),
                                    width: pX(150),
                                    top: pY(card.pricePos.y),
                                    fontSize: FONT_SIZES.medium,
                                    color: '#2E261D'
                                }}
                            >
                                {card.price}
                            </div>
                            
                            {/* List Mockup */}
                            <div 
                                className="absolute font-glametrix text-sm"
                                style={{
                                    left: pX(card.listOffset.x),
                                    top: pY(card.listOffset.y),
                                    width: pX(150),
                                }} 
                            >
                                <div className="flex flex-col gap-2">
                                   {[1, 2, 3, 4, 5].map(n => (
                                     <div key={n} className="flex justify-between border-b border-[#2E261D]/20 pb-1">
                                         <span>{n}</span>
                                         <span>Что получаете</span>
                                     </div>
                                   ))}
                                </div>
                            </div>

                        </motion.div>
                    </React.Fragment>
                ))}

                {/* Button (Centered on middle card) */}
                <motion.div
                    className="absolute z-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    style={{
                        left: pX(712),
                        top: pY(834),
                        width: pX(219),
                    }}
                >
                    <SelectTariffButton width="100%" /> 
                </motion.div>

            </div>
        </section>
    );
};

export default CorporateBeekeepingSlide7;
