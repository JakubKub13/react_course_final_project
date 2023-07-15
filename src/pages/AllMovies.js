import { projectFirestore } from "../firebase/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AllMovies.css"

const AllMovies = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = projectFirestore.collection("movies").onSnapshot( (snapshot) => {

        if (snapshot.empty) {
            setError("No movies found")
        } else {
            let result = []
            snapshot.docs.forEach( (oneMovie) => {
                result.push({id: oneMovie.id, ...oneMovie.data()}) 
            })
            setData(result)
        }
     }, (err) => setError(err.message))

     return () => unsubscribe()
    }, []);

    const deleteMovie = async (id) => {
      projectFirestore.collection("movies").doc(id).delete()
    }

  return <section>
    { error && <p>{error}</p>}
    { data.map( (oneMovie) => {
      const {id, title } = oneMovie

      return <div key={id} className="one-movie">
        <p>{title}</p>
        <Link to={`/one-movie/${id}`}>More Infos</Link>
        <button type="button" onClick={ () => deleteMovie(id)}>Delete</button>
      </div>
    })}
  </section>;
}

export default AllMovies