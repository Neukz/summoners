import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../components/layout/Loading';
import SummonerProfile from '../components/SummonerProfile';
import QueueCard from '../components/QueueCard';

import RiotContext from '../context/riot/RiotContext';

const Summoner = () => {
	const { getSummoner, clearSummoner, LoLStats, TFTStats, error } =
		useContext(RiotContext);
	const { region, summonerName } = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		getSummoner(region, summonerName);

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
		</Loading>
	);
};

export default Summoner;
