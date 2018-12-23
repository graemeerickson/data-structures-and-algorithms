// Given a decimal number 'n', convert and return the binary representation.

const convertDecimalToBinary = n => {
  if (n == 0) return 0;

  const binaryNum = [];
  while (n > 0) {
    binaryNum.unshift(n % 2);
    n = Math.floor(n / 2);
  }

  return binaryNum.join('');
}

console.log(convertDecimalToBinary(0));
console.log(convertDecimalToBinary(2));
console.log(convertDecimalToBinary(5));
console.log(convertDecimalToBinary(64));