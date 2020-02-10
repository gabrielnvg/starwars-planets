const randomizeIntWithinRange = (firstInt, lastInt) =>
  Math.floor(Math.random() * (lastInt - firstInt + 1)) + firstInt;

export default randomizeIntWithinRange;
