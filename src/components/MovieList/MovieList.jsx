// MovieList.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';  
import styles from './MovieList.module.css';  

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

const MovieList = ({ movies, searched }) => {
  const location = useLocation();

  if (searched && (!movies || movies.length === 0)) {
    return <p>No movies found. Please try a different search.</p>;
  }

  return (
    <div className={styles['movie-list']}>
      {movies.map(movie => (
        <div 
          className={clsx(styles['movie-item'], {
            [styles['highlighted']]: movie.title.toLowerCase().includes('action'), 
          })} 
          key={movie.id}
        >
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img 
              src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
              alt={movie.title}
              className={styles['movie-poster']}
            />
            <h3>{movie.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
