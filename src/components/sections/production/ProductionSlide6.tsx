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
            <h2
                className="absolute font-ua-brand font-bold uppercase leading-none text-[#1F1E1D]"
                style={{
                    left: '8.67%',
                    top: '9.01%',
                    width: '61.93%',
                    fontSize: getFontSize(60), // Approx from height 7.3% of 815 ~ 60px
                }}
            >
                СУШЕННЫЕ ТРАВЫ
            </h2>

            {/* Images */}
            
            {/* Left Image */}
            <div
                className="absolute overflow-hidden"
                style={{
                    left: '8.33%',
                    top: '21.23%',
                    width: '19.79%',
                    height: '25.77%',
                }}
            >
                <img src={productionSlide6Images.leftImage} alt="Для приправ" className="w-full h-full object-cover" />
            </div>

            {/* Title: Для приправ */}
            <h3
                className="absolute font-['Glametrix'] font-bold text-[#333333]"
                style={{
                    left: '8.38%',
                    top: '50.51%',
                    width: '19.79%', // Extended to match image width
                    fontSize: getFontSize(22),
                }}
            >
                Для приправ
            </h3>

            {/* Description: Для приправ */}
            <p
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
            </p>


            {/* Center Image */}
            <div
                className="absolute overflow-hidden"
                style={{
                    left: '51.39%',
                    top: '21.23%',
                    width: '19.1%',
                    height: '48.83%',
                }}
            >
                <img src={productionSlide6Images.centerImage} alt="Для чая" className="w-full h-full object-cover" />
            </div>

            {/* Title: Для чая */}
            <h3
                className="absolute font-['Glametrix'] font-bold text-[#333333]"
                style={{
                    left: '51.43%',
                    top: '73.58%',
                    width: '19.1%',
                    fontSize: getFontSize(22),
                }}
            >
                Для чая
            </h3>

             {/* Description: Для чая */}
             <p
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
            </p>


            {/* Right Image */}
            <div
                className="absolute overflow-hidden"
                style={{
                    left: '72.01%',
                    top: '21.23%',
                    width: '19.65%',
                    height: '25.77%',
                }}
            >
                <img src={productionSlide6Images.rightImage} alt="Для декора" className="w-full h-full object-cover" />
            </div>

             {/* Title: Для декора */}
             <h3
                className="absolute font-['Glametrix'] font-bold text-[#333333]"
                style={{
                    left: '72.06%',
                    top: '50.51%',
                    width: '19.65%',
                    fontSize: getFontSize(22),
                }}
            >
                Для декора
            </h3>

            {/* Description: Для декора */}
            <p
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
            </p>

           
        
            {/* Title: БУКЕТЫ */}
            <h2
                className="absolute font-ua-brand font-bold uppercase leading-none text-[#1F1E1D] z-10"
                style={{
                    left: '8.76%',
                    top: '75.94%',
                    width: '25.89%',
                    fontSize: getFontSize(60),
                }}
            >
                БУКЕТЫ
            </h2>

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

           
        </section>
    );
};

export default ProductionSlide6;
