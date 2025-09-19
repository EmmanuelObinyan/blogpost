import React from 'react'
import { authors } from '../Array'
import './Authorlist.css'
import AuthorCard from './AuthorCard'
const Authorlist = ({value=true,author_class,drill_class}) => {
  return (
       <div style={{marginTop:"5%"}}>
         <h2 style={{margin:"auto",
             textAlign:"center",
            padding:"0.5rem",
            width:"80%"}}>list of authors</h2>
    <div className={`author-container ${author_class}`}>
  { value ? (
        authors.slice(0,4).map((item)=>
        <AuthorCard
        key={item.id}
        image={item.image}
        author={item.author}
        styles={item.styles}
        />
        )
      )
      :
      (
       authors.map((item)=>
        <AuthorCard
        key={item.id}
        image={item.image}
        author={item.author}
        styles={item.styles}
        classname={drill_class}
        />
        ) 
      ) 
      }
          </div>
        </div>
  )
}

export default Authorlist