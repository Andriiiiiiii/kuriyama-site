import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES, getFontSize } from '@/config/typography';
import { productionSlide8Images } from '@/assets/production/slide8';
import SelectTariffButton from '@/components/shared/SelectTariffButton';

const ProductionSlide8: React.FC = () => {
    // 1440 x 558
    const aspectRatio = 558 / 1440;

    return (
        <section
            className="relative w-full overflow-hidden bg-[#EFE6DB]" // Approximating beige color
            style={{
                height: `calc(100vw * ${aspectRatio})`,
                maxHeight: '100vh',
                zIndex: 5 // Lower z-index so footer can overlap on top
            }}
        >
            {/* Background shape/color is handled by section bg for now. 
                JSON mentions "back_shape" at y=5.376%, h=75.269%. 
                This might be a specific rectangle. 
                Let's add it just in case it's slightly different shade. 
            */}
             <div 
                className="absolute bg-[#EFE6DB]" // Same color or slightly different? Assuming same for now as base
                style={{
                    left: '0%',
                    top: '5.376%',
                    width: '100%',
                    height: '75.269%',
                }}
            />

            {/* Image (Box with products) */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute"
                style={{
                    left: '48.889%',
                    top: '0%', // Starts at top
                    width: '38.75%',
                    height: '100%', 
                    zIndex: 10
                }}
            >
                 <img 
                    src={productionSlide8Images.image} 
                    alt="Products Box" 
                    className="w-full h-full object-contain object-bottom" // Align bottom? JSON says h=100%, image is vertical.
                />
            </motion.div>

            {/* Title: ЗАКАЗЫВАЙТЕ С ДОСТАВКОЙ */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute font-ua-brand font-bold uppercase leading-[0.9] text-[#2E261D]"
                style={{
                    left: '11.625%',
                    top: '17.405%',
                    width: '48.022%',
                    fontSize: FONT_SIZES.heading,
                }}
            >
                ЗАКАЗЫВАЙТЕ<br />С ДОСТАВКОЙ
            </motion.h2>

            {/* Subtitle: По Москве и Московской области */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute font-['Glametrix'] text-[#2E261D]"
                style={{
                    left: '11.404%',
                    top: '54.92%',
                    width: '18.5%', // Slightly larger width to be safe
                    fontSize: getFontSize(18),
                }}
            >
                По Москве и Московской области
            </motion.p>

            {/* Button */}
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute z-20"
                style={{
                    left: '76.458%',
                    top: '17.384%',
                    width: '15.206%',
                    // height: '39.247%' 
                }}
            >
                 <SelectTariffButton 
                    width="100%" 
                    variant="orange"
                    onClick={() => {}}
                 />
            </motion.div>
        </section>
    );
};

export default ProductionSlide8;
