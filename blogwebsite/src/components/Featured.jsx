import React from 'react'
import './Featured.css'
import { figmatext } from '../Array'
import featureimg from '../assets/featuredPost.png'
import { useNavigate } from 'react-router-dom'
import FeaturePost from './FeaturePost'
import Featurecomponent from './Featurecomponent'
const Featured = () => {
const navigate =useNavigate()
const handleClick =()=>{
    navigate("/blogs")
}

  return (
    <div className='featured-container'>
         <div className="featured-left">
            <h1>Featured post</h1>
            <FeaturePost
            image={featureimg}
            handleclick={handleClick}
            description="duis aute irere dolor in reprehenderit in voluptate velit esse
         cilliuk dolore eu fugiat nulla pariatur .excepture sint occaerat cupidata non proident"
            date="by John Doe 1 May 23, 2022"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto tempora voluptate, 
        non odit obcaecati totam "/>
         </div>
         <div className="featured-right">
            <div className="featured-head-post">
    <h1>All post</h1>
    <h5>View All</h5>
          </div>
     {  
        figmatext.map((item,index)=>
          <Featurecomponent
           key={index}
          text={item.text}
          date={item.date}
          span_text={item.span_text}
          design_text={item.design_text}
          />
        )

     }
          </div>
     </div>
  )
}

export default Featured