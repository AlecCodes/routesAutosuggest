import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import { useState } from 'react';
import { autosuggest } from './Autosuggest/autosuggest';

function App() {





  const [resultState, serResultState] = useState('');
  const [searchState, setSearchState] = useState('');
  
  //change handler
  async function searchbarChangeHandler(event){
    console.log("Event target value ", event.target.value);
    setSearchState(event.target.value);
    console.log(await autosuggest(event))
  }

  return (
    <div className="App">
      <SearchBar formState={searchState}
      onChange = {searchbarChangeHandler}
      />

    </div>
  );
}

export default App;
