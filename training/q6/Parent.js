import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [childValue, setChildValue] = useState('');

  const handleValueChange = (value) => {
    setChildValue(value);
  };

  return (
    <div>
      <Child onValueChange={handleValueChange} />
      <p>Value from Child: {childValue}</p>
    </div>
  );
};

export default Parent;