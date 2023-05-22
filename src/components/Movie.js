import React, { useEffect, useState } from 'react';
import ModalMovie from './ModalMovie';
import { Button, Card, Col } from 'react-bootstrap';
import { posterPath } from '../config/variables';

const Movie = ({ movie, filterMovies }) => {
	const [showModal, setShowModal] = useState(false);
	const [comment, setComment] = useState('');

	const [myMovie, setMyMovie] = useState({});

	useEffect(() => {
		setMyMovie({ ...movie, themoviedbId: movie.id_themoviesdb ?? movie.id });
	}, []);

	const handleAddToFavorites = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleCommentChange = (e) => {
		setComment(e.target.value);
	};

	const modalHandler = (value) => {
		setShowModal(value);
	};

	return (
		<Col lg={3}>
			<Card className='movie-card'>
				<Card.Img
					variant='top'
					src={`${posterPath}${movie.poster_path}`}
				/>
				 
				<Card.Body>
					<Card.Title>{movie.title}</Card.Title>
					{movie?.overview?.length && (
						<Card.Text>{movie.overview.slice(0, 100)}...</Card.Text>
					)}
					<Button onClick={handleAddToFavorites}>Add to Favorites</Button>
				</Card.Body>
				{showModal && (
					<ModalMovie
						movie={myMovie}
						onCloseModal={handleCloseModal}
						showModal={showModal}
						modalHandler={modalHandler}
						filterMovies={filterMovies}
					/>
				)}
			</Card>
		</Col>
	);
};

export default Movie;
