const quickSort = arr => {
  if (arr.length <= 1) return arr;

  const pivot = arr.pop();
  const left = arr.filter(val => val <= pivot);
  const right = arr.filter(val => val > pivot);

  return quickSort(left).concat(pivot).concat(quickSort(right));
}

console.log(quickSort([5,3,7,1,0,8]));