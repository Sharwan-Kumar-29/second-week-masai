import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// App.jsx
import React from 'react';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import { AuthProvider } from './components/AuthContext';

const App = () => {
  return (
   <AuthProvider>

     <Navbar />
      <Main />
      <Footer />
   </AuthProvider>
     
    
  );
};

export default App;
