import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
	faCaretUp,
	faPen,
	faUser,
	faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import profileImg from "../assets/profile.png";

const ProfileDropdown = ({ isDisplay }) => {
	return (
		<div
			className="profile-dropdown"
			style={isDisplay ? { display: "block" } : { display: "none" }}
		>
			<FontAwesomeIcon icon={faCaretUp} className="caret-dropdown" />
			<ul className="dropdown-list">
				<li>
					{" "}
					<img src={profileImg} alt="" />
					Olivier
				</li>
				<li>
					<FontAwesomeIcon icon={faPen} className="dropdown-icon" />
					Gérer les profils
				</li>
				<li style={{ borderTop: "1px solid white" }}>
					<FontAwesomeIcon icon={faUser} className="dropdown-icon" />
					Compte
				</li>
				<li>
					<FontAwesomeIcon icon={faCircleQuestion} className="dropdown-icon" />
					Centre d'aide
				</li>
				<li style={{ borderTop: "1px solid white", justifyContent: "center" }}>
					Se déconnecter
				</li>
			</ul>
		</div>
	);
};

export default ProfileDropdown;
