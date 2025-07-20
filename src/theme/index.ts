import { extendTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import { spacing, breakpoints, shadows, transitions } from './styles';
import components from './components';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: palette,
    },
    dark: {
      palette: {
        ...palette,
        mode: 'dark',
      },
    },
  }, 
  typography: typography, 
  spacing: spacing, 
  breakpoints: breakpoints,
  shadows: shadows,
  components: components,
  transitions: transitions
});

export default theme;
