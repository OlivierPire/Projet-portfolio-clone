import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import {
	faMagnifyingGlass,
	faBell,
	faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navigation = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	window.addEventListener("resize", () => {
		setWindowWidth(window.innerWidth);
	});
	return (
		<div className="navigation">
			{windowWidth > 800 ? (
				<div className="left-nav">
					<NavLink
						to={"/"}
						className={(navData) => (navData.isActive ? "nav-active" : "")}
					>
						Accueil
					</NavLink>
					<NavLink
						to={"/series"}
						className={(navData) => (navData.isActive ? "nav-active" : "")}
					>
						Séries
					</NavLink>
					<NavLink
						to={"/movies"}
						className={(navData) => (navData.isActive ? "nav-active" : "")}
					>
						Films
					</NavLink>
					<NavLink
						to={"/news"}
						className={(navData) => (navData.isActive ? "nav-active" : "")}
					>
						Nouveautés les plus regardées
					</NavLink>
					<NavLink
						to={"/list"}
						className={(navData) => (navData.isActive ? "nav-active" : "")}
					>
						Ma liste
					</NavLink>
				</div>
			) : (
				<div className="browse">
					Parcourir
					<FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: "5px" }} />
				</div>
			)}

			{windowWidth < 1030 ? (
				<div className="right-nav">
					<FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon icon" />
					<FontAwesomeIcon icon={faBell} className="bell-icon icon" />
					<div className="dropdown-menu">
						<img src="../profile.png" alt="" />
						<FontAwesomeIcon icon={faCaretDown} />
					</div>
				</div>
			) : (
				<div className="right-nav">
					<FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon icon" />
					<NavLink to={"/"}>DIRECT</NavLink>
					<NavLink to={"/"}>Jeunesse</NavLink>
					<FontAwesomeIcon icon={faBell} className="bell-icon icon" />
					<div className="dropdown-menu">
						<img src="../profile.png" alt="" />
						<FontAwesomeIcon icon={faCaretDown} />
					</div>
				</div>
			)}
		</div>
	);
};

export default Navigation;
