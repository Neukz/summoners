import FooterNavigation from './FooterNavigation';

const Footer = () => {
	return (
		<footer className="bg-zinc-800 text-slate-400 w-full z-10">
			<div className="container mx-auto p-4 space-y-2 text-center text-xs">
				<FooterNavigation />

				<p>
					Summoners isn't endorsed by Riot Games and doesn't reflect the views
					or opinions of Riot Games or anyone officially involved in producing
					or managing Riot Games properties. Riot Games, and all associated
					properties are trademarks or registered trademarks of Riot Games, Inc.
				</p>

				<p className="font-montserrat" translate="no">
					&copy; 2022 Summoners | Kacper Neumann
				</p>
			</div>
		</footer>
	);
};

export default Footer;
