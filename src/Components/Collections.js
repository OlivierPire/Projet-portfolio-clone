import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Collections = ({ title }) => {
	const token = "bb655c84c682ce6fbeff7bc45c202c87";
	const [movies, setMovies] = useState([]);
	const [translateCards, setTranslateCards] = useState(0);
	const [displayArrowLeft, setDisplayArrowLeft] = useState("none");

	console.log(window.innerWidth);
	useEffect(() => {
		console.log("content :", document.querySelector(".content").clientWidth);
		axios
			.get(
				"https://api.themoviedb.org/3/trending/all/day?api_key=" +
					token +
					"&language=fr-FR"
			)
			.then((data) => setMovies(data.data.results));
		axios.get(
			"https://api.themoviedb.org/3/movie/820456/images?api_key=" +
				token +
				"&language=en-US"
		);
		// .then((data) => console.log(data));
	}, []);

	return (
		<div className="collections">
			<span className="title">
				{title}
				<span>Tout explorer </span>
				<div className="angle-left-container">
					<FontAwesomeIcon icon={faAngleRight} className="explorer-arrow" />
				</div>
			</span>
			<div className="content">
				<div
					className="angle-left-container"
					onClick={() =>
						document.querySelector(".content")
							? setTranslateCards(
									translateCards + document.querySelector(".content").clientWidth - 8
							  )
							: null
					}
				>
					<FontAwesomeIcon
						icon={faAngleLeft}
						className="angle-left angle"
						style={{ display: translateCards < 0 ? "inline-block" : "none" }}
					/>
				</div>
				<div
					className="cards"
					style={{ transform: `translate(${translateCards}px)`, transition: "1s" }}
				>
					{movies.map((e) => (
						<div className="card" key={e.id + e.backdrop_path}>
							<img
								key={e.id}
								src={"https://image.tmdb.org/t/p/w500" + e.backdrop_path}
								alt=""
							/>
							<p className="card-title">{e.title ? e.title : e.name}</p>
						</div>
					))}
				</div>
				<div
					className="angle-right-container"
					onClick={() =>
						document.querySelector(".content")
							? setTranslateCards(
									translateCards - document.querySelector(".content").clientWidth + 8
							  )
							: null
					}
				>
					<FontAwesomeIcon icon={faAngleRight} className="angle-right angle" />
				</div>
			</div>
		</div>
	);
};

export default Collections;
