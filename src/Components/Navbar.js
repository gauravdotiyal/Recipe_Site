import {Link} from "react-router-dom"

import React from 'react'
import "./Navbar.css"
import Searchbar from "./Searchbar"
export default function Navbar() {
  return (
    <div className='navbar'>
         <nav>
         <Link exact to="/" className="brand">
             <h1>Cooking Ninja</h1>
         </Link>
          
            <Searchbar/>
           
         <Link   to="/create">
            Create Recipes 
         </Link>

         
         </nav>
    </div>
  )
}
