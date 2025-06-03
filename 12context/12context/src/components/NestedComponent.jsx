import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import './NestedComponent.css';

const NestedComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`nested-box ${theme}`}>
      <h2>This is a nested component</h2>
      <p>Current theme: <strong>{theme}</strong></p>
    </div>
  );
};

export default NestedComponent;
