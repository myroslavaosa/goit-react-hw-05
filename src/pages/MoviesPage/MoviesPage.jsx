// MoviesPage.jsx
import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import { searchMovies } from '../../api/api'; // Import the new search function
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searched, setSearched] = useState(false); // Track if the user has searched

  const handleSearch = async (values) => {
    setSearched(true);  // Set the searched flag to true when search is triggered
    const response = await searchMovies(values.movie);
    setMovies(response.results); // Set the search results
  };

  return (
    <div>
      <h1>Search for a Movie</h1>
      <Formik
        initialValues={{ movie: '' }}
        onSubmit={handleSearch}
      >
        {() => (
          <Form>
            <label htmlFor="movie">Input your movie:</label>
            <Field id="movie" name="movie" placeholder="Input your movie" />
            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>

      <MovieList movies={movies} searched={searched} /> {/* Pass searched flag */}
    </div>
  );
};

export default MoviesPage;
