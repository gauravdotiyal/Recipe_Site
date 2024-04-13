import React from 'react'
import "./Search.css"
import {useLocation} from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
//Components
import RecipeList from '../../Components/RecipeList'

export default function Search() {
   const queryString=useLocation().search
   const queryParams=new URLSearchParams(queryString)
   const query=queryParams.get('q')
   //?q=searched

   const url=`http://localhost:3000/recipes?q=${query}`
   const {error,isPending,data}=useFetch(url) 

  return (
    <div>
       <h2 className="page-title">Recipes Include "{query}"</h2>
       {error && <p className='error'> {error} </p> }
       {isPending && <p className="loading">Loading...</p> }
       {data && <RecipeList recipes={data}/>}
    </div>
  )
}
