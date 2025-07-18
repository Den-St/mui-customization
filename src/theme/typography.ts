import type { ThemeOptions } from "@mui/material/styles";
declare module '@mui/material/styles' {
  interface TypographyVariantsOptions {
    caption: {
        fontSize: string;
    }
  }
}
const typography:ThemeOptions['typography'] = {
  fontFamily: [
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    'Inter'
  ].join(','),

  h1: {
    fontWeight: 600,
    fontSize: '2.25rem', // 40px
    lineHeight: '40px',
  },

  h2: {
    fontWeight: 500,
    fontSize: '2rem', // 32px
    lineHeight: 1.25,
    letterSpacing: '-0.00833em',
  },

  body1: {
    fontSize: '1rem', // 16px
    fontWeight: 400,
    lineHeight: '24px',
  },
  button: {
    fontSize: '1rem',
    lineHeight: '24px',
    textTransform: 'none',
    fontWeight: 400,
  },
  subtitle1: {
    fontSize: '1.125rem',
    fontWeight: 400,
  },
  caption: {
    fontSize: '0.75rem', // 12px
  },
};

export default typography;
