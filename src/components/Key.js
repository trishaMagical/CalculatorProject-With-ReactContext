import React,{useContext, useState} from 'react'
import {UserContext} from './CalculatorApp';
const Key = () => {
    const obj = useContext(UserContext);
    console.log("obj", obj);
    const[numbers,setNumbers]=useState([1,2,3,4,5,6,7,8,9,0,"+","_","*","/",".","%"])
  return (
    <div style={{width:"301px", }}>
      <div className='row' style={{marginLeft:"18px", fontWeight:"bold" , fontFamily:"initial", color:"yellow" , borderRadius:"3px"}}>
      {
          numbers.map((ele)=>
          
      <div className='col-3 p-2 border  '>
         <span onClick={()=> obj.handleChange(ele)}>{ele}</span> 
            
           
      </div>
       )
      }
      </div>
      <div className='row' style={{marginLeft:"18px", fontWeight:"bold" , fontFamily:"initial", color:"yellow" , borderRadius:"3px"}}>
      <div className='col-6 p-2 border ' onClick={obj.clear}>AC</div>
        <div className='col-6 p-2 border ' onClick={obj.summ}>=</div>
      </div>
            
        
        {/* <input type="button" value="9" onClick={obj.handleChange}/>
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
        <input type="button" value="/" onClick={obj.handleChange}/> */}
         
    </div>
  )
}

export default Key
