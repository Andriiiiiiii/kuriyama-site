import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import imgShape1 from '@/assets/volonteering/shape1 img 3.png';
import imgShape2 from '@/assets/volonteering/shape2 img 3.png';
import imgShape3 from '@/assets/volonteering/shape3 img 3.png';
import imgShape4 from '@/assets/volonteering/shape4 img 3.png';

const VolunteeringSlide3: React.FC = () => {
    const textColor = '#2E261D';
    const accentColor = '#C65A32';
    
    // Data for cards
    const cards = [
        { id: 1, title: 'Сельхозработы', imgSrc: imgShape1 },
        { id: 2, title: 'Помощь на пасеке', imgSrc: imgShape2 },
        { id: 3, title: 'Строительство', imgSrc: imgShape3 },
        { id: 4, title: 'Помощь с гостями', imgSrc: imgShape4 },
    ];

    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className="relative w-full h-layout overflow-hidden bg-transparent -mt-[6%] z-20">
            
            {/* Title: направления помощи */}
            <div
                className="absolute z-10 font-ua-brand font-bold uppercase tracking-tight"
                style={{
                    left: '8.83%',
                    top: '3.57%',
                    width: '48.83%',
                    // height: '27.56%', 
                    color: accentColor,
                    fontSize: FONT_SIZES.heading,
                    lineHeight: 1.1 
                }}
            >
                направления<br/>помощи
            </div>

            {/* Cards Container */}
            <div 
                className="absolute flex items-stretch"
                style={{
                    left: '8.33%',
                    top: '38.27%',
                    width: '83.34%', 
                    height: '35.00%', 
                    gap: '0' // Gap removed, handled by padding
                }}
            >
                {cards.map((card, index) => {
                    const isHovered = hoveredId === card.id;
                    const isLast = index === cards.length - 1;

                    return (
                        <motion.div
                            key={card.id}
                            onHoverStart={() => setHoveredId(card.id)}
                            onHoverEnd={() => setHoveredId(null)}
                            layout
                            className="relative"
                            style={{
                                flex: isHovered ? 2.5 : 1, // Expand when hovered
                                paddingRight: isLast ? 0 : '1.6%', // Gap simulated as padding
                                transformOrigin: 'left center'
                            }}
                            transition={{ layout: { duration: 0.3, type: "tween", ease: "easeInOut" } }}
                        >
                            <div className="w-full h-full relative border border-[#C65A32] bg-[#EFE3D6] overflow-hidden">
                                <div className="relative w-full h-full flex">
                                    {/* Left Side: Image & Frame (Always visible, shifts in expanded) */}
                                    <motion.div 
                                        layout
                                        transition={{ layout: { duration: 0.3, type: "tween", ease: "easeInOut" } }}
                                        className="relative h-full"
                                        style={{
                                            width: isHovered ? '45%' : '100%', // Takes full width when collapsed, partial when expanded
                                            flexShrink: 0
                                        }}
                                    >
                                        {/* Inner Frame */}
                                        <div 
                                            className="absolute border border-[#C65A32]"
                                            style={{
                                                left: '9.3%',    // Approximate relative percent inside the card
                                                top: '6%',
                                                width: '81.4%',  // Scale relative to card width
                                                height: '65%',
                                                pointerEvents: 'none'
                                            }}
                                        />
                                        
                                        {/* Image */}
                                        <div
                                            className="absolute overflow-hidden"
                                            style={{
                                                left: '12.8%',   
                                                top: '9.5%',
                                                width: '74.4%',
                                                height: '58%'
                                            }}
                                        >
                                            <img src={card.imgSrc} alt={card.title} className="w-full h-full object-cover" />
                                        </div>

                                        {/* Collapsed Title (Bottom aligned left to frame) */}
                                        {/* Only visible when NOT hovered */}
                                        <motion.div 
                                            className="absolute z-10 font-ua-brand font-bold text-left leading-none whitespace-nowrap"
                                            initial={{ opacity: 1 }}
                                            animate={{ opacity: isHovered ? 0 : 1 }}
                                            style={{
                                                left: '9.3%', // Same as frame left
                                                top: '78%', // Positioned below the frame (frame ends at 71%)
                                                width: '81.4%',
                                                color: textColor,
                                                fontSize: '2.5vh'
                                            }}
                                        >
                                            {card.title}
                                        </motion.div>
                                    </motion.div>

                                    {/* Right Side: Expanded Content (Title + Description) */}
                                    <AnimatePresence mode="popLayout">
                                        {isHovered && (
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="flex flex-col justify-center pr-4"
                                                style={{
                                                    flex: 1,
                                                    height: '100%',
                                                    paddingLeft: '2%'
                                                }}
                                            >
                                                <h3 
                                                    className="font-ua-brand font-bold mb-4 leading-none"
                                                    style={{ 
                                                        color: textColor,
                                                        fontSize: FONT_SIZES.medium
                                                    }}
                                                >
                                                    {card.title}
                                                </h3>
                                                <p 
                                                    className="font-glametrix leading-tight"
                                                    style={{ 
                                                        color: textColor, 
                                                        fontSize: '1.2rem', // Slightly smaller for description
                                                    }}
                                                >
                                                    Небольшой текст про то, почему мы это делаем и зачем нужны волонтёры
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

        </section>
    );
};

export default VolunteeringSlide3;
