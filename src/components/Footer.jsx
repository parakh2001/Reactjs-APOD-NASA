import React from 'react'

export const Footer = (props) => {
    const {showModal,handleToggleModal} = props;
  return (
    <footer>
        <div>
            <h2>The Brutal Marshal Landscape</h2>
            <h1>APOD Project</h1>
        </div>
        <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}