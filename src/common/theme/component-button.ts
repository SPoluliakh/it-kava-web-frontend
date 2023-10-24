import { Theme } from '@mui/material';

export const setComponentButton = (theme: Theme) => {
  const { palette } = theme;

  theme.components = {
    ...theme.components,
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontFamily: 'var(--font-montserrat)',
          fontWeight: 500,
          lineHeight: '24px',
          textTransform: 'none',
          borderStyle: 'solid',
          borderRadius: '4px',
          borderWidth: '2px',

          ...(ownerState.size === 'medium' && {
            padding: '2px 16px',
            fontSize: '14px',
            [theme.breakpoints.up('xs')]: {
              height: '48px',
            },
            [theme.breakpoints.up('sm')]: {
              height: '40px',
            },
            [theme.breakpoints.down('sm')]: {
              width: '100%',
            },
          }),

          ['& .MuiButton-endIcon']: { marginRight: 0 },
          ['& .MuiButton-startIcon']: { marginLeft: 0 },
          ['& .MuiSvgIcon-root']: { fontSize: '16px' },

          ...(ownerState.variant === 'text' &&
            ownerState.color === 'primary' && {
              color: palette.primary.c500,
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              ['&:focus']: { borderColor: palette.primary.c100 },
              ['&:hover']: {
                backgroundColor: palette.primary.c50,
                borderColor: palette.primary.c50,
              },
              ['&:active']: {
                backgroundColor: palette.primary.c100,
                borderColor: palette.primary.c100,
              },
              ['&.Mui-disabled']: { color: palette.secondary.c400 },
            }),

          ...(ownerState.variant === 'contained' && { boxShadow: 'none' }),

          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              backgroundColor: palette.primary.c500,
              borderColor: palette.primary.c500,
              color: palette.secondary.c50,
              ['&:focus']: { borderColor: palette.primary.c800 },
              ['&:hover']: {
                backgroundColor: palette.primary.c400,
                borderColor: palette.primary.c400,
                boxShadow: 'none',
              },
              ['&:active']: {
                backgroundColor: palette.primary.c800,
                borderColor: palette.primary.c800,
                boxShadow: 'none',
              },
              ['&.Mui-disabled']: {
                color: palette.secondary.c500,
                backgroundColor: palette.secondary.c100,
                borderColor: palette.secondary.c100,
              },
            }),

          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'secondary' && {
              backgroundColor: palette.secondary.c50,
              borderColor: palette.secondary.c50,
              color: palette.secondary.c800,
              ['&:focus']: { borderColor: palette.secondary.c400 },
              ['&:hover']: {
                backgroundColor: palette.secondary.c200,
                borderColor: palette.secondary.c200,
                boxShadow: 'none',
              },
              ['&:active']: {
                backgroundColor: palette.secondary.c400,
                borderColor: palette.secondary.c400,
                boxShadow: 'none',
              },
              ['&.Mui-disabled']: {
                color: palette.secondary.c400,
                backgroundColor: palette.secondary.c100,
                borderColor: palette.secondary.c100,
              },
            }),
        }),
      },
    },
  };
};
