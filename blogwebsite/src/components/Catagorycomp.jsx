import React from 'react'
import { category } from '../Array'
import './Catagorycomp.css'
import CatagoryBox from './CatagoryBox'

const Catagorycomp = () => {
  return (
      <>
        <h1 style={{marginTop:"5%",
              textAlign:"center",
            paddingBottom:"1rem",}}>Choose a category</h1>
    <div className='category-container'>
  {  category.map((item)=>
    <CatagoryBox
    key={item.id}
    icon={item.icon}
    text={item.text}
    title={item.title}
    />
  )
  }
        </div>
        </>
  )
}

export default Catagorycomp