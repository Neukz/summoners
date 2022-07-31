import { Link } from 'react-router-dom';
import OutgoingLink from '../OutgoingLink';
import MobileNavigation from './MobileNavigation';

const Navbar = () => {
	return (
		<nav className="bg-primary-dark text-secondary-light w-full z-10 relative">
			<div className="container mx-auto p-4 flex justify-between items-center">
				<Link
					to="/"
					className="text-xl font-montserrat font-semibold"
					translate="no"
				>
					Summoners
				</Link>

				{/* Standard navigation hidden on mobile */}
				<div className="hidden space-x-8 md:flex">
					<Link to="about">About</Link>

					<OutgoingLink
						name="League of Legends"
						href="https://leagueoflegends.com"
					/>

					<OutgoingLink
						name="Teamfight Tactics"
						href="https://teamfighttactics.leagueoflegends.com"
					/>
				</div>

				<MobileNavigation />
			</div>
		</nav>
	);
};

export default Navbar;
