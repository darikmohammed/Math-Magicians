import React, { Component } from 'react';
import './Style/Calculator.css';
import PropTypes from 'prop-types';
import Button from './Button';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = { total: null, next: null, operation: null };
  }

  handleButtonClick(e) {
    const value = calculate(this.state, e.target.innerHTML);
    this.setState(value);
  }

  screen() {
    const { total, next } = this.state;
    if (!next) return total;
    return next;
  }

  render() {
    const { calculatorButtons } = this.props;
    return (
      <div className="calculator-body">
        <div className="display">{this.screen() || '0'}</div>
        <div className="calculator-btns">
          {calculatorButtons.map((button) => (
            <Button
              value={button}
              key={button}
              handleButtonClick={this.handleButtonClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  calculatorButtons: PropTypes.arrayOf(PropTypes.string).isRequired,
};
