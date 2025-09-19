import React from 'react'
import './Article.css'
import blog from '../assets/blogfifthpic.png'
const Article = ({image,span,date,title,text,}) => {
  return (
    <div className='article-container'>
        <img src={image} alt="" />
      <h4>by<span>{span}</span>{date}</h4>  
     <h2> {title} </h2> 
     <p>{text}</p>
    </div>
  )
}

export default Article