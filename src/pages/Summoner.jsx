import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Loading from '../components/layout/Loading';
import SummonerProfile from '../components/SummonerProfile';
import QueueCard from '../components/QueueCard';

import RiotContext from '../context/riot/RiotContext';

const Summoner = () => {
	const {
		getSummoner,
		clearSummoner,
		getFavorites,
		LoLStats,
		TFTStats,
		error,
		summoner: { name }
	} = useContext(RiotContext);
	const { region, summonerName } = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		getSummoner(region, summonerName);
		getFavorites();

		// Navigate to NotFound if error occurs
		if (error) {
			navigate('404', { replace: true });
		}

		// Clear summoner data on unmount
		return () => {
			clearSummoner();
		};
	}, [region, summonerName, error]);

	return (
		<Loading>
			{/* Show name and region in title */}
			<Helmet>
				<title>{`${name || summonerName} (${region.toUpperCase()})`}</title>
			</Helmet>

			<SummonerProfile />

			{!LoLStats.length && !TFTStats.length ? (
				<h3 className="text-center">No stats to show</h3>
			) : (
				<div className="flex flex-col flex-wrap justify-center items-center gap-2 md:flex-row">
					{/* LoL ranks */}
					{LoLStats.map(queue => (
						<QueueCard queue={queue} key={queue.queueType} />
					))}

					{/* TFT ranks */}
					{TFTStats.map(queue => (
						<QueueCard queue={queue} key={queue.queueType} />
					))}
				</div>
			)}
		</Loading>
	);
};

export default Summoner;
