/*
  Quicksort algorithm with recursive approach.
  Time complexity: O(n log(n))
*/

const quickSort = arr => {
  if (arr.length <= 1) return arr;

  const pivot = arr.pop();
  const left = arr.filter(val => val <= pivot);
  const right = arr.filter(val => val > pivot);

  return quickSort(left).concat(pivot).concat(quickSort(right));
}

console.log(quickSort([3,7,8,5,2,1,9,5,4]));