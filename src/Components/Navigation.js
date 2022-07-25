import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import {
	faMagnifyingGlass,
	faBell,
	faCaretDown,
	faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navigation = () => {
	const [displaySearchBar, setDisplaySearchBar] = useState("searchbar-off");
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
					<span>Parcourir</span>
					<FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: "5px" }} />
				</div>
			)}

			{windowWidth < 1030 ? (
				<div className="right-nav">
					<div className={displaySearchBar}>
						<FontAwesomeIcon
							icon={faMagnifyingGlass}
							className="search-icon icon"
							onClick={() => {
								displaySearchBar === "searchbar-off"
									? setDisplaySearchBar("searchbar-on")
									: setDisplaySearchBar("searchbar-off");
							}}
						/>
						<input type="text" placeholder="Titres, personnes, genres"></input>
					</div>
					<FontAwesomeIcon icon={faBell} className="bell-icon icon" />
					<div className="dropdown-menu">
						<img src="../profile.png" alt="" />
						<FontAwesomeIcon icon={faCaretDown} />
					</div>
				</div>
			) : (
				<div className="right-nav">
					<div className={displaySearchBar}>
						<FontAwesomeIcon
							icon={faMagnifyingGlass}
							className="search-icon icon"
							onClick={() => {
								displaySearchBar === "searchbar-off"
									? setDisplaySearchBar("searchbar-on")
									: setDisplaySearchBar("searchbar-off");
							}}
						/>
						<input type="text" placeholder="Titres, personnes, genres"></input>
						<FontAwesomeIcon icon={faClose} className="close-search-icon" />
					</div>
					<NavLink to={"/"}>DIRECT</NavLink>
					<NavLink to={"/"}>Jeunesse</NavLink>
					<FontAwesomeIcon
						icon={faBell}
						className="bell-icon icon"
						style={{ margin: "0 10px" }}
					/>
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
