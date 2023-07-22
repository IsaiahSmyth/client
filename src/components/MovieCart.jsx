import React from 'react'

import {useNavigate, Link} from 'react-router-dom'

import axios from 'axios'

const MovieCart = props => {

    const navigator = useNavigate()

    const {mov, onDelete} = props


    const handleDelete = () =>{
        alert(mov._id)
        axios.delete(`http://localhost:8000/api/movies/${mov._id}`)
        .then(()=>onDelete())
        .catch(err=>{console.log(err)})
    }

    return (
        <div className="movieCard">
            <Link to={`/movie/${mov._id}`}><h3 className="movieTitle">{mov.title} - ({mov.year})</h3></Link>
            <img src={mov.poster}/>
            <p className="movDesc">{mov.description}</p>
            <p>{mov.genre}</p>
            <button onClick={()=>{navigator(`/update/${mov._id}`)}}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default MovieCart