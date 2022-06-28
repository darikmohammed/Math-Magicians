import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class Button extends Component {
  render() {
    const { value, key } = this.props;
    return (
      <div className="btn" key={key}>
        {value}
      </div>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};
