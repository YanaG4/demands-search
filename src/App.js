import './App.css';
import HeaderContainer from './Components/HeaderContainer';
import ListContainer from './Components/ListContainer';
import SearchContainer from './Components/SearchContainer';
import StepsContainer from './Components/StepsContainer';

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
