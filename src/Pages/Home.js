import React from "react";
import Header from "../Components/Header";
import "../Styles/index.scss";
import HeroMovie from "../Components/HeroMovie";
import Collections from "../Components/Collections";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Components/Footer";
import { useMemo } from "react";
import SearchResults from "../Pages/SearchResults";
import { getAllDatas } from "../CallsApi";

// After fetching all the data on the callsApi component, the data is stored in useState
// Then i display all collections for homepage or search results if user use search bar
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
	const [crimeTvShow, setCrimeTvShow] = useState([]);
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
		getAllDatas().then(
			([
				trending,
				action,
				comedy,
				anime,
				documentary,
				drama,
				thriller,
				newTvShow,
				kidsTvShow,
				crimeTvShow,
				actionTvShow,
				horror,
			]) => {
				setMoviesTrending(trending.data.results);
				setActionMovies(action.data.results);
				setComedyMovies(comedy.data.results);
				setAnimeMovies(anime.data.results);
				setDocumentaryMovies(documentary.data.results);
				setDramaMovies(drama.data.results);
				setThrillerMovies(thriller.data.results);
				setNewTvShow(newTvShow.data.results);
				setKidsTvShow(kidsTvShow.data.results);
				setCrimeTvShow(crimeTvShow.data.results);
				setActionTvShow(actionTvShow.data.results);
				setHorrorMovies(horror.data.results);
			}
		);
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
		[searchBar, closeSearchBar]
	);

	return (
		<div className="home">
			<Header />
			{search === false || searchRequest === "" ? (
				<React.Fragment>
					<HeroMovie />
					<Collections moviesType={moviesTrending} genre="Tendances actuelles" />
					<Collections moviesType={horrorMovies} genre="Horreur" />
					<Collections moviesType={comedyMovies} genre="Comédies" />
					<Collections moviesType={actionMovies} genre="Actions" />
					<Collections moviesType={newTvShow} genre="Nouveautés séries" />
					<Collections moviesType={documentaryMovies} genre="Documentaires" />
					<Collections moviesType={animeMovies} genre="Animation" />
					<Collections moviesType={crimeTvShow} genre="Séries policières" />
					<Collections moviesType={thrillerMovies} genre="Thriller" />
					<Collections
						moviesType={actionTvShow}
						genre="Séries d'action et d'aventure"
					/>
					<Collections moviesType={dramaMovies} genre="Drame" />
					<Collections moviesType={kidsTvShow} genre="Séries pour enfants" />
				</React.Fragment>
			) : (
				<SearchResults moviesType={searchMovies} genre="Documentaires" />
			)}
			<Footer />
		</div>
	);
};

export default Home;
