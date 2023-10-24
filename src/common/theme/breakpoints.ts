import { BreakpointsOptions } from '@mui/system';

export const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0, // 360 0
    xs1: 768,
    sm: 992, // 600
    md: 1200, // 900
    lg: 1440, // 1200
    xl: 1920, // 1536
  },
};

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs1: true;
  }
}
