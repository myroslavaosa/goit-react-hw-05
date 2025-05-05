import axios from "axios";

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
