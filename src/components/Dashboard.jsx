import React, {useState, useEffect} from 'react'
import MovieCart from './MovieCart'

import axios from 'axios'

const Dashboard = () => {

    const movie = {
        title : "Reiem for a Dream",
        year : 2000,
        genre : "Tragedy",
        description : "Reqiem for a dream is a 2000 American psychological drama",
        poster : "https://upload.wikimedia.org/wikipedia/en/9/92/Reqiem_for_a_dream.jpg"
    }

    const [movies, setMovies] = useState([])
    


    const fetchMovie = () =>{
        axios.get("http://localhost:8000/api/movies")
        .then(res=>setMovies(res.data))
        .catch(err=>console.log(err))
    }
    useEffect(fetchMovie, [])

    return (
        <div className="movieContainer">
            
            {movies.map((movie, key) =>{
                return <MovieCart onDelete={fetchMovie} mov={movie}/>
            })}
        </div>
    )
}

export default Dashboard
