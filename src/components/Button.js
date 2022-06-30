import React, { Component } from 'react';
import './Style/Button.css';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, handleButtonClick } = this.props;
    return (
      <button
        type="button"
        className="btn"
        id={`btn${value}`}
        onClick={handleButtonClick}
      >
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};
