// import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";

const Browse = () => {

  // Here code is looking so ugly so make a custom hook for this
  // Fetch data from tmdb api and update the store
  useNowPlayingMovies();

	return (
		<div>
			<Header />
		</div>
	);
};

export default Browse;
