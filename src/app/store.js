import { configureStore } from "@reduxjs/toolkit";
import displaySearchPageReducer from "../features/searchReducer";

const store = configureStore({
	reducer: displaySearchPageReducer,
	devTools:
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
});

export default store;
