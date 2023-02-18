const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); // => should FAIL
assertArraysEqual(eqArrays([1, 2, 3], [1, 5, 3]), true); // => should FAIL