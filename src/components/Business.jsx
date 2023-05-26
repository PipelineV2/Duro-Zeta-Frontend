export default function Business(props) {
	return (
		<div className="my-5 flex" >
			<img
				src={props.business.img_url}
				alt="business_logo"
				className="w-3/12 block rounded-lg"
			></img>
			<div className="my-2 mx-3">
				<h3 className="text-lg font-primary font-semibold m-0 p-0">
					{props.business.name}
				</h3>
				<small className="m-0 p-0">dummy address</small>
			</div>
		</div>
	);
}
