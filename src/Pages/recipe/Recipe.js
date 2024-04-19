import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useFetch } from '../../hooks/useFetch';

import "./Recipe.css";
// import { useFetch } from '../../hooks/useFetch';
import { useTheme } from "../../hooks/useTheme";
import { projectFirestore } from "../../firebase/config";

export default function Recipe() {
  const { id } = useParams(); //it is firestore id
  const { mode } = useTheme();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection("recipes")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError("Could not find the recipe");
        }
      });
  }, [id]);

  return (
    <div className={`recipe ${mode}`}>
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} time </p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}
