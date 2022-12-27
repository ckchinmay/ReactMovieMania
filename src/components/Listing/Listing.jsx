import React from 'react';
import { useEffect, useState } from 'react';
import { fetchUpcomingMovies, fetchPopularMovies, fetchTrendingMovies } from '../../api';
import MovieCarousel from '../Carousel/MovieCarousel';


function Listing(props) {
  const [timeData, setTimeData] = useState("day");
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    console.log("calling APIs");
    fetchTrendingMovies(timeData).then((response) => {
      const data = response.data;
      setTrendingMovies(data);
    });

    fetchPopularMovies().then((response) => {
      const data = response.data;
      setPopularMovies(data);
    });

    fetchUpcomingMovies().then((response) => {
      const data = response.data;
      setUpcomingMovies(data);
    });

  }, [timeData]);

  return (

    <>
      <MovieCarousel title="Trending Movies" data={trendingMovies}></MovieCarousel>

      <MovieCarousel title="Upcoming Movies" data={upcomingMovies}></MovieCarousel>

      <MovieCarousel title="Popular Movies" data={popularMovies}></MovieCarousel>

    </>
  );
}

export default Listing;