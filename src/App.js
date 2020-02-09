import React from 'react';

import Header from './components/Header/Header';
import PlanetInfo from './components/PlanetInfo/PlanetInfo';

import formatPlanet from './assets/js/formatPlanet';
import mockPlanet from './assets/js/mockPlanet';

function App() {
  const formattedPlanet = formatPlanet(mockPlanet);

  return (
    <div>
      <Header />
      <PlanetInfo planet={formattedPlanet} />
    </div>
  );
}

export default App;
