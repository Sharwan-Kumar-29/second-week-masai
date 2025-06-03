import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Main = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <main style={{ padding: '20px' }}>
      {isAuthenticated ? (
        <h2>You are logged in!</h2>
      ) : (
        <h2>Please login to access the content.</h2>
      )}
    </main>
  );
};

export default Main;