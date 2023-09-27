import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
function MovieDetails({movieList}) {
    const navigate=useNavigate()

    const {id}=useParams()

    console.log(id);
    const movie=movieList[id]
    const styles={
        color:movie.movie_rating>8?"green":"red"
      }
  return (
    <div className='movie-detail-container'>
        <iframe width="800" height="570" src={movie.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <div className='movie-spec'>
                <h2 className='movie-name'>{movie.name}</h2>
            <p style={styles} className='movie-rating'>⭐ {movie.rating}</p>
        </div>

    <button onClick={()=>navigate('-1')}>Back</button>
        
    </div>
  )
}

export default MovieDetails
