import React from 'react';
import PropTypes from 'prop-types';
import styles from './FetchButton.module.scss';

function FetchButton({ text, onClick, isDisabled }) {
  return (
    <div className={styles['fetch-button']}>
      <button className={styles['button-element']} type="button" onClick={onClick} disabled={isDisabled}>
        {text}
      </button>
    </div>
  );
}

FetchButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default FetchButton;
