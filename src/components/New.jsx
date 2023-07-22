import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const New = () => {

    const navigator = useNavigate()

    const [movieData, setMovieData] = useState({
        title: "",
        description: "",
        genre: "",
        year: "",
        poster: "",
    })

    const [titleErr, setTitleErr] = useState('')
    const [descErr, setDescErr] = useState('')
    const [genreErr, setGenreErr] = useState('')
    const [yearErr, setYearErr] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:8000/api/movies", movieData)
        .then(res=>navigator('/'))
        .catch(err=>{
            const errs = err.response.data.errors 

            if (errs.title){
                setTitleErr(errs.title.message)
            }else{
                setTitleErr('')
            }

            if (errs.description){
                setDescErr(errs.description.message)
            }else{
                setDescErr('')
            }

            if (errs.genre){
                setGenreErr(errs.genre.message)
            }else{
                setGenreErr('')
            }

            if (errs.year){
                setYearErr(errs.year.message)
            }else{
                setYearErr('')
            }
        })
    }

    const handleChange = (e) => {
        const {value, name} = e.target
        setMovieData(current=>({...current, [name]: value}))
    }

    return (
        <div className='movieContainer'>
            <div className='movieCard'>
                <h3 className="movieTitle">Add a Movie</h3>
                <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <br/>
                    <p className='err'>{titleErr}</p>
                    <input onChange={handleChange} value={movieData.title} name="title" type='text'/>
                    <br/>
                    <label>Description</label>
                    <br/>
                    <p className='err'>{descErr}</p>
                    <input onChange={handleChange} value={movieData.description} name="description" type='text'/>
                    <br/>
                    <label>Genre</label>
                    <br/>
                    <p className='err'>{genreErr}</p>
                    <input onChange={handleChange} value={movieData.genre} name="genre" type='text'/>
                    <br/>
                    <label>Year</label>
                    <br/>
                    <p className='err'>{yearErr}</p>
                    <input onChange={handleChange} value={movieData.year} name="year" type='text'/>
                    <br/>
                    <label>Poster Link</label>
                    <br/>
                    <input onChange={handleChange} value={movieData.poster} name="poster" type='text'/>
                    <br/>
                    <button >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default New