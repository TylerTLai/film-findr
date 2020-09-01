import React from 'react';

function Arrows({ className, style, onClick }) {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, display: 'block', background: 'green' }}
    />
  );
}

export default Arrows;
