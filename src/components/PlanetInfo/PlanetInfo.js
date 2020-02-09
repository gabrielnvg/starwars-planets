import React from 'react';
import PropTypes from 'prop-types';
import styles from './PlanetInfo.module.scss';

import svgInfoSeparator from '../../assets/images/svg/info-separator.svg';

function PlanetInfo({ planet }) {
  return (
    <div className={styles['planet-info']}>
      <div className={styles.name}>{planet.name}</div>

      <div className={styles['info-container']}>
        <div className={styles['info-row']}>
          <div className={styles['info-key']}>Population:</div>
          <div className={styles['info-value']}>{planet.population}</div>
        </div>

        <img
          className={styles['info-separator']}
          src={svgInfoSeparator}
          alt="info separator"
        />

        <div className={styles['info-row']}>
          <div className={styles['info-key']}>Climate:</div>
          <div className={styles['info-value']}>
            {planet.climate.map((climate, index) => (
              <div className={styles['info-value__item']}>
                {`${climate}${index + 1 === planet.climate.length ? '' : ','}`}
              </div>
            ))}
          </div>
        </div>

        <img
          className={styles['info-separator']}
          src={svgInfoSeparator}
          alt="info separator"
        />

        <div className={styles['info-row']}>
          <div className={styles['info-key']}>Terrain:</div>
          <div className={styles['info-value']}>
            {planet.terrain.map((terrain, index) => (
              <div className={styles['info-value__item']}>
                {`${terrain}${index + 1 === planet.terrain.length ? '' : ','}`}
              </div>
            ))}
          </div>
        </div>

        <img
          className={styles['info-separator']}
          src={svgInfoSeparator}
          alt="info separator"
        />

        <div
          className={`${styles['info-row']} ${styles['info-row--featured-films']}`}
        >
          Featured in{' '}
          <span className={styles['number-films-featured']}>
            {planet.films}
          </span>{' '}
          {planet.films < 2 ? 'film' : 'films'}
        </div>
      </div>
    </div>
  );
}

PlanetInfo.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    climate: PropTypes.arrayOf(PropTypes.string).isRequired,
    terrain: PropTypes.arrayOf(PropTypes.string).isRequired,
    films: PropTypes.number.isRequired,
  }).isRequired,
};

export default PlanetInfo;
