import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import { useState } from 'react';


function App() {



  //change handler


  const [resultState, serResultState] = useState('');
  const [searchState, setSearchState] = useState('');

  async function searchbarChangeHandler(event){
    console.log("changed!");
    setSearchState(event.target.value);
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
