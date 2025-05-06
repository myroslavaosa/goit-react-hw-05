// components/GoBackLink/GoBackLink.jsx
import { Link, useLocation } from 'react-router-dom';

const GoBackLink = () => {
  const location = useLocation();
  const backLink = location.state?.from || '/movies';

  return (
    <div style={{ marginBottom: '1rem' }}>
      <Link to={backLink}>← Go back</Link>
    </div>
  );
};

export default GoBackLink;
