/*
  Challenge: String minimizer
  Solution complexity:
    Time: O(n)
    Space: O(n)
*/

// Helper functions
const isIdentifier = char => (/[a-zA-Z]/).test(char);
const isKnownWord = (word, obj) => obj[word];
const getIdentifierValue = (identifier, knownWordsObj, wordIndex) => {
  if (isKnownWord(identifier, knownWordsObj)) {
    return knownWordsObj[identifier];
  } else {
    knownWordsObj[identifier] = '$' + wordIndex;
    return identifier;
  }
}

/*
  Accumulate alphabetical characters into an identifier until a non-identifier is reached, then concatenate the identifier or its related value (e.g., $0) as well as the current non-identifier to the minimized string.
*/
const minimize = str => {
  let minimizedStr = '';
  let identifier = '';
  let wordIndex = 0;
  const knownWordsObj = {};

  for (let i = 0; i < str.length; i++) {
    if (isIdentifier(str[i])) {
      identifier += str[i];
    } else {
      if (identifier) {
        minimizedStr += getIdentifierValue(identifier, knownWordsObj, wordIndex);
        wordIndex++;
      }
      minimizedStr += str[i];
      identifier = '';
    }
  }
  // If identifier isn't empty at end of loop, update minimized string one last time
  if (identifier) {
    minimizedStr += getIdentifierValue(identifier, knownWordsObj, wordIndex);
  }

  return minimizedStr;
}

// Input strings
const str1 = '';
const str2 = 'you say yes, I say no you say stop and I say go go go';
const str3 = 'you say yes, I say alice jump4joy you say stop and I say go go go alice jump4joy';

console.log('String 1:', str1);
console.log('Minimized:', minimize(str1));
console.log();
console.log('String 2:', str2);
console.log('Minimized:', minimize(str2));
console.log();
console.log('String 3:', str3);
console.log('Minimized:', minimize(str3));