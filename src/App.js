import React, { useState, useEffect } from 'react';
import fetchWithTimeout from './assets/js/utils/fetchWithTimeout';
import randomizeIntWithinRange from './assets/js/utils/randomizeIntWithinRange';
import formatPlanet from './assets/js/utils/formatPlanet';

import Header from './components/Header/Header';
import FetchLoading from './components/FetchLoading/FetchLoading';
import FetchError from './components/FetchError/FetchError';
import PlanetInfo from './components/PlanetInfo/PlanetInfo';
import FetchButton from './components/FetchButton/FetchButton';

function App() {
  const [state, setState] = useState({
    fetchStatus: {
      isLoading: true,
      hasError: false,
    },
    fetchedPlanets: {},
    currentFetchedPlanet: {},
  });
  const [totalPlanets, setTotalPlanets] = useState(0);
  const useMountEffect = callbackFunction => useEffect(callbackFunction, []);

  const apiPrefix = 'https://swapi.dev/api';

  const fetchRandomPlanet = async planetId => {
    if (planetId in state.fetchedPlanets) {
      setTimeout(
        () =>
          setState({
            ...state,
            fetchStatus: { isLoading: false, hasError: false },
            currentFetchedPlanet: state.fetchedPlanets[planetId],
          }),
        300,
      );
    } else {
      await fetchWithTimeout({
        url: `${apiPrefix}/planets/${planetId}/`,
        timeout: 10000,
      })
        .then(response => response.json())
        .then(planet => {
          setState({
            ...state,
            fetchStatus: { isLoading: false, hasError: false },
            fetchedPlanets: {
              ...state.fetchedPlanets,
              [planetId]: planet,
            },
            currentFetchedPlanet: planet,
          });
        })
        .catch(() => {
          setState({
            ...state,
            fetchStatus: { isLoading: false, hasError: true },
          });
        });
    }
  };

  const initialFetches = async () => {
    await fetchWithTimeout({ url: `${apiPrefix}/planets/`, timeout: 10000 })
      .then(response => response.json())
      .then(planets => {
        setTotalPlanets(planets.count);
        fetchRandomPlanet(randomizeIntWithinRange(1, planets.count));
      })
      .catch(() => {
        setState({
          ...state,
          fetchStatus: { isLoading: false, hasError: true },
        });
      });
  };

  useMountEffect(() => {
    initialFetches();
  });

  const handleButtonClick = () => {
    setState({
      ...state,
      fetchStatus: { isLoading: true, hasError: false },
    });
    if (totalPlanets) {
      fetchRandomPlanet(randomizeIntWithinRange(1, totalPlanets));
    } else {
      initialFetches();
    }
  };

  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="central-container">
          {state.fetchStatus.isLoading && <FetchLoading />}
          {!state.fetchStatus.isLoading && state.fetchStatus.hasError && (
            <FetchError />
          )}
          {!state.fetchStatus.isLoading && !state.fetchStatus.hasError && (
            <PlanetInfo planet={formatPlanet(state.currentFetchedPlanet)} />
          )}
        </div>
        <FetchButton
          text="Next"
          onClick={handleButtonClick}
          isDisabled={state.fetchStatus.isLoading}
        />
      </div>
    </div>
  );
}

export default App;
