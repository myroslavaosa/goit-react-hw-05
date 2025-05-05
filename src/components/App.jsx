import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import { AppBar } from './AppBar';
import css from './App.module.css';
import Header from './Header/Header';

const HomePage = lazy(() => import('../pages/Homepage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));

export const App = () => {
  return (
    <div className={css.container}>
      <Header />

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/moviespage" element={<MoviesPage />}>
            <Route path="moviedetailspage" element={<MovieDetailsPage />} />
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
