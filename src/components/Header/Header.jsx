import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Header.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Header = () => {
  return (
    <header className={css.header}>
      <p className={css.logo}>
        <span role="img" aria-label="computer icon">
          💻
        </span>{' '}
        Movies
      </p>

      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>

        <NavLink to="/moviespage" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
