import React, { memo } from 'react';
import styles from './FetchLoading.module.scss';

function FetchLoading() {
  return <div className={styles['fetch-loading']}>Loading...</div>;
}

export default memo(FetchLoading);
