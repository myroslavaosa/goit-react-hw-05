import axios from "axios";

// Base API URL
const API_BASE = "https://api.themoviedb.org/3";

// Your Bearer Token (Replace it with the token you provided)
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGQwYzFiYmJlOGRhZTMzYTdjN2Q5MzNjM2U3OWVlNCIsIm5iZiI6MTc0NjM0ODY1MS41NTEsInN1YiI6IjY4MTcyYTZiZmY1NDUyNmJmMTAzMTRhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-h3gI4CacI2rJKdevLi5hCEQVu5Ui0nEN5X7NCSJ5lM";

// Define headers with Bearer Token
const HEADERS = {
  Authorization: `Bearer ${API_TOKEN}`,
};

// Fetch trending movies
export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`${API_BASE}/trending/movie/day`, {
      headers: HEADERS,
      params: {
        language: "en-US",
        page: 1,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch trending movies:", error.response ? error.response.data : error.message);
  }
};

// Get movie details by ID
export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${API_BASE}/movie/${movieId}`, {
      headers: HEADERS,
      params: { language: "en-US" },
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch details for movie ID ${movieId}:`, error.response ? error.response.data : error.message);
  }
};

// Get movie cast information
export const getMovieCast = async (movieId) => {
  try {
    const response = await axios.get(`${API_BASE}/movie/${movieId}/credits`, {
      headers: HEADERS,
      params: { language: "en-US" },
    });
    return response.data.cast;
  } catch (error) {
    console.error(`Failed to fetch cast for movie ID ${movieId}:`, error.response ? error.response.data : error.message);
  }
};

// Get movie reviews by ID
export const getMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(`${API_BASE}/movie/${movieId}/reviews`, {
      headers: HEADERS,
      params: { language: "en-US" },
    });
    return response.data.results;
  } catch (error) {
    console.error(`Failed to fetch reviews for movie ID ${movieId}:`, error.response ? error.response.data : error.message);
  }
};

// Search for movies by keyword
export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${API_BASE}/search/movie`, {
      headers: HEADERS,
      params: {
        query: query,
        language: "en-US",
        page: 1,
      },
    });
    return response.data; // Returns the list of movies that match the query
  } catch (error) {
    console.error("Failed to search movies:", error.response ? error.response.data : error.message);
  }
};