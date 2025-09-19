import { createContext,useContext } from "react";
import React,{ useState } from "react";
export const Buttoncontext=createContext()

export const ButtonProvider=({children})=>{
   const [loading,setLoading]=useState(false)
   return(
    <Buttoncontext.Provider value={{loading,setLoading}}>
        {children}
    </Buttoncontext.Provider>
   )
}
export const useButton=()=>{
    return useContext(Buttoncontext);
}