import React from 'react';
import styles from './FetchError.module.scss';

function FetchError() {
  return (
    <div className={styles['fetch-error']}>
      <div>Could not get a planet.</div>
      <div>Please check your connection and try again later.</div>
    </div>
  );
}

export default FetchError;
