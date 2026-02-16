import React, { useMemo } from 'react';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';
import { LINE_THICKNESS, getLineThickness, calculateLineThickness, TYPOGRAPHY_CONFIG } from '../../config/typography';
import useWindowSize from '../../hooks/useWindowSize';

export type Point = {
    x: string | number;
    y: string | number;
};

export type LineDirection = 'to-right' | 'to-left' | 'to-bottom' | 'to-top';

// Тип конкретного конца линии
export type DecorationShape = 'none' | 'circle' | 'ring';

interface AnimatedLineProps extends Omit<HTMLMotionProps<"div">, "onAnimationComplete" | "start" | "end"> {
    start: Point;
    end: Point;
    direction: LineDirection;
    
    trigger?: boolean;
    onComplete?: () => void;
    
    // --- НОВЫЕ ПРОПСЫ ДЛЯ ГИБКОСТИ ---
    /** Что рисовать в начале линии */
    startDecoration?: DecorationShape;
    /** Что рисовать в конце линии */
    endDecoration?: DecorationShape;
    
    /** (Legacy) Старый способ, для совместимости */
    decoration?: string; 
    
    /** Размер декоративного элемента. */
    circleSize?: number | string;
    /** Размер кольца (DecorationShape='ring'). Приоритет выше, чем у circleSize. */
    ringSize?: number | string;
    /** Размер внутренней точки (для circle). */
    dotSize?: number | string;

    color?: string;
    thickness?: number | string;
    duration?: number;
    delay?: number;
    zIndex?: number;
    /** Z-index для декоративных элементов (circle/ring/dot). По умолчанию zIndex + 1 */
    decorationZIndex?: number;
}

const AnimatedLine: React.FC<AnimatedLineProps> = ({
    start,
    end,
    direction,
    trigger = true,
    onComplete,
    
    // Новые раздельные пропсы
    startDecoration = 'none',
    endDecoration = 'none',
    decoration, // Legacy проп
    
    circleSize, 
    ringSize,
    dotSize,
    color = '#C65A32',
    thickness = TYPOGRAPHY_CONFIG.lineThickness.hairline,
    duration = 0.5,
    delay = 0,
    zIndex = 0,
    decorationZIndex,
    className,
    style,
    ...props
}) => {
    const { width: windowWidth } = useWindowSize();
    
    // Совместимость со старым API (если передан decoration, он перекрывает новые пропсы)
    const effectiveStart: DecorationShape = decoration 
        ? (decoration.includes('start') || decoration === 'both' || decoration === 'ring-both' 
            ? (decoration.includes('ring') ? 'ring' : 'circle') 
            : 'none')
        : startDecoration;

    const effectiveEnd: DecorationShape = decoration 
        ? (decoration.includes('end') || decoration === 'both' || decoration === 'ring-both'
            ? (decoration.includes('ring') ? 'ring' : 'circle')
            : 'none')
        : endDecoration;

    const effectiveThickness = useMemo(() => {
        if (typeof thickness === 'number' && windowWidth > 0) {
            // If it's a number, calculate responsive integer pixel value
            return calculateLineThickness(thickness, windowWidth);
        }
        // Fallback for string values (e.g. '1px' or 'calc(...)') or SSR
        if (typeof thickness === 'number') {
           // Fallback for SSR or before hydration
           return getLineThickness(thickness);
        }
        return thickness;
    }, [thickness, windowWidth]);


    const positionStyles = useMemo<React.CSSProperties>(() => {
        // ... (тот же код стилей)
        const common = { 
            position: 'absolute' as const,
            // Use border instead of background for cleaner rendering at non-integer zoom levels (125%, 150%)
            // backgroundColor: color, 
            zIndex: zIndex, 
            pointerEvents: 'none' as const, 
            boxSizing: 'border-box' as const, // Ensure border is included in dimensions if needed
        };
        
        // Helper to format thickness with unit
        const borderWidth = typeof effectiveThickness === 'number' ? `${effectiveThickness}px` : effectiveThickness;
        const offset = typeof effectiveThickness === 'number' ? -effectiveThickness/2 : `calc(-1 * ${effectiveThickness} / 2)`;

        switch (direction) {
            case 'to-right': 
                return { 
                    ...common, 
                    left: start.x, top: start.y, 
                    height: 0, 
                    borderTop: `${borderWidth} solid ${color}`,
                    width: `calc(${end.x} - ${start.x})`, 
                    transformOrigin: 'left center', 
                    marginTop: offset 
                };
            case 'to-left': 
                return { 
                    ...common, 
                    left: end.x, top: start.y, 
                    height: 0, 
                    borderTop: `${borderWidth} solid ${color}`,
                    width: `calc(${start.x} - ${end.x})`, 
                    transformOrigin: 'right center', 
                    marginTop: offset 
                }; 
            case 'to-bottom': 
                return { 
                    ...common, 
                    left: start.x, top: start.y, 
                    width: 0, 
                    borderLeft: `${borderWidth} solid ${color}`,
                    height: `calc(${end.y} - ${start.y})`, 
                    transformOrigin: 'top center', 
                    marginLeft: offset 
                };
            case 'to-top': 
                return { 
                    ...common, 
                    left: start.x, top: end.y, 
                    width: 0, 
                    borderLeft: `${borderWidth} solid ${color}`,
                    height: `calc(${start.y} - ${end.y})`, 
                    transformOrigin: 'bottom center', 
                    marginLeft: offset 
                };
            default: return common;
        }
    }, [start, end, direction, effectiveThickness, color, zIndex]);

    const isHorizontal = direction === 'to-right' || direction === 'to-left';

    const variants: Variants = {
        hidden: { opacity: 0, ...(isHorizontal ? {scaleX: 0} : {scaleY: 0}) },
        visible: { opacity: 1, ...(isHorizontal ? {scaleX: 1} : {scaleY: 1}), transition: { duration, delay, ease: "easeOut" } }
    };

    // Дефолтный размер: кольцо побольше, точка поменьше
    const getSize = (shape: DecorationShape) => {
        if (shape === 'ring' && ringSize) return ringSize;
        return circleSize || (shape === 'ring' ? '2vw' : '2vw');
    };

    return (
        <>
            <motion.div
                className={className}
                style={{ ...style, ...positionStyles }}
                initial="hidden"
                animate={trigger ? "visible" : "hidden"}
                variants={variants}
                onAnimationComplete={() => { if(trigger && onComplete) onComplete(); }}
                {...props}
            />

            {/* START */}
            {effectiveStart !== 'none' && (
                <LineCircle 
                    x={start.x} y={start.y} 
                    color={color} trigger={trigger} delay={delay} zIndex={decorationZIndex ?? (zIndex + 1)}
                    size={getSize(effectiveStart)}
                    dotSize={dotSize} 
                    variant={effectiveStart === 'ring' ? 'ring' : 'dot'}
                />
            )}

            {/* END */}
            {effectiveEnd !== 'none' && (
                <LineCircle 
                    x={end.x} y={end.y} 
                    color={color} trigger={trigger} delay={delay + duration} zIndex={decorationZIndex ?? (zIndex + 1)}
                    size={getSize(effectiveEnd)}
                    dotSize={dotSize}
                    variant={effectiveEnd === 'ring' ? 'ring' : 'dot'}
                />
            )}
        </>
    );
};

// ...LineCircle остался без изменений (он уже умеет рисовать и то, и другое)...
interface LineCircleProps {
    x: string | number;
    y: string | number;
    color: string;
    trigger: boolean;
    delay: number;
    zIndex: number;
    size: string | number;
    dotSize?: string | number; 
    variant: 'dot' | 'ring';
}

const LineCircle: React.FC<LineCircleProps> = ({ x, y, color, trigger, delay, zIndex, size, dotSize, variant }) => {
    const offset = typeof size === 'number' ? -size / 2 : `calc(-1 * ${size} / 2)`;

    return (
        <motion.div
            className="absolute box-border rounded-full flex items-center justify-center"
            style={{
                zIndex: zIndex,
                width: size, height: size,
                left: x, top: y,
                marginLeft: offset, marginTop: offset,
                pointerEvents: 'none',
                borderColor: color, borderWidth: '1px',
                backgroundColor: 'transparent',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={trigger ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, delay, ease: "backOut" }}
        >
            {variant === 'dot' && (
                <div 
                    className="rounded-full" 
                    style={{ backgroundColor: color, width: dotSize || '76%', height: dotSize || '76%' }} 
                />
            )}
        </motion.div>
    );
}

export default AnimatedLine;
