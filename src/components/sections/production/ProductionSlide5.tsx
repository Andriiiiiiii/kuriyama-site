import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import SelectTariffButton from '@/components/shared/SelectTariffButton';
import { productionSlide5Images } from '@/assets/production/slide5';

const ProductionSlide5: React.FC = () => {
    return (
        <section 
            className="relative w-full overflow-hidden bg-black"
            style={{ 
                height: 'calc(100vw * (354 / 1440))', // Aspect ratio 1440:354
                maxHeight: '100vh'
            }}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={productionSlide5Images.backImage} 
                    alt="Background" 
                    className="w-full h-full object-cover"
                />
                {/* Overlay for better text readability if needed */}
                <div className="absolute inset-0 bg-black/20" /> 
            </div>

            {/* Title: ОПТОВЫЕ ПОСТАВКИ */}
            <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="absolute z-10 font-ua-brand font-bold uppercase tracking-tight text-white leading-[0.85]"
                style={{
                    left: '11.65%',
                    top: '19.89%',
                    width: '60%',
                    fontSize: FONT_SIZES.heading,
                }}
            >
                ОПТОВЫЕ<br />ПОСТАВКИ
            </motion.h2>

            {/* Description: Доставим продукцию... */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute z-10 font-['Glametrix'] text-white"
                style={{
                    left: '11.34%',
                    top: '74.98%',
                    width: '14.04%',
                    // height: '10.72%',
                    fontSize: FONT_SIZES.body,
                    lineHeight: 1.2
                }}
            >
                Доставим продукцию оптом<br />для ресторанов
            </motion.p>

            {/* Button */}
             <motion.div
                initial={{ opacity: 0, rotate: -90 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute z-20"
                style={{
                    left: '76.46%',
                    top: '24.58%',
                    width: '15.21%',
                    // height: '61.86%' // Height is determined by aspect ratio of button
                }}
            >
                 <SelectTariffButton 
                    width="100%" 
                    variant="white"
                    onClick={() => {}}
                 />
            </motion.div>

        </section>
    );
};

export default ProductionSlide5;
