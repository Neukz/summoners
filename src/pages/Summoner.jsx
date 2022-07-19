import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import RiotContext from '../context/riot/RiotContext';

const Summoner = () => {
	const { getSummoner, clearSummoner, summoner } = useContext(RiotContext);
	const { region, summonerName } = useParams();

	useEffect(() => {
		console.log(region, summonerName);
		getSummoner(region, summonerName);

		// Clear summoner data on unmount
		return () => {
			clearSummoner();
		};
	}, []);

	return <div>{summoner.name}</div>;
};

export default Summoner;
