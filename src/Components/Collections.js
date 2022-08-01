import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Collections = ({ genre, moviesType }) => {
	const [translateMovies, setTranslateMovies] = useState(0);
	const [displaySliderProgress, setDisplaySliderProgress] = useState("none");
	const [displayArrowLeft, setDisplayArrowLeft] = useState("hidden");
	const [displayArrowRight, setDisplayArrowRight] = useState("hidden");
	const slider = document.querySelector(".slider");

	window.addEventListener("resize", () => {
		setTranslateMovies(0);
	});

	return (
		<div className="collections">
			<span className="genre">
				{genre}
				<span>Tout explorer </span>
				<div className="angle-left-container">
					<FontAwesomeIcon icon={faAngleRight} className="explorer-arrow" />
				</div>
			</span>
			<div className="slider-progress-container">
				<div
					className={
						translateMovies === 0 ? "slider-progress-on" : "slider-progress"
					}
					style={{ display: displaySliderProgress }}
				></div>
				<div
					className={
						translateMovies === 100 ? "slider-progress-on" : "slider-progress"
					}
					style={{ display: displaySliderProgress }}
				></div>
				<div
					className={
						translateMovies >= 200 && translateMovies < 300
							? "slider-progress-on"
							: "slider-progress"
					}
					style={{ display: displaySliderProgress }}
				></div>
				<div
					className={
						translateMovies === 300 ? "slider-progress-on" : "slider-progress"
					}
					style={
						slider && slider.clientWidth < 1106
							? { display: displaySliderProgress }
							: { display: "none" }
					}
				></div>
				<div
					className={
						translateMovies === 400 ? "slider-progress-on" : "slider-progress"
					}
					style={
						slider && slider.clientWidth < 1106
							? { display: displaySliderProgress }
							: { display: "none" }
					}
				></div>
			</div>

			<div
				className="slider-container"
				onMouseOver={() => {
					if (translateMovies === 0) {
						setDisplayArrowLeft("hidden");
					} else {
						setDisplayArrowLeft("visible");
					}
					setDisplayArrowRight("visible");
					setDisplaySliderProgress("block");
				}}
				onMouseLeave={() => {
					setDisplayArrowLeft("hidden");
					setDisplayArrowRight("hidden");
					setDisplaySliderProgress("none");
				}}
			>
				<button
					className="arrows left-arrow"
					style={{ visibility: displayArrowLeft }}
					onClick={() => {
						if (translateMovies === 100) {
							setTranslateMovies(translateMovies - 100);
						} else if (translateMovies === 200) {
							setTranslateMovies(translateMovies - 100);
						} else if (translateMovies === 300) {
							setTranslateMovies(translateMovies - 100);
						} else if (translateMovies === 400) {
							setTranslateMovies(translateMovies - 100);
						} else if (translateMovies === 233.3) {
							setTranslateMovies(translateMovies - 33.3);
						} else if (translateMovies === 0) {
							setTranslateMovies(0);
						}
					}}
				>
					<i>&#8249;</i>
				</button>
				<div
					className="slider"
					style={{ transform: `translate(-${translateMovies}%)` }}
				>
					{moviesType.map((e, i) => (
						<img
							key={e.id}
							src={"https://image.tmdb.org/t/p/w500" + e.backdrop_path}
							alt=""
						/>
					))}
				</div>
				<button
					className="arrows right-arrow"
					style={
						window.innerWidth < "510"
							? { display: "none" }
							: { visibility: displayArrowRight }
					}
					onClick={() => {
						if (translateMovies === 0 || translateMovies === 100) {
							setTranslateMovies(translateMovies + 100);
						} else if (translateMovies === 200 && slider.clientWidth > 1106) {
							setTranslateMovies(translateMovies + 33.3);
						} else if (translateMovies === 233.3 || translateMovies === 400) {
							setTranslateMovies(0);
						} else if (translateMovies === 200 && slider.clientWidth < 1106) {
							setTranslateMovies(translateMovies + 100);
						} else if (translateMovies === 300 && slider.clientWidth < 1106) {
							setTranslateMovies(translateMovies + 100);
						}
					}}
				>
					<i>&#8250;</i>
				</button>
			</div>
		</div>
	);
};

export default Collections;
