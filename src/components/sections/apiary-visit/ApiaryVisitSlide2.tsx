import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import AnimatedLine from '@/components/shared/AnimatedLine';
import leftImage from '@/assets/visit to the apiary/left image 2.webp';
import rightImage from '@/assets/visit to the apiary/right image 2.webp';
// Using vectors for lines or just divs? The prompt lists vectors with coordinates, so divs with borders can work.

const ApiaryVisitSlide2: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });
    const [step, setStep] = useState(0);

    // Start animation when in view
    useEffect(() => {
        if (isInView && step === 0) {
            setStep(1);
        }
    }, [isInView, step]);

    return (
        <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-white">
             {/* Title: О мероприятии (id: 655:896): left 8.67%, top 5.36%, width 58.29%, height 7.14% */}
             <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute font-ua-brand font-bold uppercase leading-none text-[#C65A32]"
                style={{
                    left: '8.67%',
                    top: '5.36%',
                    width: '58.29%',
                    fontSize: FONT_SIZES.heading
                }}
            >
                О МЕРОПРИЯТИИ
            </motion.h2>

            {/* Left Image: left image 2 (id: 655:898): left 8.33%, top 20.99%, width 33.89%, height 43.66% */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute"
                style={{
                    left: '8.33%',
                    top: '20.99%',
                    width: '33.89%',
                    height: '43.66%'
                }}
            >
                 <img 
                    src={leftImage} 
                    alt="Left visual" 
                    className="w-full h-full object-cover"
                />
            </motion.div>

             {/* Right Image: right image 2 (id: 655:905): left 50.63%, top 59.95%, width 41.04%, height 40.05% */}
             <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute"
                style={{
                    left: '50.63%',
                    top: '59.95%',
                    width: '41.04%',
                    height: '40.05%'
                }}
            >
                 <img 
                    src={rightImage} 
                    alt="Right visual" 
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Text 1: Описание подкрепляющее заголовок (id: 655:897): left 50.74%, top 38.03%, width 32.98%, height 7.61% */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute font-glametrix text-[#2E261D]"
                style={{
                    left: '50.74%',
                    top: '38.03%',
                    width: '32.98%',
                    fontSize: FONT_SIZES.body,
                    lineHeight: 1.2
                }}
            >
                Описание подкрепляющее заголовок, которое раскрывает суть мероприятия и приглашает гостей.
            </motion.p>
            
            {/* Text 2: Продолжение описания услуги (id: 655:906): left 15.44%, top 80.87%, width 15.60%, height 4.45% */}
             <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute font-glametrix text-[#2E261D]"
                style={{
                    left: '15.44%',
                    top: '80.87%',
                    width: '15.60%',
                    fontSize: FONT_SIZES.body,
                    lineHeight: 1.2
                }}
            >
                Продолжение описания услуги с дополнительными деталями.
            </motion.p>
            
            {/* Decorative Lines with AnimatedLine */}
            
            {/* Group 1: Top Right */}
            {/* 1. Top Horizontal Line */}
            <AnimatedLine 
                start={{ x: '42.22%', y: '29.25%' }}
                end={{ x: '91.63%', y: '29.25%' }}
                direction="to-right"
                trigger={step >= 1}
                onComplete={() => setStep(s => Math.max(s, 2))}
                zIndex={20}
            />
            
             {/* 2. Vertical Line */}
            <AnimatedLine 
                start={{ x: '91.63%', y: '29.25%' }}
                end={{ x: '91.63%', y: '53.86%' }}
                direction="to-bottom" 
                trigger={step >= 2}
                onComplete={() => setStep(s => Math.max(s, 3))}
                zIndex={20}
            />

            {/* 3. Bottom Horizontal Line */}
            <AnimatedLine 
                start={{ x: '91.63%', y: '53.86%' }}
                end={{ x: '42.22%', y: '53.86%' }}
                direction="to-left"
                trigger={step >= 3}
                onComplete={() => setStep(s => Math.max(s, 4))}
                zIndex={20}
            />

            {/* Group 2: Bottom Left */}
            
            {/* 1. Vertical Line */}
            <AnimatedLine 
                start={{ x: '8.30%', y: '70.69%' }}
                end={{ x: '8.30%', y: '95.23%' }}
                direction="to-bottom"
                trigger={step >= 4}
                onComplete={() => setStep(s => Math.max(s, 5))}
                zIndex={20}
            />
            
            {/* 2. Bottom Horizontal Line */}
             <AnimatedLine 
                start={{ x: '8.30%', y: '95.23%' }}
                end={{ x: '50.69%', y: '95.23%' }}
                direction="to-right"
                trigger={step >= 5}
                onComplete={() => setStep(s => Math.max(s, 6))}
                zIndex={20}
            />
            
            {/* 3. Top Horizontal Line */}
             <AnimatedLine 
                start={{ x: '8.33%', y: '70.63%' }}
                end={{ x: '50.69%', y: '70.63%' }}
                direction="to-right"
                trigger={step >= 4} 
                zIndex={20}
             />


        </section>
    );
};

export default ApiaryVisitSlide2;
