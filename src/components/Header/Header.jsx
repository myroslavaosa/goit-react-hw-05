// Header.jsx
import css from './Header.module.css';
import Navigation from '../Navigation/Navigation';

export const Header = () => {
  return (
    <header className={css.header}>
      <p className={css.logo}>
        <span role="img" aria-label="computer icon">💻</span> Movies
      </p>
      <Navigation />
    </header>
  );
};
