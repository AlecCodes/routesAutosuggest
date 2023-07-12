import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';

import { useState } from 'react';


function App() {

  const [searchState, setSearchState] = useState('');

  return (
    <div className="App">
      <SearchBar formState={searchState} formSetter = {setSearchState}/>
    </div>
  );
}

export default App;
