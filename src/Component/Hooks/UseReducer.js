import React, { useReducer } from 'react'
import "./Style.css"

const reducer = (state,action)=>{
if (action.type==="INCR") {
    state=state+1;
}
if (state > 0 && action.type==="DENCR") {
    state=state-1; 
}
return state;
};
const UseReducer = () => {
    // const [increment,setIncrement]=useState(0);

    // const initialData =10;
    const [state,dispatch] = useReducer(reducer,0)

    
      return (
        <div className='center-div'>
            <p>{state}</p>
            <div className='button2' onClick={()=>dispatch({type:"INCR"})}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Increment ➕
            </div>
            <div className='button2'  onClick={()=>dispatch({type:"DENCR"})}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Decrement ➖
            </div> 
        </div>
      )
}

export default UseReducer
