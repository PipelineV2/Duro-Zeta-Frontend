import Business from '../components/Business';
import QrSvg from '../qr_code_scanner.svg';

export default function DashBoard() {
	const businesses = [
		{
			id: 1,
			name: 'Dominoes Group',
			img_url:
				'https://businesspost.ng/wp-content/uploads/2023/02/business-management-skills.jpg',
		},
		{
			id: 2,
			name: 'Dominoes Group',
			img_url:
				'https://businesspost.ng/wp-content/uploads/2023/02/business-management-skills.jpg',
		},
	];
	return (
		<div className="flex flex-col mx-10 my-8 md:block md:mx-20">
			<div className="my-4 md:my-10">
                <h4 className='hidden md:inline md:mr-10 text-lg font-primary font-bold'>DURO</h4>
				<input
					type="search"
					className="outline outline-black w-full px-5 py-2 rounded-md md:inlne md:w-5/6"
					placeholder="search for a business"
				/>
			</div>
			<div className="my-4 md:hidden ">
				<h3 className="text-2xl font-bold">Recently Visited</h3>
				<div>
					<div>
						{businesses.map((business) => (
							<Business business={business} key={business.id} />
						))}
					</div>
				</div>
			</div>

			<div className="my-4 md:my-10">
				<h3 className="text-2xl font-bold">Businesses around you</h3>
				<div>
					<div className="flex my-5 ">
						{businesses.map((business) => (
							<img
								src={business.img_url}
								className="w-1/3 mx-2 rounded-lg md:w-1/6"
								key={business.id}
								alt={business.name}
							/>
						))}
					</div>
				</div>
			</div>

            <div className="hidden my-4 md:block ">
				<h3 className="text-2xl font-bold">Recently Visited</h3>
				<div>
					<div className='flex'>
						{businesses.map((business) => (
							<Business business={business} key={business.id} />
						))}
					</div>
				</div>
			</div>

			<div className="my-4 md:hidden">
				<div>
					<img src={QrSvg} alt="scanner" className="w-1/3 mx-auto"></img>
				</div>
				<div className="mx-auto w-4/5 my-3">
					<button className="bg-primary text-white w-full py-3 rounded-md p-2">
						Scan business QR Code
					</button>
				</div>
			</div>
		</div>
	);
}
