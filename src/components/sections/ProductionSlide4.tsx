import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import { productionSlide4Images } from '@/assets/production/slide4';

const ProductionSlide4: React.FC = () => {
    return (
        <section 
            className="relative w-full overflow-hidden bg-white"
            style={{ 
                height: 'calc(100vw * (626 / 1440))', // Aspect ratio 1440:626
                maxHeight: '100vh'
            }}
        >
            {/* --- LEFT SECTION (Vegetables/ОВОЩИ) --- */}
            
            {/* Title OVOCHI */}
            <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="absolute z-10 font-ua-brand font-bold uppercase tracking-tight"
                style={{
                    left: '8.67%',
                    top: '4.86%',
                    width: '25.46%',
                    height: '11.31%',
                    fontSize: FONT_SIZES.heading,
                    lineHeight: 1.1,
                    color: '#C65A32' 
                }}
            >
                ОВОЩИ
            </motion.h2>

            {/* Description OVOCHI */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute z-10 font-['Glametrix'] text-foreground"
                style={{
                    left: '8.45%',
                    top: '20.02%',
                    width: '13.06%',
                    height: '6.08%',
                    fontSize: FONT_SIZES.body,
                    lineHeight: 1.4
                }}
            >
                Описание, чуть подробнее раскрывающее заголовок
            </motion.p>

            {/* Left Cloud/Decoration */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute z-0"
                style={{
                    left: '15.90%',
                    top: '45.37%',
                    width: '27.22%',
                    height: '38.02%',
                    transform: 'rotate(-180deg)' // From JSON
                }}
            >
                 <img 
                    src={productionSlide4Images.left1} 
                    alt="" 
                    className="w-full h-full object-contain"
                />
            </motion.div>

            {/* Left Main Image (Pumpkin) */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute z-10"
                style={{
                    left: '29.51%',
                    top: '19.17%',
                    width: '19.79%',
                    height: '66.93%'
                }}
            >
                <img 
                    src={productionSlide4Images.left2} 
                    alt="Овощи" 
                    className="w-full h-full object-cover shadow-lg"
                />
            </motion.div>


            {/* --- RIGHT SECTION (Herbs/ТРАВЫ) --- */}

             {/* Right Cloud/Decoration */}
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute z-0"
                style={{
                    left: '58.40%',
                    top: '12.30%',
                    width: '27.22%',
                    height: '38.02%'
                }}
            >
                 <img 
                    src={productionSlide4Images.right1} 
                    alt="" 
                    className="w-full h-full object-contain"
                />
            </motion.div>

            {/* Right Main Image (Herbs) */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute z-10"
                style={{
                    left: '71.88%',
                    top: '0.00%',
                    width: '19.79%',
                    height: '69.33%'
                }}
            >
                <img 
                    src={productionSlide4Images.right2} 
                    alt="Травы" 
                    className="w-full h-full object-cover shadow-lg"
                />
            </motion.div>

            {/* Description TRAVI */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute z-10 font-['Glametrix'] text-foreground text-right" // text-right might be needed based on layout? No, generic text is fine.
                style={{
                    left: '52.27%',
                    top: '63.95%',
                    width: '13.06%',
                    height: '6.08%',
                    fontSize: FONT_SIZES.body,
                    lineHeight: 1.4
                }}
            >
                Описание, чуть подробнее раскрывающее заголовок
            </motion.p>

             {/* Title TRAVI */}
             <motion.h2
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="absolute z-10 font-ua-brand font-bold uppercase tracking-tight"
                style={{
                    left: '52.26%',
                    top: '75.56%',
                    width: '21.79%',
                    height: '8.95%',
                    fontSize: FONT_SIZES.heading,
                    lineHeight: 1.1,
                    color: '#C65A32' 
                }}
            >
                ТРАВЫ
            </motion.h2>

             {/* Catalog Button */}
             <div
                className="absolute z-20"
                style={{
                    left: '77.85%',
                    top: '78.59%',
                    width: 'auto',
                    height: '5.91%'
                }}
            >
                 <button
                    className="h-full px-8 bg-[#C65A32] text-white rounded-full font-['Glametrix'] hover:opacity-90 transition-opacity whitespace-nowrap flex items-center justify-center font-bold"
                    style={{ fontSize: FONT_SIZES.body }}
                    onClick={() => {}}
                 >
                    Перейти в каталог &gt;
                 </button>
            </div>

        </section>
    );
};

export default ProductionSlide4;
