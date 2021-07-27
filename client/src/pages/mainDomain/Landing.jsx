import { Button, Box, Container } from '@material-ui/core';

import Navigation from '../../components/navigation/Navigation';

const Landing = () => {
	return (
		<>
			<Navigation />
			<Container component="main">
				<Box>
					<h1>Welcome to FoxFry</h1>
					<span>Here I go convincing you that you need this site.</span>
					<Button variant="contained">Find Creators</Button>
					<Button variant="contained" color="primary">
						Sign Up
					</Button>
				</Box>
			</Container>
		</>
	);
};

export default Landing;
