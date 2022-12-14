import React from 'react';

const DataList = (props) => {

	return (
		<>
			{props.data.map((element, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={element.Poster} alt='img'></img>
					<div
						onClick={() => props.handleFavouritesClick(element)}
						className='overlay d-flex align-items-center justify-content-center'
					>
					</div>
				</div>
			))}
		</>
	);
};

export default DataList;
