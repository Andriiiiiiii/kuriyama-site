import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import groupImage from '@/assets/corporate-beekeeping/6group.png';

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
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute font-ua-brand font-bold uppercase leading-none"
                    style={{
                        left: pX(120.8),
                        top: pY(112.4),
                        width: pX(738),
                        fontSize: FONT_SIZES.heading,
                        lineHeight: 1
                    }}
                >
                    АРЕНДА МЕСТА
                </motion.h2>

                {/* Left Image Group */}
                {/* x: 120, y: 257 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="absolute"
                    style={{
                        left: pX(120),
                        top: pY(257),
                        width: pX(558),
                        height: pY(583),
                    }}
                >
                     <img 
                        src={groupImage} 
                        alt="Apiary views" 
                        className="w-full h-full object-contain"
                    />
                </motion.div>

                {/* Subtitle "для улья" */}
                {/* x: 730, y: 209 */}
                <motion.h2
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute font-ua-brand font-bold uppercase leading-none"
                    style={{
                        left: pX(730),
                        top: pY(209),
                        width: pX(464),
                        fontSize: FONT_SIZES.heading, // Same size as main title? Or visually distinct? Assuming same based on context, or slightly smaller if it was a subtitle. But in Figma "TEXT" usually implies specific settings. I'll use heading for now.
                        lineHeight: 1
                    }}
                >
                    ДЛЯ УЛЬЯ
                </motion.h2>

                {/* Description */}
                {/* x: 730.66, y: 303.33 */}
                <p // Changed from motion.p and removed animations
                    className="absolute font-glametrix"
                    style={{
                        left: pX(730.7),
                        top: pY(303.3),
                        width: pX(346.7),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Описание, подробнее раскрывающее заголовок.
                </p>

                {/* Bordered Box */}
                {/* x: 730, y: 380 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute border border-[#C65A32]"
                    style={{
                        left: pX(730),
                        top: pY(380),
                        width: pX(491),
                        height: pY(460),
                    }}
                />

                {/* List Items inside Box */}
                
                {/* Item 1 */}
                <div // Changed from motion.div and removed animations
                >
                    <h3 
                        className="absolute font-glametrix font-bold"
                        style={{
                            left: pX(799.8), top: pY(440.6),
                            fontSize: FONT_SIZES.subheading
                        }}
                    >
                        Пасека 1
                    </h3>
                    <p 
                        className="absolute font-glametrix" // Removed text-transparent
                        style={{
                             left: pX(798.7), top: pY(471.3),
                             width: pX(343.8),
                             fontSize: FONT_SIZES.body,
                             lineHeight: 1.2
                        }}
                    >
                        Описание, подробнее раскрывающее заголовок
                    </p>
                </div>

                {/* Item 2 */}
                <div // Changed from motion.div and removed animations
                >
                    <h3 
                        className="absolute font-glametrix font-bold" // Removed text-transparent
                        style={{
                            left: pX(799.8), top: pY(558.5),
                            fontSize: FONT_SIZES.subheading
                        }}
                    >
                        Пасека 2
                    </h3>
                    <p 
                        className="absolute font-glametrix" // Removed text-transparent
                        style={{
                             left: pX(798.7), top: pY(591.3),
                             width: pX(343.8),
                             fontSize: FONT_SIZES.body,
                             lineHeight: 1.2
                        }}
                    >
                        Описание, подробнее раскрывающее заголовок
                    </p>
                </div>

                 {/* Item 3 */}
                 <div // Changed from motion.div and removed animations
                 >
                    <h3 
                        className="absolute font-glametrix font-bold" // Removed text-transparent
                        style={{
                            left: pX(799.8), top: pY(688.5),
                            fontSize: FONT_SIZES.subheading
                        }}
                    >
                        Пасека 3
                    </h3>
                    <p 
                        className="absolute font-glametrix" // Removed text-transparent
                        style={{
                             left: pX(798.7), top: pY(721.3),
                             width: pX(343.8),
                             fontSize: FONT_SIZES.body,
                             lineHeight: 1.2
                        }}
                    >
                        Описание, подробнее раскрывающее заголовок
                    </p>
                </div>

            </div>
        </section>
    );
};

export default CorporateBeekeepingSlide6;
