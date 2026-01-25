import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
// Images
import group8 from '@/assets/corporate-beekeeping/8group.png';
import number1 from '@/assets/corporate-beekeeping/number-1.svg';
import number2 from '@/assets/corporate-beekeeping/number-2.svg';
import number3 from '@/assets/corporate-beekeeping/number-3.svg';


const CorporateBeekeepingSlide8: React.FC = () => {
    // Canvas from JSON: width 1440, height 754
    // Block position: x: 34032, y: 3996
    const BASE_WIDTH = 1440;
    const BASE_HEIGHT = 754;
    
    const pX = (px: number) => `${(px / BASE_WIDTH) * 100}%`;
    const pY = (px: number) => `${(px / BASE_HEIGHT) * 100}%`;

    const listItems = [
        {
            id: 1,
            title: "Для кого 1",
            desc: "Описание, подробнее раскрывающее заголовок.",
            number: number1,
            // Relative Y positions based on Figma data calculation
            // Item 1 Title Y (Global): 4250.6
            // Item 1 Desc Y (Global): 4300.3
            // Block 8 Y (Global): 3996
            // Relative Y: Title ~254, Desc ~304
            yTitle: 254.6,
            yDesc: 304.3,
            numberHeight: 80, // Approximate height for number graphic
            numberYOffset: -10 
        },
         {
            id: 2,
            title: "Для кого 2",
            desc: "Описание, подробнее раскрывающее заголовок.",
            number: number2,
            // Item 2 Title Y (Global): 4368.5
            // Item 2 Desc Y (Global): 4418.3
            // Relative Y: Title ~372.5, Desc ~422.3
            yTitle: 372.5,
            yDesc: 422.3,
            numberHeight: 80,
            numberYOffset: -10
        },
         {
            id: 3,
            title: "Для кого 3",
            desc: "Описание, подробнее раскрывающее заголовок.",
            number: number3,
            // Item 3 Title Y (Global): 4498.5
            // Item 3 Desc Y (Global): 4553.3
            // Relative Y: Title ~502.5, Desc ~557.3
            yTitle: 502.5,
            yDesc: 557.3,
            numberHeight: 80,
            numberYOffset: -10
        }
    ];

    return (
        <section 
            className="relative w-full overflow-hidden bg-white text-[#2E261D]"
            style={{ 
                paddingTop: `${(BASE_HEIGHT / BASE_WIDTH) * 100}%`,
            }}
        >
            <div className="absolute inset-0 w-full h-full">
                
                {/* Image Group Right */}
                {/* Figma: Group 83 (x: 34714, y: 4067) -> Rel X: 682, Rel Y: 71 
                    Size: 558 x 583
                */}
                 <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="absolute"
                    style={{
                        left: pX(682),
                        top: pY(71),
                        width: pX(558),
                        height: pY(583),
                    }}
                >
                     <img 
                        src={group8} 
                        alt="Audience" 
                        className="w-full h-full object-contain"
                    />
                </motion.div>


                {/* Title "КОМУ ПОДОЙДЕТ" */}
                {/* Figma: x: 34159.2 -> Rel X: 127.2
                    y: 4001.1 -> Rel Y: 5.1
                */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute font-ua-brand font-bold uppercase leading-none text-[#C65A32]"
                    style={{
                        left: pX(127.2),
                        top: pY(5.1), 
                        width: pX(847.9),
                        fontSize: FONT_SIZES.heading,
                        lineHeight: 1
                    }}
                >
                    КОМУ ПОДОЙДЕТ
                </motion.h2>

                {/* Subtitle / Intro Text */}
                {/* "Описание, подробнее раскрывающее заголовок" id: 293:437
                    Figma: x: 34153, y: 4114.5 -> Rel X: 121, Rel Y: 118.5
                */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute font-glametrix text-[#2E261D]"
                    style={{
                        left: pX(121),
                        top: pY(118.5),
                        width: pX(500),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Описание, подробнее раскрывающее заголовок
                </motion.p>
                
                {/* Bordered Box */}
                {/* Rectangle 200: x: 34152 (Rel 120), y: 4190 (Rel 194)
                    Size: 491 x 460
                */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute border border-[#C65A32]"
                    style={{
                        left: pX(120),
                        top: pY(194),
                        width: pX(491),
                        height: pY(460),
                    }}
                />

                {/* List Items (Inside/Over Box) */}
                {listItems.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}                        className="absolute inset-0 pointer-events-none"                    >
                         {/* Number Graphic - Positioning manually based on text or estimated */}
                         {/* Figma didn't explicitly list SVG nodes in the JSON provided for this slide, or I might have missed them in "Group Children".
                             The JSON has Text nodes "Для кого 1".
                             Assuming standard layout: Number left of text.
                             Let's position number to the left of text X (~186 related to text X 34218 -> Rel 186).
                             Text X is 34218 - 34032 = 186.
                             Numbers normally sit left of that. 
                             Slide 3 had numbers. I'll use similar positioning logic or just position them visually.
                         */}
                         <img 
                            src={item.number}
                            alt=""
                            className="absolute"
                            style={{
                                left: pX(135), // Left of text (186)
                                top: pY(item.yTitle + item.numberYOffset),
                                height: pX(60), // Adjust size
                                width: 'auto'
                            }}
                         />


                        <h3 
                            className="absolute font-glametrix font-bold"
                            style={{
                                left: pX(186.6), 
                                top: pY(item.yTitle),
                                fontSize: FONT_SIZES.subheading
                            }}
                        >
                            {item.title}
                        </h3>
                        <p 
                            className="absolute font-glametrix"
                            style={{
                                 left: pX(186.6), 
                                 top: pY(item.yDesc),
                                 width: pX(346.7),
                                 fontSize: FONT_SIZES.body,
                                 lineHeight: 1.2
                            }}
                        >
                            {item.desc}
                        </p>
                    </motion.div>
                ))}

            </div>
        </section>
    );
};

export default CorporateBeekeepingSlide8;
