import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api/api';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data.results); // contains the list of movies
      } catch (error) {
        console.error('Failed to fetch trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <section>
      <h1>MovieScout</h1>
      <p>Discover trending movies and find your next favorite.</p>

      <ul>
        {movies.slice(0, 20).map(movie => (
          <li key={movie.id}>
            {movie.title || movie.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
