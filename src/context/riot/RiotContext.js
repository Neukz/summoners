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

	// Clear Error
	const clearError = () => dispatch({ type: types.CLEAR_ERROR });

	return (
		<RiotContext.Provider
			value={{
				...state,
				getSummoner,
				clearSummoner,
				clearError
			}}
		>
			{children}
		</RiotContext.Provider>
	);
};
