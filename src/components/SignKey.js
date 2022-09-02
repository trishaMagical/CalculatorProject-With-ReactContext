import React, { useContext, useState } from 'react'
import { UserContext } from './CalculatorApp';
const SignKey = () => {
    const obj = useContext(UserContext);
    console.log("obj", obj);
    const [numbers, setNumbers] = useState(["+", "-", "*", "/"])
    return (
        <div style={{ width: "301px", }}>
            <div className='row' style={{ marginLeft: "18px", fontWeight: "bold", fontFamily: "initial", color: "yellow", borderRadius: "3px" }}>
                {
                    numbers.map((ele) =>

                        <div className='col-3 p-2 border  '>
                            <span onClick={() => obj.handleChange(ele)}>{ele}</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SignKey
