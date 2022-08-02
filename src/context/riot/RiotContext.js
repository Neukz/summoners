import { createContext, useReducer } from 'react';
import riotReducer from './riotReducer';
import * as types from '../../constants/actionTypes';
import axios from 'axios';

const RiotContext = createContext();
export default RiotContext;

export const RiotContextProvider = ({ children }) => {
	const initialState = {
		summoner: {},
		LoLStats: [],
		TFTStats: [],
		favorites: [],
		error: null,
		loading: false
	};

	const [state, dispatch] = useReducer(riotReducer, initialState);

	// Actions

	// Get Summoner
	const getSummoner = async (region, summonerName) => {
		// Set loading
		dispatch({ type: types.SET_LOADING });

		try {
			const res = await axios.get(
				process.env.REACT_APP_API_URL + `/summoners/${region}/${summonerName}`
			);

			dispatch({ type: types.GET_SUMMONER, payload: res.data });
		} catch (error) {
			// Set error
			dispatch({ type: types.SET_ERROR, payload: error.response });
		}
	};

	// Clear Summoner
	const clearSummoner = () => dispatch({ type: types.CLEAR_SUMMONER });

	// Get favorites
	const getFavorites = () => {
		const favorites = localStorage.getItem('favorites');
		if (favorites) {
			dispatch({ type: types.GET_FAVORITES, payload: JSON.parse(favorites) });
		}
	};

	// Add favorite
	const addFavorite = summoner => {
		// Check if there are any favorites in local storage
		const favorites = JSON.parse(localStorage.getItem('favorites'));
		if (favorites) {
			// Check if the summoner is already in the favorites
			if (favorites.find(fav => fav.puuid === summoner.puuid)) {
				return;
			}

			// Add the summoner to favorites
			favorites.push(summoner);
			localStorage.setItem('favorites', JSON.stringify(favorites));
		} else {
			// Create a new array with the summoner
			localStorage.setItem('favorites', JSON.stringify([summoner]));
		}

		dispatch({
			type: types.ADD_FAVORITE,
			payload: summoner
		});
	};

	// Remove favorite
	const removeFavorite = summoner => {
		// Check if there are any favorites in local storage
		const favorites = JSON.parse(localStorage.getItem('favorites'));
		if (favorites) {
			// Remove the summoner from favorites
			const newFavorites = favorites.filter(
				fav => fav.puuid !== summoner.puuid
			);
			localStorage.setItem('favorites', JSON.stringify(newFavorites));
		}

		dispatch({
			type: types.REMOVE_FAVORITE,
			payload: summoner
		});
	};

	// Clear error
	const clearError = () => dispatch({ type: types.CLEAR_ERROR });

	return (
		<RiotContext.Provider
			value={{
				...state,
				getSummoner,
				clearSummoner,
				getFavorites,
				addFavorite,
				removeFavorite,
				clearError
			}}
		>
			{children}
		</RiotContext.Provider>
	);
};
