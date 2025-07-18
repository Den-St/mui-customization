import type { ThemeOptions } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Palette {
    customGrey: Record<number, string>;
    red: Record<number, string>;
    blue: Record<number, string>;
    purple: Record<number, string>;
    green: Record<number, string>;
    orange: Record<string, string>;
  }
  interface PaletteOptions {
    customGrey?: Record<number, string>;
    red?: Record<number, string>;
    blue?: Record<number, string>;
    purple?: Record<number, string>;
    green?: Record<number, string>;
    orange?: Record<string, string>;
  }
}

const palette: ThemeOptions['palette'] = {
  // Primary & Secondary - you can map these to specific brand colors
  primary: {
    main: '#4881D3',       // Blue 200
    light: '#B2D1FF',      // Blue 100
    dark: '#2D4F9C',       // Custom darker blue if needed
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#48464C',       // Grey 30
    light: '#AEA9B1',      // Grey 70
    dark: '#1D1B20',
    contrastText: '#FFFFFF',
  },

  // Standard MUI palettes
  error: {
    main: '#B3261E',       // Red 300
    light: '#E57373',      // Red 200
    dark: '#8C1C16',
  },
  warning: {
    main: '#FBAF4A',       // Orange 200
    light: '#FFD399',      // Orange 100
    dark: '#E68F1F',
  },
  info: {
    main: '#4881D3',       // Blue 200
    light: '#B2D1FF',
    dark: '#2D4F9C',
  },
  success: {
    main: '#12B76A',       // Green 500
    light: '#40DCAC',      // Green 200
    dark: '#039855',       // Green 600
  },

  // Extended custom palettes
  customGrey: {
    100: '#FFFFFF',
    99: '#FFFFBE',
    95: '#F9F9F9',
    90: '#F5F5F5',
    80: '#E0E0E0',
    70: '#AEA9B1',
    60: '#938F96',
    50: '#79767D',
    40: '#605D64',
    30: '#48464C',
    20: '#48464C',
    10: '#1D1B20',
    0: '#000000',
  },
  red: {
    50: '#FFFEBE',
    70: '#ED9DA9',
    200: '#E57373',
    300: '#B3261E',
  },
  blue: {
    25: '#EEF5FF',
    50: '#D8E8FF',
    100: '#B2D1FF',
    150: '#82D1FF',
    200: '#4881D3',
  },
  purple: {
    50: '#BDB9FF',
    100: '#979AE6',
    200: '#6669C6',
  },
  green: {
    50: '#D1F8EC',
    100: '#B3F7E2',
    200: '#40DCAC',
    300: '#6CE9A6',
    400: '#32D583',
    500: '#12B76A',
    600: '#039855',
  },
  orange: {
    '50': '#FFE9CC',
    '100': '#FFD399',
    '200': '#FBAF4A',
  },
};

export default palette;
