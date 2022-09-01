import React,{useState,useContext} from 'react'
import {UserContext} from './CalculatorApp';
import "./Display.css"


const Display = () =>{
  
  const obj = useContext(UserContext);
  console.log("UserContext", obj);
  // const[result, setResult] = useState("");

  return (
    <div>
      <input 
        type="text"
        placeholder='0'
        id=""
        value={obj.result}
        className="inputBox"
        />
    </div>
  )
}

export default Display;
