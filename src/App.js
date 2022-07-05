import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Calc from './Routes/Calc';

const App = () => {
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/calculator"
          element={<Calc calculatorButtons={buttons} />}
        />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
