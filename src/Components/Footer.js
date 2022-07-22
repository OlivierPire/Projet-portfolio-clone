import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faInstagram,
	faTwitter,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<div className="footer">
			<div className="social-media">
				<ul>
					<li>
						<FontAwesomeIcon icon={faFacebookF} />
					</li>
					<li>
						<FontAwesomeIcon icon={faInstagram} />
					</li>
					<li>
						<FontAwesomeIcon icon={faTwitter} />
					</li>
					<li>
						<FontAwesomeIcon icon={faYoutube} />
					</li>
				</ul>
			</div>
			<div className="footer-list">
				<ul>
					<li>Audio et sous-titres</li>
					<li>Presse</li>
					<li>Confidentialité</li>
					<li>Nous contacter</li>
				</ul>
				<ul>
					<li>Audiodescription</li>
					<li>Relations Investisseurs</li>
					<li>Informations légales</li>
				</ul>
				<ul>
					<li>Centre d'aide</li>
					<li>Recrutement</li>
					<li>Préférences de cookies</li>
				</ul>
				<ul>
					<li>Cartes cadeaux</li>
					<li>Conditions d'utilisation</li>
					<li>Mentions légales</li>
				</ul>
			</div>
			<button>Code de service</button>
			<div className="copyright">2022 Noobflix, Inc.</div>
		</div>
	);
};

export default Footer;
