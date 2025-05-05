import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function MovieDetailsPage() {
  return (
    <main>
          <h1>About Movie</h1>
          const [movie, setMovie] = useState();
      <p>
        input about movie
      </p>
      <ul>
        <li>
          <Link to="cast">Read about our mission</Link>
        </li>
        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
}