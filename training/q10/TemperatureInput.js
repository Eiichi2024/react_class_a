import React from 'react';

const TemperatureInput = ({ scale, temperature, onTemperatureChange }) => {
  const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input
        type="text"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
};

export default TemperatureInput;