import React from 'react';
import { motion } from 'framer-motion';
import { getFontSize } from '@/config/typography';
import { productionSlide7Images } from '@/assets/production/slide7';

const ProductionSlide7: React.FC = () => {
    // 1440 x 717
    const aspectRatio = 717 / 1440;

    return (
        <section 
            className="relative w-full overflow-hidden bg-white text-[#333333]"
            style={{ 
                height: `calc(100vw * ${aspectRatio})`,
                maxHeight: '100vh'
            }}
        >
            {/* Title: ПОЧЕМУ МЫ */}
            <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute font-ua-brand font-bold uppercase leading-none text-[#C65A32]"
                style={{
                    left: '8.833%',
                    top: '2.845%',
                    width: '41.231%',
                    fontSize: getFontSize(60), // Adjusted based on design
                }}
            >
                ПОЧЕМУ МЫ
            </motion.h2>

            {/* Frame - Outer (Thin) */}
            <div 
                className="absolute border border-[#C65A32] z-20"
                style={{
                    left: '7.708%',
                    top: '18.271%',
                    width: '84.583%',
                    height: '69.038%',
                }}
            />

            {/* Frame - Inner (Bold) */}
            <div 
                className="absolute border-2 border-[#C65A32] z-20"
                style={{
                    left: '8.333%',
                    top: '19.526%',
                    width: '83.333%',
                    height: '66.527%',
                }}
            />

            {/* --- Top Left Block --- */}
            {/* Title */}
            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute font-['Glametrix'] font-bold text-[#333333]"
                style={{
                    left: '11.722%',
                    top: '27.681%',
                    width: '20%', // Expanded for safety
                    fontSize: getFontSize(22),
                }}
            >
                Заголовок
            </motion.h3>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute font-['Glametrix'] text-[#555555]"
                style={{
                    left: '11.697%',
                    top: '33.533%',
                    width: '18.924%',
                    fontSize: getFontSize(16),
                    lineHeight: 1.4,
                }}
            >
                Две строчки дополнительного<br />описания подкрепляющего заголовок
            </motion.p>

            {/* --- Top Right Block --- */}
            {/* Title */}
            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute font-['Glametrix'] font-bold text-[#333333]"
                style={{
                    left: '69.653%',
                    top: '27.681%',
                    width: '20%',
                    fontSize: getFontSize(22),
                }}
            >
                Заголовок
            </motion.h3>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute font-['Glametrix'] text-[#555555]"
                style={{
                    left: '69.628%',
                    top: '33.533%',
                    width: '18.924%',
                    fontSize: getFontSize(16),
                    lineHeight: 1.4,
                }}
            >
                Две строчки дополнительного<br />описания подкрепляющего заголовок
            </motion.p>

            {/* --- Bottom Left Block --- */}
            {/* Title */}
            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute font-['Glametrix'] font-bold text-[#333333]"
                style={{
                    left: '11.722%',
                    top: '67.589%',
                    width: '20%',
                    fontSize: getFontSize(22),
                }}
            >
                Заголовок
            </motion.h3>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute font-['Glametrix'] text-[#555555]"
                style={{
                    left: '11.697%',
                    top: '73.422%',
                    width: '18.924%',
                    fontSize: getFontSize(16),
                    lineHeight: 1.4,
                }}
            >
                Две строчки дополнительного<br />описания подкрепляющего заголовок
            </motion.p>

            {/* --- Bottom Right Block --- */}
             {/* Title */}
             <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute font-['Glametrix'] font-bold text-[#333333]"
                style={{
                    left: '69.653%',
                    top: '67.589%',
                    width: '20%',
                    fontSize: getFontSize(22),
                }}
            >
                Заголовок
            </motion.h3>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute font-['Glametrix'] text-[#555555]"
                style={{
                    left: '69.628%',
                    top: '73.422%',
                    width: '18.924%',
                    fontSize: getFontSize(16),
                    lineHeight: 1.4,
                }}
            >
                Две строчки дополнительного<br />описания подкрепляющего заголовок
            </motion.p>

            {/* --- Center Images --- */}
            {/* Background Ink Image */}
            <div
                className="absolute"
                style={{
                    left: '42.014%',
                    top: '20.084%',
                    width: '16.667%',
                    height: '66.806%',
                    backgroundImage: `url('${productionSlide7Images.image115}')`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    zIndex: 5
                }}
            />

            {/* Fan Image */}
            <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                whileInView={{ opacity: 1, rotate: 13.481 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute"
                style={{
                    left: '39.722%',
                    top: '35.844%',
                    width: '18.309%',
                    height: '29.14%',
                    zIndex: 10
                }}
            >
                 <img 
                    src={productionSlide7Images.fanImage} 
                    alt="Fan" 
                    className="w-full h-full object-contain"
                />
            </motion.div>

        </section>
    );
};

export default ProductionSlide7;
