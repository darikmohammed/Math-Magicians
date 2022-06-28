import React, { Component } from 'react';
import './Style/Calculator.css';
import PropTypes from 'prop-types';
import Button from './Button';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { calculatorButtons } = this.props;
    return (
      <div className="calculator-body">
        <div className="display">0</div>
        <div className="calculator-btns">
          {calculatorButtons.map((button) => (
            <Button value={button} key={button} />
          ))}
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  calculatorButtons: PropTypes.arrayOf(PropTypes.string).isRequired,
};
