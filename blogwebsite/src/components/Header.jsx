import React from 'react'
import './Header.css'
import Button from './Button'
const Header = () => {
    const handleClick=()=>{
        console.log("user clicked")
    }
  return (
    <div className='header-container' style={{marginTop:"5%"}}>
      <div className='header-wrapper'>
         <p className='header-post-date'>posted on <span>startup</span></p>
         <h1>Step-by-Step in choosing a great front pairs</h1>
         <p className='header-post-time'><span>by James West</span> | May 23, 2022</p>
         <p className='header-post-description'>
            duis aute irure dolor in reprehenderit  in voluptate velit esse cillum dolore eu
            fgiuat nulla paraitur.excepteur sint occaecat cupidatat non proident
         </p>
         <Button
         
         title="read more"
         icon={true}
         handleClick={handleClick}
         others="header-background"/>
      </div>
    </div>
    
  )
}

export default Header