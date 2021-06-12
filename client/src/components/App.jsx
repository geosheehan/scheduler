import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Dashboard, SignUp, Login, Artists, Request } from '../pages';

import './App.css';

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={() => <Home />} />
					<Route path="/signup" exact component={() => <SignUp />} />
					<Route path="/login" exact component={() => <Login />} />
					<Route path="/request" exact component={() => <Request />} />
					<Route path="/artists" exact component={() => <Artists />} />
					<Route path="/artist/:artist" component={() => <Dashboard />} />
				</Switch>
			</Router>
		</>
	);
};

export default App;
