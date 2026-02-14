import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import leftImage from '@/assets/personal-beekeeping/2-left.png';
import middleImage from '@/assets/personal-beekeeping/2-middle.png';
import rightImage from '@/assets/personal-beekeeping/2-right.png';

const PersonalBeekeepingSlide2: React.FC = () => {
    // Canvas size from JSON: 1440 x 650
    const BASE_WIDTH = 1440;
    const BASE_HEIGHT = 650;

    // Helper to convert Figma px to %
    const pX = (px: number) => `${(px / BASE_WIDTH) * 100}%`;
    const pY = (px: number) => `${(px / BASE_HEIGHT) * 100}%`;

    return (
        <section 
            className="relative z-10 w-full overflow-hidden bg-background"
            style={{ 
                paddingTop: `${(BASE_HEIGHT / BASE_WIDTH) * 100}%`,
                marginTop: '-1.5%'
            }}
        >
             <div className="absolute inset-0 w-full h-full"> 
                {/* Title "Для чего" - 338:583 */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute font-ua-brand font-bold uppercase leading-none text-[#C65A32]"
                    style={{
                        left: pX(120),
                        top: pY(44.4),
                        width: pX(470.11),
                        height: pY(70.8),
                        fontSize: FONT_SIZES.heading,
                    }}
                >
                    Для чего
                </motion.h2>

                {/* Frame - Outer (Rectangle 227) - 338:584 */}
                <div 
                    className="absolute border border-[#C65A32] z-20 pointer-events-none"
                    style={{
                        left: pX(111),
                        top: pY(155),
                        width: pX(1218),
                        height: pY(495),
                    }}
                />

                {/* Frame - Inner (Rectangle 200) - 338:585 */}
                <div 
                    className="absolute border-2 border-[#C65A32] z-20 pointer-events-none"
                    style={{
                        left: pX(120),
                        top: pY(164),
                        width: pX(1200),
                        height: pY(477),
                    }}
                />

                {/* --- Left Column --- */}
                
                {/* Text "Вклад в экологию" - 338:586 */}
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute font-glametrix font-bold text-[#2E261D]"
                    style={{
                        left: pX(161.76),
                        top: pY(222.64),
                        width: pX(195.52),
                        // height: pY(18.75),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1
                    }}
                >
                    Вклад в экологию
                </motion.h3>

                {/* Description 1 - 338:588 */}
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
                        // height: pY(38.96),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Две строчки дополнительного описания подкрепляющего заголовок
                </motion.p>
                
                {/* Text "Опыление культур" - 338:590 */}
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute font-glametrix font-bold text-[#2E261D]"
                    style={{
                        left: pX(160.96),
                        top: pY(508.48),
                        width: pX(201.62),
                        // height: pY(21.92),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1
                    }}
                >
                    Опыление культур
                </motion.h3>

                {/* Description 2 - 338:592 */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute font-glametrix text-[#2E261D]"
                    style={{
                        left: pX(160.44),
                        top: pY(551.44),
                        width: pX(272.49),
                        // height: pY(38.96),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Две строчки дополнительного описания подкрепляющего заголовок
                </motion.p>

                {/* --- Right Column --- */}

                {/* Text "Мед" - 338:587 */}
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute font-glametrix font-bold text-[#2E261D]"
                    style={{
                        left: pX(996.76),
                        top: pY(222.64),
                        width: pX(44.50),
                        // height: pY(18.75),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1
                    }}
                >
                    Мед
                </motion.h3>

                {/* Description 3 - 338:589 */}
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
                        // height: pY(38.96),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Две строчки дополнительного описания подкрепляющего заголовок
                </motion.p>

                {/* Text "Подарок" - 338:591 */}
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute font-glametrix font-bold text-[#2E261D]"
                    style={{
                        left: pX(996.76),
                        top: pY(508.64),
                        width: pX(93.42),
                        // height: pY(21.76),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1
                    }}
                >
                    Подарок
                </motion.h3>

                {/* Description 4 - 338:593 */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute font-glametrix text-[#2E261D]"
                    style={{
                        left: pX(995.44),
                        top: pY(551.44),
                        width: pX(272.49),
                        // height: pY(38.96),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Две строчки дополнительного описания подкрепляющего заголовок
                </motion.p>
                
                {/* --- Images --- */}

                {/* Left Image (Cherry) - 338:594 */}
                <motion.div
                    initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="absolute z-10 pointer-events-none"
                    style={{
                        left: pX(196),
                        top: pY(321.99),
                        width: pX(155.29),
                        height: pY(155.29),
                    }}
                >
                    <img src={leftImage} alt="" className="w-full h-full object-contain" />
                </motion.div>

                {/* Middle Image - 338:596 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="absolute z-10 pointer-events-none"
                    style={{
                        left: pX(628),
                        top: pY(181),
                        width: pX(220),
                        height: pY(444),
                    }}
                >
                    <img src={middleImage} alt="" className="w-full h-full object-contain" />
                </motion.div>

                {/* Right Image - 338:597 */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="absolute z-10 pointer-events-none"
                    style={{
                        left: pX(995),
                        top: pY(325),
                        width: pX(278),
                        height: pY(138),
                    }}
                >
                    <img src={rightImage} alt="" className="w-full h-full object-contain" />
                </motion.div>
             </div>
        </section>
    );
};

export default PersonalBeekeepingSlide2;
