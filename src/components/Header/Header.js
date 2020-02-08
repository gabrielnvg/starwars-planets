import React from 'react';
import styles from './Header.module.scss';

import logo from '../../assets/images/svg/star-wars-logo.svg';

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
      <h1>Star Wars Planets</h1>
    </header>
  );
}

export default Header;
