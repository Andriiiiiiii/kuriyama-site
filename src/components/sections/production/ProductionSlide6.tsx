import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES, getFontSize } from '@/config/typography';
import { productionSlide6Images } from '@/assets/production/slide6';

const ProductionSlide6: React.FC = () => {
    // 1440 x 815
    const aspectRatio = 815 / 1440;

    return (
        <section 
            className="relative w-full overflow-hidden bg-white text-[#333333]"
            style={{ 
                height: `calc(100vw * ${aspectRatio})`,
                maxHeight: '100vh'
            }}
        >
            {/* Title: СУШЕННЫЕ ТРАВЫ */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute font-ua-brand font-bold uppercase leading-none text-[#1F1E1D]"
                style={{
                    left: '8.67%',
                    top: '9.01%',
                    width: '61.93%',
                    fontSize: getFontSize(60), // Approx from height 7.3% of 815 ~ 60px
                }}
            >
                СУШЕННЫЕ ТРАВЫ
            </motion.h2>

            {/* Images */}
            
            {/* Left Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute overflow-hidden"
                style={{
                    left: '8.33%',
                    top: '21.23%',
                    width: '19.79%',
                    height: '25.77%',
                }}
            >
                <img src={productionSlide6Images.leftImage} alt="Для приправ" className="w-full h-full object-cover" />
            </motion.div>

            {/* Title: Для приправ */}
            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute font-['Glametrix'] font-bold text-[#333333]"
                style={{
                    left: '8.38%',
                    top: '50.51%',
                    width: '19.79%', // Extended to match image width
                    fontSize: getFontSize(22),
                }}
            >
                Для приправ
            </motion.h3>

            {/* Description: Для приправ */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute font-['Glametrix'] text-[#555555]"
                style={{
                    left: '8.36%',
                    top: '55.64%',
                    width: '18.92%',
                    fontSize: getFontSize(16),
                    lineHeight: 1.4,
                }}
            >
                Две строчки дополнительного<br />описания подкрепляющего заголовок
            </motion.p>


            {/* Center Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute overflow-hidden"
                style={{
                    left: '51.39%',
                    top: '21.23%',
                    width: '19.1%',
                    height: '48.83%',
                }}
            >
                <img src={productionSlide6Images.centerImage} alt="Для чая" className="w-full h-full object-cover" />
            </motion.div>

            {/* Title: Для чая */}
            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute font-['Glametrix'] font-bold text-[#333333]"
                style={{
                    left: '51.43%',
                    top: '73.58%',
                    width: '19.1%',
                    fontSize: getFontSize(22),
                }}
            >
                Для чая
            </motion.h3>

             {/* Description: Для чая */}
             <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute font-['Glametrix'] text-[#555555]"
                style={{
                    left: '51.42%',
                    top: '78.7%',
                    width: '18.92%',
                    fontSize: getFontSize(16),
                    lineHeight: 1.4,
                }}
            >
                Две строчки дополнительного<br />описания подкрепляющего заголовок
            </motion.p>


            {/* Right Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute overflow-hidden"
                style={{
                    left: '72.01%',
                    top: '21.23%',
                    width: '19.65%',
                    height: '25.77%',
                }}
            >
                <img src={productionSlide6Images.rightImage} alt="Для декора" className="w-full h-full object-cover" />
            </motion.div>

             {/* Title: Для декора */}
             <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute font-['Glametrix'] font-bold text-[#333333]"
                style={{
                    left: '72.06%',
                    top: '50.51%',
                    width: '19.65%',
                    fontSize: getFontSize(22),
                }}
            >
                Для декора
            </motion.h3>

            {/* Description: Для декора */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute font-['Glametrix'] text-[#555555]"
                style={{
                    left: '72.04%',
                    top: '55.64%',
                    width: '18.92%',
                    fontSize: getFontSize(16),
                    lineHeight: 1.4,
                }}
            >
                Две строчки дополнительного<br />описания подкрепляющего заголовок
            </motion.p>

            {/* Decorative Circle (Bottom Left) - Approximation from screenshot */}
            <div 
                className="absolute rounded-full border border-[#C65A32]"
                style={{
                    left: '-5%', // Guessing
                    bottom: '-15%', // Guessing
                    width: '35%',
                    height: 'auto',
                    aspectRatio: '1/1',
                    zIndex: 0
                }}
            />

            {/* Title: БУКЕТЫ */}
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute font-ua-brand font-bold uppercase leading-none text-[#1F1E1D] z-10"
                style={{
                    left: '8.76%',
                    top: '75.94%',
                    width: '25.89%',
                    fontSize: getFontSize(60),
                }}
            >
                БУКЕТЫ
            </motion.h2>

            {/* Button: Перейти в каталог */}
            <motion.button
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute bg-[#C65A32] text-white rounded-full flex items-center justify-center hover:bg-[#b04a25] transition-colors"
                style={{
                    left: '77.85%',
                    top: '79.14%',
                    width: '13.82%',
                    height: '4.54%',
                    fontSize: getFontSize(16),
                }}
            >
                <span className="mr-2 font-['Glametrix']">Перейти в каталог</span>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L1 9" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </motion.button>

            {/* Decorative Connection Line (Orange) - From title 'СУШЕННЫЕ ТРАВЫ' to right side */}
             <svg className="absolute inset-0 pointer-events-none z-0" style={{ width: '100%', height: '100%' }}>
                <polyline 
                    points="600,60 1200,60 1200,200" // Placeholder points just to check svg works
                    fill="none"
                    stroke="#C65A32"
                    strokeWidth="1"
                    className="hidden" // Hiding for now as coordinates are tricky without precise path data
                />
                 {/* Recreating the line based on screenshot: From end of "СУШЕННЫЕ ТРАВЫ" -> Right -> Down -> Left ... */}
                 {/* From the screenshot: It outlines the "СУШЕННЫЕ ТРАВЫ" block top/right, goes down, then left under the images row/above "БУКЕТЫ" circle */}
                 {/* Actually it connects "СУШЕННЫЕ ТРАВЫ" right edge to the top right corner and down. */}
                 {/* Let's try to approximate the orange lines visible. */}
                 {/* Line 1: Top horizontal and Vertical down on the right */}
                 <line x1="45%" y1="9%" x2="100%" y2="9%" stroke="#C65A32" strokeWidth="1" />
                 <line x1="85%" y1="9%" x2="85%" y2="20%" stroke="#C65A32" strokeWidth="1" />
            </svg>
            
            {/* The line in the screenshot goes from "СУШЕННЫЕ ТРАВЫ" baseline, horizontally to the right, then turns down to wrap around something. */}
            {/* Another line is the circle around "БУКЕТЫ". */}
            {/* I will implement the circle for "БУКЕТЫ" using border-radius on a div as added above. */}

        </section>
    );
};

export default ProductionSlide6;
