import React from 'react';
import './Style/Button.css';
import PropTypes from 'prop-types';

const Button = ({ value, handleButtonClick }) => (
  <button
    type="button"
    className="btn"
    id={`btn${value}`}
    onClick={handleButtonClick}
  >
    {value}
  </button>
);

export default Button;

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};
