import { useEffect, useState } from "react";
import RecipeList from "../../components/RecipeList";
import "./Home.css";
import { projectFirestore } from "../../firebase/config";

export default function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIspending(true);

    const unsub = projectFirestore
      .collection("recipes")
      .onSnapshot((snapshot) => {
        if(snapshot.empty){
          setError('No recipes to load')
          setIspending(false)
        } else {
          let results = []
          snapshot.docs.forEach(doc => {
            results.push({id: doc.id, ...doc.data()})
          })
          setData(results)
          setIspending(false)
        }
      }, (err) => {
        setError(err.message)
        setIspending(false)
      })

      return () => unsub()
  }, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
