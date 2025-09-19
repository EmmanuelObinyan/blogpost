import React from 'react'
import './Featured.css'

const Featurecomponent = ({text,date,design_text,span_text}) => {
  return (
    <div className='f-component-container'>
        <p className='f-post-date'>{text}<span>{span_text}</span>{date}</p>
    <h3>
        {design_text}
    </h3>

    </div>
  )
}

export default Featurecomponent