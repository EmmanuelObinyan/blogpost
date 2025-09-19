import React from 'react'
import { useRef } from 'react'
import Nav from '../components/Nav'
import '../components/Postblog.css'
import { blogpost } from '../Array'
import Blogfeature from '../components/Blogfeature'
import Postblog from '../components/Postblog'
import Catagorycomp from '../components/Catagorycomp'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Teamcomp from '../components/Teamcomp'
const Blogs = () => {
  const subscribeRef=useRef(null)
  return (
    <div>
      <Nav
       reference={subscribeRef}
      />
      <Blogfeature/>
  <div className="header-post">
   <h2 style={{borderBottom:"1px solid #F4F0F8",
    width:"75%",marginLeft:"2.5%"}}>all posts</h2> 
   { blogpost.map((item)=>
     <Postblog
      key={item.id}
      title={item.title}
      name={item.name}
      text={item.text}
      image={item.image}
     />
   )
   }
    <div className="button-container">
       <Button
       others='button-background'
       secondicon={true}
       title="prev"
       />
       <Button
       icon={true}
       title="Next"
       />
    </div>
    <Catagorycomp/>
  </div>
   <Teamcomp/>
   <Footer
    ref={subscribeRef}
   />
      </div>
  )
}

export default Blogs