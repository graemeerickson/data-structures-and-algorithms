// Given any number of arrays as arguments, return a new de-duplicated array.

const sortedUnion = () => {
  // concat arrays to one array
  let concatenatedArgs = [];
  for (let arg in arguments) {
    concatenatedArgs = concatenatedArgs.concat(arguments[arg]);
  };

  // convert array to Set to remove dups, then spread Set into an array
  return [... new Set(concatenatedArgs)];
}

console.log(sortedUnion([1,2,3],[4,5,6],[2,3]));