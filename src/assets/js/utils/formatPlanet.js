const addDotsOnNumber = number => new Intl.NumberFormat().format(number);
const commaSeparatedStringToArray = string => string.split(', ');

const formatPlanet = fetchedPlanet => ({
  name:
    fetchedPlanet.name && fetchedPlanet.name !== 'unknown'
      ? fetchedPlanet.name
      : '???',
  population:
    fetchedPlanet.population && fetchedPlanet.population !== 'unknown'
      ? addDotsOnNumber(fetchedPlanet.population)
      : '???',
  climate:
    fetchedPlanet.climate && fetchedPlanet.climate !== 'unknown'
      ? commaSeparatedStringToArray(fetchedPlanet.climate)
      : ['???'],
  terrain:
    fetchedPlanet.terrain && fetchedPlanet.terrain !== 'unknown'
      ? commaSeparatedStringToArray(fetchedPlanet.terrain)
      : ['???'],
  films: fetchedPlanet.films ? fetchedPlanet.films.length : 0,
});

export default formatPlanet;
