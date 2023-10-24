import { PaletteOptions } from '@mui/material';

export const palette: PaletteOptions = {
  primary: {
    main: '#0158FB',
    c900: '#0020C7',
    c800: '#0038D7',
    c700: '#0043E2',
    c600: '#004FEF',
    c500: '#0158FB',
    c400: '#4B73FE',
    c300: '#738EFF',
    c200: '#9FAFFE',
    c100: '#C7CEFE',
    c50: '#E3EFFF',
  },
  secondary: {
    main: '#111111',
    c900: '#111111',
    c800: '#313131',
    c700: '#4F4F4F',
    c600: '#626262',
    c500: '#898989',
    c400: '#AAAAAA',
    c300: '#CFCFCF',
    c200: '#E1E1E1',
    c100: '#EEEEEE',
    c50: '#FFFFFF',
  },
  error: {
    main: '#B30038',
    c900: '#B30038',
    c800: '#FC1A1A',
  },
  invert: { main: '#FFFFFF' },
};

declare module '@mui/material/styles' {
  interface Palette {
    invert: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    invert?: PaletteOptions['primary'];
  }

  interface PaletteColor {
    c900?: string;
    c800?: string;
    c700?: string;
    c600?: string;
    c500?: string;
    c400?: string;
    c300?: string;
    c200?: string;
    c100?: string;
    c50?: string;
  }
  interface SimplePaletteColorOptions {
    c900?: string;
    c800?: string;
    c700?: string;
    c600?: string;
    c500?: string;
    c400?: string;
    c300?: string;
    c200?: string;
    c100?: string;
    c50?: string;
  }
}
