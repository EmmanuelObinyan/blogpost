import React from 'react'
import './CatagoryBox.css'
import {Link} from 'react-router-dom'
const CatagoryBox = ({icon,text,title}) => {
  return (
    <>
    <div className='box-container'>
    <Link to="/category" className='link'>    
 <button><img src={icon}alt="" /></button>
 <h3>{title}</h3>
 <p>{text}</p>
   </Link>
    </div>
    </>
  )
}

export default CatagoryBox