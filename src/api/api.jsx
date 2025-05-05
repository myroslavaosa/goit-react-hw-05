import axios from "axios";

const API_BASE = "https://api.themoviedb.org/3";
const HEADERS = {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGQwYzFiYmJlOGRhZTMzYTdjN2Q5MzNjM2U3OWVlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-h3gI4CacI2rJKdevLi5hCEQVu5Ui0nEN5X7NCSJ5lM"
};

export const getTrendingMovies = async () => {
  const response = await axios.get("https://api.themoviedb.org/3/trending/movie/day", {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGQwYzFiYmJlOGRhZTMzYTdjN2Q5MzNjM2U3OWVlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-h3gI4CacI2rJKdevLi5hCEQVu5Ui0nEN5X7NCSJ5lM"
    },
    params: {
      language: "en-US",
      page: 1
    }
  });

  return response.data;
};

// Get details about one movie by ID
export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`${API_BASE}/movie/${movieId}`, {
    headers: HEADERS,
    params: { language: "en-US" },
  });
  return response.data;
};

// Get cast info
export const getMovieCast = async (movieId) => {
  const response = await axios.get(`${API_BASE}/movie/${movieId}/credits`, {
    headers: HEADERS,
    params: { language: "en-US" },
  });
  return response.data.cast;
};

// Get reviews
export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`${API_BASE}/movie/${movieId}/reviews`, {
    headers: HEADERS,
    params: { language: "en-US" },
  });
  return response.data.results;
};