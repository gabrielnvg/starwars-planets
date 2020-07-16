import React, { memo } from 'react';
import styles from './Header.module.scss';

import svgLogo from '../../assets/images/svg/star-wars-logo.svg';
import svgHeaderSeparator from '../../assets/images/svg/header-separator.svg';

function Header() {
  return (
    <header className={styles.header}>
      <div className="main-container">
        <img className={styles.logo} src={svgLogo} alt="logo" />
        <div className={styles['text-container']}>
          <h1 className={styles.text}>Random Planets</h1>
          <img className={styles.separator} src={svgHeaderSeparator} alt="header separator" />
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
