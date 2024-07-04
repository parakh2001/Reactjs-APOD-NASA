import React, { useState } from 'react';

export const Main = (props) => {
  const { data } = props;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      <img
        src={data.url} // Low-resolution image URL
        alt={data.title}
        className='bgImage low-res'
        style={{ display: imageLoaded ? 'none' : 'block' }}
      />
      <img
        src={data.hdurl} // High-resolution image URL
        alt={data.title}
        className='bgImage high-res'
        onLoad={() => setImageLoaded(true)}
        style={{ display: imageLoaded ? 'block' : 'none' }}
      />
    </div>
  );
};
