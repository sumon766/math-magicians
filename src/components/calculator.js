import React from 'react';

const calculator = () => (
  <div className="calculator">
    <div className="display">0</div>

    <div className="buttons">
      <button type="button" className="button">AC</button>
      <button type="button" className="button">+/-</button>
      <button type="button" className="button">%</button>
      <button type="button" className="button cal">&#247;</button>
      <button type="button" className="button">7</button>
      <button type="button" className="button">8</button>
      <button type="button" className="button">9</button>
      <button type="button" className="button cal">x</button>
      <button type="button" className="button">4</button>
      <button type="button" className="button">5</button>
      <button type="button" className="button">6</button>
      <button type="button" className="button cal">-</button>
      <button type="button" className="button">1</button>
      <button type="button" className="button">2</button>
      <button type="button" className="button">3</button>
      <button type="button" className="button cal">+</button>
      <button type="button" className="button span">0</button>
      <button type="button" className="button">.</button>
      <button type="button" className="button cal">=</button>
    </div>
  </div>
);

export default calculator;
