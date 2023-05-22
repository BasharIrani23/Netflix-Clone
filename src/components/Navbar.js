import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
	const links = [
		{
			url: '/',
			name: 'Home',
		},
		{
			url: '/favorites',
			name: 'Favorites',
		},
	];
	return (
		<Navbar
			bg='light'
			expand='lg'
		>
			<Container>
				<Navbar.Brand href=''>React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<div style={{ display: 'flex', gap: 12 }}>
						{links.map((link, index) => (
							<Link
								key={index}
								to={link.url}
							>
								{link.name}
							</Link>
						))}
					</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default MyNavbar;
