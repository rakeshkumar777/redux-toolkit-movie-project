import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing'
import {getAllMovies} from '../../app/movieSlice'

const MovieListing = () => {

  const movieList = useSelector(getAllMovies)

  console.log("movieList", movieList)



  let renderMovies = ""
  renderMovies = movieList.Response === 'True' ? (movieList.Search.map((movie, index) =>
    <MovieCard className="row mx-auto" key={index} data={movie} />)) : (<div><h3>Error</h3></div>)

  return (
    <>
      <div>

         <div >{renderMovies}</div>
      
      </div>


    </>
  );
}

export default MovieListing;
