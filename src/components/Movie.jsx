import React, {useState, useEffect} from 'react'
import MovieCart from './MovieCart'

import {useParams} from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

import axios from 'axios'

const Movie = () => {

    const {id} = useParams()

    const [movieData, setMovieData] = useState({})

    const getMovieData = () =>{
        axios.get(`http://localhost:8000/api/movies/${id}`)
        .then(res=>setMovieData(res.data))
        .catch(err=>console.log(err))
    }
    useEffect(getMovieData, [])

    const onMovieDelete = () =>{
        navigator('/')
    }


    return (
        <div className="movieContainer">
            <MovieCart mov={movieData} onDelete={onMovieDelete}/>
        </div>
    )
}

export default Movie