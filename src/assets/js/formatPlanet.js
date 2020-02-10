const addDotsOnNumber = number => new Intl.NumberFormat().format(number);

const commaSeparatedStringToArray = string => string.split(', ');

const formatPlanet = fetchedPlanet => {
  let name = '???';
  if (fetchedPlanet.name && fetchedPlanet.name !== 'unknown') {
    name = fetchedPlanet.name;
  }
  let population = '???';
  if (fetchedPlanet.population && fetchedPlanet.population !== 'unknown') {
    population = addDotsOnNumber(fetchedPlanet.population);
  }
  let climate = ['???'];
  if (fetchedPlanet.climate && fetchedPlanet.climate !== 'unknown') {
    climate = commaSeparatedStringToArray(fetchedPlanet.climate);
  }
  let terrain = ['???'];
  if (fetchedPlanet.terrain && fetchedPlanet.terrain !== 'unknown') {
    terrain = commaSeparatedStringToArray(fetchedPlanet.terrain);
  }
  const films = fetchedPlanet.films ? fetchedPlanet.films.length : 0;

  return {
    name,
    population,
    climate,
    terrain,
    films,
  };
};

export default formatPlanet;
