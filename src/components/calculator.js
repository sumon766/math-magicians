import React from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = React.useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleButtonClick = (event) => {
    setState((state) => calculate(state, event.target.innerText));
  };

  const { total, next } = state;
  const output = next || total || '0';

  return (
    <div className="calculator-buttons">
      <div className="display output">{output}</div>
      <div className="buttons">
        <button type="button" onClick={handleButtonClick} className="button">AC</button>
        <button type="button" onClick={handleButtonClick} className="button">+/-</button>
        <button type="button" onClick={handleButtonClick} className="button">%</button>
        <button type="button" onClick={handleButtonClick} className="button cal">&#247;</button>
        <button type="button" onClick={handleButtonClick} className="button">7</button>
        <button type="button" onClick={handleButtonClick} className="button">8</button>
        <button type="button" onClick={handleButtonClick} className="button">9</button>
        <button type="button" onClick={handleButtonClick} className="button cal">x</button>
        <button type="button" onClick={handleButtonClick} className="button">4</button>
        <button type="button" onClick={handleButtonClick} className="button">5</button>
        <button type="button" onClick={handleButtonClick} className="button">6</button>
        <button type="button" onClick={handleButtonClick} className="button cal">-</button>
        <button type="button" onClick={handleButtonClick} className="button">1</button>
        <button type="button" onClick={handleButtonClick} className="button">2</button>
        <button type="button" onClick={handleButtonClick} className="button">3</button>
        <button type="button" onClick={handleButtonClick} className="button cal">+</button>
        <button type="button" onClick={handleButtonClick} className="button span">0</button>
        <button type="button" onClick={handleButtonClick} className="button">.</button>
        <button type="button" onClick={handleButtonClick} className="button cal">=</button>
      </div>
    </div>
  );
};

const Display = () => (
  <div className="calculator">
    <Calculator />
  </div>
);

export default Display;
