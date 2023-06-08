import { HashRouter, Route } from 'react-router-dom';
import history from './hooks/history';
import Home from './pages/Home';
import DashBoard from './pages/Dashboard';
import Spinner from './components/Spinner';
import Login from './pages/Login';
const Router = () => {
	return (
		<HashRouter history={history}>
			<Spinner />
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/dashboard">
				<DashBoard />
			</Route>
			<Route exact path="/login">
				<Login />
			</Route>
		</HashRouter>
	);
};

export default Router;
