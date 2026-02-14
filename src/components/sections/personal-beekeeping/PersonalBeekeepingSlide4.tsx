import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import SelectTariffButton from '@/components/shared/SelectTariffButton';
import bgImage from '@/assets/personal-beekeeping/4-bg.png';

const PersonalBeekeepingSlide4: React.FC = () => {
    // Canvas size from JSON: 1440 x 354
    const BASE_WIDTH = 1440;
    const BASE_HEIGHT = 354;
    
    // Helper to convert Figma px to %
    const pX = (px: number) => `${(px / BASE_WIDTH) * 100}%`;
    const pY = (px: number) => `${(px / BASE_HEIGHT) * 100}%`;

    return (
        <section 
            className="relative w-full overflow-hidden text-white"
            style={{ 
                paddingTop: `${(BASE_HEIGHT / BASE_WIDTH) * 100}%`,
            }}
        >
            {/* Background Image - Rectangle 159 - 338:553 */}
            <div className="absolute inset-0 w-full h-full">
                <img 
                    src={bgImage} 
                    alt="Background" 
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute inset-0 w-full h-full">
                {/* Title "ОСТАВЬТЕ ЗАЯВКУ" - Analogous to Corp Slide 4 */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute font-ua-brand font-bold uppercase leading-none"
                    style={{
                        left: pX(124.4),
                        top: pY(79.4),
                        width: pX(483.4),
                        fontSize: FONT_SIZES.heading,
                    }}
                >
                    ОСТАВЬТЕ<br/>ЗАЯВКУ
                </motion.h2>

                {/* Description - Analogous to Corp Slide 4 */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute font-glametrix"
                    style={{
                        left: pX(120.7),
                        top: pY(275.3),
                        width: pX(186.1),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Описание, подробнее раскрывающее заголовок
                </motion.p>

                {/* Button Group - Component 7 (SelectTariffButton) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute"
                    style={{
                        left: pX(1097),
                        top: pY(67.5), // Center vertically in 354px height?
                        // In Corp Slide 4: Top was 106. Height 219 (button). 
                        // 106 + 219 = 325. Near bottom.
                        // Let's use same top.
                        // Actually, let's re-verify Corp Slide 4 top.
                        // Corp Slide 4: top: pY(106).
                        // Button height is usually around 219px (from first slide JSON).
                        width: pX(219), 
                    }}
                >
                    <SelectTariffButton width="100%" />
                </motion.div>
            </div>
        </section>
    );
};

export default PersonalBeekeepingSlide4;
