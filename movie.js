import { useContext } from "react"
import Movielist from "./movielist"
import { movieContext } from "./App"
function Movie()
{
  const values=useContext(movieContext)
  const {movie,getMovies}=values
  return(
    <div className="movie">
      {
        movie.map((mv,index)=><Movielist key={index} movie={mv} id={mv.id}/>)
      }
    </div>
  )
}
export default Movie
// ----------------------------------------------------
// // import { ExpandMore } from '@mui/icons-material'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import DeleteIcon from '@mui/icons-material/Delete';
// // import { ExpandMoreIcon } from '@mui/icons-material/ExpandMore';

// function Movie({movie,id}) {
//     const [show,setshow]=useState(false)
//     const styles={
//       color:movie.rating>8?"green":"red"
//     }
//     const navigate=useNavigate()
//   return (
//     <div className='movie-container'>
//         <img className="movie-poster" src={movie.poster}/>
//         <div className='movie-spec'>
//             <h2 className='movie_name'>{movie.name}</h2>
//             <p style={styles}>⭐ {movie.rating}</p>
//         </div>
//         <div>
          

//           <button style={{backgroundColor:"orange"}} onClick={()=>navigate('/moviedetails/'+id)}>info</button>
//           {/* <ExpandMore></ExpandMore> */}
          
//             {/* conditional rendering */}
//             <button onClick={()=>{setshow(!show)}}>Toggle Summary</button>
//             <p className='movie-summary' style={{display:show?"block":"none"}}>{movie.summary}</p>
//         </div>
//         <DeleteIcon/>
//     </div>
//   )
// }

// export default Movie


// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import DeleteIcon from '@mui/icons-material/Delete';
// import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
// import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
// import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
// import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
// import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
// import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
// import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
// import FourKIcon from '@mui/icons-material/FourK';
// import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';

// export default function SvgMaterialIcons() {
//   return (
//     <Grid container sx={{ color: 'text.primary' }}>
//       <Grid item xs={4}>
//         <Typography>Filled</Typography>
//       </Grid>
//       <Grid item xs={8}>
//         <DeleteIcon />
//         <DeleteForeverIcon />
//       </Grid>
//       <Grid item xs={4}>
//         <Typography>Outlined</Typography>
//       </Grid>
//       <Grid item xs={8}>
//         <DeleteOutlinedIcon />
//         <DeleteForeverOutlinedIcon />
//       </Grid>
//       <Grid item xs={4}>
//         <Typography>Rounded</Typography>
//       </Grid>
//       <Grid item xs={8}>
//         <DeleteRoundedIcon />
//         <DeleteForeverRoundedIcon />
//       </Grid>
//       <Grid item xs={4}>
//         <Typography>Two Tone</Typography>
//       </Grid>
//       <Grid item xs={8}>
//         <DeleteTwoToneIcon />
//         <DeleteForeverTwoToneIcon />
//       </Grid>
//       <Grid item xs={4}>
//         <Typography>Sharp</Typography>
//       </Grid>
//       <Grid item xs={8}>
//         <DeleteSharpIcon />
//         <DeleteForeverSharpIcon />
//       </Grid>
//       <Grid item xs={4}>
//         <Typography>Edge-cases</Typography>
//       </Grid>
//       <Grid item xs={8}>
//         <ThreeDRotationIcon />
//         <FourKIcon />
//         <ThreeSixtyIcon />
//       </Grid>
//     </Grid>
//   );
// }
