import React, { useState } from 'react';
import ActivityCategoryPage from './ActivityCategoryPage';
import Toast from './Toast';
import './ActivityRecord.css';

const categories = [
  { title: '走路/散步', image: 'https://i.imgur.com/pcevStp.png' },
  { title: '跑步', image: 'https://i.imgur.com/0fRVnki.png' },
  { title: '籃球', image: 'https://i.imgur.com/2ylXwx2.png' },
  { title: '自行車', image: 'https://i.imgur.com/vDA6rSE.png' },
  { title: '游泳', image: 'https://i.imgur.com/3Eecxab.png' },
  { title: '其它活動', image: 'https://i.imgur.com/XgfYpru.png' }
];

function ActivityRecord() {
  const [page, setPage] = useState('main');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setPage('detail');
  };

  const handleSave = () => {
    setToastMessage(`已儲存 ${selectedCategory.title} 活動紀錄！`);
    setPage('main');
    setTimeout(() => setToastMessage(''), 2000);
  };

  return (
    <div className="container fade-in">
      {page === 'main' && (
        <>
          <h1>活動記錄</h1>
          <p className="subtitle">選擇要記錄的活動</p>
          <div className="activity-grid">
            {categories.map((cat) => (
              <div className="activity-card" key={cat.title} onClick={() => handleSelectCategory(cat)}>
                <img src={cat.image} alt={cat.title} />
                <div className="label">{cat.title}</div>
              </div>
            ))}
          </div>
        </>
      )}

      {page === 'detail' && selectedCategory && (
        <ActivityCategoryPage category={selectedCategory} onSave={handleSave} />
      )}

      {toastMessage && <Toast message={toastMessage} />}
    </div>
  );
}

export default ActivityRecord;
