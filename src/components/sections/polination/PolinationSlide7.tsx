import React, { useRef, useState, useEffect, useLayoutEffect  } from "react";
import { motion, useInView } from "framer-motion";
import { FONT_SIZES } from '@/config/typography';
import AnimatedLine, { Point } from '@/components/shared/AnimatedLine';
import leftImg from '@/assets/pollination/seventh_slide_left_image.png';
import rightImg from '@/assets/pollination/seventh_slide_right_image.png';

const PolinationSlide7: React.FC = () => {
    // 1. Настройка ссылок
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.5 }); 
    // 2. Состояние последовательности анимации
    // 0 = ничего, 1 = входная линия, 2 = взрыв из кнопки, 3 = финальные ответвления
    const [step, setStep] = useState(1); 
   
       {/**/}
    const pTop: Point    = { x: '70%', y: '0%' };
    const pTopEnd: Point   = { x: '70%', y: '100%' };

    const items = [
        // 1. 60%
        { 
            id: 1, 
            head: "60%", 
            desc: "Две строчки дополнительного\nописания подкрепляющего заголовок",
            headLeft: 15.14, headTop: 1.50,
            descLeft: 15.10, descTop: 9.10 
        },
        // 2. 2-4 hives (Right side)
        { 
            id: 2, 
            head: "2-4 улья на 1 га", 
            desc: "Две строчки дополнительного\nописания подкрепляющего заголовок",
            headLeft: 71.91, headTop: 9.65,
            descLeft: 71.91, descTop: 17.23 
        },
        // 3. 24 hours (Bottom Left)
        { 
            id: 3, 
            head: "24 часа", 
            desc: "Две строчки дополнительного\nописания подкрепляющего заголовок",
            headLeft: 22.46, headTop: 56.95,
            descLeft: 22.46, descTop: 64.52 
        }
    ];

    return (
        <section ref={sectionRef} 
            className="relative w-full bg-white overflow-hidden"
            style={{ 
                height: '38.47vw'
            }}
        >
             {/* Left Image (Ink Wash) */}
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute"
                style={{
                    left: '5.07%',
                    top: '13.54%',
                    width: '16.67%',
                    height: '86.46%',
                    zIndex: 10
                }}
             >
                <img src={leftImg} alt="Abstract Ink Wash" className="w-full h-full object-contain" />
             </motion.div>

             {/* Right Image (Bee on flower) */}
             <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute"
                style={{
                    left: '64.79%',
                    top: '55.42%',
                    width: '12.78%',
                    height: '16.43%',
                    zIndex: 10
                }}
             >
                <img src={rightImg} alt="Bee on flower" className="w-full h-full object-cover" />
             </motion.div>

             {/* Main Title "РЕЗУЛЬТАТ" */}
             <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute font-['UA-brand'] font-bold text-[#C65A32] uppercase tracking-tight text-center flex items-center justify-center z-20"
                style={{
                    left: '32.37%',
                    top: '33.83%',
                    width: '35.74%',
                    height: '10.74%',
                    fontSize: FONT_SIZES.heading
                }}
             >
                РЕЗУЛЬТАТ
             </motion.h2>

             {/* Text Items */}
             {items.map((item) => (
                <React.Fragment key={item.id}>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 * item.id }}
                        className="absolute font-['Glametrix'] font-bold text-[#2E261D] z-20"
                        style={{
                            left: `${item.headLeft}%`,
                            top: `${item.headTop}%`,
                            fontSize: FONT_SIZES.subheading
                        }}
                    >
                        {item.head}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.25 * item.id }}
                        className="absolute font-['Glametrix'] text-[#2E261D]/70 whitespace-pre-line z-20"
                        style={{
                            left: `${item.descLeft}%`,
                            top: `${item.descTop}%`,
                            width: '18.9%', 
                            fontSize: FONT_SIZES.body,
                            lineHeight: '1.3'
                        }}
                    >
                        {item.desc}
                    </motion.div>
                </React.Fragment>
             ))}
             
             {/* Lines (inferred from design style as they were missing in JSON but requested 'by analogy') */}
             {isInView && (
                <>
                    <AnimatedLine
                        start={pTop}
                        end={pTopEnd}
                        direction="to-bottom"
                        zIndex={0}
                        trigger={step >= 1} 
                    />
                </>

        )}
        </section>
    );
};

export default PolinationSlide7;
