import React from 'react';
export const Main = (props) => {
  const {data} = props;
  return (
    <div>
      <img src={data.hdurl} alt={data.title} className='bgImage'/>
    </div>
  );
}