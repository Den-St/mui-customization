import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import { spacing, breakpoints, shadows, transitions } from './styles';
import components from './components';

const theme = createTheme({
  palette: palette,  
  typography: typography, 
  spacing: spacing, 
  breakpoints: breakpoints,
  shadows: shadows,
  components: components,
  transitions: transitions
});

export default theme;
