import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Dogs from '../Assets/dogs.svg?react';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link to="/" aria-label="Dogs - Home" className={styles.logo}>
          <Dogs />
        </Link>
        <Link className={styles.login} to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
