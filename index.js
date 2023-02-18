const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const eqObjects = require('./eqObjects');
const takeUntil = require('./takeUntil');
const assertObjectsEqual = require('./assertObjectsEqual');
const findKey = require('./findKey');
const letterPositions = require('./letterPositions');
const countLetters = require('./countLetters');
const findKeyByValue = require('./findKeyByValue');
const map = require('./map');
//const pig-latin = require('./pig-latin');
const without = require('./without');
const countOnly = require('./countOnly');
const flatten = require('./flatten');
const reverse = require('./reverse');

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  eqArrays,
  assertEqual,
  eqObjects,
  takeUntil,
  assertObjectsEqual,
  findKey,
  letterPositions,
  countLetters,
  findKeyByValue,
  map,
  //pig-latin: pig-latin,
  without,
  countOnly,
  flatten,
  reverse,
};

