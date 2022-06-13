import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Collections = ({ title }) => {
	const token = "bb655c84c682ce6fbeff7bc45c202c87";
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios
			.get(
				"https://api.themoviedb.org/3/trending/all/day?api_key=" +
					token +
					"&language=fr-FR"
			)
			.then((data) => setMovies(data.data.results));
		axios
			.get(
				"https://api.themoviedb.org/3/movie/820456/images?api_key=" +
					token +
					"&language=en-US"
			)
			.then((data) => console.log(data));
	}, []);

	console.log(movies);

	return (
		<div className="collections">
			<p className="explorer">
				{title}
				<span>Tout explorer </span>
				<FontAwesomeIcon icon={faAngleRight} className="explorer-arrow" />
			</p>
			<div className="content">
				<FontAwesomeIcon icon={faAngleLeft} className="angle-left angle" />
				<div className="cards">
					{movies.map((e) => (
						<div className="card">
							<img
								key={e.id}
								src={"https://image.tmdb.org/t/p/w500" + e.backdrop_path}
								alt=""
							/>
                            <p className="card-title">{e.title ? e.title : e.name}</p>
                            <div className="hover-infos">

                            </div>
						</div>
					))}
				</div>
				<FontAwesomeIcon icon={faAngleRight} className="angle-right angle" />
			</div>
		</div>
	);
};

export default Collections;
