import React from 'react'

export const SideBar = (props) => {
    const {handleToggleModal} = props;
  return (
    <div className='sidebar'>
            <div onClick = {handleToggleModal} className='bgOverlay'></div>
            <div className='sidebarContents'></div>
        <div>
            <h2>The Brutal Martian Landscape</h2>
            <div>
                <p>Description</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia autem saepe ipsa magnam voluptatum omnis porro ipsam? A earum harum necessitatibus maxime autem velit exercitationem quasi nemo facilis sed. Libero.</p>
            </div>
            <button onClick={handleToggleModal}>
            <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>
  )
}
