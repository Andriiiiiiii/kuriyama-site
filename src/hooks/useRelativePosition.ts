import { useState, useLayoutEffect, RefObject, useCallback } from 'react';

/**
 * Хук для расчета координат элемента.
 * Возвращает массив [isReady, updatePosition], где updatePosition можно вызвать вручную.
 */
export const useRelativePosition = (
    containerRef: RefObject<HTMLElement>,
    targetRef: RefObject<HTMLElement>,
    id: string = 'el',
    scaleFactor: number = 93.5 / 109.5,
    isEnabled: boolean = true,
    shouldLog: boolean = false
) => {
    const [isReady, setIsReady] = useState(false);

    const updatePosition = useCallback(() => {
        const container = containerRef.current;
        const target = targetRef.current;

        if (!container || !target) return;

        const cRect = container.getBoundingClientRect();
        const tRect = target.getBoundingClientRect();

        if (cRect.width === 0 || cRect.height === 0) return;

        // ВАЖНОЕ ИЗМЕНЕНИЕ:
        // Используем offsetWidth/offsetHeight, так как они возвращают
        // "layout" размеры элемента без учета трансформаций (scale).
        // Если кнопка сейчас scale: 0.5, offsetWidth все равно вернет полный размер.
        const targetWidth = target.offsetWidth;
        const targetHeight = target.offsetHeight;

        if (targetWidth === 0) return;

        // Хелперы
        const toPercentX = (px: number) => (px / cRect.width) * 100;
        const toPercentY = (px: number) => (px / cRect.height) * 100;

        // --- 1. Находим ЦЕНТР элемента ---
        // Тут хитрость: tRect.left/top зависят от scale. Но центр элемента 
        // обычно остается на месте (если transformOrigin center).
        // Более надежный способ найти центр без учета скейла:
        // offsetLeft + offsetWidth/2 (относительно offsetParent).
        // Но так как offsetParent может быть не containerRef, используем гибридный метод:
        // Берем центр из getBoundingClientRect (он верен при origin center)
        const centerXpx = (tRect.left + tRect.width / 2) - cRect.left;
        const centerYpx = (tRect.top + tRect.height / 2) - cRect.top;

        const xMid = toPercentX(centerXpx);
        const yMid = toPercentY(centerYpx);

        // --- 2. Считаем радиусы от "Чистых" размеров (без скейла) ---
        // Вот здесь была ошибка: раньше мы брали tRect.width/2
        const visualHalfWidthPx = (targetWidth / 2) * scaleFactor;
        const visualHalfHeightPx = (targetHeight / 2) * scaleFactor;

        // --- 3. Считаем точки стыковки ---
        const xLeft = xMid - toPercentX(visualHalfWidthPx);
        const xRight = xMid + toPercentX(visualHalfWidthPx);
        const yTop = yMid - toPercentY(visualHalfHeightPx);
        const yBottom = yMid + toPercentY(visualHalfHeightPx);

        // Записываем
        container.style.setProperty(`--${id}-x-left`, `${xLeft}%`);
        container.style.setProperty(`--${id}-x-right`, `${xRight}%`);
        container.style.setProperty(`--${id}-y-top`, `${yTop}%`);
        container.style.setProperty(`--${id}-y-bottom`, `${yBottom}%`);
        container.style.setProperty(`--${id}-x-mid`, `${xMid}%`);
        container.style.setProperty(`--${id}-y-mid`, `${yMid}%`);

        if (shouldLog) {
            const realWidthPercent = (targetWidth / cRect.width) * 100;
            const realHeightPercent = (targetHeight / cRect.height) * 100;
            // xMid и yMid - это центр элемента в процентах.
            // Чтобы получить left/top в %, нужно от центра отнять половину ширины/высоты в %
            const realLeftPercent = xMid - (realWidthPercent / 2);
            const realTopPercent = yMid - (realHeightPercent / 2);

            console.log(`[${id}] Coords:`, `
style={{
left: '${realLeftPercent.toFixed(2)}%',
top: '${realTopPercent.toFixed(2)}%',
width: '${realWidthPercent.toFixed(2)}%',
height: '${realHeightPercent.toFixed(2)}%'
}}`);
        }

        if(isEnabled) {
             setIsReady(true);
        }
    }, [containerRef, targetRef, id, scaleFactor, isEnabled, shouldLog]);

    useLayoutEffect(() => {
        if (!isEnabled) {
            setIsReady(false);
            return;
        }

        updatePosition();

        // Оставляем небольшой луп для надежности позиционирования (центр мог сместиться при layout thrashing)
        let frameCount = 0;
        let rafId: number;

        const loop = () => {
            updatePosition();
            if (frameCount < 5) { // 5 кадров обычно достаточно
                frameCount++;
                rafId = requestAnimationFrame(loop);
            }
        };
        loop();

        const container = containerRef.current;
        const target = targetRef.current;
        
        const ro = new ResizeObserver(updatePosition);
        if (container) ro.observe(container);
        if (target) ro.observe(target);
        
        window.addEventListener('resize', updatePosition);

        return () => {
            cancelAnimationFrame(rafId);
            ro.disconnect();
            window.removeEventListener('resize', updatePosition);
        };
    }, [isEnabled, updatePosition, containerRef, targetRef]);

    return { isReady, updatePosition };
};