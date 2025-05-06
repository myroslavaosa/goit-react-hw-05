// MoviesPage.jsx
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../api/api';
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [movies, setMovies] = useState([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (!query) return;
    const fetchMovies = async () => {
      try {
        const response = await searchMovies(query);
        setMovies(response.results || []);
        setSearched(true);
      } catch (error) {
        console.error('Search error:', error);
      }
    };
    fetchMovies();
  }, [query]);

  const handleSearch = e => {
    e.preventDefault();
    const input = e.target.elements.movie.value.trim();
    if (input) {
      setSearchParams({ query: input });
    }
  };

  return (
    <div>
      <h1>Search for a Movie</h1>
      <form onSubmit={handleSearch}>
        <input name="movie" placeholder="Input your movie" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} searched={searched} />
    </div>
  );
};

export default MoviesPage;
