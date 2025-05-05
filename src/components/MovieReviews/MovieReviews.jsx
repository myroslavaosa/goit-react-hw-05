import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { getMovieReviews } from '../../api/api';

export default function MovieReviews() {
  const { movieId } = useOutletContext();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <strong>{review.author}:</strong> {review.content}
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
}
