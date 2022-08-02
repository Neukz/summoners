import * as types from '../../constants/actionTypes';

const riotReducer = (state, { type, payload }) => {
	switch (type) {
		case types.GET_SUMMONER:
			return {
				...state,
				summoner: payload.summoner,
				LoLStats: payload.stats.LoL,
				TFTStats: payload.stats.TFT,
				// Set loading to false
				loading: false
			};

		case types.CLEAR_SUMMONER:
			return {
				...state,
				summoner: {},
				LoLStats: [],
				TFTStats: []
			};

		case types.GET_FAVORITES:
			return {
				...state,
				favorites: payload
			};

		case types.ADD_FAVORITE:
			return {
				...state,
				favorites: [payload, ...state.favorites]
			};

		case types.REMOVE_FAVORITE:
			return {
				...state,
				favorites: state.favorites.filter(fav => fav.puuid !== payload.puuid)
			};

		case types.SET_ERROR:
			return {
				...state,
				error: {
					status: payload.status,
					reason: payload.statusText,
					message: payload.data.message
				},
				// Set loading to false
				loading: false
			};

		case types.CLEAR_ERROR:
			return {
				...state,
				error: null
			};

		case types.SET_LOADING:
			return {
				...state,
				loading: true
			};

		default:
			return state;
	}
};

export default riotReducer;
