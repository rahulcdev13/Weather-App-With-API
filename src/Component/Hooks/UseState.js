import React, { useState } from 'react'
import "./Style.css"


const UseState = () => {
const [increment,setIncrement]=useState(0);

const Increment = () => {
    setIncrement(increment+1);
}
const Decrement = () => {
    setIncrement(increment-1);
    if (increment===0) {
        // alert('Limit is Excided');
        setIncrement(0);
    }
}
  return (
    <div className='center-div'>
        <p>{increment}</p>
        <div className='button2' onClick={Increment}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Increment ➕
        </div>
        <div className='button2' onClick={Decrement}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Decrement ➖
        </div> 
    </div>
  )
}

export default UseState;
