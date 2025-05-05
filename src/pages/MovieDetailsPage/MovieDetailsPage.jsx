import { Suspense, useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../api/api'; // Adjust path if needed

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(err => console.error('Error fetching movie details:', err));
  }, [movieId]);

  return (
    <main>
      <h1>{movie ? movie.title : 'Loading movie...'}</h1>
      <p>{movie?.overview}</p>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet context={{ movieId }} />
      </Suspense>
    </main>
  );
}
