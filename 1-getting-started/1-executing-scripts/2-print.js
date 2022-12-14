const theOneFunc = (printValue, numberOfSeconds) => {
  console.log(`${printValue} after ${numberOfSeconds} seconds`);
};

// Print hello after 4 seconds
setTimeout(theOneFunc, 4 * 1000, "Hello", 4);

// Print hello after 8 seconds
setTimeout(theOneFunc, 8 * 1000, "Hello", 8);
