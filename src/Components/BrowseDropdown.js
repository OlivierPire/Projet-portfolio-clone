import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

// Instead of the browse list, show the 'parcourir' drop-down menu for mobile

const BrowseDropdown = ({ isDisplay }) => {
	return (
		<div
			className="browse-dropdown"
			style={isDisplay ? { display: "block" } : { display: "none" }}
		>
			<FontAwesomeIcon icon={faCaretUp} className="caret-browse" />
			<ul>
				<li>
					<NavLink
						to={"/"}
						className={(navData) =>
							navData.isActive ? "browse-active" : "browse-navlink"
						}
					>
						Accueil
					</NavLink>
				</li>
				<li>
					<NavLink
						to={"/"}
						className={(navData) =>
							navData.isActive ? "browse-active" : "browse-navlink"
						}
					>
						Séries
					</NavLink>
				</li>
				<li>
					<NavLink
						to={"/"}
						className={(navData) =>
							navData.isActive ? "browse-active" : "browse-navlink"
						}
					>
						Films
					</NavLink>
				</li>
				<li>
					<NavLink
						to={"/"}
						className={(navData) =>
							navData.isActive ? "browse-active" : "browse-navlink"
						}
					>
						Nouveautés les plus regardées
					</NavLink>
				</li>
				<li>
					<NavLink
						to={"/"}
						className={(navData) =>
							navData.isActive ? "browse-active" : "browse-navlink"
						}
					>
						Ma liste
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default BrowseDropdown;
