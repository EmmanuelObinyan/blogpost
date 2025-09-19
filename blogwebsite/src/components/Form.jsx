import React from 'react'
import './Form.css'
import Button from './Button'
const Form = ({options,handleSelect,handleChange,error,info,handleSubmit}) => {
  return (
    <div>
   <form action="" className='form-container' >
         <input type="text"
          placeholder='full name'
          name='fullname'onChange={handleChange}
          value={info.fullname} />
        {error && <p style={{color:"red",textTransform:"capitalize",fontWeight:"bold"}}>{error.fullname}</p>}

      <input type="text" 
      placeholder='your email' 
      name='email'
      onChange={handleChange} 
      value={info.email} />
    {error && <p style={{color:"red",textTransform:"capitalize",fontWeight:"bold"}}>{error.email}</p>}

       <select name="" id=""value={options} onChange={handleSelect}  >
        <option value="" defaultValue={"query related"}>query related</option>
        <option value="lorem1" >lorem1</option>
        <option value="lorem2">lorem2</option>
        <option value="lorem3" >lorem3</option>
       </select>
       {error && <p style={{color:"red",textTransform:"capitalize",fontWeight:"bold"}}>{error.options}</p>}

          <textarea name="message" id=""
          placeholder='message'
           onChange={handleChange}
           value={info.message}></textarea>
          {error && <p style={{color:"red",textTransform:"capitalize",fontWeight:"bold"}}>{error.message}</p>}

       <Button 
         title="send message"
         handleClick={handleSubmit}
         others={"button-class"}
       />
   </form>

    </div>
  )
}

export default Form