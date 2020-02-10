import React from 'react';
import PropTypes from 'prop-types';
import styles from './FetchButton.module.scss';

function FetchButton({ text, onClick }) {
  return (
    <div className={styles['fetch-button']}>
      <button type="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

FetchButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FetchButton;
