import React from 'react'
import './Logocomp.css'
import featureimg from '../assets/Featured in.svg'
import logo1 from '../assets/Logo 1.svg'
import logo2 from '../assets/Logo 2.svg'
import logo3 from '../assets/Logo 3.svg'
import logo4 from '../assets/Logo 4.svg'
import logo5 from '../assets/Logo 5.svg'
const Logocomp = () => {
  return (
    <div className='logo-container'>
       <img src={featureimg} alt="" />
       <img src={logo1} alt="" />
       <img src={logo2} alt="" />
       <img src={logo3} alt="" />
       <img src={logo4} alt="" />
       <img src={logo5} alt="" />
        
</div>
  )
}

export default Logocomp