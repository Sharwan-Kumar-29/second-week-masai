import React from 'react';
import BottomMain from './BottomMain';

function Main({ name }) {
  return (
    <div >
      <h2 >Main Component</h2>
      <BottomMain name={name} />
    </div>
  );
}

export default Main;