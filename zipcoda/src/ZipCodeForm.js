
import React, { useState } from 'react';

function ZipCodeForm({ fetchZipCodeData }) {
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchZipCodeData(zipCode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        placeholder="郵便番号を入力"
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default ZipCodeForm;
            