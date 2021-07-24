import axios from 'axios';

export const apiKey = 'api_key=630923786894f813724e6fd319d2f740';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const trendingMovies = async page => {
  const url = `trending/movie/week?${apiKey}&page=${page}`;
  return api.get(url);
};

export const topMoviesApi = async page => {
  const url = `movie/top_rated?${apiKey}&language=en-US&page=${page}`;
  return api.get(url);
};

export default api;
