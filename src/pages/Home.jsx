import Logo from '../1657004779_50-illustration_svg.svg';
import { Link } from 'react-router-dom';

export default function Home(props) {
	console.log(props.onLogin);
	return (
		<div className="h-screen">
			<div className="flex flex-col mx-auto w-4/5 justify-around h-full md:hidden">
				<h2 className="text-center font-bold text-5xl uppercase">Duro</h2>
				<div className="text-center">
					<h2 className="text-xl font-primary font-semibold my-3">
						Get notified when it's your turn. No more waiting!
					</h2>
					<h5 className="text-lg mx-auto">
						Lorem ipsum dolor sit amet consectetur. At vitae arcu elementum
						aliquam.
					</h5>
				</div>
				<div>
					<Link to="/login">
						<button className="bg-primary text-white w-full py-3 rounded-md">
							Get Started
						</button>
					</Link>
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
				<div className="mx-auto w-1/5">
					<Link to="/login">
						<button className="bg-primary text-white w-full py-3 rounded-md">
							Get Started
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
