import React, { Component } from 'react';
import './Style/Button.css';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
