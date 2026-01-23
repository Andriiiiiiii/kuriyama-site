import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import MoreButton from '@/components/shared/MoreButton';
import { productionSlide2Images } from '@/assets/production/slide2';

// Define the visible slots on the screen
// Normalized small slots for consistent size
const SMALL_WIDTH = '11%';
const SMALL_HEIGHT = '21.5%'; // Aspect ratio matched closer to center (which is approx 0.65) -> 11/21.5 ~ 0.51. Center is 27/41 ~ 0.65.
// Actually let's just use fixed small size as requested.

const SLOTS = [
    // 0: Small 1
    { left: '0.00%', top: '63.93%', width: SMALL_WIDTH, height: SMALL_HEIGHT, zIndex: 10, opacity: 1 },
    // 1: Small 2
    { left: '10.28%', top: '63.70%', width: SMALL_WIDTH, height: SMALL_HEIGHT, zIndex: 10, opacity: 1 },
    // 2: Small 3
    { left: '22.78%', top: '66.13%', width: SMALL_WIDTH, height: SMALL_HEIGHT, zIndex: 10, opacity: 1 },
    // 3: Small 4
    { left: '38.82%', top: '62.31%', width: SMALL_WIDTH, height: SMALL_HEIGHT, zIndex: 20, opacity: 1 },
    // 4: CENTER BIG (Original size)
    { left: '50.69%', top: '33.87%', width: '26.88%', height: '41.62%', zIndex: 50, opacity: 1 },
    // 5: Small 5
    { left: '78.40%', top: '62.66%', width: SMALL_WIDTH, height: SMALL_HEIGHT, zIndex: 20, opacity: 1 },
    // 6: Small 6
    { left: '93.47%', top: '64.86%', width: SMALL_WIDTH, height: SMALL_HEIGHT, zIndex: 10, opacity: 1 },
];

const ITEMS = [
    { id: 1, image: productionSlide2Images.imageSmall1, name: "Керамическая ваза" },
    { id: 2, image: productionSlide2Images.imageSmall2, name: "Набор чаш" },
    { id: 3, image: productionSlide2Images.imageSmall3, name: "Благовония" },
    { id: 4, image: productionSlide2Images.imageSmall4, name: "Японский веер" },
    { id: 5, image: productionSlide2Images.imageBig, name: "Традиционное кимоно" },
    { id: 6, image: productionSlide2Images.imageSmall5, name: "Чайный сервиз" },
    { id: 7, image: productionSlide2Images.imageSmall6, name: "Бамбуковая флейта" },
];

const ProductionSlide2: React.FC = () => {
    // Initial state: Item 4 is at Slot 4.
    const [activeItemIndex, setActiveItemIndex] = useState(4);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll logic
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveItemIndex((prev) => (prev + 1) % ITEMS.length);
        }, 2000); // 2 seconds per slide

        return () => clearInterval(interval);
    }, [isPaused]);

    // Helper to calculate which slot an item should be in.
    const getSlotIndex = (itemIndex: number) => {
        const shift = 4 - activeItemIndex;
        let slot = (itemIndex + shift) % ITEMS.length;
        if (slot < 0) slot += ITEMS.length;
        return slot;
    };

    const activeItem = ITEMS[activeItemIndex];

    return (
        <section className="relative w-full h-screen overflow-hidden bg-white">
            {/* Title - "Сувениры в японской тематике" */}
            <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="absolute z-10 font-ua-brand font-bold uppercase tracking-tight"
                style={{
                    left: '8.37%',
                    top: '12.88%',
                    width: '43.92%',
                    color: '#C65A32',
                    fontSize: FONT_SIZES.heading,
                    lineHeight: 1.1
                }}
            >
                Сувениры в<br />японской тематике
            </motion.h2>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute z-10 font-['Glametrix'] text-foreground"
                style={{
                    left: '8.36%',
                    top: '46.99%',
                    width: '18.92%',
                    fontSize: FONT_SIZES.body,
                    lineHeight: 1.4
                }}
            >
                Две строчки дополнительного описания подкрепляющего заголовок
            </motion.p>

            {/* Product Images Area - Container for hover pause */}
            <div
                className="absolute inset-0 z-0"
            >
                {/* Calligraphy bg/pattern */}
                <div 
                    className="absolute pointer-events-none"
                    style={{
                       left: '81.53%',
                       top: '0.00%',
                       width: '15.35%',
                       height: '42.66%'
                    }}
                 >
                     <img 
                        src={productionSlide2Images.calligraphy} 
                        alt="" 
                        className="w-full h-full object-contain brightness-0" 
                     />
                 </div>
                {ITEMS.map((item, index) => {
                    const slotIndex = getSlotIndex(index);
                    const slot = SLOTS[slotIndex];
                    
                    return (
                        <motion.div
                            key={item.id}
                            className="absolute"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            animate={{
                                left: slot.left,
                                top: slot.top,
                                width: slot.width,
                                height: slot.height,
                                zIndex: slot.zIndex,
                                opacity: slot.opacity
                            }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    );
                })}

                {/* Product Name Label - Updates with Active Item */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeItem.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute z-20 font-['Glametrix'] font-bold text-foreground text-center"
                        style={{
                            left: '59.81%',
                            top: '75.89%',
                            width: '8.34%',
                            fontSize: 'calc(24px / 1441.5 * 100vw)'
                        }}
                    >
                        {activeItem.name}
                    </motion.div>
                </AnimatePresence>

                 {/* Catalog Button */}
                 <div
                    className="absolute z-20"
                    style={{
                        left: '57.22%',
                        top: '80.23%',
                        width: 'auto',
                        height: '4.28%'
                    }}
                >
                     <button
                        className="h-full px-8 bg-[#C65A32] text-white rounded-full font-['Glametrix'] hover:opacity-90 transition-opacity whitespace-nowrap flex items-center justify-center"
                        style={{ fontSize: FONT_SIZES.body }}
                        onClick={() => {}}
                     >
                        Перейти в каталог
                     </button>
                </div>
            </div>

        </section>
    );
};

export default ProductionSlide2;
