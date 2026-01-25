import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import slideImage from '@/assets/corporate-beekeeping/11FAQ.png';

const CorporateBeekeepingSlide11: React.FC = () => {
    const BASE_WIDTH = 1440;
    const BASE_HEIGHT = 599;

    const pX = (px: number) => `${(px / BASE_WIDTH) * 100}%`;
    const pY = (px: number) => `${(px / BASE_HEIGHT) * 100}%`;

    // Coordinates relative to block
    // block x: 34032, y: 6775
    
    // Image: x 34619 - 34032 = 587; y 6834.7 - 6775 = 59.7
    // Title: x 34156 - 34032 = 124; y 6947 - 6775 = 172
    // Questions Start: x 34763 - 34032 = 731; y 6935 - 6775 = 160

    const questions = [
        {
            question: "Вопрос о корпоративном пчеловодстве",
            answer: "Описание, чуть подробнее раскрывающее заголовок"
        },
        {
            question: "Вопрос о корпоративном пчеловодстве",
            answer: "Описание, чуть подробнее раскрывающее заголовок"
        },
        {
            question: "Вопрос о корпоративном пчеловодстве",
            answer: "Описание, чуть подробнее раскрывающее заголовок"
        },
        {
            question: "Вопрос о корпоративном пчеловодстве",
            answer: "Описание, чуть подробнее раскрывающее заголовок"
        },
        {
            question: "Вопрос о корпоративном пчеловодстве",
            answer: "Описание, чуть подробнее раскрывающее заголовок"
        }
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleIndex = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section
            className="relative w-full overflow-hidden bg-white text-[#2E261D] z-10"
            style={{
                paddingTop: `${(BASE_HEIGHT / BASE_WIDTH) * 100}%`
            }}
        >
            <div className="absolute inset-0 w-full h-full">
                
                {/* Background Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="absolute z-0"
                    style={{
                        left: pX(587),
                        top: pY(59.7),
                        width: pX(267),
                        height: pY(539)
                    }}
                >
                    <img 
                        src={slideImage} 
                        alt="Decor" 
                        className="w-full h-full object-cover opacity-50 mix-blend-multiply" // Added mix-blend just in case, removing if needed
                    />
                </motion.div>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute z-10 font-ua-brand font-bold uppercase leading-none text-[#C65A32]"
                    style={{
                        left: pX(124),
                        top: pY(172),
                        width: pX(485),
                        fontSize: FONT_SIZES.heading,
                        lineHeight: 1.1 // Tight leading based on visual check
                    }}
                >
                    ЧАСТЫЕ
                    <br />
                    ВОПРОСЫ
                </motion.div>

                {/* FAQ List Container */}
                <div
                    className="absolute z-20 flex flex-col"
                    style={{
                        left: pX(731),
                        top: pY(160),
                        width: pX(590 + 50) // Wide enough to include the toggle button
                    }}
                >
                    {questions.map((item, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <div key={index}>
                                {/* Question Row */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="cursor-pointer flex items-center justify-between hover:opacity-80 transition-opacity"
                                    onClick={() => toggleIndex(index)}
                                    style={{
                                        marginTop: index === 0 ? '0' : '1.5vh',
                                    }}
                                >
                                    <h3
                                        className="font-glametrix font-bold text-[#2E261D] flex-1 text-left"
                                        style={{
                                            fontSize: FONT_SIZES.subheading,
                                            lineHeight: 1.2
                                        }}
                                    >
                                        {item.question}
                                    </h3>
                                    
                                     <div className="flex-shrink-0 flex items-center justify-center w-5 h-5 ml-4 relative">
                                        <div className="absolute w-full h-[1px] bg-[#C65A32]" />
                                        <motion.div 
                                            className="absolute w-[1px] h-full bg-[#C65A32]"
                                            animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                                            transition={{ duration: 0.2 }}
                                        />
                                    </div>
                                </motion.div>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                                <p
                                                className="font-glametrix text-[#2E261D]"
                                                style={{
                                                    fontSize: FONT_SIZES.body,
                                                    marginTop: '1.5vh',
                                                }}
                                                >
                                                    {item.answer}
                                                </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                
                                <motion.div
                                    initial={{ opacity: 0, scaleX: 0 }}
                                    whileInView={{ opacity: 1, scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                    className="bg-[#C65A32] origin-left"
                                    style={{
                                        width: '100%',
                                        height: '1px',
                                        marginTop: '1.5vh',
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default CorporateBeekeepingSlide11;
