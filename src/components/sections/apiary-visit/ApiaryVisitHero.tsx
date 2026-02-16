import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import SelectTariffButton from '@/components/shared/SelectTariffButton';
import imageRight from '@/assets/visit to the apiary/image right block 1.webp';
import topImage from '@/assets/visit to the apiary/top image 1.webp';
import leftImage from '@/assets/visit to the apiary/left image 1.svg';
import heroBg from '@/assets/1-background.webp';

const ApiaryVisitHero: React.FC = () => {
    // The provided JSON suggests the layout is designed for full screen.
    // Coordinates are percentages.

    return (
        <section className="relative w-full h-screen overflow-hidden bg-white">
            {/* Background Image */}
            <div
                className="absolute"
                style={{
                left: '0%',
                top: '0%',
                width: '100%',
                height: '100%'
                }}
            >
                <img
                src={heroBg}
                alt=""
                className="w-full h-full object-fill"
                />
            </div>
            
            {/* top image 1 (id: 655:926): left 74.86%, top 9.42%, width 11.88%, height 42.85% */}
            <motion.img
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                src={topImage}
                alt=""
                className="absolute object-contain mix-blend-multiply" 
                style={{
                    left: '74.86%',
                    top: '9.42%',
                    width: '11.88%',
                    height: '42.85%',
                    zIndex: 1
                }}
            />

            {/* image right block 1 (id: 655:912): left 36.60%, top 32.69%, width 54.93%, height 52.01% */}
            <motion.img
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                src={imageRight}
                alt=""
                className="absolute object-contain" // Use object-contain to preserve aspect ratio within the box
                style={{
                    left: '36.60%',
                    top: '32.69%',
                    width: '54.93%',
                    height: '52.01%',
                    zIndex: 2
                }}
            />

             {/* left image 1 (id: 655:927): left 26.81%, top 35.19%, width 12.64%, height 46.11% */}
             <motion.img
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                src={leftImage}
                alt=""
                className="absolute object-contain"
                style={{
                    left: '26.81%',
                    top: '35.19%',
                    width: '12.64%',
                    height: '46.11%',
                    zIndex: 3
                }}
            />

            {/* Title: визит на пасеку (id: 655:915): left 8.83%, top 20.15%, width 60.66%, height 7.48% */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute font-ua-brand font-bold uppercase leading-none text-[#2E261D]"
                style={{
                    left: '8.83%',
                    top: '20.15%',
                    width: '60.66%',
                    fontSize: '5vw', // Approximate based on height/width ratio or standard h1
                    zIndex: 10
                }}
            >
                визит на пасеку
            </motion.h1>

            {/* Date/Location: 25.01.2026 ... (id: 655:925): left 8.35%, top 32.86%, width 21.34%, height 2.76% */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute font-glametrix text-[#2E261D]"
                style={{
                    left: '8.35%',
                    top: '32.86%',
                    width: '21.34%',
                    fontSize: FONT_SIZES.body,
                    zIndex: 10
                }}
            >
                25.01.2026 в 10:00 | г. Москва, ул. Ленина 1
            </motion.p>

            {/* Description (id: 655:913): left 8.22%, top 38.86%, width 18.92%, height 4.77% */}
             <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute font-glametrix text-[#2E261D]"
                style={{
                    left: '8.22%',
                    top: '38.86%',
                    width: '18.92%',
                    fontSize: FONT_SIZES.body,
                    zIndex: 10
                }}
            >
                Две строчки дополнительного
                <br />
                описания подкрепляющего заголовок
            </motion.p>
            
             {/* Lead Button Group (id: 655:914): left 8.12%, top 47.36%, width 15.21%, height 27.52% */}
             <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute flex items-center justify-center cursor-pointer group"
                style={{
                    left: '8.12%',
                    top: '47.36%',
                    width: '15.21%',
                    zIndex: 10
                }}
             >
                <SelectTariffButton width="100%" />
             </motion.div>

        </section>
    );
};

export default ApiaryVisitHero;

