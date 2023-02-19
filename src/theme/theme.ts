import { createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';
import { COLORS } from './color';

export const breakpoints = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 };

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
    typography: {
      fontFamily: string;
    };
    palette: {
      primary: {
        main: string;
        light: string;
        dark: string;
      };
      text: {
        primary: string;
        secondary: string;
      };
    };
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const themes = createTheme({
  status: {
    danger: orange[500]
  },
  breakpoints: {
    values: breakpoints
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    button: {
      textTransform: 'capitalize'
    }
  },
  palette: {
    primary: {
      main: COLORS.MainGreen,
      contrastText: COLORS.MainBlack
    },
    secondary: {
      main: COLORS.SecGreen,
      contrastText: COLORS.SecBlack
    },
    text: {
      primary: COLORS.MainBlack,
      secondary: COLORS.SecBlack
    },
    background: {
      paper: COLORS.MainGray,
      default: COLORS.MildGray
    }
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: ''
    }
  }
});
