import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { checkboxClasses } from '@mui/material/Checkbox';

import HeaderContainer from './components/HeaderContainer';
import ListContainer from './components/ListContainer';
import SearchContainer from './components/SearchContainer/SearchContainer';
import StepsContainer from './components/StepsContainer';

const theme = createTheme({
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
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
        },
      },
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='main-container'>
        <HeaderContainer />
        <StepsContainer />
        <SearchContainer />
        <ListContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
