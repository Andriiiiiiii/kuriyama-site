/**
 * Global Typography Configuration
 *
 * This file contains all font size configurations for the entire site.
 * Font sizes are calculated based on viewport width using the formula:
 * fontSize = calc(baseFontSize / baseWidth * 100vw)
 *
 * To adjust font sizes globally:
 * 1. Change the base font size values below
 * 2. Change the baseWidth if needed (default: 1441.5px)
 */

export const TYPOGRAPHY_CONFIG = {
  // Base width for normalization (px)
  baseWidth: 1441.5,
  // Base height for normalization (px)
  baseHeight: 1088,

  // Font sizes in pixels (at baseWidth)
  fontSizes: {
    // Main heading font size (80px at 1441.5px width)
    heading: 70,

    // Subheading font size (30px at 1441.5px width)
    subheading: 30,

    // Large text font size (40px at 1441.5px width)
    large: 40,

    // Medium text font size (25px at 1441.5px width) - between subheading and body
    medium: 25,

    // Regular text font size (22px at 1441.5px width)
    body: 20,

    // Small text font size (15px at 1441.5px width)
    small: 15,

    // Giant heading for poster-like slides
    giant: 170,
  },

  // Line height ratios (unitless) at baseHeight
  lineHeight: {
    base: 1.2,
    min: 1,
    max: 1.4,
  },

  // Decorative line stroke width relative to viewport width
  // At 1920px width: 0.1vw ≈ 1.92px
  lineStrokeWidth: '0.07vw',
} as const;

/**
 * Generate CSS calc() string for responsive font size
 * @param fontSize - Font size in pixels at baseWidth
 * @param minSize - Optional minimum font size in pixels (default: uses calc only)
 * @returns CSS calc() or max() string
 */
export const getFontSize = (fontSize: number, minSize?: number): string => {
  if (minSize !== undefined) {
    return `max(${minSize}px, calc(${fontSize} / ${TYPOGRAPHY_CONFIG.baseWidth} * 100vw))`;
  }
  return `calc(${fontSize} / ${TYPOGRAPHY_CONFIG.baseWidth} * 100vw)`;
};

/**
 * Calculate responsive line-height ratio based on viewport height
 * @param height - Viewport height in pixels
 * @returns Line-height ratio (unitless)
 */
export const getLineHeight = (height: number): number => {
  const { baseHeight, lineHeight } = TYPOGRAPHY_CONFIG;
  const scaled = (height / baseHeight) * lineHeight.base;
  return Math.min(lineHeight.max, Math.max(lineHeight.min, scaled));
};

/**
 * Get line-height ratio for current viewport height
 */
export const getViewportLineHeight = (): number => {
  if (typeof window === 'undefined') {
    return TYPOGRAPHY_CONFIG.lineHeight.base;
  }
  return getLineHeight(window.innerHeight);
};

/**
 * Pre-calculated font size utilities
 */
export const FONT_SIZES = {
  heading: getFontSize(TYPOGRAPHY_CONFIG.fontSizes.heading, 34),
  subheading: getFontSize(TYPOGRAPHY_CONFIG.fontSizes.subheading, 20),
  large: getFontSize(TYPOGRAPHY_CONFIG.fontSizes.large, 24),
  medium: getFontSize(TYPOGRAPHY_CONFIG.fontSizes.medium, 18),
  body: getFontSize(TYPOGRAPHY_CONFIG.fontSizes.body, 16),
  small: getFontSize(TYPOGRAPHY_CONFIG.fontSizes.small, 12),
  giant: getFontSize(TYPOGRAPHY_CONFIG.fontSizes.giant, 60),
} as const;
