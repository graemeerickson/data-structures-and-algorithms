// Given a Roman numeral string, return the integer representation. Assume clean & valid input.

const convertRomanNumeralToInt = str => {
  const conversionObj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  
  return str.split('').reduce((accum, current, index) => {
    conversionObj[current] < conversionObj[str[index + 1]])
      ? return accum -= conversionObj[current]
      : return accum += conversionObj[current];
  }, 0);
}

console.log(convertRomanNumeralToInt('CXXIX'))  // 129
console.log(convertRomanNumeralToInt('XLIX'))  // 49