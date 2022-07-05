import React from 'react';
import { Link } from 'react-router-dom';
import './Style/nav.css';
import './Style/body.css';

function About() {
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
      <div className="about-body">
        <p>
          <strong> Carl Friedrich Gauss:</strong>
          &quot;Mathematics is the queen of science, and arithmetic the queen of
          mathematics.&quot;
        </p>
      </div>
    </>
  );
}

export default About;
