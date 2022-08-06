import { Helmet } from 'react-helmet-async';

const About = () => {
	return (
		<div className="divide-y divide-slate-500 text-lg text-justify-fixed sm:text-xl ">
			<Helmet>
				<title>About</title>
			</Helmet>

			<header className="py-4">
				<h1 className="font-montserrat text-center text-2xl md:text-left md:text-3xl lg:text-4xl">
					About
				</h1>
			</header>

			<p className="py-4">
				Summoners is a web application that allows League of Legends and
				Teamfight Tactics players to track their in-game performance and compare
				them to other players.
			</p>

			<p className="py-4">
				Summoners is a personal and open source project created by Kacper
				Neumann. The app uses author's{' '}
				<a
					className="text-blue-600 hover:text-blue-700"
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
					className="text-blue-600 hover:text-blue-700"
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
