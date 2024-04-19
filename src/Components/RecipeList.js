import React from 'react'
import { Link } from 'react-router-dom'
import "./RecipeList.css"
import { useTheme } from '../hooks/useTheme'
import delete_icon from '../assets/deleteicon.svg'
import { projectFirestore } from '../firebase/config'
export default function RecipeList({recipes}) {
  const {mode}=useTheme() 

  if(recipes.length===0){
    return <div className='error'>No recipes to load...</div>
  }
  
  const handleClick=(id)=>{
      projectFirestore.collection('recipes').doc(id).delete()
  }

  return (
    
    <div className='recipe-list'>
        {recipes.map(recipe=>(
           <div className= {`card ${mode}`}>
           <h3>{recipe.title}</h3>
           <p>{recipe.cookingTime} to make..</p>
           <div>{recipe.method.substring(0,100)}....</div>
              <Link to={`/recipe/${recipe.id}`}>Cook This</Link> 
            <img 
            src={delete_icon}
            alt='delete_icon'
            className='delete'
            onClick={()=>handleClick(recipe.id)}
           />
           </div>  
        ))} 
    </div>
  )
}
