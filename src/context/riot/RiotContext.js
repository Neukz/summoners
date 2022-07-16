import { createContext, useReducer } from 'react';
import riotReducer from './riotReducer';
import * as types from '../../constants/actionTypes';

const RiotContext = createContext();
export default RiotContext;

export const RiotContextProvider = ({ children }) => {
	const initialState = {
		summoner: {},
		dataLOL: [],
		dataTFT: []
	};

	const [state, dispatch] = useReducer(riotReducer, initialState);

	return <RiotContext.Provider value={{}}>{children}</RiotContext.Provider>;
};
