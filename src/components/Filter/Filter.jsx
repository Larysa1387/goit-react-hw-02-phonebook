import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.inputLabel}>
      Find contact by name
      <input className={s.inputFilter} type="text" name="filter" value={value} placeholder="Start to type" onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
};

export default Filter;
