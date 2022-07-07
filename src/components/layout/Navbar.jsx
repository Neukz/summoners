import { Link } from 'react-router-dom';
import { HiOutlineExternalLink } from 'react-icons/hi';

const Navbar = () => {
	return (
		<nav className="bg-primary-dark text-secondary-light">
			<div className="container mx-auto py-4 flex justify-between">
				<Link to="/" className="text-xl leading-none">
					Summoners
				</Link>

				<div className="flex justify-between gap-8">
					<Link to="about">About</Link>

					<a href="https://leagueoflegends.com" target="_blank">
						League of Legends <HiOutlineExternalLink className="inline" />
					</a>

					<a
						href="https://teamfighttactics.leagueoflegends.com"
						target="_blank"
					>
						TFT <HiOutlineExternalLink className="inline" />
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
