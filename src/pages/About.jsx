import { Helmet } from 'react-helmet-async';
import { BiCodeAlt } from 'react-icons/bi';
import { techStack } from '../constants/techStack';

const About = () => {
	return (
		<div className="text-lg text-justify-fixed sm:text-xl ">
			<Helmet>
				<title>About</title>
			</Helmet>

			<header className="mt-4 mb-1">
				<h1 className="font-montserrat text-center text-2xl md:text-left md:text-3xl lg:text-4xl">
					About
				</h1>
			</header>

			<p>League of Legends and Teamfight Tactics stats tracker app.</p>

			<p>
				Project uses author's {/* eslint-disable-next-line */}
				<a
					className="text-blue-600 hover:text-blue-700"
					href="https://github.com/Neukz/neukz-api"
					target="_blank"
				>
					proxy server
				</a>
				.
			</p>

			<div className="divide-y divide-slate-500 space-y-4">
				<div>
					<h2 className="flex items-center space-x-1 pt-4 mb-2 font-montserrat text-center text-xl md:justify-start md:text-2xl lg:text-3xl">
						<BiCodeAlt />
						<span>Tech Stack</span>
					</h2>

					<div className="flex space-x-6 px-4 items-center justify-center md:justify-start">
						{techStack.map(tech => (
							// eslint-disable-next-line
							<a key={tech.name} href={tech.href} target="_blank">
								<img className="w-11" src={tech.imagePath} alt={tech.name} />
							</a>
						))}
					</div>
				</div>

				<p className="pt-4">
					Summoners was created under Riot Games'{' '}
					{/* eslint-disable-next-line */}
					<a
						className="text-blue-600 hover:text-blue-700"
						href="https://www.riotgames.com/legal"
						target="_blank"
					>
						"Legal Jibber Jabber"
					</a>{' '}
					policy using assets owned by Riot Games. Riot Games does not endorse
					or sponsor this project.
				</p>
			</div>
		</div>
	);
};

export default About;
