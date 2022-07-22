import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Collections = ({ genre, moviesType }) => {
	const [translateMovies, setTranslateMovies] = useState(0);
	const [displaySliderProgress, setDisplaySliderProgress] = useState("none");
	const [displayArrowLeft, setDisplayArrowLeft] = useState("hidden");
	const [displayArrowRight, setDisplayArrowRight] = useState("hidden");

	console.log(translateMovies);

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
						translateMovies >= 200 ? "slider-progress-on" : "slider-progress"
					}
					style={{ display: displaySliderProgress }}
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
					style={{ visibility: displayArrowRight }}
					onClick={() => {
						if (translateMovies === 0 || translateMovies === 100) {
							setTranslateMovies(translateMovies + 100);
						} else if (translateMovies === 200) {
							setTranslateMovies(translateMovies + 33.3);
						} else if (translateMovies === 233.3) {
							setTranslateMovies(0);
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

{
	/* <div className="collections">
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
					onClick={() => {
						if (displayByIndex === 0) {
							setDisplayByIndex(2);
						} else if (displayByIndex === 1) {
							setDisplayByIndex(0);
						} else if (displayByIndex === 2) {
							setDisplayByIndex(1);
						}
					}}
				>
					<FontAwesomeIcon icon={faAngleLeft} className="angle-left angle" />
				</div>
				<div className="cards">
					{moviesType.map((e, i) => {
						if (displayByIndex === 0) {
							return (
								<div className="card" key={e.id + e.backdrop_path}>
									<div className="hover-infos"></div>
									<img
										key={e.id}
										src={"https://image.tmdb.org/t/p/w500" + e.backdrop_path}
										alt=""
									/>
									<p className="card-title">{e.title ? e.title : e.name}</p>
								</div>
							);
						} else if (displayByIndex === 1) {
							if (i > 5) {
								return (
									<div className="card" key={e.id + e.backdrop_path}>
										<div className="hover-infos"></div>
										<img
											key={e.id}
											src={"https://image.tmdb.org/t/p/w500" + e.backdrop_path}
											alt=""
										/>
										<p className="card-title">{e.title ? e.title : e.name}</p>
									</div>
								);
							}
						} else if (displayByIndex === 2) {
							if (i > 11) {
								return (
									<div className="card" key={e.id + e.backdrop_path}>
										<div className="hover-infos"></div>
										<img
											key={e.id}
											src={"https://image.tmdb.org/t/p/w500" + e.backdrop_path}
											alt=""
										/>
										<p className="card-title">{e.title ? e.title : e.name}</p>
									</div>
								);
							}
						}
					})}
				</div>
				<div
					className="angle-right-container"
					onClick={() => {
						if (displayByIndex === 0) {
							setDisplayByIndex(1);
						} else if (displayByIndex === 1) {
							setDisplayByIndex(2);
						} else if (displayByIndex === 2) {
							setDisplayByIndex(0);
						}
					}}
				>
					<FontAwesomeIcon icon={faAngleRight} className="angle-right angle" />
				</div>
			</div>
		</div> */
}
