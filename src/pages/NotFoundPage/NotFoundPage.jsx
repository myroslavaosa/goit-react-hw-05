import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 5000);
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Redirecting to homepage in 5 seconds...</p>
    </div>
  );
}
