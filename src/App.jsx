import React from 'react';
import './App.css';
import moonIcon from './images/icon-moon.svg';

function App() {
  return (
    <div className="app">
      <header>
        <h1>TODO</h1>
        <img src={moonIcon} alt="moon-icon" />
      </header>
    </div>
  );
}

export default App;
