import React from "react";

const SearchResults = ({ moviesType }) => {
	return (
		<div className="search-results">
			{moviesType.map((e, i) =>
				e.backdrop_path ? (
					<div className="img-container">
						<img
							key={e.id}
							src={"https://image.tmdb.org/t/p/w500" + e.backdrop_path}
							alt={"movie poster of" + e.backdrop_path}
						></img>
						<span>{e.title}</span>
					</div>
				) : null
			)}
		</div>
	);
};

export default SearchResults;
