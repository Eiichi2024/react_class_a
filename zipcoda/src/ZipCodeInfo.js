
import React from 'react';

function ZipCodeInfo({ data }) {
  return (
    <div className="zip-code-info">
      <h2>検索結果</h2>
      <p><strong>郵便番号:</strong> {data.zipcode}</p>
      <p><strong>都道府県:</strong> {data.pref}</p>
      <p><strong>市区町村:</strong> {data.address}</p>
    </div>
  );
}

export default ZipCodeInfo;
            