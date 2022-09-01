import React, { useState,createContext, useContext } from 'react'
import Display from '../components/Display';
import Button from '../components/Button';
import "./CalculatorApp.css";
import {GiHamburgerMenu} from "react-icons/gi";
const UserContext = createContext();

const CalculatorApp = () => {
  
  const[result, setResult] = useState("");
  const handleChange =(value) =>{
    // setResult(result.concat(window.event.target.value))
    setResult(result.concat(value))
  }
  const clear =() =>{
    setResult("")
  }
 const summ =() =>{
  setResult(eval(result))
 }

  return (
      <div className='calculator-App'>
        <div className='burgerColor'>
                <GiHamburgerMenu/>
                <label className='Heading'>CalculatorApp</label>
             </div>
        <UserContext.Provider value={{"result":result, "handleChange":handleChange,"clear":clear,"summ":summ} } >
        <Display />
        <Button />

        </UserContext.Provider>
       

       


      </div>  
  )
}

export default CalculatorApp;
export {UserContext};

