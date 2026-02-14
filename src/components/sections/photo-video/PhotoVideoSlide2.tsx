import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';

// Images 2-1 to 2-12
import img1 from '@/assets/photo-video/2-1.png';
import img2 from '@/assets/photo-video/2-2.png';
import img3 from '@/assets/photo-video/2-3.png';
import img4 from '@/assets/photo-video/2-4.png';
import img5 from '@/assets/photo-video/2-5.png';
import img6 from '@/assets/photo-video/2-6.png';
import img7 from '@/assets/photo-video/2-7.png';
import img8 from '@/assets/photo-video/2-8.png';
import img9 from '@/assets/photo-video/2-9.png';
import img10 from '@/assets/photo-video/2-10.png';
import img11 from '@/assets/photo-video/2-11.png';
import img12 from '@/assets/photo-video/2-12.png';

const PhotoVideoSlide2: React.FC = () => {
    // State to track hover offset
    // offset > 0 means shift content RIGHT (because user hovered Left edge element)
    // offset < 0 means shift content LEFT  (because user hovered Right edge element)
    const [offset, setOffset] = useState<number>(0);

    const handleMouseEnterLeft = () => setOffset(10); // Shift right by 10%
    const handleMouseEnterRight = () => setOffset(-10); // Shift left by 10%
    const handleMouseLeave = () => setOffset(0);

    // Row 1 Images (Top) - y: -136 (relative to -367 start?)
    // Wait, the JSON coordinates are relative to the GROUP 'block 2' which is at y=-367.
    // Let's normalize:
    // Block 2 Height = 625.
    // Title y= -338 (vs -367 start) -> effectively top: 28px inside the block?
    // Let's assume the component takes 100vh or fit the content. 
    // JSON says height 625. Let's map to screen height percentages assuming Full Screen or fixed height?
    // User asked "width and height of screen - 100%". So we assume a full-viewport slide.

    // Coordinate mapping:
    // Viewport Width = 1440
    // Viewport Height = 100vh (approx 796px in design terms often, or we use relative to container)
    // Let's place elements relative to the center or top-left.
    
    // Coordinates from JSON:
    // block 2 y: -367.
    // Row 1 rects y: -136. Difference = -136 - (-367) = 231px.
    // Row 2 rects y: 70. Difference = 70 - (-367) = 437px.
    
    // We have a Title and Description at top.
    
    // ROW 1 Items (Left to Right based on X):
    // 576:607 (Rect 245) x=39116. (Start of container x=39116). Rel X = 0. W=285.    -> Image 1
    // 576:610 (Rect 244) x=39419. Rel X = 303. W=183.                               -> Image 2
    // 576:609 (Rect 243) x=39620. Rel X = 504. W=285.                               -> Image 3
    // 576:613 (Rect 250) x=39923. Rel X = 807. W=183.                               -> Image 4
    // 576:614 (Rect 261) x=40124. Rel X = 1008. W=285.                              -> Image 5
    // 576:616 (Rect 264) x=40427. Rel X = 1311. W=129.                              -> Image 6
    // Note: total X range is 1440. 
    // Image 6 ends at 1311 + 129 = 1440.
    // So Row 1 fills the width 0 to 1440 fully.

    // ROW 2 Items (Left to Right based on X):
    // 576:611 (Rect 256) x=39116. Rel X = 0. W=183.                                 -> Image 7
    // 576:608 (Rect 257) x=39318. Rel X = 202. W=285.                               -> Image 8
    // 576:612 (Rect 259) x=39621. Rel X = 505. W=183.                               -> Image 9
    // 576:606 (Rect 258) x=39822. Rel X = 706. W=285.                               -> Image 10
    // 576:617 (Rect 265) x=40125. Rel X = 1009. W=183.                              -> Image 11
    // 576:615 (Rect 262) x=40326. Rel X = 1210. W=230.                              -> Image 12 (ends at 1440)

    // Interaction Logic:
    // "hover over images extending beyond the screen edge"
    // Currently, they exactly fit 0-1440. 
    // BUT the requirement says "images that go off screen".
    // Maybe the user wants them to be WIDER than screen so they can scroll?
    // "both rows shift left/right so that the image 'drives onto' the screen".
    // AND "images on the opposite side also drive off".
    // This implies the content is WIDER than 100vw.
    // Let's add fictitious extra images or assume the current ones overflow if we zoom in?
    // Or maybe the design INTENDS for them to be just partially visible?
    // Ah, standard horizontal scroll gallery behavior often has items slightly off-screen.
    // However, looking at the JSON, the width is exactly 1440.
    // Let's Assume the "Shift" functionality creates a "Peeking" effect.
    // We will place an extra image or empty space on sides, or ensure the container is wider.
    // For now, let's implement the structure relative to 100vw, but with a transform X based on hover.
    // If I hover LEFT side, it shifts RIGHT (positive offset).
    // If I hover RIGHT side, it shifts LEFT (negative offset).
    
    // The JSON seems to just fit perfectly. 
    // Maybe I should add buffer images? "2-1...2-12" is exactly 12 rects.
    // I will implement standard layout first.
    // To make "drive onto screen make sense", I might need to scale them or start them offset?
    // Let's assume the user wants a parallax/shift effect where the row moves away from the cursor? 
    // No, "hover on images COMING OUT OF edge".
    // This implies there are hidden images.
    // Since I only have 12 specific images mapped to 12 rects that fit perfectly, 
    // I will assume that the "Shift" potentially reveals... nothing extra unless I duplicate?
    // OR maybe the whole block is wider than 100%?
    // Let's make the container e.g. 110% width and center it?
    // Or simply: When hovering Left edge, shift whole row Right. When hovering Right edge, shift Left.
    // This will reveal whitespace if no extra images.
    // I'll stick to the requested interaction and apply it to the row container.

    const rowItems = [
        // Row 1
        { id: 1, src: img1, x: 0, w: 285, row: 1, isEdge: 'left' },
        { id: 2, src: img2, x: 303, w: 183, row: 1 },
        { id: 3, src: img3, x: 504, w: 285, row: 1 },
        { id: 4, src: img4, x: 807, w: 183, row: 1 },
        { id: 5, src: img5, x: 1008, w: 285, row: 1 },
        { id: 6, src: img6, x: 1311, w: 129, row: 1, isEdge: 'right' },
        // Row 2
        { id: 7, src: img7, x: 0, w: 183, row: 2, isEdge: 'left' },
        { id: 8, src: img8, x: 202, w: 285, row: 2 },
        { id: 9, src: img9, x: 505, w: 183, row: 2 },
        { id: 10, src: img10, x: 706, w: 285, row: 2 },
        { id: 11, src: img11, x: 1009, w: 183, row: 2 },
        { id: 12, src: img12, x: 1210, w: 230, row: 2, isEdge: 'right' }, // width ends at 1440 exactly
    ];
    
    // Calculating percentages
    // base W = 1440
    // base H = 796? JSON root height is 625, but usually slides are 100vh.
    // Let's use 100vh container.
    // Text blocks are at top.
    
    // "Фестиваль меда" y = -338 (+367) = 29px from top of block.
    // "Description" y = -227 (+367) = 140px.
    // Row 1 y = 231px.
    // Row 2 y = 437px.
    
    // To enable the "slide in" effect without whitespace, we typically need content explicitly off-screen.
    // Since the provided layout FITS the screen, "shifting" will show empty space.
    // Unless we assume the content is actually wider?
    // I will implement the shift on the container.

    return (
        <section className="relative w-full h-screen bg-white overflow-hidden flex flex-col justify-center">
            
            {/* Title & Desc Container */}
            <div className="w-full relative h-[30%]">
                 {/* Title: 39240 (x=124 -> 8.6%) y=29px (approx 4%) */}
                 <h2 
                    className="absolute font-['UA-brand'] uppercase text-[#C65A32]"
                    style={{
                        left: '8.6%',
                        top: '10%',
                        fontSize: FONT_SIZES.heading,
                        lineHeight: '1'
                    }}
                 >
                    ФЕСТИВАЛЬ МЁДА
                 </h2>

                 {/* Desc: 39236 (x=120 -> 8.35%) y=140px (approx 20%) */}
                 <p 
                    className="absolute font-['Manrope'] text-[#2E261D]"
                    style={{
                        left: '8.4%',
                        top: '50%',
                        fontSize: FONT_SIZES.body, // "Two lines... supporting headline" -> usually slightly larger
                        maxWidth: '25%' 
                    }}
                 >
                    Две строчки дополнительного описания подкрепляющего заголовок
                 </p>
            </div>

            {/* Gallery Container */}
            {/* The interaction request: "hover on images extending beyond screen edge... both rows shift" */}
            {/* This strongly implies the rows are wider than screen. I will scale them up slightly (e.g. 110%) 
                so edges are actually cut off, enabling the interaction to make sense. 
            */}
            
            <div 
                className="w-full relative h-[60%]"
                // Only trigger shift if user is near edges? Or specific images?
                // "hover on images extending beyond...". I'll put triggers on edges.
            >
                {/* Left Hover Zone */}
                <div 
                    className="absolute left-0 top-0 w-[10%] h-full z-20 cursor-w-resize"
                    onMouseEnter={handleMouseEnterLeft}
                    onMouseLeave={handleMouseLeave}
                />
                
                {/* Right Hover Zone */}
                <div 
                    className="absolute right-0 top-0 w-[10%] h-full z-20 cursor-e-resize"
                    onMouseEnter={handleMouseEnterRight}
                    onMouseLeave={handleMouseLeave}
                />

                {/* Content Row Container */}
                <motion.div 
                    className="w-[110%] h-full absolute left-[-5%] top-0" // Start centered-ish (overflowing 5% each side)
                    animate={{ x: `${offset}%` }} // Move relative to its position
                    transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
                >
                    {/* Row 1 */}
                    {rowItems.filter(i => i.row === 1).map(item => (
                         <div
                            key={item.id}
                            className="absolute bg-gray-200"
                            style={{
                                left: `${(item.x / 1440) * 100}%`, // Position relative to original 1440 design width
                                top: '0%',
                                width: `${(item.w / 1440) * 100}%`,
                                height: '40%', // approx 188px
                            }}
                         >
                            <img src={item.src} alt="" className="w-full h-full object-cover" />
                         </div>
                    ))}

                    {/* Row 2 - y offset roughly 50% of this container based on design gap */}
                    {rowItems.filter(i => i.row === 2).map(item => (
                         <div
                            key={item.id}
                            className="absolute bg-gray-200"
                            style={{
                                left: `${(item.x / 1440) * 100}%`,
                                top: '45%', // spacing
                                width: `${(item.w / 1440) * 100}%`,
                                height: '40%',
                            }}
                         >
                            <img src={item.src} alt="" className="w-full h-full object-cover" />
                         </div>
                    ))}

                </motion.div>
            </div>
        </section>
    );
};

export default PhotoVideoSlide2;
