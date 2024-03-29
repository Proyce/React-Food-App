import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import "./RecipeList.css";
import { projectFirestore } from "../firebase/config";
import deleteIcon from "../assets/deleteIcon.svg";

export default function RecipeList({ recipes }) {
  const { mode } = useTheme();
  if (!recipes.length) return <div className="error"> No recipes to load.</div>;

  const handleClick = (id) => {
    projectFirestore.collection("recipes").doc(id).delete();
  };
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to prepare.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img
            src={deleteIcon}
            onClick={() => handleClick(recipe.id)}
            alt=""
            className="delete"
          />
        </div>
      ))}
    </div>
  );
}
