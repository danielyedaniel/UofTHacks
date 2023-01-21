import './App.css';
import React, { useState } from 'react';
import Main from './Components/Main';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    
    <div className="App">
          <div>
            <Main />
          </div>
      <header className="App-header">
        </header>
          <div className="search-bar-container">
            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
          <button onClick={() => console.log(searchTerm)}>Search</button>
        </div>
    </div>
  );
}
export default App;
