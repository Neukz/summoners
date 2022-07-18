import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import RiotContext from '../context/riot/RiotContext';

const Summoner = () => {
	const { region, summonerName } = useParams();

	const { getSummoner, summoner } = useContext(RiotContext);

	useEffect(() => {
		console.log(region, summonerName);
		getSummoner(region, summonerName);
	}, []);

	return <div>{summoner.name}</div>;
};

export default Summoner;
