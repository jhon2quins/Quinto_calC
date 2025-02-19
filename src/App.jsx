import { useState } from "react";
import "./App.css";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState("");

  const handleCalculation = () => {
    if (num1 === "" || num2 === "" || !operator) {
      setResult("Enter values and select an operator");
      return;
    }
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let res;
    switch (operator) {
      case "+":
        res = n1 + n2;
        break;
      case "-":
        res = n1 - n2;
        break;
      case "*":
        res = n1 * n2;
        break;
      case "/":
        res = n2 !== 0 ? n1 / n2 : "Error";
        break;
      default:
        res = "Error";
    }
    setResult(res);
  };

  return (
    <div className="calculator">
       <h1>Basic Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder=""
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder=""
      />
      <div className="buttons">
        {["+", "-", "*", "/"].map((op) => (
          <button key={op} onClick={() => setOperator(op)}>{op}</button>
        ))}
        <button className="equal-btn" onClick={handleCalculation}>=</button>
      </div>
      <button className="clear-btn" onClick={() => { setNum1(""); setNum2(""); setOperator(null); setResult(""); }}>Clear</button>
      <div className="result">= {result}</div>
    </div>
  );
}
