import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { getMovieCast } from '../../api/api';

export default function MovieCast() {
  const { movieId } = useOutletContext();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.cast_id}>{actor.name} as {actor.character}</li>
        ))}
      </ul>
    </div>
  );
}
