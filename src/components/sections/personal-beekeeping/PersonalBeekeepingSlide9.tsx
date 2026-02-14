import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
// Images
import rightImage from '@/assets/personal-beekeeping/9-right.png';

const PersonalBeekeepingSlide9: React.FC = () => {
    // Canvas from JSON: width 1440, height 891
    // Block position: x: 40010, y: 7061
    const BASE_WIDTH = 1440;
    const BASE_HEIGHT = 891;
    const BLOCK_X = 40010;
    const BLOCK_Y = 7061;
    
    // Helper to calculate percentages
    const pX = (px: number) => `${(px / BASE_WIDTH) * 100}%`;
    const pY = (px: number) => `${(px / BASE_HEIGHT) * 100}%`;

    return (
        <section 
            className="relative w-full overflow-hidden bg-background text-[#2E261D]"
            style={{ 
                paddingTop: `${(BASE_HEIGHT / BASE_WIDTH) * 100}%`,
            }}
        >
            <div className="absolute inset-0 w-full h-full">
                
                {/* Title "Как Павел использует свои улья" */}
                {/* JSON x: 40134.80 -> 124.8, y: 7182.92 -> 121.92 */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute font-ua-brand font-bold uppercase leading-none text-[#2E261D]"
                    style={{
                        left: pX(124.8),
                        top: pY(121.92),
                        width: pX(640.95), // Correct width from JSON (640.953)
                        fontSize: FONT_SIZES.heading,
                        lineHeight: 1
                    }}
                >
                    Как Павел использует свои улья
                </motion.h2>

                {/* Right Image (Rectangle 206) */}
                {/* JSON x: 40801 -> 791, y: 7161 -> 100 */}
                {/* Size: 529 x 791 */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="absolute z-10"
                    style={{
                        left: pX(791),
                        top: pY(100),
                        width: pX(529),
                        height: pY(791),
                    }}
                >
                     <img 
                        src={rightImage} 
                        alt="Rest" 
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Quote Box (Rectangle 162) - "Quote container" */}
                {/* JSON x: 40130 -> 120, y: 7512.92 -> 451.92 */}
                {/* Size: 590 x 439.08 */}
                {/* Note: In analogous slide it was smaller/different position, usually on left or right. Here it seems to be on left below title. */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute bg-[#EFE3D6] border border-[#C65A32]"
                    style={{
                        left: pX(120),
                        top: pY(451.92),
                        width: pX(590),
                        height: pY(439.08),
                    }}
                />

                {/* Quote Title "“КАК МЕДИТАЦИЯ”" */}
                {/* JSON x: 40163.74 -> 153.74, y: 7561.45 -> 500.45 */}
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute font-ua-brand font-bold uppercase text-[#2E261D]"
                    style={{
                         left: pX(153.74),
                         top: pY(500.45),
                         width: pX(201.68),
                         fontSize: 15, // Visually in screenshot it is small bold
                    }}
                >
                    “КАК МЕДИТАЦИЯ”
                </motion.h3>

                {/* Quote Author "- Павел Ветров, владелец улья" */}
                {/* JSON x: 40357.7 -> 347.7, y: 7594.63 -> 533.63 */}
                <motion.p
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.55 }}
                     className="absolute font-glametrix text-[#2E261D]"
                     style={{
                         left: pX(347.7),
                         top: pY(530.63),
                         width: pX(217.47),
                         fontSize: FONT_SIZES.body, // Usually small
                     }}
                >
                    - Павел Ветров, владелец улья
                </motion.p>

                {/* Quote Text */}
                {/* JSON x: 40163.22 -> 153.22, y: 7644.7 -> 583.7 */}
                <motion.p
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.6 }}
                     className="absolute font-glametrix text-[#2E261D]"
                     style={{
                         left: pX(153.22),
                         top: pY(583.7),
                         width: pX(497.53),
                         fontSize: 19,
                         lineHeight: 1.2
                     }}
                >
                    Я отдыхаю над работающими ульями, вдыхая целебные ароматы и ощущая вибрации, которые успокаивают нервную систему, снимают стресс, улучшают сон и иммунитет. Это создаёт уникальный микроклимат с ионизированным воздухом, запахом меда и воска, а также успокаивающим жужжанием, сравнимым с медитацией.
                </motion.p>

            </div>
        </section>
    );
};

export default PersonalBeekeepingSlide9;
