import React, { useState, useEffect, useRef } from 'react';
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
  const [request, response] = useFetch('https://swapi.co/api');
  const mounted = useRef(false);

  async function fetchTotalPlanets() {
    const planets = await request.get('/planets');
    if (response.ok) {
      setTotalPlanets(planets.count);
    }
  }

  async function fetchRandomPlanet(planetId) {
    const planet = await request.get(`/planets/${planetId}`);
    if (response.ok) {
      setCurrentFetchedPlanet(planet);
    }
  }

  useEffect(() => {
    if (mounted.current) {
      return;
    }
    mounted.current = true;
    fetchTotalPlanets();
  });

  useEffect(() => {
    if (!totalPlanets) {
      return;
    }
    fetchRandomPlanet(randomizeIntWithinRange(1, totalPlanets));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPlanets]);

  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="central-container">
          {request.loading && <FetchLoading />}
          {(!request.loading && request.error) && <FetchError />}
          {!request.loading && !request.error && (
            <PlanetInfo planet={formatPlanet(currentFetchedPlanet)} />
          )}
        </div>
        <FetchButton
          text="Next"
          onClick={() => fetchRandomPlanet(randomizeIntWithinRange(1, totalPlanets))}
          isDisabled={request.loading}
        />
      </div>
    </div>
  );
}

export default App;
