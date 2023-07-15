import { useState } from 'react'
import { projectFirestore } from '../firebase/config'
import "./Form.css"


const Form = () => {
    const [movieTitle, setMovieTitle] = useState("")
    const [movieMinAge, setMovieMinAge] = useState(null)
    const [movieTime, setMovieTime] = useState(null)

    const submitForm = async (event) => {
        event.preventDefault()

        const newMovie = {
            title: movieTitle, 
            minage: parseInt(movieMinAge), 
            time: parseInt(movieTime)
        }

        try {
            await projectFirestore.collection("movies").add(newMovie)
            setMovieTitle("")
            setMovieMinAge("")
            setMovieTime("")
        } catch (err) {
            console.log(err)
        }
        
    }

  return <section className="form-section">
    <h1>Add movies</h1>
    <form onSubmit={submitForm}>
        <input className="input" type="text" placeholder="Title" onChange={ (event) => setMovieTitle(event.target.value)} value={movieTitle}/>
        <input className="input" type="number" placeholder="Min Age" min="1" onChange={ (event) => setMovieMinAge(event.target.value) } value={movieMinAge} />
        <input className="input" type="number" placeholder="Time" min="1"onChange={ (event) => setMovieTime(event.target.value) } value={movieTime}/>
        <input type="submit" value="Add Movie" />
    </form>
  </section>
}

export default Form