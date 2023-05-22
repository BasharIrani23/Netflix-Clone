import { Container } from 'react-bootstrap';
import FavList from '../components/FavList';
import React from 'react';

const Favorites = () => {
	return (
		<Container className='mt-3'>
			<FavList />
		</Container>
	);
};

export default Favorites;
