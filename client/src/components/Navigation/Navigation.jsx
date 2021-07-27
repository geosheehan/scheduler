import { useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Context } from '../../context/Context';

const Navigation = () => {
	const { user } = useContext(Context);
	return (
		<nav>
			<Link to="/">React Multi-Page Website</Link>

			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/creators">Creators</Link>
				</li>
				{!user ? (
					<>
						<li>
							<Link to="/auth/signup">Sign Up</Link>
						</li>
						<li>
							<Link to="/auth/login">Login</Link>
						</li>
					</>
				) : (
					<li>
						<Link to="/auth/logout">Logout</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default withRouter(Navigation);
