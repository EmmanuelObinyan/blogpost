import React from 'react'
import './Teamcomp.css'
import Button from './Button'
const Teamcomp = () => {
  return (
    <div className='team-container'>
        <h2>Join our team to be a part of our story</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
     <Button
      title="join now"
      others="team-background"
     />
    </div>
  )
}

export default Teamcomp