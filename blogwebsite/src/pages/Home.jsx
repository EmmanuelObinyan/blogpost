import React from 'react'
import { useRef } from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Featured from '../components/Featured'
import Missioncomponent from '../components/Missioncomponent'
import Catagorycomp from '../components/Catagorycomp'
import StoryComp from '../components/StoryComp'
import Authorlist from '../components/Authorlist'
import Logocomp from '../components/Logocomp'
import Testimonial from '../components/Testimonial'
import Teamcomp from '../components/Teamcomp'
import Footer from '../components/Footer'
const Home = () => {
   const subscribeRef=useRef(null)
  return (
    <div>
     <Nav 
     reference={subscribeRef}
     />
     <Header/>
     <Featured/>
     <Missioncomponent/>
     <Catagorycomp/>
     <StoryComp/>
     <Authorlist/>
     <Logocomp/>
     <Testimonial/>
     <Teamcomp/>
     <Footer
     ref={subscribeRef}
     />
    </div>
  )
}

export default Home