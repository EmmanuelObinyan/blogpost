import React from 'react'
// to use catergoryBox.css file
import '../components/CatagoryBox.css'
import Nav from '../components/Nav'
import {category} from '../Array'
import { useRef } from 'react'
import blogpic from '../assets/blogfirstpic.png'
import Categoryitem from '../components/Categoryitem'
import Tagbutton from '../components/Tagbutton'
import Postblog from '../components/Postblog'
import Footer from '../components/Footer'
const Category = () => {
  const subscribeRef=useRef(null)
  return (
<div style={{marginTop:"5%"}}>
      <Nav
       reference={subscribeRef}
      />
    <div className='text-container'>
      <div className="text-wrapper">
        <h2>Business</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore.</p>
        <h4>Blog{" > "}Business</h4>
      </div>
      </div>
 {/* next */}
       <div className="cgy-container">
        <div className="f-wrapper">
           <Postblog
            image={blogpic}
            post_styles="post-style"
            name="business"
            title="Top 6 free website mockup tools 2022"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Non blandit massa enim nec."
           />
           <Postblog
            image={blogpic}
            post_styles="post-style"
            name="business"
            title="Step-by-step guide to choosing great font pairs"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Non blandit massa enim nec."
           />
            <Postblog
            image={blogpic}
            post_styles="post-style"
            name="business"
            title="Ten free foogle fonts that you should use"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Non blandit massa enim nec."
           />
            <Postblog
            image={blogpic}
            post_styles="post-style"
            name="business"
            title="What did I learn from doing 50+ design sprints?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Non blandit massa enim nec."/>
        </div>

        <div className="s-wrapper">
           <p>categories</p>
           { category.map((item)=>
             <Categoryitem
              key={item.id}
              title={item.title}
              icon={item.icon}
             /> 
            ) }
               <h4>all tags</h4>
            <div className='tag-wrapper'>
                <Tagbutton
                 text="business"
                 tag_class="tag-style"
                />
                <Tagbutton
                 text="experience"
                 tag_class="tag-style"
                />
                <Tagbutton
                 text="screen"
                 tag_class="screen-class"
                />
                <Tagbutton
                 text="technology"
                 tag_class="tech-class"
                />
                <Tagbutton
                 text="marketing"
                 tag_class="tech-class"
                />
                <Tagbutton
                text="life"
                />
            </div>
        </div>

       </div>
      <Footer
       ref={subscribeRef}
      /> 
 </div>
  )
}

export default Category