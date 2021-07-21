import axios from 'axios';

const apiKey = 'api_key=630923786894f813724e6fd319d2f740';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const trendingMovies = async () => {
  const response = await api.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`,
  );
  console.log(response.results);
};

export default api;
