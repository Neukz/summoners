import { Link } from 'react-router-dom';
import OutgoingLink from '../OutgoingLink';
import MobileNavigation from './MobileNavigation';
import { navbarLinks } from '../../constants/navbarLinks';

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
				<ul className="hidden space-x-8 md:flex">
					{navbarLinks.map(({ name, url, outgoing }, index) => (
						<li key={index}>
							{outgoing ? (
								<OutgoingLink name={name} href={url} />
							) : (
								<Link to={url}>{name}</Link>
							)}
						</li>
					))}
				</ul>

				<MobileNavigation />
			</div>
		</nav>
	);
};

export default Navbar;
