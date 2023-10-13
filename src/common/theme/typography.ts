import React from 'react';
import { Theme } from '@mui/material';

export const setTypography = (theme: Theme) => {
  theme.typography.subtitle2 = {
    fontFamily: 'var(--font-merriweather)',
    fontSize: '32px',
    lineHeight: '40px',
    fontWeight: 700,
    [theme.breakpoints.up('sm')]: {
      fontSize: '40px',
      lineHeight: '48px',
    },
  };

  theme.typography.subtitle1 = {
    ...theme.typography.subtitle2,
    textTransform: 'uppercase',
  };

  theme.typography = {
    ...theme.typography,
    h1: {
      fontFamily: 'var(--font-montserrat)',
      fontSize: '32px',
      lineHeight: '40px',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'var(--font-montserrat)',
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: 'var(--font-montserrat)',
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 600,
    },
    p1: {
      fontFamily: 'var(--font-montserrat)',
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 600,
    },
    p2: {
      fontFamily: 'var(--font-montserrat)',
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 500,
    },
    p3: {
      fontFamily: 'var(--font-montserrat)',
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    p4: {
      fontFamily: 'var(--font-montserrat)',
      fontSize: '14px',
      lineHeight: '24px',
      fontWeight: 400,
    },
  };
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    p1: React.CSSProperties;
    p2: React.CSSProperties;
    p3: React.CSSProperties;
    p4: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    p1?: React.CSSProperties;
    p2?: React.CSSProperties;
    p3?: React.CSSProperties;
    p4?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    p1: true;
    p2: true;
    p3: true;
    p4: true;
  }
}
