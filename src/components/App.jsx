import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import Header from './Header/Header';
import css from './App.module.css';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const Cast = lazy(() => import('../components/MovieCast'));
const Reviews = lazy(() => import('../components/MovieReviews'));

export const App = () => {
  return (
    <div className={css.container}>
      <Header />

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/moviespage" element={<MoviesPage />} />
          <Route path="/moviespage/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
