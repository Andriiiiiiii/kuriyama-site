import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import rightTopImage from '@/assets/visit to the apiary/right top image 3.webp';
import leftBottomImage from '@/assets/visit to the apiary/left bottom image 3.webp';

const ApiaryVisitSlide3: React.FC = () => {
    
    return (
        <section className="relative w-full h-screen overflow-hidden bg-white">
            {/* Title: для кого? (id: 655:872): left 8.33%, top 16.16%, width 36.99%, height 9.50% */}
             <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute font-ua-brand font-bold uppercase leading-none text-[#2E261D]"
                style={{
                    left: '8.33%',
                    top: '16.16%',
                    width: '36.99%',
                    fontSize: FONT_SIZES.heading
                }}
            >
                ДЛЯ КОГО?
            </motion.h2>
            
             {/* Subtitle: Описание, подробнее... (id: 655:876): left 50.76%, top 34.69%, width 35.02%, height 2.94% */}
            <motion.p
                 initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute font-glametrix text-[#2E261D]"
                style={{
                    left: '50.76%',
                    top: '34.69%',
                    width: '35.02%',
                    fontSize: FONT_SIZES.subheading,
                    lineHeight: 1.2
                }}
            >
                Описание, подробнее раскрывающее заголовок.
            </motion.p>
            
            {/* Rectangle 228 (id: 655:877): left 50.69%, top 44.83%, width 33.89%, height 55.17% */}
             <motion.div
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 1, height: '55.17%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute z-30 border border-[#C65A32]"
                style={{
                    left: '50.69%',
                    top: '44.83%',
                    width: '33.89%', 
                }}
            />

            {/* Content Group 1: Для себя */}
            <motion.h3
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute font-glametrix font-bold text-[#C65A32] uppercase"
                style={{
                     left: '54.35%',
                     top: '52.95%',
                     fontSize: FONT_SIZES.subheading
                }}
            >
                ДЛЯ СЕБЯ
            </motion.h3>
            <motion.p
                 initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute font-glametrix text-[#2E261D]"
                style={{
                    left: '54.35%',
                    top: '58.70%',
                    width: '23.88%',
                    fontSize: FONT_SIZES.body,
                    lineHeight: 1.2
                }}
            >
                Описание, подробнее раскрывающее заголовок
            </motion.p>

            {/* Content Group 2: Для семьи */}
            <motion.h3
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute font-glametrix font-bold text-[#C65A32] uppercase"
                style={{
                     left: '54.35%',
                     top: '68.95%',
                     fontSize: FONT_SIZES.subheading
                }}
            >
                ДЛЯ СЕМЬИ
            </motion.h3>
            <motion.p
                 initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute font-glametrix text-[#2E261D]"
                style={{
                    left: '54.35%',
                    top: '74.68%',
                    width: '23.88%',
                    fontSize: FONT_SIZES.body,
                    lineHeight: 1.2
                }}
            >
                Описание, подробнее раскрывающее заголовок
            </motion.p>
            
            {/* Content Group 3: Для компаний */}
            <motion.h3
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute font-glametrix font-bold text-[#C65A32] uppercase"
                style={{
                     left: '54.35%',
                     top: '84.72%',
                     fontSize: FONT_SIZES.subheading
                }}
            >
                ДЛЯ КОМПАНИЙ
            </motion.h3>
            <motion.p
                 initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute font-glametrix text-[#2E261D]"
                style={{
                    left: '54.35%',
                    top: '90.65%',
                    width: '23.88%',
                    fontSize: FONT_SIZES.body,
                    lineHeight: 1.2
                }}
            >
                Описание, подробнее раскрывающее заголовок
            </motion.p>

            {/* Images */}
             {/* right top image 3 (id: 655:887): left 65.35%, top 8.86%, width 19.24%, height 22.55% */}
             <motion.img
                initial={{ opacity: 0, rotate: 10, scale: 0.9 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                src={rightTopImage}
                alt=""
                className="absolute object-contain origin-top-right" 
                style={{
                    left: '65.35%',
                    top: '8.86%',
                    // Removing strict width/height constraints might help if aspect ratio is issue, 
                    // but keeping width stable and letting height be auto for contain is safer if aspect ratio is unknown.
                    // Or keep box and use contain (which I did).
                    // If user says "don't crop", maybe they mean the image is being clipped by its own bounding box in Figma export vs reality.
                    // Let's try making it "visible" without "overflow-hidden" on parent if that was the case, 
                    // but here I will just ensure object-contain and maybe increase size slightly if needed, 
                    // or just ensure it's not cut.
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '30%', // relaxed constraints
                    maxHeight: '35%',
                }}
            />
            
            {/* left bottom image 3 (id: 656:1254): left 8.33%, top 33.56%, width 38.89%, height 66.44% */}
             <motion.img
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                src={leftBottomImage}
                alt=""
                className="absolute object-cover"
                style={{
                    left: '8.33%',
                    top: '33.56%',
                    width: '38.89%',
                    height: '66.44%',
                    zIndex: 2
                }}
            />

        </section>
    );
};

export default ApiaryVisitSlide3;
