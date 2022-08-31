import React,{useState,Provider,useContext} from 'react'
import {UserContext} from './CalculatorApp';
import Key from "./Key"

const Button = () => {
  // const obj = useContext(UserContext);
  const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8,9,0 ,'+','-','*','/'])
  return (
    <div className="flex-container">
      
       <Key/>
        {/* <input type="button" value="AC" onClick={obj.clear}/> */}
        {/* <input type="button" value="=" onClick={obj.summ}/> */}
        
    </div>
  )
}

export default Button
