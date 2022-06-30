import React from 'react';
import Calculator from './components/Calculator';

function App() {
  const buttons = [
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
  return (
    <div>
      <Calculator calculatorButtons={buttons} />
    </div>
  );
}

export default App;
