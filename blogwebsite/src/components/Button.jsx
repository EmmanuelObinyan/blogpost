import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from "react-icons/io"
import {useButton } from "./Buttoncontext"
import "./Button.css"

const Button = ({others,title,icon=false,handleClick,secondicon=false}) => {
  const{loading}=useButton()
  return (
    <div className={`main-button ${others} ${loading && "disabled"}`} onClick={handleClick}  >
      {secondicon ? <IoIosArrowBack/>: ""}
    {`${ loading ? "sending...":title}`}
    {icon ? <IoIosArrowForward/>:""}
    </div>
  )
}

export default Button;