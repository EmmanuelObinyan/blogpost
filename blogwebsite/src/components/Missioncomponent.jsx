import React from 'react'
import './Missioncomp.css'
import Button from './Button'
import {useNavigate} from 'react-router-dom'
import Postiondiv from './Postiondiv'
const Missioncomponent = ({show=true,missionclass}) => {
  const Navigate= useNavigate();
  const page=()=>{
    Navigate("/About")
  }
  return (
    <>
    { show && <Postiondiv/>}
    <div className={`mission-container ${missionclass}`}>
        <div className="about-post-container">
             <h3>About us</h3>
             <h2>We are a community of content writers who share their learnings</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  
          { show && <Button 
            title="Read more"
             icon={true}
             handleClick={page}
             others="mission-background"
           />
          }
        </div>
        <div className="mission-post-container">
            <h3>our mission</h3>
            <h2>Creating valuable content for creatives all around the world</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
    </>
  )
}

export default Missioncomponent