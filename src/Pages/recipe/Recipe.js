import React from 'react'
import {useParams} from 'react-router-dom'
// import { useFetch } from '../../hooks/useFetch';


import "./Recipe.css"
import { useFetch } from '../../hooks/useFetch';

export default function Recipe() {
  const {id}=useParams();
  const url="http://localhost:3000/recipes/"+id
  const {error,isPending,data:recipe}=useFetch(url)



  return (
    <div className='recipe'>
       {isPending && <div className='loading'>Loading...</div>}
       {error && <div className='error'>{error}</div>}
       {recipe && ( 
            <>
              <h2 className='page-title'>{recipe.title}</h2>
              <p >Takes {recipe.cookingTime} time </p>
              <ul>
                {recipe.ingredients.map(ing=><li key={ing}>{ing}</li>)}
              </ul>
              <p className='method'>{recipe.method}</p>
            </>
       )}
    </div> 
  )
}
