// import { Home, Movie } from "@mui/icons-material"
// import { AppBar, Button, Toolbar } from "@mui/material"
// import { Routes,Route, useNavigate } from "react-router"
// import Home from "./home"
// import Addmovie from "./addmovie"
// import Movie from "./movie"
// import { createContext, useEffect } from "react"
// import { useState } from "react"
// import './App.css'
// export const movieContext=createContext()
// function App(){
//     useEffect(()=>{getMovies()},[])
//     function getMovies()
//     {
//         fetch("https://650bd1f047af3fd22f668770.mockapi.io/movies").then(res=>res.json()).then(data=>setMovie(data))
//     }
//     const [movie,setMovie]=useState([])
//     const values={movie,getMovies}
//     const navigate=useNavigate()
//     // console.log(movie);

//     return(
//         <div>
//             <AppBar position="static">
//                 <Toolbar>
//                     <Button color="inherit" onClick={()=>{navigate("/")}}>Home</Button>
//                     <Button color="inherit" onClick={()=>{navigate("/movie")}}>Movie</Button>
//                     <Button color="inherit" onClick={()=>{navigate("/addmovie")}}>Addmovie</Button>
//                 </Toolbar>
//             </AppBar>
//             <movieContext.Provider value={values}>
//             <Routes>
//                 <Route path="/" element={<Home/>}></Route>
//                 <Route path="/addmovie" element={<Addmovie/>}></Route>
//                 <Route path="/movie" element={<Movie/>}></Route>
//             </Routes>
//             </movieContext.Provider>
//         </div>
//     )
// }
// export default App

// -----------------------------------------------------------------
// import './App.css';
// import Home from './home';
// import Movie from './movie';  
// import MovieDetails from './moviedetails';
// import MovieList from './movielist';
// import {Routes,Route,Link} from 'react-router-dom'

// export const INITIAL_MOVIE_LIST=[
//     {movie_poster:"./images/rrr.jpg",movie_name:"RRR",movie_rating:9.0,movie_summary:"RRR is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad",trailer:"https://www.youtube.com/embed/f_vbAtFSEc0"},
//     {movie_poster:"./images/jailer.jpg",movie_name:"JAILER",movie_rating:4.0,movie_summary:"RRR is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad",trailer:"https://www.youtube.com/embed/Y5BeWdODPqo"},
//     {movie_poster:"./images/hulk.jpg",movie_name:"HULK",movie_rating:6.0,movie_summary:"RRR is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad"}
//   ]
// function App() {
    
//  return(
//   <div className='App'>
//     <nav>
//     <ul className='nav-list'>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/movie">Movies</Link></li>
//       <li><Link to="/addmovie">Add Movie</Link></li>
//     </ul>
//     </nav>
//      <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/movie" element={<MovieList/>}/>
//       <Route path="/addmovie" element={<MovieList/>}/>
//       <Route path="/moviedetails/:id" element={<MovieDetails/>}/>
//      </Routes>
//   </div>
//  )
// }
// export default App;
// -------------------------------------------------------------------------
import React, { useState } from "react";
import './App.css'
import Addmovie from "./addmovie";

const App=()=>{


return(
    <div>
           <Addmovie/> 
    </div>
)
}
export default App

// -----------------------------------------------------------------
// CRUD Operation

// import React, { useState } from "react";
// import Create from "./crud/create";
// import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
// import Read from "./crud/read";
// import Update from "./crud/update";
// const App=()=>{

// return(
//     <Router>
//         <div className="main">
//         <h2>React CRUD Operations</h2>
//         <Routes>
         
//             <Route exact path="/" element={<Create/>}/>
//             <Route path="/read" element={<Read/>}/>
//             <Route path="/update" element={<Update/>}/>

//         </Routes>
//         <hr/>
//     </div>
//     </Router>
// )
// }
// export default App
//--------------------------------------------------------------------
// const persons=["Karthik","Pandi","Rajk"]

// const users=[{name:"Karthik",pic:"./img/karthick.jpg"},{name:"Pandi",pic:"./img/muthupandi.jpg"},{name:"Rajkumar",pic:"./img/rajkumar.jpg"}]
   
{/* <h1>JSON-Server-EmployeeDatabase</h1> */}
        {/* <hr/> */}
        {/* <User/> */}
        {/* <Addcolor/> */}
        {/* <Counter/> */}
{/* 
    <Welcome name={persons[0]}/>
    <Welcome name={persons[1]}/>
    <Welcome name={persons[2]}/> */}

        {/* {persons.map(p=><Welcome name={p}/>)} */}

        {/* {
            users.map(u=>
            // <Welcome name={u.name} pic={u.pic}/>
        )
        } */}

//--------------------------------------------------------------------
// import Welcome from "./welcome";
// import Counter from "./counter";
// import User from "./user";
// import Addcolor from "./addcolor";

//-------------------------------------------------------------
// import React, { useState } from "react";
// import Lcm from "./lcm";

// const App=()=>{
//     const [isShow,setShow]=useState(true)

// return(
//     <div>
//         <h1>Life Cycle Methods</h1>
//         {isShow?<Lcm/>:<></>}
//         <button onClick={()=>setShow(!isShow)}>{isShow?"ON":"OFF"}</button>
//     </div>
// )
// }
// export default App
//-------------------------------------------------------------
// import React, { useState } from "react";
// import Content from "./content"; 

// function App() 
// {
//     const [msg,setMsg]=useState("Welcome Muthupandi")
//     const updateMsg=(childData)=>{
//         setMsg(childData)
//     }
//     return(
//         <div className="app">
//             <h1>{msg}</h1>
//             {/* <button onClick={updateMsg}>ChangeMsg From Parent </button> */}
//             <hr/>
//             {/* pass values from parent to Child */}
//             <Content greetings={msg} updateParent={updateMsg}/>

//         </div>
//     )
// }

// export default App

//------------------------------------------------------------












