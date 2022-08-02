import { useState, useContext } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';

import RiotContext from '../context/riot/RiotContext';

const FavoriteButton = () => {
	const { summoner, favorites, addFavorite, removeFavorite } =
		useContext(RiotContext);

	// Check if summoner is in favorites
	const [isFavorite, setIsFavorite] = useState(
		favorites.map(fav => fav.puuid).includes(summoner.puuid)
	);

	const { region } = useParams();

	// Toggle favorite status
	const toggleFavorite = () => {
		if (isFavorite) {
			removeFavorite(summoner.puuid);
		} else {
			addFavorite(summoner, region);
		}
		setIsFavorite(!isFavorite);
	};

	return (
		<AiFillStar
			onClick={toggleFavorite}
			className={`text-2xl cursor-pointer absolute top-2 right-2 ${
				// Set icon color depending on whether summoner is in favorites
				isFavorite ? 'text-yellow-500' : 'text-slate-500 hover:text-slate-400'
			}`}
		/>
	);
};

export default FavoriteButton;
