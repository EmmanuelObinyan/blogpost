import React from 'react'
import './CatagoryBox.css'
const Tagbutton = ({tag_class,text}) => {
  return (
    <div className= {`tag-container ${tag_class}`}>
       <button>{text}</button>
    </div>
  )
}

export default Tagbutton