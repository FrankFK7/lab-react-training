import React from 'react';

const Rating = ({ children }) => {
  const displayStar = (children) => {
    let starDisplay = '';
    for (let i = 0; i < 5; i++) {
      i < Number(children) ? (starDisplay += '★') : (starDisplay += '☆');
    }
    return starDisplay;
  };

  return <div className="card">{displayStar(children)}</div>;
};

export default Rating;

// 0 < 3
// ★
// 1 < 3
// ★★
// 2 < 3
// ★★★
// 3 < 3
// ★★★☆
// 4 < 3
// ★★★☆☆