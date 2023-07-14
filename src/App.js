import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import { useState } from 'react';
import { autosuggest } from './Autosuggest/autosuggest';

function App() {





  const [resultState, setResultState] = useState([]);
  const [searchState, setSearchState] = useState('');
  
  //change handler
  async function searchbarChangeHandler(event){
    setSearchState(event.target.value);
    if (event.target.value.length >= 1 ){
      const data = await autosuggest(event)
      console.log(data);
      setResultState(data);
      console.log(resultState)
    } else {
      setResultState([]);
    }
  }

  return (
    <div className="App">
      <SearchBar formState={searchState}
      onChange = {searchbarChangeHandler}
      />
      <div>
      {resultState.map(element => {
        return <h1>{element.name}</h1>
      })}
      </div>
    </div>
  );
}

export default App;
