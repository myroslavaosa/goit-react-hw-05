import { Suspense, useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../api/api'; // Adjust path if needed

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/'; // Base URL for the images

export default function MovieDetailsPage() {
  const { movieId } = useParams(); // Retrieve movieId from URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(err => console.error('Error fetching movie details:', err));
  }, [movieId]);

  // If movie data is not available yet, show a loading message
  if (!movie) return <div>Loading...</div>;

  return (
    <main className="movie-details">
      <div className="movie-details-header">
        {/* Movie Poster */}
        <img 
          src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
          alt={movie.title} 
          className="movie-poster"
        />

        {/* Movie Title */}
        <h1>{movie.title}</h1>
      </div>

      {/* Movie Overview - Long description */}
      <div className="movie-overview">
        <h3>Overview:</h3>
        <p>{movie.overview}</p>
      </div>

      {/* Movie Release Date */}
      <div className="movie-release-date">
        <h4>Release Date:</h4>
        <p>{movie.release_date}</p>
      </div>

      {/* Movie Genres */}
      <div className="movie-genres">
        <h4>Genres:</h4>
        <ul>
          {movie.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>

      {/* Movie Runtime */}
      <div className="movie-runtime">
        <h4>Runtime:</h4>
        <p>{movie.runtime} minutes</p>
      </div>

      {/* Movie Language */}
      <div className="movie-language">
        <h4>Language:</h4>
        <p>{movie.original_language}</p>
      </div>

      {/* Links for Cast and Reviews */}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      {/* Lazy load the Cast and Reviews sections */}
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet context={{ movieId }} /> {/* Render either Cast or Reviews */}
      </Suspense>
    </main>
  );
}
