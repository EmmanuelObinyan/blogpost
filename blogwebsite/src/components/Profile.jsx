import React from 'react'
import './Testimonial.css'

const Profile = ({profilepic,profilename,profiletext,profilestyle}) => {
  return (
    
                <div className={`profile-post ${profilestyle}`}>
          <img src={profilepic} alt=""  />
            <aside>
                <h4>{profilename}</h4>
                <p>{profiletext}</p>
            </aside>
          </div>  
  )
}

export default Profile;