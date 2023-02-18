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

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const eqObjects = function(object1, object2) {
  let obj1Keys = Object.keys(object1).sort(); // Creating array of keys for object1 and sorting
  let obj2Keys = Object.keys(object2).sort(); // Creating array of keys for object2 and sorting
  
  //console.log(obj1Keys);
  //console.log(obj2Keys);

  if (eqArrays(obj1Keys, obj2Keys)) {         // comparing if arrays of keys are equal
    for (const obj1Key of obj1Keys) {
      // Comparing if the values of the keys are arrays
      if (Array.isArray(object1[obj1Key]) && Array.isArray(object2[obj1Key])) {
        // If the two arrays are not equals return false
        if (!eqArrays(object1[obj1Key], object2[obj1Key])) {
          return false;
        }
      // if the values are not arrays and they are different return false
      }  else if (object1[obj1Key] !== object2[obj1Key]) {
        //console.log(object1[obj1Key], object2[obj1Key]);
        return false;
      }
    }
    return true;
  // if keys are different in the two objects return false
  } else {
    return false;
  }
};


// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false

module.exports = eqObjects;