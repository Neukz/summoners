import { useContext } from 'react';
import FavoriteButton from './FavoriteButton';

import RiotContext from '../context/riot/RiotContext';

const SummonerProfile = () => {
	const { summoner } = useContext(RiotContext);

	return (
		<div className="flex flex-col items-center rounded-xl mb-3">
			<img
				className="w-24 rounded-full"
				src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${summoner.profileIconId}.jpg`}
				alt=""
			/>

			<div className="flex items-center space-x-1">
				<h2 className="font-montserrat font-semibold text-lg">
					{summoner.name}
				</h2>
				<FavoriteButton />
			</div>

			<div className="text-slate-400 text-sm">
				Level {summoner.summonerLevel}
			</div>
		</div>
	);
};

export default SummonerProfile;
