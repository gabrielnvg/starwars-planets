import React, { useState, useEffect } from 'react';
import useFetch from 'use-http';
import randomizeIntWithinRange from './assets/js/utils/randomizeIntWithinRange';
import formatPlanet from './assets/js/utils/formatPlanet';

import Header from './components/Header/Header';
import FetchLoading from './components/FetchLoading/FetchLoading';
import FetchError from './components/FetchError/FetchError';
import PlanetInfo from './components/PlanetInfo/PlanetInfo';
import FetchButton from './components/FetchButton/FetchButton';

function App() {
  const [totalPlanets, setTotalPlanets] = useState(0);
  const [currentFetchedPlanet, setCurrentFetchedPlanet] = useState({});
  const { get, response, loading, error } = useFetch('https://swapi.dev/api');
  const useMountEffect = func => useEffect(func, []);

  async function fetchRandomPlanet(planetId) {
    const planet = await get(`/planets/${planetId}/`);
    if (response.ok) {
      setCurrentFetchedPlanet(planet);
    }
  }

  useMountEffect(() => {
    async function initialFetches() {
      const planets = await get('/planets/');
      if (response.ok) {
        setTotalPlanets(planets.count);
        fetchRandomPlanet(randomizeIntWithinRange(1, planets.count));
      }
    }
    initialFetches();
  });

  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="central-container">
          {loading && <FetchLoading />}
          {!loading && error && <FetchError />}
          {!loading && !error && (
            <PlanetInfo planet={formatPlanet(currentFetchedPlanet)} />
          )}
        </div>
        <FetchButton
          text="Next"
          onClick={() =>
            fetchRandomPlanet(randomizeIntWithinRange(1, totalPlanets))
          }
          isDisabled={loading}
        />
      </div>
    </div>
  );
}

export default App;
