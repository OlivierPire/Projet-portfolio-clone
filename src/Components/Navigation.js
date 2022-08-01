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
import ProfileDropdown from "./ProfileDropdown";
import BrowseDropdown from "./BrowseDropdown";

// Navigation left show browser list or drop-down menu 'parcourir'
// Navigation right show all elements with desktop version and hide 'DIRECT, Jeunesse' with mobile

const Navigation = () => {
	const [displaySearchBar, setDisplaySearchBar] = useState("searchbar-off");
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [isDropdownDisplay, setIsDropdownDisplay] = useState(false);
	const [isBrowseDisplay, setIsBrowseDisplay] = useState(false);
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
						to={"/films"}
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
				<div
					className="browse"
					onMouseOver={() => setIsBrowseDisplay(true)}
					onMouseLeave={() => setIsBrowseDisplay(false)}
				>
					<span>Parcourir</span>
					<FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: "5px" }} />
					<div className="browse-hover"></div>
					<BrowseDropdown isDisplay={isBrowseDisplay} />
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
						<input
							className="search"
							type="text"
							placeholder="Titres, personnes, genres"
						></input>
						<FontAwesomeIcon
							icon={faClose}
							className="close-search-icon"
							onClick={() => setDisplaySearchBar("searchbar-off")}
						/>
					</div>
					<FontAwesomeIcon icon={faBell} className="bell-icon icon" />
					<div
						className="dropdown-menu"
						onMouseOver={() => setIsDropdownDisplay(true)}
						onMouseLeave={() => setIsDropdownDisplay(false)}
					>
						<img src="../profile.png" alt="" />
						<FontAwesomeIcon icon={faCaretDown} className="caret-rotate" />
						<div className="block-for-hover"></div>
						<ProfileDropdown isDisplay={isDropdownDisplay} />
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
						<input
							className="search"
							type="text"
							placeholder="Titres, personnes, genres"
						></input>
						<FontAwesomeIcon
							icon={faClose}
							className="close-search-icon"
							onClick={() => setDisplaySearchBar("searchbar-off")}
						/>
					</div>
					<NavLink to={"/"}>DIRECT</NavLink>
					<NavLink to={"/"}>Jeunesse</NavLink>
					<FontAwesomeIcon
						icon={faBell}
						className="bell-icon icon"
						style={{ margin: "0 10px" }}
					/>
					<div
						className="dropdown-menu"
						onMouseOver={() => setIsDropdownDisplay(true)}
						onMouseLeave={() => setIsDropdownDisplay(false)}
					>
						<img src="../profile.png" alt="" />
						<FontAwesomeIcon icon={faCaretDown} className="caret-rotate" />
						<div className="block-for-hover"></div>
						<ProfileDropdown isDisplay={isDropdownDisplay} />
					</div>
				</div>
			)}
		</div>
	);
};

export default Navigation;
