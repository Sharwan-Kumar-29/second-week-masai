import React from 'react';


import './App.css';
import { ThemeProvider } from './components/ThemeContext';
import MainComponent from './components/MainComponent';

const App = () => {
  return (
    
     
      <ThemeProvider> <MainComponent/></ThemeProvider>
    
  );
};

export default App;
