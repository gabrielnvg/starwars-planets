import React, { useState, useEffect, useRef } from 'react';
import useFetch from 'use-http';
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
    if (mounted.current) return;
    mounted.current = true;
    fetchTotalPlanets();
    fetchRandomPlanet('1');
  });

  useEffect(() => {
    // console.log('currentFetchedPlanet', currentFetchedPlanet);
  }, [currentFetchedPlanet]);

  useEffect(() => {
    // console.log('totalPlanets', totalPlanets);
  }, [totalPlanets]);

  return (
    <div>
      <Header />
      {request.loading && <FetchLoading />}
      {request.error && <FetchError />}
      {!request.loading && !request.error && (
        <PlanetInfo planet={formatPlanet(currentFetchedPlanet)} />
      )}
      <FetchButton text="Next" onClick={() => fetchRandomPlanet(28)} />
    </div>
  );
}

export default App;
