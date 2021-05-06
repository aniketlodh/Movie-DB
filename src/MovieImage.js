import React from 'react'
import './MovieImage.css'
function MovieImage({movie}) {
    return (
        <div className="MovieImage">
            <img src={movie.Poster} alt=""/>
        </div>
    )
}

export default MovieImage
