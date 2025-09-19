import React from 'react'
import './Testimonial.css'
import profilepic from '../assets/jonathanimage.png'

const Testimonial = () => {
  return (
    <div className='testimony-container'>
        <div className="test-post-wrapper">
            <h5>testimonials</h5>
            <h2>what people say about our blogs</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div className="profile-post-wrapper">
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore 
                magna aliqua.</h3>
           <div className="name-container">
                <div className="profile-post">
          <img src={profilepic} alt="" />
            <aside>
                <h4>jonathan vallem</h4>
                <p>new york usa</p>
            </aside>
                </div>
                {/* for the icons */}
                <button>
                   <i class="bi bi-arrow-left-circle icon-left"></i>
                  <i class="bi bi-arrow-right-circle-fill  icon-right"></i>  
                  </button> 
            </div>     
        </div>
    </div>
  )
}

export default Testimonial