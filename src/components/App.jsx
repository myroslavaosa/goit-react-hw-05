import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import './App.css';  // Normal import for CSS
import { Header } from './Header/Header';

// Lazy loading for pages and components
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));

const App = () => {
  return (
    <div className="container"> {/* Using a className directly */}
      <Suspense fallback={<div>Loading page...</div>}>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
