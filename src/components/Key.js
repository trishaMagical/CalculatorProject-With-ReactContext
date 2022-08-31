import React,{useContext} from 'react'
import {UserContext} from './CalculatorApp';
const Key = () => {
    const obj = useContext(UserContext);
  return (
    <div>
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
    </div>
  )
}

export default Key
