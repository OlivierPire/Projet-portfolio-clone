import React, { useEffect } from "react";
import Header from "../Components/Header";
import SearchResults from "../Components/SearchResults";
import axios from "axios";
import { useState } from "react";

const Series = () => {
	const [moviesTrending, setMoviesTrending] = useState([]);
	const token = "bb655c84c682ce6fbeff7bc45c202c87";

	useEffect(() => {
		axios
			.get(
				"https://api.themoviedb.org/3/trending/all/day?api_key=" +
					token +
					"&language=fr-FR"
			)
			.then((data) => setMoviesTrending(data.data.results));
	});
	return (
		<div>
			<Header />
			<SearchResults moviesType={moviesTrending} />
		</div>
	);
};

export default Series;
