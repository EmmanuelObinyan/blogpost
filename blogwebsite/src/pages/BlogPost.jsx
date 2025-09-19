import React from 'react'
import './Blogpost.css'
import { useRef } from 'react'
import blogfifth from '../assets/blogfifthpic.png'
import blogsecond from '../assets/blogsecondpic.png'
import blogthird from '../assets/blogthirdpic.png'
import rocket from '../assets/icon.png'
import Teamcomp from '../components/Teamcomp'
import blogpic from '../assets/postblogpic.png'
import jonathan from '../assets/jonathanimage.png'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Profile from '../components/Profile'
import Article from '../components/Article'
const BlogPost = () => {
  const subscribeRef=useRef(null)
  return (
    <>
     <Nav
      reference={subscribeRef}
     />
    <div className='general-container'>
    <div className="blogpost-container">
       <div className="blogpost-wrapper">
    <Profile
      profilepic={jonathan}
      profilestyle="profile-container"
      profilename="andrew johnson"
      profiletext="posted on 27th january 2021"
    />
      <h1>Step-by-step guide to choosing great font pairs</h1>
      <img src={rocket} alt="" /><p className='rocket-text'>startup</p>
      </div>
      <div className="blogpost-wrapper-text">
           <img src={blogpic} alt="" />
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque
                 egestas diam. Risus in
                  hendrerit gravida rutrum quisque non.</p> 

                <h3>Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod.</h3>  
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam.
                 Risus in hendrerit gravida rutrum quisque non.</p> 
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas 
                diam. Risus in hendrerit gravida rutrum quisque non.</p> 
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Non blandit massa enim nec scelerisque</li>
              <li>Neque egestas congue quisque egestas</li>
            </ul>    
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam.
                 Risus in hendrerit gravida rutrum quisque non.</p> 
           <h3>Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod.</h3>  
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam.
                 Risus in hendrerit gravida rutrum quisque non.</p>       
      </div>
    </div>
    <h1 style={{marginTop:"5%",marginLeft:"2%"
      ,marginBottom:"3%"}}>what to read next</h1>
      <Article
       date="| aug 23 2021"
       span="john doe"
       image={blogfifth}
        title="A UX Case Study Creating a Studious Environment for Students:"
        text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident."
      />
      <Article
      date="| aug 23 2021"
       span="john doe"
       image={blogsecond}
        title="A UX Case Study Creating a Studious Environment for Students:"
        text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident."
      />
      <Article
      date="| aug 23 2021"
       span="john doe"
       image={blogthird}
        title="A UX Case Study Creating a Studious Environment for Students:"
        text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident."
      />

      <Teamcomp/>
      </div>
      <Footer
       ref={subscribeRef}
      /> 
      </>
  )
}

export default BlogPost