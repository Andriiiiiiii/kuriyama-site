import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import letters2 from '@/assets/corporate-beekeeping/letters2.png';
import bgLetters2 from '@/assets/corporate-beekeeping/bg_letters2.png';
import cherryIcon from '@/assets/corporate-beekeeping/left2.png';

const CorporateBeekeepingSlide2: React.FC = () => {
    // Canvas size from JSON: 1440 x 650
    const BASE_WIDTH = 1440;
    const BASE_HEIGHT = 650;
    const aspectRatio = BASE_HEIGHT / BASE_WIDTH;

    // Helper to convert Figma px to %
    const pX = (px: number) => `${(px / BASE_WIDTH) * 100}%`;
    const pY = (px: number) => `${(px / BASE_HEIGHT) * 100}%`;

    return (
        <section 
            className="relative w-full overflow-hidden bg-white text-[#333333]"
            style={{ 
                paddingTop: `${(BASE_HEIGHT / BASE_WIDTH) * 100}%`, 
                position: 'relative'
            }}
        >
             <div className="absolute inset-0 w-full h-full"> 
                {/* Title "ПРЕИМУЩЕСТВА" */}
                {/* Positioned relative to block 2 origin (-367) vs element (44.4 from top of block) */}
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute font-ua-brand font-bold uppercase leading-none text-[#C65A32]"
                    style={{
                        left: pX(127.19),
                        top: pY(44.4),
                        width: pX(804.29),
                        height: pY(70.8),
                        fontSize: FONT_SIZES.heading,
                    }}
                >
                    ПРЕИМУЩЕСТВА
                </motion.h2>

                {/* Frame - Outer (Rectangle 227) */}
                <div 
                    className="absolute border border-[#C65A32] z-20"
                    style={{
                        left: pX(111),
                        top: pY(155),
                        width: pX(1218),
                        height: pY(495),
                    }}
                />

                {/* Frame - Inner (Rectangle 200) */}
                <div 
                    className="absolute border-2 border-[#C65A32] z-20"
                    style={{
                        left: pX(120),
                        top: pY(164),
                        width: pX(1200),
                        height: pY(477),
                    }}
                />

                {/* --- Top Left: Reputation --- */}
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute font-glametrix font-bold text-[#2E261D]"
                    style={{
                        left: pX(161.76),
                        top: pY(222.64),
                        width: pX(112.53),
                        height: pY(21.76),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1
                    }}
                >
                    Репутация
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute font-glametrix text-[#2E261D]"
                    style={{
                        left: pX(160.44),
                        top: pY(265.44),
                        width: pX(272.49),
                        height: pY(38.96),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Две строчки дополнительного описания подкрепляющего заголовок
                </motion.p>

                {/* --- Top Right: Marketing --- */}
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute font-glametrix font-bold text-[#2E261D]"
                    style={{
                        left: pX(996.76),
                        top: pY(222.64),
                        width: pX(118.5),
                        height: pY(21.76),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1
                    }}
                >
                    Маркетинг
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute font-glametrix text-[#2E261D]"
                    style={{
                        left: pX(995.44),
                        top: pY(265.44),
                        width: pX(272.49),
                        height: pY(38.96),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                     Две строчки дополнительного описания подкрепляющего заголовок
                </motion.p>
                
                {/* --- Bottom Left: Pollination --- */}
                 <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute font-glametrix font-bold text-[#2E261D]"
                    style={{
                        left: pX(160.96),
                        top: pY(508.48),
                        width: pX(201.62),
                        height: pY(21.92),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1
                    }}
                >
                    Опыление культур
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute font-glametrix text-[#2E261D]"
                    style={{
                        left: pX(160.44),
                        top: pY(551.44),
                        width: pX(272.49),
                        height: pY(38.96),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Две строчки дополнительного описания подкрепляющего заголовок
                </motion.p>

                 {/* --- Bottom Right: Ecology --- */}
                 <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute font-glametrix font-bold text-[#2E261D]"
                    style={{
                        left: pX(996.76),
                        top: pY(508.64),
                        width: pX(195.52),
                        height: pY(18.75),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1
                    }}
                >
                    Вклад в экологию
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute font-glametrix text-[#2E261D]"
                    style={{
                        left: pX(995.44),
                        top: pY(551.44),
                        width: pX(272.49),
                        height: pY(38.96),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Две строчки дополнительного описания подкрепляющего заголовок
                </motion.p>

                {/* --- Center Images --- */}
                
                {/* Background Image (bg_letters2 - f1f33567) */}
                <div
                    className="absolute"
                    style={{
                        left: pX(628),
                        top: pY(213),
                        width: pX(144.54),
                        height: pY(373.45),
                        backgroundImage: `url('${bgLetters2}')`,
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                        zIndex: 5
                    }}
                />

                {/* Foreground Image (letters2 - image 115) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute"
                    style={{
                        left: pX(618),
                        top: pY(186),
                        width: pX(204),
                        height: pY(407),
                        zIndex: 10
                    }}
                >
                     <img 
                        src={letters2} 
                        alt="Center content" 
                        className="w-full h-full object-contain"
                    />
                </motion.div>

                {/* Icons (Cherries?) - if needed based on "вишня" layers */}
                 <div
                    className="absolute"
                    style={{
                        left: pX(196),
                        top: pY(322),
                        width: pX(155.29),
                        height: pY(155.29),
                        backgroundImage: `url('${cherryIcon}')`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        transform: 'rotate(75deg)',
                        opacity: 0.5,
                        zIndex: 1
                    }}
                />
                 <div
                    className="absolute"
                    style={{
                        left: pX(1031),
                        top: pY(322),
                        width: pX(155.29),
                        height: pY(155.29),
                        backgroundImage: `url('${cherryIcon}')`, 
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        transform: 'rotate(75deg)',
                        opacity: 0.5,
                        zIndex: 1
                    }}
                />

             </div>
        </section>
    );
};

export default CorporateBeekeepingSlide2;
