const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let position = [];
    //console.log(sentence[i]);
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        // console.log(results[sentence[i]][0]);
        for (j = 0; j < results[sentence[i]].length; j++) {
          position.push(results[sentence[i]][j]);
        }
        position.push(i);
        results[sentence[i]] = position;
        // console.log(results[sentence[i]]);
      } else {
        position.push(i);
        results[sentence[i]] = position;
      }
    }
  }


  return results;
};


//assertArraysEqual(letterPositions("hello"), {h: 0, e: 1, l: 2, o: 4});
//console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello hello").h, [0,6]);
assertArraysEqual(letterPositions("hello hello").e, [1,7]);
assertArraysEqual(letterPositions("hello hello").l, [2,3,8,9]);
assertArraysEqual(letterPositions("hello hello").o, [4,10]);



