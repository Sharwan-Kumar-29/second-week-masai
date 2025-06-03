import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Footer = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <footer style={{ padding: '10px', backgroundColor: '#eee', marginTop: '20px' }}>
      {isAuthenticated ? 'Welcome, User' : 'Please log in'}
    </footer>
  );
};

export default Footer;