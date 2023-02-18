// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   } else {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
// };

// const eqObjects = function(object1, object2) {
  //   let obj1Keys = Object.keys(object1).sort(); // Creating array of keys for object1 and sorting
  //   let obj2Keys = Object.keys(object2).sort(); // Creating array of keys for object2 and sorting
  
//   //console.log(obj1Keys);
//   //console.log(obj2Keys);

//   if (eqArrays(obj1Keys, obj2Keys)) {         // comparing if arrays of keys are equal
//     for (const obj1Key of obj1Keys) {
//       // Comparing if the values of the keys are arrays
//       if (Array.isArray(object1[obj1Key]) && Array.isArray(object2[obj1Key])) {
//         // If the two arrays are not equals return false
//         if (!eqArrays(object1[obj1Key], object2[obj1Key])) {
//           return false;
//         }
//       // if the values are not arrays and they are different return false
//       }  else if (object1[obj1Key] !== object2[obj1Key]) {
//         //console.log(object1[obj1Key], object2[obj1Key]);
//         return false;
//       }
//     }
//     return true;
//   // if keys are different in the two objects return false
//   } else {
//     return false;
//   }
// };


// const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '10', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1', c: '45'});
assertObjectsEqual({ a: '1', b: 2, c: ["apple", "grape"]}, { b: 2, a: '1', c: ["apple", "grape"]});
assertObjectsEqual({ a: '1', b: 2, c: ["apple", "grape"]}, { b: 2, a: '1', c: ["pear", "grape"]});

module.exports = assertObjectsEqual;

