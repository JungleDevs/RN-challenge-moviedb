import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 90000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const API_KEY = 'ab40d2af0dd1737f8538d66a16971720';

export interface Movie {
  release_date: string;
  adult: boolean;
  backdrop_path?: string;
  poster_path?: string;
  id: number;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  vote_count: number;
  video: boolean;
  vote_average: number;
  title: string;
  overview: string;
  popularity: number;
  media_type: string;
}
interface Trending {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

export const getTrendingMovies = async (): Promise<AxiosResponse<Trending>> => {
  try {
    const url = `/trending/movie/week?api_key=${API_KEY}`;
    const response = await api.get<Trending>(url);
    return response;
  } catch (e) {
    throw new Error('Não foi possível carregar os dados');
  }
};

export const getGenres = async (): Promise<
  AxiosResponse<{ genres: Genre[] }>
> => {
  try {
    const url = `/genre/movie/list?api_key=${API_KEY}`;
    const response = await api.get<{ genres: Genre[] }>(url);
    return response;
  } catch (e) {
    throw new Error('Não foi possível carregar os dados');
  }
};
