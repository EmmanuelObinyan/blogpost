import React,{useState,useRef} from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import {users} from '../info.json'
import {useButton} from '../components/Buttoncontext'
import Form from '../components/Form'
import './Author.css'
const Contact = () => {
 const subscribeRef=useRef(null)
  // the custom hook
  const{setLoading}=useButton()
  const[contact,setContact]=useState({
      fullname:"",
      email:"",
      message:""
    })
 const[selected, setSelected]=useState(false) 

 const[error,setError]=useState({
   fullname:"",
   email:"",
   options:"",
   message:""
 })  
const[show,setShow]=useState(false)
const hideDisplay=()=>{
   setShow(false)
}
//  a function for the select
 const handleSelect=(e)=>{
    setSelected(e.target.value)
 }
const handleChange=(e)=>{
  const{name,value}=e.target
  setContact({...contact,[name]:value})
}
// submit function 
 let isValid= false;
const handleSubmit=(e)=>{
    const email_regex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let texterror={...error}
   e.preventDefault()
 if(contact.fullname.trim()===""){
   texterror.fullname="*Fullname is required"
   isValid=true;
 }
if (contact.email.trim()===""){
  texterror.email="*Email is required"
   isValid=true;
}
if(contact.message.trim()===""){
  texterror.message="*please enter a message"
  isValid=true;
}
else if(!email_regex.test(contact.email)){
  texterror.email="*invalid email try again!"
  isValid=true;
}
 if(!selected){
  texterror.options="* please pick an option"
  isValid=true;
 }
  setTimeout(()=>{
    setError({...error,
      fullname:"",
      email:"",
      message:"",
      options:""})
  },2000)
 setError(texterror) 

if(!isValid){
  // to use custom hook used
     setLoading(true)
  setTimeout(()=>{
     setLoading(false)
     setShow(true)
    setContact({...contact,fullname:"",
     email:"",
     message:""
  })
  setSelected(false)
  },3000)  
}
}
 
  return (
    <div style={{marginTop:"8%",position:"relative"}} >
      <Nav
      reference={subscribeRef}
      />
      {/* for the alert container */}
      <figure className={`alert-wrapper ${show ? "show":"hide"}`}>
        <p>thank you for your message,we will reply you shortly!</p>
        <button onClick={hideDisplay}>okay</button>
      </figure>
       <div className="contact-text">
        <h4>contact us tmao</h4>
        <h2>Lets Start A Conversation</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
       dolore magna aliqua. Ut enim ad minim.</p>
          </div>
{/* the next */}
      <div className="contact-container">
            <div className="contact-wrapper">
                    <div>
                      <p>working hours</p>
                      <h2>monday to friday 8:00am to 9:00pm</h2>
                    <h4>Our Support Team is available 24/7</h4>
                    </div>
                    <div>
                      <p>contact us</p>
                      <h2>020 7993 2905</h2>
                      <h4>hello@finsweet.com</h4>
                    </div>
            </div>
               <div className='contact-form'>
             <Form 
               options={selected}
               handleSubmit={handleSubmit}
               error={error}
               info={contact}
               handleSelect={handleSelect}
               handleChange={handleChange}
             />
               </div>
           </div>
       <Footer
       ref={subscribeRef}
       />
      </div>
  )
}

export default Contact