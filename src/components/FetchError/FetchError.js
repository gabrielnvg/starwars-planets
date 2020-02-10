import React from 'react';
import styles from './FetchError.module.scss';

function FetchError() {
  return (
    <div className={styles['fetch-error']}>
      <div className={styles['text-row']}>Could not get a planet.</div>
      <div className={styles['text-row']}>Please check your connection and try again later.</div>
    </div>
  );
}

export default FetchError;
