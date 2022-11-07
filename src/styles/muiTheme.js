import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
    palette: {
        primary: {
            main: '#12B8FF'
        }
    },
    components: {
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: 'hsl(215, 17%, 75%, 0.7)',
                },
            },
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    color: 'hsl(215, 17%, 75%, 0.7)',
                },
            },
        },
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    color: '#8492A6',
                    fontSize: 15,
                    fontWeight: 500,
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    border: 0,
                    boxShadow: 'none',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    borderBottom: '2px solid hsl(215, 17%, 75%, 0.5)',
                    "&:disabled": {
                        color: '#AFB8C5 '
                    }
                },
            },
        },
    },
})