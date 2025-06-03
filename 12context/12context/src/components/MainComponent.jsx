import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import NestedComponent from './NestedComponent';
import './MainComponent.css';

const MainComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`main-container ${theme}`}>
      <h1>Theme Toggle Using Context API</h1>
      <button onClick={toggleTheme} className="toggle-btn">Toggle Theme</button>
      <NestedComponent />
    </div>
  );
};

export default MainComponent;