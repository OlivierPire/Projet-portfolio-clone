import React from "react";
import Header from "../Components/Header";
import "../Styles/index.scss";
import PrincipalMovie from "../Components/PrincipalMovie";
import Collections from "../Components/Collections";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Components/Footer";
import { useMemo } from "react";
import SearchResults from "../Components/SearchResults";

const Home = () => {
	const token = "bb655c84c682ce6fbeff7bc45c202c87";
	const [moviesTrending, setMoviesTrending] = useState([]);
	const [horrorMovies, setHorrorMovies] = useState([]);
	const [actionMovies, setActionMovies] = useState([]);
	const [comedyMovies, setComedyMovies] = useState([]);
	const [animeMovies, setAnimeMovies] = useState([]);
	const [dramaMovies, setDramaMovies] = useState([]);
	const [documentaryMovies, setDocumentaryMovies] = useState([]);
	const [thrillerMovies, setThrillerMovies] = useState([]);
	const [newTvShow, setNewTvShow] = useState([]);
	const [kidsTvShow, setKidsTvShow] = useState([]);
	const [crimeTvShow, SetCrimeTvShow] = useState([]);
	const [actionTvShow, setActionTvShow] = useState([]);

	const [searchMovies, setSearchMovies] = useState([]);
	const [searchRequest, setSearchRequest] = useState("");
	const [search, setSearch] = useState(false);
	if (searchRequest !== "") {
		axios
			.get(
				" https://api.themoviedb.org/3/search/movie?api_key=" +
					token +
					"&query=" +
					searchRequest
			)
			.then((data) => setSearchMovies([]) & setSearchMovies(data.data.results));
	}

	useEffect(() => {
		axios
			.get(
				"https://api.themoviedb.org/3/trending/all/day?api_key=" +
					token +
					"&language=fr-FR"
			)
			.then((data) => setMoviesTrending(data.data.results));
		axios
			.get(
				"https://api.themoviedb.org/3/discover/movie?api_key=" +
					token +
					"&language=fr-FR&with_genres=27"
			)
			.then((data) => setHorrorMovies(data.data.results));
		axios
			.get(
				"https://api.themoviedb.org/3/discover/movie?api_key=" +
					token +
					"&language=fr-FR&with_genres=28"
			)
			.then((data) => setActionMovies(data.data.results));
		axios
			.get(
				"https://api.themoviedb.org/3/discover/movie?api_key=" +
					token +
					"&language=fr-FR&with_genres=35"
			)
			.then((data) => setComedyMovies(data.data.results));
		axios
			.get(
				"https://api.themoviedb.org/3/discover/movie?api_key=" +
					token +
					"&language=fr-FR&with_genres=16"
			)
			.then((data) => setAnimeMovies(data.data.results));
		axios
			.get(
				"https://api.themoviedb.org/3/discover/movie?api_key=" +
					token +
					"&language=fr-FR&with_genres=99"
			)
			.then((data) => setDocumentaryMovies(data.data.results));
		axios
			.get(
				"https://api.themoviedb.org/3/discover/movie?api_key=" +
					token +
					"&language=fr-FR&with_genres=18"
			)
			.then((data) => setDramaMovies(data.data.results));
		axios
			.get(
				"https://api.themoviedb.org/3/discover/movie?api_key=" +
					token +
					"&language=fr-FR&with_genres=53"
			)
			.then((data) => setThrillerMovies(data.data.results));
		axios
			.get(
				"https://api.themoviedb.org/3/discover/tv?api_key=" +
					token +
					"&language=fr-FR&with_genres=10763"
			)
			.then((data) => setNewTvShow(data.data.results));
		axios
			.get(
				"https://api.themoviedb.org/3/discover/tv?api_key=" +
					token +
					"&language=fr-FR&with_genres=10762"
			)
			.then((data) => setKidsTvShow(data.data.results));
		axios
			.get(
				"https://api.themoviedb.org/3/discover/tv?api_key=" +
					token +
					"&language=fr-FR&with_genres=80"
			)
			.then((data) => SetCrimeTvShow(data.data.results));
		axios
			.get(
				"https://api.themoviedb.org/3/discover/tv?api_key=" +
					token +
					"&language=fr-FR&with_genres=10759"
			)
			.then((data) => setActionTvShow(data.data.results));
	}, []);

	let searchBar = document.querySelector(".search");
	let closeSearchBar = document.querySelector(".close-search-icon");

	useMemo(
		function () {
			if (searchBar) {
				closeSearchBar.addEventListener("click", () => {
					searchBar.value = "";
					setSearchRequest("");
				});
				console.log("a");
				searchBar.addEventListener("input", (e) => {
					setSearchRequest(e.target.value);
					setSearch(true);
				});
			}
		},
		[searchBar]
	);

	return (
		<div className="home">
			<Header />
			{search === false || searchRequest === "" ? (
				<React.Fragment>
					<PrincipalMovie />
					<Collections moviesType={moviesTrending} genre="Tendances actuelles" />
					<Collections moviesType={horrorMovies} genre="Horreur" />
					<Collections moviesType={comedyMovies} genre="Comédies" />
					<Collections moviesType={actionMovies} genre="Actions" />
					<Collections moviesType={animeMovies} genre="Animation" />
					<Collections moviesType={thrillerMovies} genre="Thriller" />
					<Collections moviesType={dramaMovies} genre="Drame" />
					<Collections moviesType={documentaryMovies} genre="Documentaires" />
					<Collections moviesType={newTvShow} genre="Nouveautés séries" />
					<Collections moviesType={kidsTvShow} genre="Séries pour enfants" />
					<Collections moviesType={crimeTvShow} genre="Séries policières" />
					<Collections
						moviesType={actionTvShow}
						genre="Séries d'action et d'aventure"
					/>
				</React.Fragment>
			) : (
				<SearchResults moviesType={searchMovies} genre="Documentaires" />
			)}
			<Footer />
		</div>
	);
};

export default Home;
