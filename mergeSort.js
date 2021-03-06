const sorted = (arr1, arr2) => {
  const tmpArr = [];
  while (arr1.length && arr2.length) {
    arr1[0] <= arr2[0] ? tmpArr.push(arr1.shift()) : tmpArr.push(arr2.shift());
  }

  return tmpArr.concat(arr1).concat(arr2);
}

const mergeSort = arr => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  
  return sorted(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([5,3,7,1,0,8]));