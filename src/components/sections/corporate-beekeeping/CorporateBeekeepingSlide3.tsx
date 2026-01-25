import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
// Images
import rightImage from '@/assets/corporate-beekeeping/3right.png';
import number1 from '@/assets/corporate-beekeeping/number-1.svg';
import number2 from '@/assets/corporate-beekeeping/number-2.svg';
import number3 from '@/assets/corporate-beekeeping/number-3.svg';

const CorporateBeekeepingSlide3: React.FC = () => {
    // Canvas from JSON: width 1437, height 797
    // Block 3 position: x: 34035, y: 283
    const BASE_WIDTH = 1437;
    const BASE_HEIGHT = 797;
    const aspectRatio = BASE_HEIGHT / BASE_WIDTH;
    
    // Relative position helpers
    const pX = (px: number) => `${(px / BASE_WIDTH) * 100}%`;
    const pY = (px: number) => `${(px / BASE_HEIGHT) * 100}%`;

    // Coordinates transformation
    // Global Origin (Block 3 group): x=34035, y=283

    // Title "как это работает"
    // x=34159.2, y=403.4
    // Rel X = 34159.2 - 34035 = 124.2
    // Rel Y = 403.4 - 283 = 120.4
    // Size: 483 x 159

    // Step 1 Column
    // Separator Line (Vector 60): x=34151.5, y=653
    // Rel X = 116.5, Rel Y = 370
    // Number "1": x=34171, y=629
    // Rel X = 136, Rel Y = 346
    // Title "Шаг 1": x=34173.7, y=745.6
    // Rel X = 138.7, Rel Y = 462.6
    // Desc: x=34172.6, y=787.3
    // Rel X = 137.6, Rel Y = 504.3

    // Step 2 Column
    // Separator Line (Vector 61): x=34558.5, y=653
    // Rel X = 523.5, Rel Y = 370
    // Number "2": x=34581.8, y=629.3
    // Rel X = 546.8, Rel Y = 346.3
    // Title "Шаг 2": x=34580.8, y=745.5
    // Rel X = 545.8, Rel Y = 462.5
    // Desc: x=34579.6, y=787.3
    // Rel X = 544.6, Rel Y = 504.3

    // Step 3 Column
    // Number "3": x=34886.8, y=629.1
    // Rel X = 851.8, Rel Y = 346.1
    // Title "Шаг 3": x=34888.8, y=745.5
    // Rel X = 853.8, Rel Y = 462.5
    // Desc: x=34887.6, y=787.3
    // Rel X = 852.6, Rel Y = 504.3

    // Image Group (Mask group / Group 78)
    // x=34864, y=383
    // Rel X = 829, Rel Y = 100
    // Size: 333 x 597 (The container seems to hold the images)
    
    // Ellipse 33 (Decorative circle?)
    // x=35027, y=522
    // Rel X = 992, Rel Y = 239 
    // Size: 374 x 374

    return (
        <section 
            className="relative w-full overflow-hidden bg-white text-[#333333]"
            style={{ 
                paddingTop: `${(BASE_HEIGHT / BASE_WIDTH) * 100}%`,
                position: 'relative'
            }}
        >
            <div className="absolute inset-0 w-full h-full">
                {/* --- Image Section Right (Moved to background) --- */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute"
                    style={{
                        left: pX(829),
                        top: pY(100),
                        width: pX(333),
                        height: pY(597),
                        overflow: 'hidden',
                        borderRadius: '0px'
                    }}
                >
                     <img 
                        src={rightImage} 
                        alt="Process illustration" 
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                 {/* Title "КАК ЭТО РАБОТАЕТ" */}
                 <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute font-ua-brand font-bold uppercase leading-none text-[#2E261D]"
                    style={{
                        left: pX(124.2),
                        top: pY(120.4),
                        width: pX(483),
                        height: pY(159),
                        fontSize: FONT_SIZES.heading,
                        lineHeight: 1
                    }}
                >
                    КАК ЭТО<br/>РАБОТАЕТ
                </motion.h2>

                {/* --- Step 1 --- */}
                {/* Vertical Line */}
                <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: pY(201) }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                     className="absolute bg-[#C65A32]"
                     style={{
                         left: pX(116.5), // Vector 60 X
                         top: pY(370),    // Vector 60 Y (653 - 283)
                         width: '1px',
                         // height set in animation
                     }}
                />
                
                {/* Number 1 */}
                <motion.img
                    src={number1}
                    alt="1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute"
                    style={{
                        left: pX(136),
                        top: pY(346),
                        width: pX(31),
                        height: pY(76.6),
                        objectFit: 'contain'
                    }}
                />

                {/* Title "Шаг 1" */}
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute font-glametrix font-bold text-[#2E261D]"
                    style={{
                        left: pX(138.7),
                        top: pY(462.6),
                        fontSize: FONT_SIZES.subheading,
                    }}
                >
                    Шаг 1
                </motion.h3>

                {/* Desc */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute font-glametrix text-[#2E261D]"
                    style={{
                        left: pX(137.6),
                        top: pY(504.3),
                        width: pX(186),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Описание, подробнее раскрывающее заголовок
                </motion.p>
                

                {/* --- Step 2 --- */}
                {/* Vertical Line */}
                <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: pY(201) }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                     className="absolute bg-[#C65A32]"
                     style={{
                         left: pX(523.5),
                         top: pY(370),
                         width: '1px',
                     }}
                />

                {/* Number 2 */}
                <motion.img
                    src={number2}
                    alt="2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute"
                    style={{
                        left: pX(546.8),
                        top: pY(346.3),
                        width: pX(69.7),
                        height: pY(77.4),
                        objectFit: 'contain'
                    }}
                />

                {/* Title "Шаг 2" */}
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute font-glametrix font-bold text-[#2E261D]"
                    style={{
                        left: pX(545.8),
                        top: pY(462.5),
                        fontSize: FONT_SIZES.subheading,
                    }}
                >
                    Шаг 2
                </motion.h3>

                 {/* Desc */}
                 <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute font-glametrix text-[#2E261D]"
                    style={{
                        left: pX(544.6),
                        top: pY(504.3),
                        width: pX(186),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Описание, подробнее раскрывающее заголовок
                </motion.p>


                {/* --- Step 3 --- */}
                 {/* Number 3 */}
                 <motion.img
                    src={number3}
                    alt="3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute"
                    style={{
                        left: pX(851.8),
                        top: pY(346.1),
                        width: pX(60.9),
                        height: pY(76.8),
                        objectFit: 'contain'
                    }}
                />

                 {/* Title "Шаг 3" */}
                 <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute font-glametrix font-bold text-[#2E261D]"
                    style={{
                        left: pX(853.8),
                        top: pY(462.5),
                        fontSize: FONT_SIZES.subheading,
                    }}
                >
                    Шаг 3
                </motion.h3>

                 {/* Desc */}
                 <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="absolute font-glametrix text-[#2E261D]"
                    style={{
                        left: pX(852.6),
                        top: pY(504.3),
                        width: pX(186),
                        fontSize: FONT_SIZES.body,
                        lineHeight: 1.2
                    }}
                >
                    Описание, подробнее раскрывающее заголовок
                </motion.p>



                 {/* Decorative Circle (Ellipse 33) */}
                 {/* This was overlapping the image area in Figma coordinates x=35027 vs group x=34864 */}
                 {/* It seems to be a subtle border or effect behind */}
                 <div
                    className="absolute border border-[#C65A32] rounded-full opacity-50 pointer-events-none"
                    style={{
                        left: pX(992),
                        top: pY(239),
                        width: pX(374),
                        height: pX(374), // Using width % to keep it circular if aspect ratio differs
                    }}
                 />

            </div>
        </section>
    );
};

export default CorporateBeekeepingSlide3;
