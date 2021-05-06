import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './SingleMovie.css'
import {useParams,Link} from 'react-router-dom'
function SingleMovie() {
    let {movieId}=useParams();
    const [movie,setMovie]=useState({});
    useEffect(()=>{
        const fetchMovie=async ()=>{
            const result=await axios(
                `https://www.omdbapi.com/?apikey=8f967a2a&i=${movieId}`
            )
            setMovie(result.data)
        }
        fetchMovie();
    },[movieId])
    return (
        <div className="SingleMovie">
            <div>
                <img src={`${movie.Poster}`} alt="" srcset=""/>
            </div>
            <div>
                <h2>{movie.Title}</h2>
                <p>{movie.Plot}</p>
                <p id="releaseYear">{movie.Year}</p>
                <Link to="/" className="btn">Go Home</Link>
            </div>
            
        </div>
    )
}

export default SingleMovie
