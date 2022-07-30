import { PURGE } from "redux-persist";

export const DISPLAY_SEARCH_PAGE = (payload) => ({
	type: "DISPLAY_SEARCH_PAGE",
	payload: payload,
});

export const HIDDEN_SEARCH_PAGE = (payload) => ({
	type: "HIDDEN_SEARCH_PAGE",
	payload: payload,
});

const initialState = { payload: false };

const displaySearchPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case "DISPLAY_SEARCH_PAGE":
			return {
				...state,
				payload: true,
			};
		case "HIDDEN_SEARCH_PAGE":
			return {
				...state,
				payload: false,
			};
		case PURGE: {
			return initialState;
		}
		default:
			return initialState;
	}
};

export default displaySearchPageReducer;
