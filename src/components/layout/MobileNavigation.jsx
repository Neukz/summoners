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
				className={`text-xl cursor-pointer duration-300 ${
					isOpen && 'rotate-90'
				}`}
				onClick={() => setIsOpen(!isOpen)}
			/>

			{/* Mobile navigation */}
			<div
				className={`bg-primary-dark text-secondary-light absolute h-screen right-0 mt-4 pt-6 duration-300 ${
					!isOpen && 'translate-x-full'
				}`}
			>
				<div className="flex flex-col items-center space-y-3 px-8">
					<Link to="about">About Summoners</Link>

					<OutgoingLink
						name="League of Legends"
						href="https://leagueoflegends.com"
					/>

					<OutgoingLink
						name="Teamfight Tactics"
						href="https://teamfighttactics.leagueoflegends.com"
					/>
				</div>
			</div>
		</div>
	);
};

export default MobileNavigation;
