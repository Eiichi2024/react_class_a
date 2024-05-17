
import React, { useState } from 'react';
import ZipCodeForm from './ZipCodeForm';
import ZipCodeInfo from './ZipCodeInfo';
import axios from 'axios';

function App() {
  const [zipCodeData, setZipCodeData] = useState(null);

  const fetchZipCodeData = async (zipCode) => {
    if (!zipCode) alert('郵便番号を入力してください。');
    try {
      const response = await axios.get(`https://zipcoda.net/api?zipcode=${zipCode}`);
      setZipCodeData(response.data.items[0]);
    } catch (error) {
      console.error('エラー:', error);
      if (error.response.data.status == '404') {
        alert('郵便番号が見つかりません。');
      }
      setZipCodeData(null);
    }
  };

  return (
    <div className="app">
      <h1>郵便番号検索</h1>
      <ZipCodeForm fetchZipCodeData={fetchZipCodeData} />
      {zipCodeData && <div><ZipCodeInfo data={zipCodeData} /></div>}
    </div>
  );
}

export default App;
            