import React from 'react'
import './AuthorCard.css'
import {Link} from 'react-router-dom'
// import authorimg from '../assets/firstauthor.png'
const AuthorCard = ({author,image,styles,classname}) => {
  return (
    <div className={`author-card-container ${styles} ${classname}`}>
        <img src={image} alt="" className='author-img' />  
           <Link to ="/author" style={{textDecoration:"none"}}>  <h3>{author}</h3>  </Link>
       <p>content writer @company</p>
  <button>
       <a href="https://www.facebook.com/" rel='noopener noreferrer' target='blank'>
       <i class="bi bi-facebook" ></i></a>
       <a href="https://www.twitter.com/" rel='noopener noreferrer' target='blank'>
       <i class="bi bi-twitter"></i></a>
       <a href="https://www.instagram.com/" rel='noopener noreferrer' target='blank'>
       <i class="bi bi-instagram"></i></a>
       <a href="https://www.linkedin.com/" rel='noopener noreferrer' target='blank'>
       <i class="bi bi-linkedin"></i></a>
   </button>     
        </div>
  )
}

export default AuthorCard