import React, { useState } from 'react';
import './Style/Calculator.css';
import PropTypes from 'prop-types';
import Button from './Button';
import calculate from '../logic/calculate';

function Calculator({ calculatorButtons }) {
  const [calculator, setCalculator] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const screen = () => {
    const { total, next } = calculator;
    if (!next) return total;
    return next;
  };
  const handleButtonClick = (e) => {
    const value = calculate(calculator, e.target.innerHTML);
    setCalculator(value);
  };
  return (
    <div>
      <div className="calculator-body">
        <div className="display">{screen() || '0'}</div>
        <div className="calculator-btns">
          {calculatorButtons.map((button) => (
            <Button
              value={button}
              key={button}
              handleButtonClick={handleButtonClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;

Calculator.propTypes = {
  calculatorButtons: PropTypes.arrayOf(PropTypes.string).isRequired,
};
