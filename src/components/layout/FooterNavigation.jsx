import { Link } from 'react-router-dom';
import OutgoingLink from '../OutgoingLink';

const FooterNavigation = () => {
	return (
		<nav className="text-secondary-dark w-full">
			<ul className="grid gap-y-1 grid-cols-2 sm:grid-cols-3 md:gap-y-0 lg:flex lg:justify-evenly">
				<li className="order-1">
					<Link to="about">About Summoners</Link>
				</li>

				<li className="order-3 sm:order-none">
					<OutgoingLink
						name="League of Legends"
						href="https://leagueoflegends.com"
					/>
				</li>

				<li className="order-5 sm:order-none">
					<OutgoingLink
						name="Teamfight Tactics"
						href="https://teamfighttactics.leagueoflegends.com"
					/>
				</li>

				<li className="order-2 sm:order-none">
					<OutgoingLink
						name="Riot Games API"
						href="https://developer.riotgames.com"
					/>
				</li>

				<li className="order-4 sm:order-none">
					<OutgoingLink
						name="CommunityDragon"
						href="https://communitydragon.org"
					/>
				</li>

				<li className="order-6 sm:order-none">
					<OutgoingLink
						name="Source code"
						href="https://github.com/Neukz/summoners"
					/>
				</li>
			</ul>
		</nav>
	);
};

export default FooterNavigation;
