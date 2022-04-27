import React from 'react'

function MovieItem(props) {
  return (
    <li>
        
            <a href={`https://www.themoviedb.org/movie/${props.video.id}`}><img
                src={`https://image.tmdb.org/t/p/original/${props.video.poster_path}`}
                alt={props.video.title} /></a>
            <p>
                {props.video.title}
            </p>          
        
    </li>
  )
}

export default MovieItem