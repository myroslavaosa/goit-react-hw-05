import { Link } from 'react-router-dom';

const GoBackLink = ({ to }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <Link to={to}>← Go back</Link>
    </div>
  );
};

export default GoBackLink;
