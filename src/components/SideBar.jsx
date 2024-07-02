import React from 'react';

export const SideBar = (props) => {
  const { handleToggleModal, data } = props;
  return (
    <div className='sidebar'>
      <div onClick={handleToggleModal} className='bgOverlay'></div>
      <div className='sidebarContents'>
        <div>
          <h2>{data?.title}</h2>
          <div>
            <p>{data?.date}</p>
            <p>{data?.explanation}</p>
          </div>
          <button onClick={handleToggleModal}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
