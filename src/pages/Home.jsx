import { useContext, useEffect } from 'react';
import SearchSummonerForm from '../components/SearchSummonerForm';
import Favorites from '../components/Favorites';

import RiotContext from '../context/riot/RiotContext';

const Home = () => {
	const { getFavorites } = useContext(RiotContext);

	useEffect(() => {
		// Get favorites on mount
		getFavorites();
	}, []);

	return (
		<>
			<div className="flex justify-center items-center md:flex-col">
				<header className="hidden sm:block">
					<h1 className="font-montserrat text-2xl md:text-3xl lg:text-4xl">
						<span className="text-secondary">LoL</span> &amp;{' '}
						<span className="text-secondary">TFT</span> stats for your favorite{' '}
						<span className="text-secondary">Summoners</span>.
					</h1>
				</header>

				<img
					src="https://raw.communitydragon.org/latest/game/assets/loadouts/summoneremotes/champions/leesin/leesin_happy_cheers_vfx.png"
					alt=""
				/>
			</div>

			<div className="divide-y divide-slate-600">
				<SearchSummonerForm />
				<Favorites />
			</div>
		</>
	);
};

export default Home;
