import React, { Component } from 'react';
import './Style/Button.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class Button extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="btn" id={`btn${value}`}>
        {value}
      </div>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
};
