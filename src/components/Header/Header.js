import React from 'react';
import styles from './Header.module.scss';

import imgLogo from '../../assets/images/svg/star-wars-logo.svg';
import imgSeparator from '../../assets/images/svg/separator.svg';

function Header() {
  return (
    <header className={styles.header}>
      <div className="main-container">
        <img className={styles.logo} src={imgLogo} alt="logo" />
        <div className={styles['text-container']}>
          <h1 className={styles.text}>Random Planets</h1>
          <img className={styles.separator} src={imgSeparator} alt="separator" />
        </div>
      </div>
    </header>
  );
}

export default Header;
