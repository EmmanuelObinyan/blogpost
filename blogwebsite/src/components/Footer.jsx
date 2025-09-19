import React,{useState} from 'react'
import Nav from './Nav'
import './Footer.css'
import Button from './Button'
const Footer = ({ref}) => {
   let isValid=true;
   const email_regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
   const handleSubscribe=()=>{
    if(email === "")  {
        setvalue(false)
        isValid=false
      setmessage("email is required")
       setTimeout(()=>{
           setmessage("")
       },2000) 
     
    }
   else if(! email_regex.test(email)){
       setvalue(false)
       isValid=false
       setmessage("invalid email type")
         setTimeout(()=>{
           setmessage("")
           setemail("")
       },2000) 
    }
    else{
      isValid=true
    }
       if(isValid){
        setvalue(true)
        setmessage("subscribed sucessfully!!")
          setTimeout(()=>{
           setmessage("")
           setemail("")
       },2000) 
       }
   }

 const[email,setemail]=useState("")
 const handleText=(e)=>{
   setemail(e.target.value)
 }
  const[value, setvalue]=useState(true)
 const[message, setmessage]=useState("")
   
 return (
    <div className='footer-container' ref={ref}>
        <Nav 
        others="nav-padding"
        privacy={true}
        show={false}
        />
      <div className="footer-wrapper" >
         <div className="footer-child-subs">
             <h2>Subscribe to our news
                 letter to get latest updates and news</h2>
         </div>
         {/* display message */}
         <p className={value ? "green":"red"}>{message}</p>
         <div className="footer-child-email">
            <input type="email"
            value={email}
            name='email'
            onChange={handleText}
             placeholder='Enter your email' />
             
           <Button
           title="Subscribe"
           others="footer-background"
           handleClick={handleSubscribe}
           />  
         </div>
        </div>  
        <div className="footer-details">
       <aside>
        <p>Finstreet 118 2561 Fintown</p>
        <p>Hello@finsweet.com  020 7993 2905</p>
        </aside>  
        <button>
            <a href="https//:www.facebook.com/"  target='blank'><i className='bi bi-facebook'>
                </i></a>
            <a href="https//:twitter.com/" target='blank'><i className='bi bi-twitter'>
                </i></a>
            <a href="https//:instagram.com/" target='blank'><i className='bi bi-instagram'>
                </i></a>
            <a href="https//:linkedin.com/" target='blank'><i className='bi bi-linkedin'>
                </i></a>
        </button>
        </div>     
    </div>
  )
}

export default Footer