import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import { productionSlide3Images } from '@/assets/production/slide3';

const ProductionSlide3: React.FC = () => {
    return (
        <section 
            className="relative w-full overflow-hidden bg-white"
            style={{ 
                height: 'calc(100vw * (426 / 1440))', // Maintain aspect ratio from design
                maxHeight: '100vh' // Safety cap
            }}
        >
            {/* Title - "МЁД С КУРИЯМЫ" */}
            <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="absolute z-10 font-ua-brand font-bold uppercase tracking-tight"
                style={{
                    left: '8.77%',
                    top: '1.18%',
                    width: '55.84%',
                    height: '20.22%',
                    fontSize: FONT_SIZES.heading,
                    lineHeight: 1.1,
                    color: '#333333' // Assuming dark text from context/screenshot look
                }}
            >
                МЁД С КУРИЯМЫ
            </motion.h2>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute z-10 font-['Glametrix'] text-foreground"
                style={{
                    left: '8.36%',
                    top: '27.10%',
                    width: '18.92%',
                    height: '8.91%',
                    fontSize: FONT_SIZES.body,
                    lineHeight: 1.4
                }}
            >
                Две строчки дополнительного описания подкрепляющего заголовок
            </motion.p>

            {/* Catalog Button */}
            <div
                className="absolute z-20"
                style={{
                    left: '8.33%',
                    top: '67.84%',
                    width: 'auto', // Auto width for pill button
                    height: '8.68%'
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

            {/* Images */}
            {/* Image 1 */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute"
                style={{
                    left: '37.99%',
                    top: '27.93%',
                    width: '10.0%',
                    height: '48.59%'
                }}
            >
                <img 
                    src={productionSlide3Images.image1} 
                    alt="Мед 1" 
                    className="w-full h-full object-contain"
                />
            </motion.div>

            {/* Image 2 */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute"
                style={{
                    left: '52.22%',
                    top: '27.93%',
                    width: '9.72%',
                    height: '48.59%'
                }}
            >
                <img 
                    src={productionSlide3Images.image2} 
                    alt="Мед 2" 
                    className="w-full h-full object-contain"
                />
            </motion.div>

            {/* Image 3 */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute"
                style={{
                    left: '66.39%',
                    top: '28.17%',
                    width: '9.65%',
                    height: '48.36%'
                }}
            >
                <img 
                    src={productionSlide3Images.image3} 
                    alt="Мед 3" 
                    className="w-full h-full object-contain"
                />
            </motion.div>

            {/* Image 4 */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute"
                style={{
                    left: '80.35%',
                    top: '27.93%',
                    width: '10.0%',
                    height: '48.59%'
                }}
            >
                <img 
                    src={productionSlide3Images.image4} 
                    alt="Мед 4" 
                    className="w-full h-full object-contain"
                />
            </motion.div>

        </section>
    );
};

export default ProductionSlide3;
