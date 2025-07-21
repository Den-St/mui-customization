import palette from './palette';
import typography from './typography';
import { spacing, breakpoints, shadows, transitions } from './styles';
import components from './components';
import { extendTheme } from '@mui/material/styles';

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
  typography,
  spacing,
  breakpoints,
  shadows,
  components,
  transitions,
});
export default theme;
