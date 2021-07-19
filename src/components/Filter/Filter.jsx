import React from 'react';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
		<label className={s.inputLabel}>
			Find contact by name
			<input className={s.inputFilter} type="text" name="filter" value={value} placeholder="Start to type" onChange={onChange} />
		</label>
	);
};

export default Filter;
