import React from 'react';

const Filter = ({ value, onChange }) => {
	return (
		<label htmlFor="">
			Find contact by name
			<input type="text" name="filter" value={value} onChange={onChange} />
		</label>
	);
};

export default Filter;
