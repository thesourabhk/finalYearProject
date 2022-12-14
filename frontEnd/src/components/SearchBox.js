import React from 'react';

const SearchBox = (props) => {
	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			props.setSearchValue(event.target.value)
		}
	}
	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onKeyPress={handleKeyPress}
				placeholder='Type to search...'
			></input>
		</div>
	);
};

export default SearchBox;
