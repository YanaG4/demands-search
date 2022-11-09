import { createTheme } from '@mui/material/styles';
import { skyBlue, transparentGrey, darkGrey, coldGrey, black } from './colors';
export const theme = createTheme({
    palette: {
        primary: {
            main: skyBlue
        }
    },
    components: {
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: transparentGrey,
                },
            },
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    color: transparentGrey,
                },
            },
        },
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    color: darkGrey,
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
                        color: coldGrey
                    }
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                standardSuccess: {
                    backgroundColor: skyBlue,
                    opacity: "85%",
                    color: 'white',
                    fontSize: "15px",
                    paddingRight: "40px",
                    "& .MuiAlert-icon": {
                        color: "white",
                    }
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    color: black,
                    fontSize: "17px",
                    input: {
                        '&::placeholder': {
                            color: darkGrey,
                            opacity: "100%",
                            paddingLeft: "3px"
                        },
                    },
                },
            },
        },
    },
})