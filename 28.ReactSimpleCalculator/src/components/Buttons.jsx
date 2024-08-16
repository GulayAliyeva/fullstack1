import React from 'react';

const Buttons = ({ num1, num2, setResult,resetInputs }) => {
  const calculate = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

        

    if (isNaN(number1) || isNaN(number2)) {
      setResult('invalid input');
      return;
    }
  

    let res;
    switch (operation) {
      case '+':
        res = number1 + number2;
        break;
      case '-':
        res = number1 - number2;
        break;
      case '*':
        res = number1 * number2;
        break;
      case '/':
        res = number2 !== 0 ? (number1 / number2).toFixed(3) : 'Cannot be divide by zero';
       
        break;
      default:
        res = 'Unknown operation';
    }

    setResult(res);
    setHeight(res === 'Cannot divide by zero' ? '250px' : '220px');
    resetInputs();

  };
  return(
  <div className='operatorBtns' >
  <div className='operatorKeys'>  
      <button     type="button" data-mdb-button-init class="operator btn btn-info"   onClick={() => calculate('+')}>+</button>
  <button  type="button" data-mdb-button-init class="operator btn btn-info" onClick={() => calculate('-')}>-</button></div>
<div className='operatorKeys'>
<button  type="button" data-mdb-button-init class="operator btn btn-info"  onClick={() => calculate('*')}>&times;</button>
<button  type="button" data-mdb-button-init class="operator btn btn-info"  onClick={() => calculate('/')}>&divide;</button></div>

</div>
 );
};

export default Buttons;
