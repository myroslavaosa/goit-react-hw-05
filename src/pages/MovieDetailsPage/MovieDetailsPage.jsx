import { Suspense, useState, useEffect, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../api/api';
import GoBackLink from '../../components/GoBackLink/GoBackLink';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || '/movies'); 

  useEffect(() => {
    if (!movieId) return;
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(err => console.error('Error fetching movie details:', err));
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <main className="movie-details">
      <GoBackLink to={backLinkRef.current} />

      <div className="movie-details-header">
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
        />
        <h1>{movie.title}</h1>
      </div>

      <div className="movie-overview">
        <h3>Overview:</h3>
        <p>{movie.overview}</p>
      </div>

      <div className="movie-release-date">
        <h4>Release Date:</h4>
        <p>{movie.release_date}</p>
      </div>

      <div className="movie-genres">
        <h4>Genres:</h4>
        <ul>
          {movie.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>

      <div className="movie-runtime">
        <h4>Runtime:</h4>
        <p>{movie.runtime} minutes</p>
      </div>

      <div className="movie-language">
        <h4>Language:</h4>
        <p>{movie.original_language}</p>
      </div>

      <ul>
        <li>
          <Link to="cast" state={{ from: backLinkRef.current }}>Cast</Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkRef.current }}>Reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet context={{ movieId }} />
      </Suspense>
    </main>
  );
}
