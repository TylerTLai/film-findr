import React, { useEffect, useState } from 'react';

const BackDrops = ({ imgUrl }) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(imgUrl());
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        margin: '0 0 3em 0 !important',
        padding: '0 !important',
      }}
    >
      <img
        src={url}
        alt="img"
        style={{
          margin: '0',
          padding: '0',
          width: '100vw',
        }}
      />
    </div>
  );
};

export default BackDrops;
