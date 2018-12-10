// Given an array and a target, return the target's index using binary search
const binarySearch = (arr, target) => {
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

console.log(binarySearch([1,3,5,8,10], 1));
console.log(binarySearch([1,3,5,8,10], 5));
console.log(binarySearch([1,3,5,8,10], 10));
console.log(binarySearch([1,3,5,8,10], 0));