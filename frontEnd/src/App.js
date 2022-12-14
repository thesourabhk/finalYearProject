import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DataList from './components/DataList';
import DataListHeading from './components/DataListHeading';
import SearchBox from './components/SearchBox';

const App = () => {
	const [data, setData] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getDataRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=62922bf3`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setData(responseJson.Search);
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
			<div className='row'>
				<DataList
					data={data}
				/>
			</div>
		</div>
	);
};

export default App;
