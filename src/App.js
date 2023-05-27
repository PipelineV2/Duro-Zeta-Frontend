import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Home from './pages/Home';
import DashBoard from './pages/Dashboard';
import Business from './components/Business';
import BusinessDetail from './pages/BusinessDetail';
import ErrorPage from './pages/ErrorPage';

function Root() {
	// const [user, setUser] = useState([]);
	// const [profile, setProfile] = useState([]);

	const login = useGoogleLogin({
		onSuccess: (tokenResponse) => {
			customLogin(tokenResponse);
		},
	});
	const customLogin = async (tokenResp) => {
		try {
			const profile = await axios.get(
				`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenResp.access_token}`
			);
			if (profile) {
				console.log(profile);
			}
		} catch (error) {
			console(error);
		}
	};
	// const router = createBrowserRouter([
	// 	{ path: '/', element: <Home onLogin={login} /> },
	// 	{ path: 'dashboard', Component: DashBoard },
	// 	{ path: 'business/:id', Component: BusinessDetail },

	// 	{ path: '*', Component: ErrorPage },
	// ]);

	// const logOut = () => {
	// 	googleLogout();
	// 	setProfile(null);
	// };
	return (
		<GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
			<HashRouter>
				<Route exact path="/" element={<Home onLogin={login} />} />
				<Route  path="/dashboard" element={<DashBoard />} />

			</HashRouter>
		</GoogleOAuthProvider>
	);
}

export default Root;
