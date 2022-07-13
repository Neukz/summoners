import { Link } from 'react-router-dom';
import OutgoingLink from '../OutgoingLink';

const FooterNavigation = () => {
	return (
		<nav className="w-full text-secondary-dark">
			<ul className="grid grid-cols-2 lg:flex lg:justify-evenly">
				<li>
					<Link to="about">About Summoners</Link>
				</li>

				<li>
					<OutgoingLink
						name="Riot Games API"
						href="https://developer.riotgames.com"
					/>
				</li>

				<li>
					<OutgoingLink
						name="League of Legends"
						href="https://leagueoflegends.com"
					/>
				</li>

				<li>
					<OutgoingLink
						name="CommunityDragon"
						href="https://communitydragon.org"
					/>
				</li>

				<li>
					<OutgoingLink
						name="Teamfight Tactics"
						href="https://teamfighttactics.leagueoflegends.com"
					/>
				</li>

				<li>
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
