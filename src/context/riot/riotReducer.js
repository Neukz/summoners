import * as types from '../../constants/actionTypes';

const riotReducer = (state, { type, payload }) => {
	switch (type) {
		case types.GET_SUMMONER:
			return {
				...state,
				summoner: payload.summoner,
				LoLStats: payload.stats.LoL,
				TFTStats: payload.stats.TFT
			};

		case types.CLEAR_SUMMONER:
			return {
				...state,
				summoner: {},
				LoLStats: [],
				TFTStats: []
			};

		default:
			return state;
	}
};

export default riotReducer;
