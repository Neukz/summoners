import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import OutgoingLink from '../OutgoingLink';

const MobileNavigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	const location = useLocation();

	// Close the menu whenever the user clicks any Link tag
	useEffect(() => {
		setIsOpen(false);
	}, [location]);

	return (
		<div className="md:hidden">
			{/* Hamburger button */}
			<GiHamburgerMenu
				className={`text-xl cursor-pointer relative duration-300 ${
					isOpen && 'rotate-90'
				}`}
				onClick={() => setIsOpen(!isOpen)}
			/>

			{/* Mobile navigation */}
			<div
				className={`bg-primary-dark text-secondary-light absolute -z-10 h-screen right-0 top-0 py-20 duration-300 ${
					!isOpen && 'translate-x-full'
				}`}
			>
				<ul className="space-y-2 px-8">
					<li>
						<Link to="about">About Summoners</Link>
					</li>

					<li>
						<OutgoingLink
							name="League of Legends"
							href="https://leagueoflegends.com"
						/>
					</li>

					<li>
						<OutgoingLink
							name="Teamfight Tactics"
							href="https://teamfighttactics.leagueoflegends.com"
						/>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MobileNavigation;
