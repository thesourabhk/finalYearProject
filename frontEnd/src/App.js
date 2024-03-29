import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DataList from './components/DataList';
import DataListHeading from './components/DataListHeading';
import SearchBox from './components/SearchBox';

const App = () => {
	const [data, setData] = useState([]);
	const [searchValue, setSearchValue] = useState('india');

	// prevUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&exchars=250&exintro=true&explaintext=true&generator=search&gsrlimit=20&gsrsearch=${searchValue}`;

	const getDataRequest = async (searchValue) => {
		const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages|extracts&exchars=250&exintro=true&explaintext=true%7Cpageterms&redirects=1&formatversion=2&piprop=thumbnail&pithumbsize=250&pilimit=20&wbptterms=description&generator=search&gsrlimit=20&gsrsearch=${searchValue}`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson) {
			// setData(Object.values(responseJson.query.pages));
			setData(responseJson.query.pages);
		}
	};

	useEffect(() => {
		getDataRequest(searchValue);
	}, [searchValue]);
	
	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<DataListHeading heading='Data Related to search' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className="container">
				<div className="row">
					{data.map((element) => {
						return <div className="col-md-4" key={element.pageid}>
							<DataList image={!element.thumbnail?undefined:element.thumbnail.source} description={element.extract} title={element.title} />
						</div>
					})}
				</div>
			</div>
		</div>
	);
};

export default App;
