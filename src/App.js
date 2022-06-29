import React, { Component } from 'react';
import Calculator from './components/Calculator';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { display: 0 };
    this.buttons = [
      'AC',
      '+/-',
      '%',
      '÷',
      '7',
      '8',
      '9',
      'x',
      '4',
      '5',
      '6',
      '-',
      '1',
      '2',
      '3',
      '+',
      '0',
      '.',
      '=',
    ];
  }

  render() {
    const { display } = this.state;
    return (
      <div>
        <Calculator
          calculatorButtons={this.buttons}
          display={display}
        />
      </div>
    );
  }
}
