import { useEffect, useState } from 'react';
import Movie from './Movie';
import axios from 'axios';
import { apiUrl } from '../config/variables';

const FavList = () => {
	const [movies, setMovies] = useState([]);
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		fetchData();
	}, [refresh]);

	const filterMovies = () => {
		setMovies(movies);
		setRefresh(!refresh);
	};

	const fetchData = async () => {
		try {
			const res = await axios.get(`${apiUrl}/getMovies`);
			console.log(res.data);
			setMovies(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='fav-list'>
			{movies?.length > 0 && (
				<div
					style={{
						display: 'flex',
						gap: '12px',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
					}}
				>
					{movies.map((movie) => (
						<Movie
							filterMovies={filterMovies}
							key={movie.id}
							movie={movie}
						/>
					))}
				</div>
			)}{' '}
		</div>
	);
};

export default FavList;
