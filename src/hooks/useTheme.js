import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"

export const useTheme =()=>{
    const context=useContext(ThemeContext)
    
    if(context===undefined){    
       throw new Error("useTheme() must be used inside the themeprovider")
    }
    return context
}