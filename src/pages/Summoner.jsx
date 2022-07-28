import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import SummonerProfile from '../components/SummonerProfile';
import QueueCard from '../components/QueueCard';

import RiotContext from '../context/riot/RiotContext';

const Summoner = () => {
	const { getSummoner, clearSummoner, LoLStats, TFTStats } =
		useContext(RiotContext);
	const { region, summonerName } = useParams();

	useEffect(() => {
		getSummoner(region, summonerName);

		// Clear summoner data on unmount
		return () => {
			clearSummoner();
		};
	}, [region, summonerName]);

	return (
		<>
			<SummonerProfile />

			<div className="flex flex-col flex-wrap justify-center items-center gap-2 md:flex-row">
				{/* LoL ranking */}
				{LoLStats.map(queue => (
					<QueueCard queue={queue} key={queue.queueType} />
				))}

				{/* TFT ranking */}
				{TFTStats.map(queue => (
					<QueueCard queue={queue} key={queue.queueType} />
				))}
			</div>
		</>
	);
};

export default Summoner;
