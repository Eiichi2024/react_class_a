import React from 'react';

const Child = ({ onValueChange }) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => onValueChange(e.target.value)}
      />
    </div>
  );
};

export default Child;