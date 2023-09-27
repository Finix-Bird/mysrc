import React, { useState } from 'react'


function Movies({movieList,removeMovie}) {
    
  return (
    <div className='movie'>
        {
        movieList.map(mv=>
            <div key={mv.Name} className="card" style={{width: "18rem"}}>
            
            <img src={mv.img} className="card-img-top" alt={mv.Name}/>
            
            <div className="card-body">
              <h5 className="card-title">{mv.Name}</h5>
              <h4 className="card-rating">{mv.RATING}</h4>
              <p className="card-text">{mv.Summary}</p>
            </div>

            <div className="card-footer">
                <button className='btn btn-danger d-block w-100' onClick={()=>{removeMovie(mv.Name)}}>Remove</button>
            </div>

            </div>)
          
        }  
  
    </div>
  ) 
}

export default Movies