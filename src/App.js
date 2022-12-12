import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';

// http://www.omdbapi.com/?i=tt3896198&apikey=21d6ac12

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:imdbID' element={<MovieDetail />} />
          <Route path='/PageNotFound' element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </Router>





    </>
  );
}

export default App;
