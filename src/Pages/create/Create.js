import React, { useRef, useState } from "react";
import "./Create.css"; 
import { useFetch } from "../../hooks/useFetch";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientsInput = useRef(null);
  
  const {postData,data,error}=useFetch("http://localhost:3000/recipes", "POST") 


  const handleSubmit = (e) => {
    e.preventDefault();
    postData({title,ingredients,method,cookingTime:cookingTime+' minutes'})
    // console.log(title, method, cookingTime, ingredients);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }

    setNewIngredient("");
    ingredientsInput.current.focus();
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a new recipe </h2>

      <form onSubmit={handleSubmit}>
        {/* first label  */}
        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        {/* {ingredients} */}
        <label>
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientsInput}
            />
            <button onClick={handleAdd} className="btn">
              add
            </button>
          </div>
        </label>
        <p>
          Current Ingredients:{" "}
          {ingredients.map((ing) => (
            <em>{ing}, </em>
          ))}{" "}
        </p>


        {/* second label  */}
        <label>
          <span>Recipe Method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking time (minutes) :</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
