/*
  Given a sorted array and a target, find the index of the target in the array. Note that the sorted array may be shifted.
  
  Scenarios:
    1. target is less than mid but also less than the start -> go right
    2. target is less than mid and greater than or equal to the start -> go left
    3. target is greater than mid but also greater than the start -> go right
    4. target is greater than mid but also greater than the end -> go left
    5. target is greater than mid and less than or equal to the end -> go right
    6. target does not exist
*/

const getTargetIndexRecursive = (arr, target, left = 0, right = arr.length) => {  
  let mid = Math.floor((left + right) / 2);
  if (mid >= arr.length) return console.log(`${target} is not present in the array.`);
  if (arr[mid] === target) return console.log(`Target is at index: ${mid}`);
  
  if (target < arr[mid] && target < arr[left]) { // scenario 1
    left = mid + 1;
  } else if (target < arr[mid] && target >= arr[left]) { // scenario 2
    right = mid - 1;
  } else if (target > arr[mid] && target > arr[left]) { // scenario 3
    left = mid + 1;
  } else if (target > arr[mid] && target > arr[right-1]) { // scenario 4
    right = mid - 1;
  } else if (target > arr[mid] && target <= arr[right-1]){ // scenario 5
    left = mid + 1;
  } else {
    return console.log(`Unforeseen scenario`);
  }
  
  return getTargetIndexRecursive(arr, target, left, right);
}

// test cases
getTargetIndexRecursive([1,2,3,4,5], 5) // basic non-shifted array
getTargetIndexRecursive([2,3,4,5,1], 1) // scenario 1
getTargetIndexRecursive([2,3,4,5,1], 2) // scenario 2
getTargetIndexRecursive([3,4,5,1,2], 4) // scenario 2
getTargetIndexRecursive([2,3,4,5,1], 5) // scenario 3
getTargetIndexRecursive([5,1,2,3,4], 5) // scenario 4
getTargetIndexRecursive([5,1,2,3,4], 3) // scenario 5
getTargetIndexRecursive([5,1,2,3,4], 6) // scenario 6


/*
Iterative version below - still work in progress
-------------------------------------------------
const getTargetIndexIterative = (arr, target) => {  
  let left = arr[0];
  let right = arr[arr.length-1];
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    // console.log(`left: ${left}; right: ${right}`)
    if (arr[mid] === target) return console.log(`Target is at index: ${mid}`);
    
    if (target < arr[mid] && target < arr[left]) { // scenario 1
      left = mid + 1;
    } else if (target < arr[mid] && target >= arr[left]) { // scenario 2
      right = mid - 1;
    } else if (target > arr[mid] && target > arr[left]) { // scenario 3
      left = mid + 1;
    } else if (target > arr[mid] && target > arr[right-1]) { // scenario 4
      right = mid - 1;
    } else if (target > arr[mid] && target <= arr[right-1]){ // scenario 5
      left = mid + 1;
    } else {
      return console.log(`Unforeseen scenario`);
    }
  }
  return console.log(`${target} is not present in the array.`);
}

// test cases
getTargetIndexIterative([1,2,3,4,5], 5) // basic non-shifted array
getTargetIndexIterative([2,3,4,5,1], 1) // scenario 1
getTargetIndexIterative([2,3,4,5,1], 2) // scenario 2
getTargetIndexIterative([3,4,5,1,2], 4) // scenario 2
getTargetIndexIterative([2,3,4,5,1], 5) // scenario 3
getTargetIndexIterative([5,1,2,3,4], 5) // scenario 4
getTargetIndexIterative([5,1,2,3,4], 3) // scenario 5
getTargetIndexIterative([5,1,2,3,4], 6) // scenario 6
*/