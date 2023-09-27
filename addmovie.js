// import { useContext, useEffect, useState } from "react"
// import Movie from "./movie"
// import { Link } from "react-router-dom"
// import { movieContext } from "./App"

// function Addmovie(){
//   const [name,setName]=useState('')
//   const [img,setImg]=useState('')
//   const [rating,setRating]=useState('')
//   const [summary,setSummary]=useState('')
//   const addlist={name,img,rating,summary}
//   const values=useContext(movieContext)
//   const {movies,getMovies}=values
//   const moviedetail=()=>
//   {
//     fetch("https://650bd1f047af3fd22f668770.mockapi.io/movies",{method: 'POST',headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(addlist)}).then(()=>{getMovies()})
//   }
  
//   return(
//     <div className="addmovie">
//       <label>MovieName:</label><input onChange={(event)=>setName(event.target.value)}></input><br></br><br></br>
//       <label>MovieImage:</label><input type="file" onChange={(event)=>setImg(URL.createObjectURL(event.target.files[0]))}></input><br></br><br></br>
//       <label>movieRating:</label><input type="number" step={0.1} min={0} max={10} onChange={(event)=>setRating(event.target.value)}></input><br></br><br></br>
//       <label>MovieSummary:</label><textarea onChange={(event)=>setSummary(event.target.value)}></textarea><br></br><br></br>
//       <Link to={"/movie"}><button onClick={moviedetail}>SUBMIT</button></Link>
//     </div>
//   )
// }
// export default Addmovie

// -------------------------------------------
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// function Addmovie({movieList,setMovieList}) {
//   const [name,setName]=useState("")
//   const [poster,setPoster]=useState("")
//   const [rating,setRating]=useState(0)
//   const [summary,setSummary]=useState("")
//   const [trailer,setTrailer]=useState("")

//   const navigate=useNavigate()

// const addMovie=()=>{
//   const newMovie={
//     name,
//     poster,
//     summary,
//     rating,
//     trailer
    
//   }
//   setMovieList([...movieList,newMovie])
//   console.log(movieList);
//   navigate('/movie')
// }

//   return (
//     <div className='add-movie-form'>
//       <input placeholder='MovieName' onChange={event=>setName(event.target.value)}/>
//       <input placeholder='MoviePoster' onChange={event=>setPoster(event.target.value)}/>
//       <input placeholder='Movie rating' onChange={event=>setRating(event.target.value)}/>
//       <input placeholder='Movie summary' onChange={event=>setSummary(event.target.value)}/>
//       <input placeholder='Movie trailer' onChange={event=>setTrailer(event.target.value)}/>
//     <button onClick={addMovie}>ADD MOVIE</button>
//     </div>
//   )
// }

// export default Addmovie

// ------------------------------------------------------------------
import React,{useState} from 'react'
import Movies from "./movies";


function Addmovie() {

    const [mvImg,setmvimg]=useState()
    const [mvName,setmvname]=useState()
    const [mvRating,setmvrating]=useState()
    const [mvSummary,setmvsummary]=useState()


const [movieList,setmovielist]=useState(
    [
    {img:"./img/karthick.jpg",Name:"SASUKI UCHIKA",RATING:"9.5",Summary:"anime best vibe the moment"},
    {img:"./img/muthupandi.jpg",Name:"NARUTO",RATING:"8.5",Summary:"anime best vibe the moment"},
    {img:"./img/rajkumar.jpg",Name:"JIRAYA",RATING:"7.5",Summary:"anime best vibe the moment"}
    ]
    )
//remove movie
        const removeMovie=(mvName)=>{
            setmovielist(movieList.filter(mv=>mv.Name!=mvName))
        }

  return (
    <div>
        <input type='file' placeholder='Add img' onChange={(event)=>setmvimg(URL.createObjectURL(event.target.files[0]))}/>
        <input type='text' placeholder='movie name' onChange={(event)=>setmvname(event.target.value)}/>
        <input type='number' placeholder='Add rating' onChange={(event)=>setmvrating(event.target.value)}/>
        <input type='text' placeholder='Add summary' onChange={(event)=>setmvsummary(event.target.value)}/>

        <button onClick={()=>setmovielist([...movieList,{img:mvImg,Name:mvName,RATING:mvRating,Summary:mvSummary}])}>Add Movie</button>
            <Movies movieList={movieList} removeMovie={removeMovie}/>

    </div>
  )
}

export default Addmovie