import React from 'react'
import './Blogfeature.css'
import { useNavigate } from 'react-router-dom'
import blogfeatureimg from '../assets/blogfeatureimg.png'
import Button from './Button'

const Blogfeature = () => {
  const navigate=useNavigate()
  const handlePage=()=>{
     navigate("/blogpost")
  }
  return (
    <div className='blogfeature-container'>
       <div className="blog-post-wrapper">
          <h3>featured post</h3>
        <h2>step-by-step guide to choosing great font pairs</h2>
        <h5>By<span>John Doe</span>| May 23, 2022</h5>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
           cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident</p>
          <Button
            title="Read more"
            icon={true}
            handleClick={handlePage}
             others="header-background"
          />  
       </div>
       <div className="blog-pic-wrapper">
        <img src={blogfeatureimg} alt="" />
       </div>
    </div>
  )
}

export default Blogfeature