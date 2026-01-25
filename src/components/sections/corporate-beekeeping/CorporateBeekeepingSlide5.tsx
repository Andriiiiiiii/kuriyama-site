import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import rightImage from '@/assets/corporate-beekeeping/5right.png';

const CorporateBeekeepingSlide5: React.FC = () => {
    const BASE_WIDTH = 1440;
    const BASE_HEIGHT = 561;
    
    const pX = (px: number) => `${(px / BASE_WIDTH) * 100}%`;
    const pY = (px: number) => `${(px / BASE_HEIGHT) * 100}%`;

    return (
        <section 
            className="relative w-full overflow-hidden bg-white"
            style={{ 
                paddingTop: `${(BASE_HEIGHT / BASE_WIDTH) * 100}%`,
            }}
        >
            <div className="absolute inset-0 w-full h-full">
                {/* Title "ИМЕННОЙ УЛЕЙ" */}
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute font-ua-brand font-bold uppercase leading-none text-[#C65A32]"
                    style={{
                        left: pX(127.2),
                        top: pY(105.12),
                        width: pX(769.2),
                        fontSize: FONT_SIZES.heading,
                        lineHeight: 1
                    }}
                >
                    ИМЕННОЙ УЛЕЙ
                </motion.h2>

                {/* Description Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute font-glametrix text-[#2E261D]"
                    style={{
                        left: pX(120.6),
                        top: pY(217.2),
                        width: pX(551.8),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    На выбранный вами улей устанавливается именная табличка. Брендирование делаем с вашей подписью или логотипом вашей компании.
                </motion.p>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute overflow-hidden"
                    style={{
                        left: pX(730),
                        top: pY(210),
                        width: pX(590),
                        height: pY(351),
                        borderRadius: '0px'
                    }}
                >
                    <img 
                        src={rightImage} 
                        alt="" 
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default CorporateBeekeepingSlide5;
