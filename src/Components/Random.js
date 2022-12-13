import React from 'react'

const Random = ({min, max}) => {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div className="card">Random value between {min} and {max} =&gt; {random}</div>
  )
}

export default Random