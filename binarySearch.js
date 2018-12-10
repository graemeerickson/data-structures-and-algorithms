// Given an array and a target integer, return the target's index using binary search

// ITERATIVE APPROACH
const binarySearchIterative = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right-left) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearchIterative([1,3,5,8,10], 1));
console.log(binarySearchIterative([1,3,5,8,10], 5));
console.log(binarySearchIterative([1,3,5,8,10], 10));
console.log(binarySearchIterative([1,3,5,8,10], 0));

// RECURSIVE APPROACH
const binarySearchRecursive = (arr, target, left = 0, right = arr.length-1) => {
  let mid = left + Math.floor((right-left) / 2);
  if (arr[mid] === target) return mid;

  if (arr[mid] < target) {
    left = mid + 1;
  } else if (arr[mid] > target) {
    right = mid - 1;
  } else {
    return -1;
  }

  return binarySearchRecursive(arr, target, left, right);
}

console.log(binarySearchRecursive([1,3,5,8,10], 1));
console.log(binarySearchRecursive([1,3,5,8,10], 5));
console.log(binarySearchRecursive([1,3,5,8,10], 10));
console.log(binarySearchRecursive([1,3,5,8,10], 0));