// Given a Roman numeral string, return the integer representation.

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
  
  const num = str.split('').reduce((accum, current, index) => {
    let nextChar = str[index + 1];
    if (conversionObj[current] < conversionObj[nextChar]) {
      accum -= conversionObj[current];
    } else {
      accum += conversionObj[current];
    }
    return accum;
  }, 0);

  return console.log(num);
}

convertRomanNumeralToInt('CXXIX')  // 129
convertRomanNumeralToInt('XLIX')  // 49