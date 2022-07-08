import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import OutgoingLink from '../OutgoingLink';

const MobileNavigation = () => {
	const [isOpen, setIsOpen] = useState(false);

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
				className={`bg-primary-dark text-secondary-light absolute h-screen right-0 mt-4 duration-300 ${
					!isOpen && 'translate-x-full'
				}`}
			>
				<div className="flex flex-col items-center space-y-4 px-4">
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
			</div>
		</div>
	);
};

export default MobileNavigation;
