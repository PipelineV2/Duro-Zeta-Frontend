import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Logo from '../1657004779_50-illustration_svg.svg';

export default function Login() {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();
	const onSubmit = (values) => alert(values.email + values.password);

	const signup = useGoogleLogin({
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
	return (
		<div className="h-full">
			<div className="block h-screen mx-4 py-8 md:hidden ">
				<div className="flex flex-col mx-auto w-4/5 md:hidden mb-10 mt-3">
					<h2 className="text-center text-2xl font-primary font-bold">Login</h2>
				</div>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="my-3">
						<label>Email</label>
						<br></br>
						<input
							className="outline w-full p-2 my-2"
							type="email"
							{...register('email', {
								required: 'Required',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'invalid email address',
								},
							})}
						/>
						{errors.email && errors.email.message}
					</div>
					<div className="my-3">
						<label>Password</label>
						<br></br>

						<input
							className="outline w-full p-2 my-2"
							type="password"
							{...register('password', {
								required: 'Required',
								pattern: {
									value:
										/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
									message:
										'Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.',
								},
							})}
						/>
						{errors.password && errors.password.message}
					</div>
					<div className="w-4/5 mx-auto text-center my-10">
						<button
							type="submit"
							className="bg-primary text-white w-2/5 mx-auto p-2 rounded-md"
						>
							Login
						</button>
						<br />
						<span className="cursor-pointer my-5 block" onClick={signup}>
							Sign up with google
						</span>
					</div>
				</form>
			</div>
			<div className="hidden md:flex h-screen">
				<div className="basis-3/5 h-3/5 my-auto">
					<div className="w-4/5 h-full mx-auto bg-gray-200 rounded-md">
						<img src={Logo} alt="logo" className="w-2/3 h-full mx-auto" />
					</div>
				</div>

				<div className="basis-2/5 h-3/5 my-auto px-6">
					<div className="">
						<h2 className="text-center text-2xl font-primary font-bold">
							Login
						</h2>
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="h-4/5 my-auto px-5 mx-auto w-4/5"
					>
						<div className="my-3">
							<label>Email</label>
							<br></br>
							<input
								className="outline w-full p-2 my-2"
								type="email"
								{...register('email', {
									required: 'Required',
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: 'invalid email address',
									},
								})}
							/>
							{errors.email && errors.email.message}
						</div>
						<div className="my-3">
							<label>Password</label>
							<br></br>

							<input
								className="outline w-full p-2 my-2"
								type="password"
								{...register('password', {
									required: 'Required',
									pattern: {
										value:
											/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
										message:
											'Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.',
									},
								})}
							/>
							{errors.password && errors.password.message}
						</div>
						<div className="w-4/5 mx-auto text-center my-10">
							<button
								type="submit"
								className="bg-primary text-white w-2/5 mx-auto p-2 rounded-md"
							>
								Login
							</button>
							<br />
							<span className="cursor-pointer" onClick={signup}>
								Sign up with Google
							</span>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
