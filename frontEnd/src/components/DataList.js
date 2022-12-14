import React from 'react';
import '../App.css';
const DataList = (props) => {

	return (
		<>
			<div className="my-3">
				<div className="card">
					<span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
						{props.year}
					</span>
					{/* <img src={!props.image ? "https://homestaymatch.com/images/no-image-available.png" : props.image} className="card-img-top" alt="..." /> */}
					<div className="card-body">
						<h5 className="card-title title-color">{props.title}</h5>
						<p className="card-text title-color">{props.description}...</p>
						{/* <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
						<a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">more detail</a> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default DataList;
