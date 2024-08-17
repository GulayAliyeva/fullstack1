
import React, { useState } from 'react';
import Buttons from './Buttons'
function Calculator() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [height,setHeight]=useState('220px');
  const resetInputs = () => {
    setNum1('');
    setNum2('');
  };

  return (
    <div  className='container' style={{ minHeight: setHeight }}>
      <div className='inputSection'>   
     <input type="number" placeholder='enter first number' value={num1} onChange={(e)=>setNum1(e.target.value)}></input>
    <input type="number" placeholder='enter second number'value={num2} onChange={(e)=>setNum2(e.target.value)} ></input>
       </div>
<Buttons num1={num1} num2={num2} setResult={setResult} resetInputs={resetInputs} height={height} setHeight={setHeight}  />


   
    <button className='resultBtn'  ><b >Result:{result}  </b>   </button>
    </div>
  )
}

export default Calculator
