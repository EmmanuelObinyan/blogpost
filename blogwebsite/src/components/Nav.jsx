import React from 'react'
import "./Nav.css"
import {Link} from "react-router-dom"
import Button from './Button'

const Nav = ({privacy=false,show=true,others,reference}) => {
    const handleClick=()=>{
      reference.current.scrollIntoView({behaviour:"smooth"})
    }
  return (
    <div className={`nav-container ${others}`}>
        <div className="nav-left">
          <p>{`{finsweet`}</p>
        </div>
     <div className="nav-right">
       <Link to="/" className='nav-link'>Home</Link>
       <Link to="/blogs" className='nav-link'>Blog</Link>
       <Link to="/about" className='nav-link'>About us</Link>
       <Link to="/contact" className='nav-link'>Contact us</Link>
           { privacy ? (<Link to="/privacy" className='nav-link'>privacy</Link>):""}
      { show ? (
        <Button
        title="subscribe"
         handleClick={handleClick}
        others="nav-background"/> ):""
      }
     </div>
    </div>
  )
}

export default Nav