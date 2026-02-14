import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import groupImage from '@/assets/personal-beekeeping/3-group.png';
import number1 from '@/assets/corporate-beekeeping/number-1.svg';
import number2 from '@/assets/corporate-beekeeping/number-2.svg';
import number3 from '@/assets/corporate-beekeeping/number-3.svg';

const PersonalBeekeepingSlide3: React.FC = () => {
    // Canvas size
    // Assuming 1440 width.
    const BASE_WIDTH = 1440;
    const BASE_HEIGHT = 800; 

    // Helper to convert Figma px to %
    const pX = (px: number) => `${(px / BASE_WIDTH) * 100}%`;
    const pY = (px: number) => `${(px / BASE_HEIGHT) * 100}%`;

    return (
        <section 
            className="relative w-full overflow-hidden bg-background"
            style={{ 
                paddingTop: `${(BASE_HEIGHT / BASE_WIDTH) * 100}%`,
            }}
        >
             <div className="absolute inset-0 w-full h-full"> 
                {/* Title "КАК ЭТО РАБОТАЕТ" */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute font-ua-brand font-bold uppercase leading-none text-[#2E261D]"
                    style={{
                        left: pX(120),
                        top: pY(100),
                        width: pX(500),
                        fontSize: FONT_SIZES.heading,
                        lineHeight: 1
                    }}
                >
                    КАК ЭТО<br/>РАБОТАЕТ
                </motion.h2>

                {/* --- Step 3 (Right Side) --- */}
                {/* Circle Decoration */}
                <div 
                    className="absolute border border-[#C65A32] rounded-full opacity-60"
                    style={{
                        left: pX(957),
                        top: pY(240),
                        width: pX(400),
                        height: pY(400),
                        zIndex: 0
                    }}
                />

                {/* Image Group (Group 86) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="absolute z-10"
                    style={{
                        left: pX(832),
                        top: pY(100),
                        width: pX(325),
                        height: pY(594),
                    }}
                >
                    <img src={groupImage} alt="" className="w-full h-full object-contain" />
                </motion.div>

                {/* Step 3 Content - Overlaid on Image */}
                <div 
                    className="absolute z-20 pointer-events-none flex flex-col"
                    style={{
                         left: pX(870), // Slightly adjusted padding
                         top: pY(340), 
                         width: pX(250),
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mb-4"
                    >
                        <img src={number3} alt="3" className="w-[60px] h-auto" />
                    </motion.div>
                    
                    <motion.h3 
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9 }}
                        className="font-glametrix font-bold text-[#2E261D] mb-2"
                        style={{ fontSize: FONT_SIZES.subheading }}
                    >
                        Шаг 3
                    </motion.h3>
                    <motion.p 
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.0 }}
                        className="font-glametrix text-[#2E261D]"
                        style={{ fontSize: FONT_SIZES.body }}
                    >
                        Описание, подробнее раскрывающее заголовок
                    </motion.p>
                </div>

                {/* --- Step 1 (Left Column) --- */}
                <div className="absolute flex flex-col" style={{ left: pX(120), top: pY(340), width: pX(280) }}>
                     {/* Orange Vertical Line */}
                     <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#C65A32] h-full"></div>
                     
                     <div className="pl-6">
                        <motion.div 
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                            className="mb-4"
                        >
                            <img src={number1} alt="1" className="h-20 w-auto" />
                        </motion.div>
                        <motion.h3 
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                            className="font-glametrix font-bold text-[#2E261D] mb-2"
                            style={{ fontSize: FONT_SIZES.subheading }}
                        >
                            Шаг 1
                        </motion.h3>
                        <motion.p 
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                            className="font-glametrix text-[#2E261D]"
                            style={{ fontSize: FONT_SIZES.body }}
                        >
                            Описание, подробнее раскрывающее заголовок
                        </motion.p>
                    </div>
                </div>

                {/* --- Step 2 (Middle Column) --- */}
                <div className="absolute flex flex-col" style={{ left: pX(480), top: pY(340), width: pX(280) }}>
                     {/* Orange Vertical Line */}
                     <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#C65A32] h-full"></div>
                     
                     <div className="pl-6">
                        <motion.div 
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                            className="mb-4"
                        >
                            <img src={number2} alt="2" className="h-20 w-auto" />
                        </motion.div>
                        <motion.h3 
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
                            className="font-glametrix font-bold text-[#2E261D] mb-2"
                            style={{ fontSize: FONT_SIZES.subheading }}
                        >
                            Шаг 2
                        </motion.h3>
                        <motion.p 
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
                            className="font-glametrix text-[#2E261D]"
                            style={{ fontSize: FONT_SIZES.body }}
                        >
                            Описание, подробнее раскрывающее заголовок
                        </motion.p>
                    </div>
                </div>

             </div>
        </section>
    );
};

export default PersonalBeekeepingSlide3;
