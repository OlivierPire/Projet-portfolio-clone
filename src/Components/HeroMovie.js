import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import heroImg from "../assets/hero-background.jpg";
import logoSaul from "../assets/logo_saul.png";
import React from "react";

const HeroMovie = () => {
	return (
		<div className="hero-movie">
			<img src={heroImg} alt="" className="background-hero" />
			<div className="hero-informations">
				<img src={logoSaul} alt="" className="logo-hero" />
				<p>
					La série est centrée sur la vie de Jimmy McGill, avocat sans envergure,
					avant qu'il ne devienne l'homme de loi véreux Saul Goodman
				</p>

				<div className="hero-buttons">
					<button className="hero-play-btn btn">
						<FontAwesomeIcon icon={faPlay} className="play-icon" />
						Lecture
					</button>
					<button className="hero-infos-btn btn">
						<FontAwesomeIcon icon={faInfoCircle} className="infos-icon" />
						Plus d'infos
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeroMovie;
