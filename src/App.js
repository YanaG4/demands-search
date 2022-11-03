import './App.css';
import HeaderContainer from './components/HeaderContainer';
import ListContainer from './components/ListContainer';
import SearchContainer from './components/SearchContainer';
import StepsContainer from './components/StepsContainer';

function App() {
  return (
    <div className='main-container'>
      <HeaderContainer />
      <StepsContainer />
      <SearchContainer />
      <ListContainer />
    </div>
  );
}

export default App;
