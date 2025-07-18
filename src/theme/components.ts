import type { ThemeOptions } from '@mui/material/styles';
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    large: true;
    primary: true;
  }
}
const components: ThemeOptions['components'] = {
    MuiButton: {
        styleOverrides: {
            root: ({ theme }) => ({
                width: '100%',
                borderRadius: '16px',
                border: `1px solid ${theme.palette.customGrey[10]}`,
                variants: [
                    {
                        props: { variant: 'primary', size: 'large' },
                        style: {
                            background: theme.palette.customGrey[10],
                            color: theme.palette.customGrey[100],
                            maxWidth: '360px',
                            padding: '15px 0',
                            ":hover":{
                                background: 'transparent',
                                color: theme.palette.customGrey[10]
                            },
                        },
                    },
                    {
                        props: { variant: 'primary', size: 'medium' },
                        style: {
                            background: 'transparent',
                            color: theme.palette.customGrey['10'],
                            maxWidth: '173px',
                            padding: '10px 0',
                            fontSize: '14px',
                            ":hover":{
                                background: theme.palette.customGrey['10'],
                                color: theme.palette.customGrey['100']
                            },
                        },
                    },
                ],
                ...theme.typography.button
            }),
        },
    },

    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: 12,
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.08)',
            },
        },
    },

    MuiAppBar: {
        styleOverrides: {
            root: {
                boxShadow: 'none',
                borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            },
        },
    },

    MuiContainer: {
        defaultProps: {
            maxWidth: 'lg',
        },
    },

    MuiInput: {
        defaultProps: {
            disableUnderline: true
        },
        styleOverrides: {
            root: ({ theme }) => ({
                background: theme.palette.customGrey[100],
                color: theme.palette.customGrey[30],
                border: `1px solid ${theme.palette.customGrey[50]}`,
                borderRadius: '16px',
                width: '100%',
                maxWidth: '534px',
                marginTop: '0 !important',
                transition: `all ${theme.transitions.duration.standard}ms`,
                outline: 'none',
                padding: '15px',
                boxSizing: 'border-box',
                "::placeholder": {
                    color: theme.palette.customGrey[70]
                },
                ":hover": {
                    border: `1px solid ${theme.palette.blue[200]}`
                },
                ":focus-within": {
                    border: `1px solid ${theme.palette.blue[200]}`
                },
                // variants: [
                //     {
                //         props: { variant: 'primary' },
                //         style: {
                //             background: theme.palette.primary.dark,
                //         },
                //     }
                // ],
                ...theme.typography.body1
            }),
            input: ({ theme }) => ({
                padding: '0',
                caretColor: theme.palette.blue[200],
            }),
        },
    },

    MuiInputLabel: {
        defaultProps: {
            shrink: true
        },
        styleOverrides: {
            root: ({ theme }) => ({
                position: 'static',
                color: theme.palette.customGrey[10],
                '&.Mui-focused': {
                    color: 'inherit', // or a fixed color, e.g., '#000'
                },
                transform: 'unset',
                ...theme.typography.subtitle1,
            }),
        },
    },
    MuiFormControl: {
        styleOverrides:{
            root: {
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
            }
        }
    }
};

export default components;
