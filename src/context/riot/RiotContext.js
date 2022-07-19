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
		TFTStats: []
	};

	const [state, dispatch] = useReducer(riotReducer, initialState);

	// Actions

	// Get Summoner
	const getSummoner = async (region, summonerName) => {
		try {
			const res = await axios.get(
				process.env.REACT_APP_API_URL + `/summoners/${region}/${summonerName}`
			);

			dispatch({ type: types.GET_SUMMONER, payload: res.data });
		} catch (error) {
			console.log(error);
		}
	};

	// Clear Summoner
	const clearSummoner = () => dispatch({ type: types.CLEAR_SUMMONER });

	return (
		<RiotContext.Provider
			value={{
				...state,
				getSummoner,
				clearSummoner
			}}
		>
			{children}
		</RiotContext.Provider>
	);
};
