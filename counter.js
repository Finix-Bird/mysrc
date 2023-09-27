import React, { useState } from 'react'
import './App.css'
function Counter() {
    const [Like,setLike]=useState(10)
    const [disLike,setDisLike]=useState(10)

  return (
    <div className='counter'>
        <button className='btn-like' onClick={()=>{
            setLike(Like+1)
            }}>Like  {Like}</button>
        <button className='btn-dislike' onClick={()=>{
            setDisLike(disLike-1)
        }}>DisLike {disLike}</button>
    </div>
  )
}

export default Counter