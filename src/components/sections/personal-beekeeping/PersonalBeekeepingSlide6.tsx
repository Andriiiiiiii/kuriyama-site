import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import groupImage from '@/assets/personal-beekeeping/6-group.png';

const PersonalBeekeepingSlide6: React.FC = () => {
    // Canvas size from JSON: 1440 x 840
    const BASE_WIDTH = 1440;
    const BASE_HEIGHT = 840;
    
    // Helper to calculate percentages
    const pX = (px: number) => `${(px / BASE_WIDTH) * 100}%`;
    const pY = (px: number) => `${(px / BASE_HEIGHT) * 100}%`;

    return (
        <section 
            className="relative w-full overflow-hidden bg-background text-[#2E261D]"
            style={{ 
                paddingTop: `${(BASE_HEIGHT / BASE_WIDTH) * 100}%`,
            }}
        >
            <div className="absolute inset-0 w-full h-full">
                
                {/* Title "Аренда места" */}
                {/* JSON x: 40130.8 -> 120.8, y: 4263.4 -> 112.4 */}
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute font-ua-brand font-bold uppercase leading-none text-[#C65A32]"
                    style={{
                        left: pX(120.8),
                        top: pY(112.4),
                        width: pX(738),
                        fontSize: FONT_SIZES.heading,
                        lineHeight: 1
                    }}
                >
                    Аренда места
                </motion.h2>

                {/* Left Image Group (Group 87) */}
                {/* JSON x: 40130 -> 120, y: 4408 -> 257 */}
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
                {/* JSON x: 40740 -> 730, y: 4360 -> 209 */}
                <motion.h2
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute font-ua-brand font-bold uppercase leading-none text-[#C65A32]"
                    style={{
                        left: pX(730),
                        top: pY(209),
                        width: pX(464),
                        fontSize: FONT_SIZES.heading,
                        lineHeight: 1
                    }}
                >
                    для улья
                </motion.h2>

                {/* Main Description */}
                {/* JSON x: 40740.96 -> 730.96, y: 4456.48 -> 305.48 */}
                <p 
                    className="absolute font-glametrix text-[#2E261D]"
                    style={{
                        left: pX(730.96),
                        top: pY(305.48),
                        width: pX(504),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Описание, подробнее раскрывающее заголовок.
                </p>

                {/* Bordered Box - Rectangle 228 */}
                {/* JSON x: 40740 -> 730, y: 4531 -> 380 */}
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

                {/* --- List Items (Precise Positioning) --- */}
                
                {/* Item 1 Title */}
                {/* JSON x: 40809.76 -> 799.76, y: 4591.64 -> 440.64 */}
                <h3 
                    className="absolute font-glametrix font-bold text-[#2E261D]"
                    style={{
                        left: pX(799.76),
                        top: pY(440.64),
                        fontSize: FONT_SIZES.subheading
                    }}
                >
                    Пасека 1
                </h3>

                {/* Item 1 Description */}
                {/* JSON x: 40809.76 -> 799.76, y: 4622.33 -> 471.33 */}
                <p 
                    className="absolute font-glametrix text-[#2E261D]"
                    style={{
                        left: pX(799.76),
                        top: pY(471.33),
                        width: pX(343.8),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Описание, подробнее раскрывающее заголовок
                </p>

                {/* Item 2 Title */}
                {/* JSON x: 40809.76 -> 799.76, y: 4709.48 -> 558.48 */}
                <h3 
                    className="absolute font-glametrix font-bold text-[#2E261D]"
                    style={{
                        left: pX(799.76),
                        top: pY(558.48),
                        fontSize: FONT_SIZES.subheading
                    }}
                >
                    Пасека 2
                </h3>

                {/* Item 2 Description */}
                {/* JSON x: 40809.76 -> 799.76, y: 4742.33 -> 591.33 */}
                <p 
                    className="absolute font-glametrix text-[#2E261D]"
                    style={{
                        left: pX(799.76),
                        top: pY(591.33),
                        width: pX(343.8),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Описание, подробнее раскрывающее заголовок
                </p>

                {/* Item 3 Title */}
                {/* JSON x: 40809.76 -> 799.76, y: 4839.48 -> 688.48 */}
                <h3 
                    className="absolute font-glametrix font-bold text-[#2E261D]"
                    style={{
                        left: pX(799.76),
                        top: pY(688.48),
                        fontSize: FONT_SIZES.subheading
                    }}
                >
                    Пасека 3
                </h3>

                {/* Item 3 Description */}
                {/* JSON x: 40809.76 -> 799.76, y: 4872.33 -> 721.33 */}
                <p 
                    className="absolute font-glametrix text-[#2E261D]"
                    style={{
                        left: pX(799.76),
                        top: pY(721.33),
                        width: pX(343.8),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Описание, подробнее раскрывающее заголовок
                </p>

            </div>
        </section>
    );
};

export default PersonalBeekeepingSlide6;
