import rocket from '../assets/icon.png'
import React from 'react'
import './CatagoryBox.css'

const Categoryitem = ({title,icon}) => {
  return (
    <>
     <div className='bx-container'>   
            <button><img src={icon}alt="" /></button>
            <h3>{title}</h3>
    </div>
    </>
  )
}

export default Categoryitem