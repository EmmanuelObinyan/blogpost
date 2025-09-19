import React from 'react'
import './StoryComp.css'
import storyimage from '../assets/storyimage.png'
import Button from './Button'
const StoryComp = () => {
  return (
     <>
    <div className='story-container'>
     <img src={storyimage} alt="" />
    </div>
      <div className="story-post-wrapper">
          <h5>why we started</h5>
          <h2>
            It started out as a simple idea and evolved into our passion
          </h2>
         <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis at a, laborum recusandae alias, 
            debitis incidunt sit vero quo voluptate necessitatibus
             obcaecati dolore? Autem, beatae vero qui reprehenderit dolore a?
            </p> 
           <Button
           title="Discover our story"
           icon={true}
           others="header-background"
           /> 
      </div>
    </>
  )
}

export default StoryComp