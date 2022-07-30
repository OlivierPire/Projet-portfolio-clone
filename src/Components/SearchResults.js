import React from "react";

const SearchResults = ({ moviesType }) => {
	return (
		<div className="search-results">
			{moviesType.map((e, i) =>
				e.backdrop_path ? (
					<img
						key={e.id}
						src={"https://image.tmdb.org/t/p/w500" + e.backdrop_path}
						alt={"movie poster of" + e.backdrop_path}
					/>
				) : null
			)}
		</div>
	);
};

export default SearchResults;
