import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className="flex flex-col justify-center items-center text-center space-y-4">
			<header>
				<h1 className="text-6xl md:text-7xl">404</h1>
				<h2 className="text-4xl md:text-5xl">Page Not Found</h2>
			</header>

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
	);
};

export default NotFound;
