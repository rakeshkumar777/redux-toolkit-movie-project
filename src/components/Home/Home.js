import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from '../../app/movieSlice'


const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
   
  }, [dispatch]);
  return (
    <div>
      <div >
      <MovieListing />
      </div>
    </div>
  );
};

export default Home;




