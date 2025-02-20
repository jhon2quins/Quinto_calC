import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [operator, setOperator] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const calculateResult = () => {
    let result = 0;
    switch (operator) {
      case '+':
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        result = 'Invalid operator';
    }
    setResult(result.toString());
  };

  const handleEqualClick = () => {
    calculateResult();
  };

  return (
    <div className="calculator">
      <h1>Basic Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={handleNum1Change}
        placeholder=""
      />
      <select value={operator} onChange={handleOperatorChange}>
        <option value="">Select Operator</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        value={num2}
        onChange={handleNum2Change}
        placeholder=""
      />
      <button onClick={handleEqualClick}>=</button>
      <p>Equal: {result}</p>
    </div>
  );
}

export default Calculator;
