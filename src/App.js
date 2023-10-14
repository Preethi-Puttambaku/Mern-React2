import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (value) => {
    setInputValue(inputValue + value);
  };

  const handleClear = () => {
    setInputValue('');
  };

  const handleCalculate = () => {
    try {
      setInputValue(eval(inputValue).toString());
    } catch (error) {
      setInputValue('Error');
    }
  };

  return (
    <div>
      <div className='container'>
        <div className='ipop'>
          <input className='input' type='text' value={inputValue} readOnly></input>
        </div>
        <div className='digits'>
          <table>
            <tbody>
              <tr>
                <td><button onClick={() => handleButtonClick('7')}>7</button></td>
                <td><button onClick={() => handleButtonClick('8')}>8</button></td>
                <td><button onClick={() => handleButtonClick('9')}>9</button></td>
                <td><button onClick={handleClear}>clr</button></td>
              </tr>
              <tr>
                <td><button onClick={() => handleButtonClick('4')}>4</button></td>
                <td><button onClick={() => handleButtonClick('5')}>5</button></td>
                <td><button onClick={() => handleButtonClick('6')}>6</button></td>
                <td><button onClick={() => handleButtonClick('/')}>/</button></td>
              </tr>
              <tr>
                <td><button onClick={() => handleButtonClick('1')}>1</button></td>
                <td><button onClick={() => handleButtonClick('2')}>2</button></td>
                <td><button onClick={() => handleButtonClick('3')}>3</button></td>
                <td><button onClick={() => handleButtonClick('-')}>-</button></td>
              </tr>
              <tr>
                <td><button onClick={() => handleButtonClick('0')}>0</button></td>
                <td><button onClick={() => handleButtonClick('.')}>.</button></td>
                <td><button onClick={handleCalculate}>=</button></td>
                <td><button onClick={() => handleButtonClick('+')}>+</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
