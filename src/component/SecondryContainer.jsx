import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {
    const movies = useSelector(store=>store.movies)
    // console.log("adil",movies.nowPlayingMovies)
  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-20'>

     
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        {/* <MovieList title={"Trending"} movies={movies.nowPopularMovies}/> */}
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        {/* <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/> */}

        {/* Movie list-Popular
        MovieList -NowPlaying
        MovieList-trending
         */}
      </div>
    </div>
  )
}

export default SecondryContainer