import { useParams, Link } from 'react-router-dom'
import { projectFirestore } from '../firebase/config'
import { useState, useEffect } from 'react'
import "./OneMovie.css"

const OneMovie = () => {

  const [data, setData] = useState({})
  const [error, setError] = useState("")

  const { movieId } = useParams()

  useEffect(() => {
    projectFirestore.collection("movies").doc(movieId).get().then( (document) => {
      if (document.exists) {
        setData(document.data())
      } else {
        setError("No movie found")
      }
    }).catch( (error) => {
      setError(error.message)
    })
  }, [movieId]) 

  return <section className='one-movie-section'>
    {error && <p>{error}</p>}
    <h1>{data.title}</h1>
    <p>{data.minage}+</p>
    <p>{data.time}</p>
    <Link exact to="/allmovies">Back to all movies</Link>
  </section>
}

export default OneMovie