import { useState } from 'react';

const LikeButton = () => {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [liked, setLiked] = useState(0);

  const randomColor = (colors) => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleClick = () => {
    setLiked((prevLiked) => prevLiked + 1);
  };
  return (
    <div>
      <button
        style={{ backgroundColor: randomColor(colors) }}
        onClick={handleClick}
      >
        {liked} Likes
      </button>
    </div>
  );
};

export default LikeButton;