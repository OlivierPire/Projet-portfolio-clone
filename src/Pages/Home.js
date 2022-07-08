import axios from "axios";
import React, { useEffect } from "react";
import Header from "../Components/Header";
import "../Styles/index.scss";
import PrincipalMovie from "../Components/PrincipalMovie";
import Collections from "../Components/Collections";

const Home = () => {
	const token = "bb655c84c682ce6fbeff7bc45c202c87";

	// useEffect(() => {
	//     axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=' + token + '&language=fr-FR').then((data) => console.log(data))
	// })

	return (
		<div className="home">
			<Header />
			<PrincipalMovie />
			<Collections title="Tendances actuelles" />
			<Collections title="Nouveautés" />
			<Collections title="Comédies" />
			<Collections title="Actions" />
			<Collections title="Horreur" />
		</div>
	);
};

export default Home;
