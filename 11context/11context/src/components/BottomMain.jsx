import React from 'react';
import BottomMainRight from './BottomMainRight';

function BottomMain({ name }) {
  return (
    <div >
      <h3 >Bottom Main Component</h3>
      <BottomMainRight name={name} />
    </div>
  );
}

export default BottomMain;