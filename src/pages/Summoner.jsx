import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import QueueCard from '../components/QueueCard';

import RiotContext from '../context/riot/RiotContext';

const Summoner = () => {
	const { getSummoner, clearSummoner, summoner, LoLStats, TFTStats } =
		useContext(RiotContext);
	const { region, summonerName } = useParams();

	useEffect(() => {
		console.log(region, summonerName);
		getSummoner(region, summonerName);

		// Clear summoner data on unmount
		return () => {
			clearSummoner();
		};
	}, [region, summonerName]);

	return (
		<>
			<div className="flex flex-col items-center rounded-xl p-2 text-center">
				<img
					className="w-24 rounded-full"
					src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${summoner.profileIconId}.jpg`}
					alt=""
				/>

				<h2 className="text-lg font-bold">{summoner.name}</h2>

				<div className="text-slate-400 text-sm">
					Level {summoner.summonerLevel}
				</div>
			</div>

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
