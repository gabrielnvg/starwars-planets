const addDotsOnNumber = number => new Intl.NumberFormat().format(number);

const commaSeparatedStringToArray = string => string.split(", ");

const formatPlanet = fetchedPlanet => {
  return {
    name: fetchedPlanet.name,
    population: addDotsOnNumber(fetchedPlanet.population),
    climate: commaSeparatedStringToArray(fetchedPlanet.climate),
    terrain: commaSeparatedStringToArray(fetchedPlanet.terrain),
    films: fetchedPlanet.films.length,
  };
};

export default formatPlanet;
