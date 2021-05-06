import React from 'react'
import MovieImage from './MovieImage'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import './MovieGrid.css';
function MovieGrid({items}) {
    return (
        <div className="MovieGrid">
            {
                items?.map((movie)=>(
                    <Link id="movLink" to={`/movie/${movie.imdbID}`}><MovieImage key={movie.imdbID} movie={movie}/></Link>
                ))
            }
        </div>
    )
}

export default MovieGrid
