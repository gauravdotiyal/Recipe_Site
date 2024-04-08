import {Link} from "react-router-dom"

import React from 'react'
import "./Navbar.css"
export default function Navbar() {
  return (
    <div className='navbar'>
         <nav>
         <Link exact to="/" className="brand">
             <h1>Cooking Ninja</h1>
         </Link>
 
         <Link   to="/create">
            Create Recipes 
         </Link>

         {/* <Link   to="/search">
            Search Recipes 
         </Link>
         <Link   to="/recipe/:id">
           Recipes 
         </Link> */}
         </nav>
    </div>
  )
}
