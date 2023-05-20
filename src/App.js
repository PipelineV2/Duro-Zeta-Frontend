import React, { useState } from 'react';
import './App.css';
import { googleLogout, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Logo from './1657004779_50-illustration_svg.svg';

function App() {
	const [user, setUser] = useState([]);
	const [profile, setProfile] = useState([]);

	const login = async (resp) => {
		setUser(resp);
		console.log(resp);
		if (user) {
			axios
				.get(
					`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
					{
						headers: {
							Authorization: `Bearer ${user.access_token}`,
							Accept: 'application/json',
						},
					}
				)
				.then((res) => {
					console.log(res);
					setProfile(res.data);
				})
				.catch((err) => console.log(err));
		}
	};

	const logOut = () => {
		googleLogout();
		setProfile(null);
	};
	return (
		<div className="h-screen">
			<div className="flex flex-col mx-auto w-4/5 justify-around h-full md:hidden">
				<h2 className="text-center font-bold text-5xl uppercase">Duro</h2>
				<div>
					<GoogleLogin
						onSuccess={login}
						size="large"
						type="standard"
						theme="filled_blue"
						width="300px"
					></GoogleLogin>
				</div>
			</div>

			<div className="hidden md:block w-full py-10">
				<div className="w-4/5 mx-auto bg-gray-200 rounded-md">
					<img src={Logo} alt="logo" className="w-2/3 h-2/5 mx-auto" />
				</div>
				<div className="w-2/5 mx-auto text-center mt-10 mb-3 ">
					<h2 className="text-4xl font-primary font-semibold">
						Get notified when it's your turn. No more waiting!
					</h2>
					<h5 className="w-4/5 text-lg mx-auto">
						Lorem ipsum dolor sit amet consectetur. At vitae arcu elementum
						aliquam.
					</h5>
				</div>
				<div className='mx-auto w-1/5'>
					<GoogleLogin
						onSuccess={login}
						size="large"
						type="standard"
						theme="filled_blue"
						width="300px"
					></GoogleLogin>
				</div>
			</div>
		</div>
	);
}

export default App;
