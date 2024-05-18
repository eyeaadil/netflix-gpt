// import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

const Browse = () => {

  // Here code is looking so ugly so make a custom hook for this
  // Fetch data from tmdb api and update the store
  useNowPlayingMovies();

	return (
		<div>
			<Header />
      <MainContainer/>
      <SecondryContainer/>
      {/* 
      main container
          -video background
          -video title
      secondry Container
        MovieList * n
        Movie card * n    
      
      */}
		</div>
	);
};

export default Browse;
