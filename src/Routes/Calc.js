import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Calculator from '../components/Calculator';
import './Style/nav.css';
import './Style/calc.css';

function Calc({ calculatorButtons }) {
  return (
    <>
      <nav>
        <Link to="/">Math Magician</Link>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/calculator"> Calculator</Link>
          </li>
          <li>
            <Link to="/about">Quote</Link>
          </li>
        </ul>
      </nav>
      <div className="body">
        <h2>Let&rsquo;s do some Math!</h2>
        <Calculator calculatorButtons={calculatorButtons} />
      </div>
    </>
  );
}

export default Calc;

Calc.propTypes = {
  calculatorButtons: PropTypes.isRequired,
};
