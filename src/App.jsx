import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home';
import { GlobalStorage } from './GlobalContext';

const App = () => {
  return <div>
    <GlobalStorage>
      <Header/>
      <Home/>  
    </GlobalStorage>    
  </div>;
};

export default App;
