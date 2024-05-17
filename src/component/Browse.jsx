import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constant'

const Browse = () => {
  const getNowPlayingMovies = async()=>{
     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS)
     const JsonData = await data.json();
     console.log(JsonData)
  }

  useEffect(()=>{
    getNowPlayingMovies()
  },[])
  return (
    <div>
      <Header/>

    </div>
  )
}

export default Browse