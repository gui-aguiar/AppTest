import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home';
import { GlobalStorage } from './GlobalContext';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const App = () => {
  return <div>
    <GlobalStorage>
      <Header/>
      <Home/>  
    </GlobalStorage>    
  </div>;
};

export default App;
