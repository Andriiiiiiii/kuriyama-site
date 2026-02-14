import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import backImage from '@/assets/personal-beekeeping/10-FAQ.png';

const PersonalBeekeepingSlide10: React.FC = () => {
    // Canvas from JSON block 10: w: 1440, h: 599
    // Position: x: 40010, y: 7952
    const BASE_WIDTH = 1440;
    const BASE_HEIGHT = 599;
    const BLOCK_X = 40010;
    const BLOCK_Y = 7952;
    
    // Helper to calculate percentages
    const pX = (px: number) => `${(px / BASE_WIDTH) * 100}%`;
    const pY = (px: number) => `${(px / BASE_HEIGHT) * 100}%`;

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const questions = [
        { question: 'Вопрос о личном пчеловодстве', answer: 'Описание, чуть подробнее раскрывающее заголовок' },
        { question: 'Вопрос о личном пчеловодстве', answer: 'Описание, чуть подробнее раскрывающее заголовок' },
        { question: 'Вопрос о личном пчеловодстве', answer: 'Описание, чуть подробнее раскрывающее заголовок' },
        { question: 'Вопрос о личном пчеловодстве', answer: 'Описание, чуть подробнее раскрывающее заголовок' },
        { question: 'Вопрос о личном пчеловодстве', answer: 'Описание, чуть подробнее раскрывающее заголовок' },
    ];

    return (
        <section 
            className="relative z-20 w-full overflow-hidden bg-white text-[#2E261D]"
            style={{ 
                paddingTop: `${(BASE_HEIGHT / BASE_WIDTH) * 100}%`,
            }}
        >
            <div className="absolute inset-0 w-full h-full">
                
                {/* Background Image (Rectangle 338:392 from JSON or similar) */}
                {/* JSON x: 40597, y: 8011.72 -> 587, 59.72 */}
                {/* w: 267, h: 539 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="absolute"
                    style={{
                        left: pX(587),
                        top: pY(59.72),
                        width: pX(267),
                        height: pY(539),
                    }}
                >
                    <img 
                        src={backImage} 
                        alt="Bee icon" 
                        className="w-full h-full object-contain opacity-50 mix-blend-multiply"
                    />
                </motion.div>

                {/* Title "частые вопросы" */}
                {/* JSON x: 40134.32, y: 8124.12 -> 124.32, 172.12 */}
                {/* w: 485.125, h: 159.2 */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute font-ua-brand font-bold uppercase leading-none text-[#C65A32]"
                    style={{
                        left: pX(124.32),
                        top: pY(172.12),
                        width: pX(485.13),
                        fontSize: FONT_SIZES.heading,
                        lineHeight: 1
                    }}
                >
                    Частые <br />вопросы
                </motion.h2>

                {/* FAQ List Container */}
                {/* Starting coordinates based on first question line separator or title */}
                {/* Line 14: x: 40740, y: 8202.72 -> 730, 250.72 */}
                {/* First Question Text: x: 40741.76, y: 8112.36 -> 731.76, 160.36 */}
                {/* Width 590px (lines are 590px wide) */}
                <div 
                    className="absolute"
                    style={{
                        left: pX(730),
                        top: pY(160.36),
                        width: pX(590),
                    }}
                >
                    {questions.map((item, index) => (
                        <div key={index} className="relative">
                            {/* Question Row */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="border-b border-[#C65A32] cursor-pointer"
                                onClick={() => toggleItem(index)}
                                style={{
                                     paddingBottom: '16px', // Approx distance to line
                                     marginBottom: '16px', // Gap to next
                                     position: 'relative' // For absolute positioning of cross/minus
                                }}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 
                                        className="font-glametrix font-bold text-[#2E261D]"
                                        style={{ fontSize: FONT_SIZES.subheading }}
                                    >
                                        {item.question}
                                    </h3>
                                    
                                    {/* Icon Container - positioned at end (right) */}
                                    <div className="w-[20px] h-[20px] relative flex items-center justify-center">
                                         {/* Horizontal Line (Always visible) */}
                                         <div className="absolute w-full h-[1px] bg-[#C65A32]" />
                                         
                                         {/* Vertical Line (Visible when closed) */}
                                         <motion.div 
                                             className="absolute w-full h-[1px] bg-[#C65A32]" 
                                             initial={false}
                                             animate={{ rotate: openIndex === index ? 0 : 90, opacity: openIndex === index ? 0 : 1 }}
                                         />
                                    </div>
                                </div>
                                
                                {/* Answer - Animate Height */}
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p 
                                                className="font-glametrix text-[#2E261D] pt-4"
                                                style={{ fontSize: FONT_SIZES.body, lineHeight: 1.2 }}
                                            >
                                                {item.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PersonalBeekeepingSlide10;
