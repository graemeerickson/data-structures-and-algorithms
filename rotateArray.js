// Given an array of integers 'arr' and number of rotations 'n', rotate the array left n times and return the rotated array

// ITERATIVE APPROACH
const rotateArrLeftIterative = (arr, n) => {
  for (let i = 0; i < n; i++) {
    arr.push(arr.shift());
  }
  return arr;
}

console.log(rotateArrLeftIterative([1,2,3,4,5], 4));

// RECURSIVE APPROACH
const rotateArrLeftRecursive = (arr, n) => {
  if (n === 0) return arr;
  arr.push(arr.shift());
  return rotateArrLeftRecursive(arr, n-1);
}

console.log(rotateArrLeftRecursive([1,2,3,4,5], 4));