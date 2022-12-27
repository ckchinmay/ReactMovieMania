import axios from 'axios';
export const BASE_API = axios.create({ baseURL: "https://api.themoviedb.org/3/" });
export const API_KEY = "39ad0284b9a546988d10f4677f78e4ce";
export const img_url = "http://image.tmdb.org/t/p/w500";

export const fetchSingleMovie = (movieId) => BASE_API.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
export const fetchSingleMovieCredits = (movieId) => BASE_API.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`);
export const fetchReviews = (movieId) => BASE_API.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`);
export const fetchPopularMovies = (page) => BASE_API.get(`/movie/popular?api_key=${API_KEY}`);
export const fetchUpcomingMovies = (page) => BASE_API.get(`/movie/upcoming?api_key=${API_KEY}`);
export const fetchTrendingMovies = (timeData) => BASE_API.get(`/trending/movie/${timeData}?api_key=${API_KEY}`);
export const fetchSearchResults = (query) => {
  const parsedQuery = query.replaceAll(' ', '+');
  return BASE_API.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${parsedQuery}&page=1&include_adult=false`
  );
}
