import React, { useContext } from 'react'
import { UserContext } from './CalculatorApp';
const OtherKey = () => {
    const obj = useContext(UserContext);
    console.log("obj", obj);
    return (
        <div style={{ width: "301px", }}>
            <div className='row' style={{ marginLeft: "18px", fontWeight: "bold", fontFamily: "initial", color: "yellow", borderRadius: "3px" }}>
                <div className='col-6 p-2 border ' onClick={obj.clear}>AC</div>
                <div className='col-6 p-2 border ' onClick={obj.summ}>=</div>
            </div>
        </div>
    )
}

export default OtherKey
