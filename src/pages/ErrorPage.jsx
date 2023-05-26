import { useRouteError } from 'react-router-dom';
import errorImage from '../Not_found.jpg';
export default function ErrorPage() {
	return (
		<div id="error-page" className="w-full text-center h-5/6 my-28">
			<h1 className="text-xl font-primary font bosd">Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<img src={errorImage} alt="error" className="w-4/6 h-4/6 mx-auto"></img>
			<p>
				<i>Not Found</i>
			</p>
		</div>
	);
}
