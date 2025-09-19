import React from 'react'
import './Author.css'
import { useRef } from 'react'
import authorimg from '../assets/authormale.png'
import Nav from '../components/Nav'
import buildingimg from '../assets/buildingname.png'
import peopleimg from '../assets/peopleimg.png'
import Postblog from '../components/Postblog'
import Positiondiv from '../components/Postiondiv'
import Footer from '../components/Footer'
const Author = () => {
  const subscribeRef=useRef(null)
  return (
  <div style={{marginTop:"5%"}} >
      <Nav
      reference={subscribeRef}
      />
      <div className="author-profile-container">

        <div className='prof-container'>
           <div className='prof-wrapper'>
          <img src={authorimg} alt="" />
            </div>

        <div className='prof-text-wrapper'>
          <h2> Hey there, I’m Andrew Jonhson and welcome to my Blog</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
             At risus viverra adipiscing at in tellus.</p>
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
        </div>
        <Positiondiv
         classname="position"
        />
      </div>
{/* second part */}
   <div className="author-section">
       <h2>my posts</h2>
     <Postblog
     name="business"
     image={buildingimg}
     post_styles="post-image"
     text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      title={"Font sizes in UI design: The complete guide to follow"}
     />  
     <Postblog
     name="business"
     image={peopleimg}
     post_styles="post-image"
     text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      title={"How to build rapport with your web design clients"}
     />  
   </div>
 <Footer
  ref={subscribeRef}
 />
  </div>
  )
}

export default Author