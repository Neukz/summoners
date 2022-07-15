import SearchSummonerForm from '../components/SearchSummonerForm';

const Home = () => {
	return (
		<>
			<div className="flex justify-center items-center md:flex-col">
				<header className="hidden sm:block">
					<h1 className="text-2xl md:text-3xl lg:text-4xl">
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
			<SearchSummonerForm />
		</>
	);
};

export default Home;
