import axios from "axios";

// Fetch all datas for homepage with token with MovieDb Api, then return a promise with data

const token = "bb655c84c682ce6fbeff7bc45c202c87";

const getTrendingMovies = () => {
	return axios.get(
		"https://api.themoviedb.org/3/trending/all/day?api_key=" +
			token +
			"&language=fr-FR"
	);
};

const getActionMovies = () => {
	return axios.get(
		"https://api.themoviedb.org/3/discover/movie?api_key=" +
			token +
			"&language=fr-FR&with_genres=28"
	);
};
const getComedyMovies = () => {
	return axios.get(
		"https://api.themoviedb.org/3/discover/movie?api_key=" +
			token +
			"&language=fr-FR&with_genres=35"
	);
};
const getAnimeMovies = () => {
	return axios.get(
		"https://api.themoviedb.org/3/discover/movie?api_key=" +
			token +
			"&language=fr-FR&with_genres=16"
	);
};
const getDocumentaryMovies = () => {
	return axios.get(
		"https://api.themoviedb.org/3/discover/movie?api_key=" +
			token +
			"&language=fr-FR&with_genres=99"
	);
};
const getDramaMovies = () => {
	return axios.get(
		"https://api.themoviedb.org/3/discover/movie?api_key=" +
			token +
			"&language=fr-FR&with_genres=18"
	);
};
const getThrillerMovies = () => {
	return axios.get(
		"https://api.themoviedb.org/3/discover/movie?api_key=" +
			token +
			"&language=fr-FR&with_genres=53"
	);
};
const getNewTvShow = () => {
	return axios.get(
		"https://api.themoviedb.org/3/discover/tv?api_key=" +
			token +
			"&language=fr-FR&with_genres=10763"
	);
};
const getKidsTvShow = () => {
	return axios.get(
		"https://api.themoviedb.org/3/discover/tv?api_key=" +
			token +
			"&language=fr-FR&with_genres=10762"
	);
};
const getCrimeTvShow = () => {
	return axios.get(
		"https://api.themoviedb.org/3/discover/tv?api_key=" +
			token +
			"&language=fr-FR&with_genres=80"
	);
};
const getActionTvShow = () => {
	return axios.get(
		"https://api.themoviedb.org/3/discover/tv?api_key=" +
			token +
			"&language=fr-FR&with_genres=10759"
	);
};
const getHorrorMovies = () => {
	return axios.get(
		"https://api.themoviedb.org/3/discover/movie?api_key=" +
			token +
			"&language=fr-FR&with_genres=27"
	);
};

const getAllDatas = () => {
	return Promise.all([
		getTrendingMovies(),
		getActionMovies(),
		getComedyMovies(),
		getAnimeMovies(),
		getDocumentaryMovies(),
		getDramaMovies(),
		getThrillerMovies(),
		getNewTvShow(),
		getKidsTvShow(),
		getCrimeTvShow(),
		getActionTvShow(),
		getHorrorMovies(),
	]);
};

export {
	getTrendingMovies,
	getActionMovies,
	getComedyMovies,
	getAnimeMovies,
	getDocumentaryMovies,
	getDramaMovies,
	getThrillerMovies,
	getNewTvShow,
	getKidsTvShow,
	getCrimeTvShow,
	getActionTvShow,
	getHorrorMovies,
	getAllDatas,
};
