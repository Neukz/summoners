import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

import RiotContext from '../context/riot/RiotContext';

const Favorites = () => {
	const { favorites, removeFavorite } = useContext(RiotContext);

	return (
		<div className="flex flex-wrap gap-3 pt-6">
			{favorites.length ? (
				favorites.map(({ name, region, profileIconId, puuid }) => (
					<Link
						to={`summoners/${region}/${name}`}
						className="flex items-center space-x-2 rounded-xl bg-primary-light p-2"
						key={puuid}
					>
						<img
							className="w-12 rounded-full"
							src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${profileIconId}.jpg`}
							alt=""
						/>

						<div>
							<div className="font-montserrat">{name}</div>
							<div className="text-slate-400">{region.toUpperCase()}</div>
						</div>

						<AiOutlineClose
							onClick={e => {
								e.preventDefault();
								removeFavorite(puuid);
							}}
							className="text-xl text-red-400 hover:text-red-500"
						/>
					</Link>
				))
			) : (
				<h2>Your Favorites will appear here...</h2>
			)}
		</div>
	);
};

export default Favorites;
