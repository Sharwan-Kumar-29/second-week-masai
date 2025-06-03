import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <nav style={{ padding: '10px', backgroundColor: '#ccc' }}>
      <button onClick={toggleAuth}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </nav>
  );
};

export default Navbar;