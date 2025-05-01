import React, { useState } from 'react';

function ActivityCategoryPage({ category, onSave }) {
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');

  const handleSaveClick = () => {
    if (!distance || !time) {
      alert("請完整填寫距離與時間");
      return;
    }
    console.log(`已儲存的 ${category.title} 活動：距離 ${distance} 公里，時間 ${time} 分鐘`);
    onSave();
  };

  return (
    <div className="container fade-in">
      <div className="image-wrapper">
        <img src={category.image} alt={`${category.title} 圖片`} />
      </div>
      <h1>{category.title}</h1>
      <div className="form-container">
        <div className="form-group">
          <label>今天活動了多少距離</label>
          <input
            type="text"
            placeholder="請輸入數值（公里）"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>今天活動了多少時間</label>
          <input
            type="text"
            placeholder="請輸入數值（分鐘）"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>
      <div className="button-group">
        <button className="primary" onClick={handleSaveClick}>儲存</button>
      </div>
    </div>
  );
}

export default ActivityCategoryPage;
