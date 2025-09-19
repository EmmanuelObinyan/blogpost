import React from 'react'
import './Creative.css'
const Creative = ({showCircle=false,showShape=true,text,image,content}) => {
  return (
    <div className={`creative-container ${content}`}>
         {/* for the shape */}
      { showShape &&  <div className="shape-maker"></div> }
       { showCircle && <div className="circle-maker"></div> }
        <div className="f-wrapper">
            <h3>{text}</h3>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate accusantium odit architecto doloribus
                 quibusdam veniam, ipsum nesciunt</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                 velit esse cillum dolore eu fugiat.</p>
        </div>
        <div className="fs-wrapper">
    <img src={image}alt="" />
        </div>
    </div>
  )
}

export default Creative