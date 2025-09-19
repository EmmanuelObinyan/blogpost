import React from 'react'
import './Featured.css'
import Button from './Button'
const FeaturePost = ({date,text,description,image,handleclick}) => {
    
  return (
    <div className='feature-post-wrapper'>
        <img src={image} alt=""  />
     <p className='feature-post-date'>{date}</p>   
       <h3>
        {text}
       </h3>
       <p className='featured-post-description'>
        {description}
       </p>
       <Button 
       others="header-background"
       icon={true}
       title="Read more"
       handleClick={handleclick}
       />
        </div>
  )
}

export default FeaturePost