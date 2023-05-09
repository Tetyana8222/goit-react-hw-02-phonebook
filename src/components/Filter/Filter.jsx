import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ handleChange, value }) => {
  return <input onChange={handleChange} value={value} placeholder="Search" />;
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
