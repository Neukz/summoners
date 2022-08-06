import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Loading from '../components/layout/Loading';

import RiotContext from '../context/riot/RiotContext';

const NotFound = () => {
	const { error, clearError } = useContext(RiotContext);

	useEffect(() => {
		// Clear error on unmount
		return () => {
			clearError();
		};
		// eslint-disable-next-line
	}, []);

	return (
		<Loading>
			{/* Show error reason in title */}
			<Helmet>
				<title>{error ? error.reason : 'Page Not Found'}</title>
			</Helmet>

			<div className="flex flex-col justify-center items-center text-center space-y-4">
				<header>
					<h1 className="text-6xl md:text-7xl">{error ? error.status : 404}</h1>
					<h2 className="text-4xl md:text-5xl">
						{error ? error.reason : 'Page Not Found'}
					</h2>
				</header>

				{/* Some reasons returned by Riot API are equal to messages */}
				{error &&
					error.reason.toLowerCase() !== error.message.toLowerCase() && (
						<p className="md:text-lg">{error.message}</p>
					)}

				<img
					src="https://raw.communitydragon.org/latest/game/assets/loadouts/summoneremotes/champions/blitzcrank/blitzcrank_sad_confused_vfx.png"
					alt=""
				/>

				<Link
					className="outline-none bg-secondary text-primary-dark rounded-full text-lg w-40 p-2 font-semibold hover:scale-105 duration-300"
					to="/"
				>
					Go Home
				</Link>
			</div>
		</Loading>
	);
};

export default NotFound;
