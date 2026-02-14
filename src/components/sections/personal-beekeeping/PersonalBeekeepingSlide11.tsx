import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import SelectTariffButton from '@/components/shared/SelectTariffButton';
import cherryImage from '@/assets/personal-beekeeping/11-cherry.png';

const PersonalBeekeepingSlide11: React.FC = () => {
    const BASE_WIDTH = 1440;
    const BASE_HEIGHT = 530;

    const pX = (px: number) => `${(px / BASE_WIDTH) * 100}%`;
    const pY = (px: number) => `${(px / BASE_HEIGHT) * 100}%`;

    // Coordinates derived from JSON:
    // Group Origin: x=40010, y=8551
    // Shape (Bg): 40010, 8661 => y+110
    // Cherry: 40675.8, 8580.95 => x+665.8, y+29.95
    // Title: 40134.4, 8720.4 => x+124.4, y+169.4
    // Subtitle: 40130.55, 8906.44 => x+120.55, y+355.44
    // Button: 41110.23, 8727.97 => x+1100.23, y+176.97

    return (
        <section
            className="relative w-full overflow-hidden bg-white"
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
                        height: pY(420),
                        left: 0
                    }}
                />

                {/* Image "Cherry" */}
                <motion.div
                    initial={{ opacity: 0, rotate: -95, scale: 0.8 }}
                    whileInView={{ opacity: 1, rotate: -95.36, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="absolute z-10"
                    style={{
                        left: pX(666),
                        top: pY(30),
                        width: pX(410),
                        aspectRatio: '1/1',
                    }}
                >
                    <img 
                        src={cherryImage} 
                        alt="Cherry" 
                        className="w-full h-full object-contain"
                    />
                </motion.div>

                {/* Title "ОСТАВЬТЕ ЗАЯВКУ" */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute z-10 font-ua-brand font-bold uppercase leading-none text-[#2E261D]"
                    style={{
                        left: pX(124),
                        top: pY(169),
                        width: pX(550), // Increased slightly to be safe
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
                        left: pX(121),
                        top: pY(355),
                        width: pX(350), 
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Пропуск на посещение на день со всеми активностями
                </motion.p>
                
                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="absolute z-20"
                    style={{
                        left: pX(1100),
                        top: pY(177),
                        width: pX(219), 
                        height: 'auto' 
                    }}
                >
                    <SelectTariffButton width="100%" />
                </motion.div>
            </div>
        </section>
    );
};

export default PersonalBeekeepingSlide11;
