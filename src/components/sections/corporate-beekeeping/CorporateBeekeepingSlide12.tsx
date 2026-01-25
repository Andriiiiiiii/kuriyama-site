import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import SelectTariffButton from '@/components/shared/SelectTariffButton';
import rightImage from '@/assets/corporate-beekeeping/12right.png';

const CorporateBeekeepingSlide12: React.FC = () => {
    const BASE_WIDTH = 1440;
    const BASE_HEIGHT = 530;

    const pX = (px: number) => `${(px / BASE_WIDTH) * 100}%`;
    const pY = (px: number) => `${(px / BASE_HEIGHT) * 100}%`;

    // Offsets
    // Block: x: 34032, y: 7374
    
    // Shape: x: 34032, y: 7484 (+110)
    // Image: x: 34697, y: 7404 (+30)
    // Title: x: 34156, y: 7543 (+169)
    // Text: x: 34152, y: 7729 (+355)
    // Button: x: 35131, y: 7550 (+176)

    return (
        <section
            className="relative w-full overflow-hidden bg-white" // Main background white, colored rect inside
            style={{
                paddingTop: `${(BASE_HEIGHT / BASE_WIDTH) * 100}%`,
                marginTop: '-5%'
            }}
        >
            <div className="absolute inset-0 w-full h-full">
                
                {/* Background Rectangle #EFE3D6 with border #C65A32 */}
                <div 
                    className="absolute w-full border-t border-[#C65A32] bg-[#EFE3D6]"
                    style={{
                        top: pY(110),
                        height: pY(420), // 530 - 110 = 420
                        left: 0
                    }}
                />

                {/* Image "Вишня" */}
                <motion.div
                    initial={{ opacity: 0, rotate: -95, scale: 0.8 }}
                    whileInView={{ opacity: 1, rotate: -95.36, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="absolute z-10"
                    style={{
                        left: pX(665),
                        top: pY(30),
                        width: pX(410),
                        aspectRatio: '1/1', // Square image
                    }}
                >
                    <img 
                        src={rightImage} 
                        alt="Cherry" 
                        className="w-full h-full object-contain"
                    />
                </motion.div>

                {/* Title "ОСТАВЬТЕ ЗАЯВКУ" */}
                {/* Using uppercase as per other slides, though JSON text is mixed case "оставьте заявку" usually they want it styled. 
                    However, the JSON text field says "[Error reading..." but title usually is Uppercase in these designs. 
                    Wait, previous slides had explicit uppercase in code but JSON was "оставьте". 
                    Let's assume Uppercase based on naming convention "Title".
                */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute z-10 font-ua-brand font-bold uppercase leading-none text-[#2E261D]"
                    style={{
                        left: pX(124),
                        top: pY(169),
                        width: pX(490),
                        fontSize: FONT_SIZES.heading
                    }}
                >
                    ОСТАВЬТЕ ЗАЯВКУ
                </motion.h2>

                {/* Subtitle/Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="absolute z-10 text-[#2E261D]"
                    style={{
                        left: pX(120),
                        top: pY(355),
                        width: pX(350), // Increased width slightly to prevent wrapping if not needed
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Пропуск на посещение на день со всеми активностями
                </motion.p>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="absolute z-20"
                    style={{
                        left: pX(1099),
                        top: pY(176),
                        width: pX(219)
                    }}
                >
                    <SelectTariffButton width="100%" /> 
                </motion.div>

            </div>
        </section>
    );
};

export default CorporateBeekeepingSlide12;
