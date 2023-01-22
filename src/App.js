import './App.css';
import React, { useState } from 'react';
import Video from './Components/Video';
import RocketIcon from './Images/rocket2.png';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    


    
  <div className="App">

    
    {/* <div>
      <Video />
    </div>   */}

    

    <header className="App-header">
      <div className="search">
      <form action="" className="search-bar">
        <input type = "text" placeholder="Where to?" name ="q"/>
            <button type="submit"><img  src={RocketIcon}></img>
            </button>
      </form>
    </div>


    </header>

      
    {/* <div className="search-bar-container">
      <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
        <button onClick={() => console.log(searchTerm)}>Search</button>
    </div> */}
  </div>
  );
}
export default App;
