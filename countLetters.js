const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    //console.log(sentence[i]);
    // if (results[sentence[i]]) {
    //   results[sentence[i]] += 1;
    // } else {
    //   results[sentence[i]] = 1;
    // }

    results[sentence[i]] = results[sentence[i]] + 1 || 1;

  }

  return results;
};

console.log(countLetters("thomas e katy"));