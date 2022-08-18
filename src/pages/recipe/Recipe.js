import {useState, useEffect} from "react";
import "./Recipe.css";
import { useParams } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { projectFirestore } from "../../firebase/config";

export default function Recipe() {
  const { id } = useParams();
  const {mode} = useTheme()

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(()=> {
    setIspending(true)

    projectFirestore.collection('recipes').doc(id).get().then(doc => {
      if(doc.exists) {
        setIspending(false)
        setRecipe(doc.data())
      } else {
        setIspending(false)
        setError('Recipe Not Found')
      }
    })
  }, [id])

  const handleClick = () => {
    projectFirestore.collection('recipes').doc(id).update({
      title: 'Something completely different'
    })
  }

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
          <button onClick={handleClick}>Update Me</button>
        </>
      )}
    </div>
  );
}
