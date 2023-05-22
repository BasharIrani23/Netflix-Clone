import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import { apiUrl } from '../config/variables';

export default function Home() {
	const [results, setResults] = useState([]);
	const fetchData = async () => {
		try {
			const res = await axios.get(`${apiUrl}/trending`);
			setResults(res.data.results.results);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return <MovieList results={results} />;
}
