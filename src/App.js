import './App.css';
import React from 'react';
import Header from './Header.js';
import Cards from "./TinderCards"
import SwipeButton from "./SwipeButton"


function App() {
  return (
    <div className="app">
      <Header />
      <Cards />
      <SwipeButton />
    </div>
  );
}

export default App;
