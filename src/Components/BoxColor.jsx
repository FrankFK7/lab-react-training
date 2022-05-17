import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const style = {
    backgroundColor: `rgb(${r},${g},${b})`,
    padding: '30px',
    textAlign: 'center',
  };

  return (
    <div className="card" style={style}>
      rgb({r},{g},{b})
    </div>
  );
};

export default BoxColor;
