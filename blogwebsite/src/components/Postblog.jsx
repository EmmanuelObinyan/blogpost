import React from 'react'
import './postblog.css'
// import firstimg from '../assets/blogfirstpic.png'

const Postblog = ({name,title,image,text,post_styles}) => {
  return (
    <div className={`post-container ${post_styles}`}>
        <div className="post-wrapper">
            <img src={image} alt="" className='post-wrapper-img'/>
        </div>
        <div className="post-wrapper-text">
            <h3>{name}</h3>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Postblog