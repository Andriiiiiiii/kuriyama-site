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

    // Regular text font size (22px at 1441.5px width)
    body: 20,
  },

  // Line height ratios (unitless) at baseHeight
  lineHeight: {
    base: 1.2,
    min: 1,
    max: 1.4,
  },
} as const;

/**
 * Generate CSS calc() string for responsive font size
 * @param fontSize - Font size in pixels at baseWidth
 * @returns CSS calc() string
 */
export const getFontSize = (fontSize: number): string => {
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
  heading: getFontSize(TYPOGRAPHY_CONFIG.fontSizes.heading),
  subheading: getFontSize(TYPOGRAPHY_CONFIG.fontSizes.subheading),
  body: getFontSize(TYPOGRAPHY_CONFIG.fontSizes.body),
} as const;
