import React,{useState,Provider,useContext} from 'react'
import {UserContext} from './CalculatorApp';

const Button = () => {
  const obj = useContext(UserContext);
  const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8,9,0 ,'+','-','*','/'])
  return (
    <div className="flex-container">
      
        <button onClick={obj.clear}>AC</button>
        <button onClick={obj.summ}>=</button>
        

        <input type="button" value="9" onClick={obj.handleChange}/>
        <input type="button" value="8" onClick={obj.handleChange}/>
        <input type="button" value="7" onClick={obj.handleChange}/>
        <input type="button" value="6" onClick={obj.handleChange}/>
        <input type="button" value="5" onClick={obj.handleChange}/>
        <input type="button" value="4" onClick={obj.handleChange}/>
        <input type="button" value="3" onClick={obj.handleChange}/>
        <input type="button" value="2" onClick={obj.handleChange}/>
        <input type="button" value="1" onClick={obj.handleChange}/>
        <input type="button" value="0" onClick={obj.handleChange}/>
        <input type="button" value="+" onClick={obj.handleChange}/>
        <input type="button" value="-" onClick={obj.handleChange}/>
        <input type="button" value="*" onClick={obj.handleChange}/>
        <input type="button" value="/" onClick={obj.handleChange}/>
        {/* <input type="button" value="AC" onClick={obj.clear}/> */}
        {/* <input type="button" value="=" onClick={obj.summ}/> */}
        
    </div>
  )
}

export default Button
