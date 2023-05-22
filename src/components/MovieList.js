import React from 'react';
import Movie from './Movie';
import { Container, Row, Stack } from 'react-bootstrap';

const MovieList = ({ results }) => {
	return (
		<Container>
			{results?.length > 0 && (
				<div
					style={{
						display: 'flex',
						gap: '12px',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
					}}
				>
					{results.map((movie) => (
						<Movie
							key={movie.id}
							movie={movie}
						/>
					))}
				</div>
			)}
		</Container>
	);
};

export default MovieList;
