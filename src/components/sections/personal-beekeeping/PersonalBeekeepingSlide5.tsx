import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import rightImage from '@/assets/corporate-beekeeping/5right.webp';

const PersonalBeekeepingSlide5: React.FC = () => {
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
                <h2
                    className="absolute font-ua-brand font-bold uppercase leading-none text-[#C65A32]"
                    style={{
                        left: pX(130),
                        top: pY(105.12),
                        width: pX(769.2),
                        fontSize: FONT_SIZES.heading,
                        lineHeight: 1
                    }}
                >
                    ИМЕННОЙ УЛЕЙ
                </h2>

                {/* Description Text */}
                <p
                    className="absolute font-glametrix text-[#2E261D]"
                    style={{
                        left: pX(132),
                        top: pY(217.2),
                        width: pX(551.8),
                        fontSize: FONT_SIZES.subheading,
                        lineHeight: 1.2
                    }}
                >
                    На выбранный вами улей устанавливается именная <br/> табличка. Брендирование делаем с вашей подписью <br/> или логотипом вашей компании.
                </p>

                {/* Right Image */}
                <div
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
                </div>
            </div>
        </section>
    );
};

export default PersonalBeekeepingSlide5;
