import FooterNavigation from './FooterNavigation';

const Footer = () => {
	return (
		<footer className="bg-primary-dark w-full">
			<div className="container mx-auto p-4 space-y-2">
				<FooterNavigation />

				<p className="text-sm text-center text-slate-400">
					Summoners was created under Riot Games'{' '}
					<a
						className="text-white"
						href="https://www.riotgames.com/legal"
						target="_blank"
					>
						"Legal Jibber Jabber"
					</a>{' '}
					policy using assets owned by Riot Games. Riot Games does not endorse
					or sponsor this project.
				</p>

				<p className="text-sm text-center text-slate-400" translate="no">
					&copy; 2022 Summoners | Kacper Neumann
				</p>
			</div>
		</footer>
	);
};

export default Footer;
