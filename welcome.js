import React from 'react'
import './App.css'
import Counter from './counter';

function Welcome(props) {
    console.log(props);
  return (
    <div className='welcome'>
        <img className='pic' src={props.pic}/>
        <h1>Hello {props.name}</h1>
        <Counter/>
    </div>
  )
}

export default Welcome