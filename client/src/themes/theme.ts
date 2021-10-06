import { createMuiTheme } from '@material-ui/core';
import React from 'react';

declare module '@material-ui/core/styles/createTypography' {
  interface Typography {
    bolded: React.CSSProperties;
    thinned: React.CSSProperties;
  }
  interface TypographyOptions {
    bolded?: React.CSSProperties;
    thinned?: React.CSSProperties;
  }
}

declare module '@material-ui/core/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    bolded: true;
    thinned: true;
  }
}

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    bolded: {
      fontFamily: 'Poppins-Bold',
    },
    thinned: {
      fontFamily: 'Poppins-Thin',
    },
  },
  palette: {
    primary: { main: 'rgb(240, 69, 69)' },
    secondary: { main: 'rgb(245, 20, 20)' },
  },
  shape: {
    borderRadius: 5,
  },
});
