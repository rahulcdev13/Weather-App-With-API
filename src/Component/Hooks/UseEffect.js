import React, { useState, useEffect } from 'react'
import "./Style.css"

const UseEffect = () => {
    const [increment,setIncrement]=useState(0);
    
    const Increment = () => {
        setIncrement(increment+1);
    } 
    useEffect(()=>{
     console.log("Hello");
        // document.title=`You Clicked ${increment} Times..!`;
    },[]);
      return (
        <div className='center-div'>
            <p>{increment}</p>
            <div className='button2' onClick={Increment}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Clicked ➕
            </div> 
        </div>
      )
}

export default UseEffect
