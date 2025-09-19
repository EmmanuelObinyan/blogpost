import React from 'react'
import { useRef } from 'react'
import '../App.css'
import storyimage from '../assets/storyimage.png'
import Nav from '../components/Nav'
import shapeimg from '../assets/shapeimage.png'
import secondimage from '../assets/secondimagepic.png'
import Missioncomponent from '../components/Missioncomponent'
import Postiondiv from '../components/Postiondiv'
import Creative from '../components/Creative'
import Footer from '../components/Footer'
import Authorlist from '../components/Authorlist'
import Teamcomp from '../components/Teamcomp'
const About = () => {
  const subscribeRef=useRef(null)
  return (
    <div style={{marginTop:"6%"}}>
      <Nav
       reference={subscribeRef}
      />
    <div className="first-container">
      <div className='f-container'>
          <h4>about us</h4>
    <h2>
        We are a team of content 
        writers 
        who share their learnings
    </h2>
      </div>
      <div className='s-container'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
             ex ea commodo consequat.
          </p>
      </div>
    </div>  
    {/* container for the image */}
 <div className="image-container">
   <div className="content-wrapper">
      <div className="figure-wrapper">
        <figure>
          <h2>12k+</h2>
          <p>Blogs Published</p>
        </figure>
        <figure>
          <h2>18k+</h2>
          <p>Views on Finsweet</p>
        </figure>
        <figure>
          <h2>30k+</h2>
          <p>Total active Users</p>
        </figure>
      </div>
        <Postiondiv
         classname="position-classname"
        />
  </div>
 </div>
     <Missioncomponent 
       show={false}
       missionclass="mission-wrapper"
     />
   <Creative
    text="Our team of creatives"
    image={shapeimg}
   />
     <Creative
     text="Why we started this Blog"
      showShape={false}
      showCircle={true}
      image={secondimage}
      content="wrapper"
     />
     <Authorlist
      author_class="author-class"
      drill_class="card-class"
      value={false}
     />
     <Teamcomp/>
     <Footer
      ref={subscribeRef}
     />
      </div>
  )
}

export default About