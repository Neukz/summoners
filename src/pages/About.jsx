const About = () => {
	return (
		<div className="divide-y divide-slate-500 text-xl sm:text-justify">
			<h1 className="py-4 text-center text-2xl sm:text-left md:text-3xl lg:text-4xl">
				About
			</h1>
			<p className="py-4">
				Summoners is a web application that allows League of Legends and
				Teamfight Tactics players to track their in-game performance and compare
				them to other players.
			</p>
			<p className="py-4">
				Summoners is a personal and open source project created by Kacper
				Neumann. The app uses author's{' '}
				<a
					className="text-sky-400"
					href="https://github.com/Neukz/neukz-api"
					target="_blank"
				>
					proxy server{' '}
				</a>{' '}
				that communicates with Riot Games API in order to fetch players' data.
				This website utilizes CommunityDragon as well, which provides game
				assets for the application.
			</p>
			<p className="py-4">
				Summoners was created under Riot Games'{' '}
				<a
					className="text-sky-400"
					href="https://www.riotgames.com/legal"
					target="_blank"
				>
					"Legal Jibber Jabber"
				</a>{' '}
				policy using assets owned by Riot Games. Riot Games does not endorse or
				sponsor this project.
			</p>
		</div>
	);
};

export default About;
