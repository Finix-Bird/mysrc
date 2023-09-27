// my try
import { Button, Card, CardActions, CardContent, IconButton } from '@mui/material'
import React from 'react';
import { useState } from 'react';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import ExpandLessSharpIcon from '@mui/icons-material/ExpandLessSharp';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from "react"
import { movieContext } from "./App"


function Movielist({id,movie}) {
  const values=useContext(movieContext)
  const {movies,getMovies}=values
  const [show,setShow]=useState(false)
  const styles={display:show?"block":"none"}
  const deletecontent=(id)=>{
    fetch(`https://650bd1f047af3fd22f668770.mockapi.io/movies/${id}`,{method:'DELETE'}).then(()=>{getMovies()})
  }
  
  return (
    <Card className='movie-container'>
      <img className='picture' src={`url(https://image.tmdb.org/t/p/w1280${movie.pic})`}/>
      <CardContent className='movie-spec'>
        <h1>{movie.name}</h1>
        <h2>{movie.rating}</h2>
      </CardContent>
      <CardActions>
        <IconButton><EditNoteIcon/></IconButton>
      <IconButton onClick={()=>{deletecontent(id)}}><DeleteIcon/></IconButton> 
      <Button onClick={()=>{setShow(!show)}}>{show?<ExpandMoreSharpIcon/>:<ExpandLessSharpIcon/>}</Button>
      

      </CardActions>
      <p style={styles}>{movie.summary}</p>
    </Card>
  )
}

export default Movielist
// -----------------------------------------------
// import React, { useState } from 'react'
// import Movie from './movie'
// function MovieList({movies}) {
   
    
//   return (
//     <div className='movie-list'>
//       {
//         movies.map((mv,index)=><Movie key={index} movie={mv} id={index} />)
//       }
//     </div>     
//   )
// }

// export default MovieList

