import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FONT_SIZES, TYPOGRAPHY_CONFIG } from '@/config/typography';
import slideImage from '@/assets/corporate-beekeeping/11FAQ.webp';

const CorporateBeekeepingSlide11: React.FC = () => {
    const BASE_WIDTH = 1440;
    const BASE_HEIGHT = 599;

    const toVw = (px: number) => `calc(${px} / ${TYPOGRAPHY_CONFIG.baseWidth} * 100vw)`;

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
                height: toVw(BASE_HEIGHT)
            }}
        >
            <div className="absolute inset-0 w-full h-full">
                
                {/* Background Image */}
                <div
                    className="absolute z-0"
                    style={{
                        left: toVw(587),
                        top: toVw(59.7),
                        width: toVw(267),
                        height: toVw(539)
                    }}
                >
                    <img 
                        src={slideImage} 
                        alt="Decor" 
                        className="w-full h-full object-cover opacity-50 mix-blend-multiply" 
                    />
                </div>

                {/* Title */}
                <div
                    className="absolute z-10 font-ua-brand font-bold uppercase leading-none text-[#C65A32]"
                    style={{
                        left: toVw(124),
                        top: toVw(172),
                        width: toVw(485),
                        fontSize: FONT_SIZES.heading,
                        lineHeight: 1.1 
                    }}
                >
                    ЧАСТЫЕ
                    <br />
                    ВОПРОСЫ
                </div>

                {/* FAQ List Container */}
                <div
                    className="absolute z-20 flex flex-col"
                    style={{
                        left: toVw(731),
                        top: toVw(160),
                        width: toVw(640), // slightly wider
                        gap: toVw(25)
                    }}
                >
                    {questions.map((item, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <div key={index} className="w-full">
                                {/* Question Row */}
                                <div
                                    className="cursor-pointer flex items-center justify-between hover:opacity-80 transition-opacity w-full"
                                    onClick={() => toggleIndex(index)}
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
                                    
                                     <div 
                                        className="flex-shrink-0 flex items-center justify-center relative"
                                        style={{ 
                                            width: toVw(20), 
                                            height: toVw(20),
                                            marginLeft: toVw(16),
                                        }}
                                    >
                                        <div className="absolute bg-[#C65A32]" style={{ width: '100%', height: '2px', top: '50%', transform: 'translateY(-50%)' }} />
                                        <motion.div 
                                            className="absolute bg-[#C65A32]" 
                                            style={{ height: '100%', width: '2px', left: '50%', x: '-50%' }}
                                            animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                                            transition={{ duration: 0.2 }}
                                        />
                                    </div>
                                </div>

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
                                                    marginTop: toVw(15), 
                                                    lineHeight: 1.3
                                                }}
                                                >
                                                    {item.answer}
                                                </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
                              
export default CorporateBeekeepingSlide11;
