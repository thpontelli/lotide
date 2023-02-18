// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const assertEqual = require('./assertEqual');

const findKey = function(obj, callback) {
  let objKeys = Object.keys(obj);         // Array of the Keys of the Object
  for (const objKey of objKeys) {         // iterating through the keys of the object
    //console.log(objKey);
    //console.log(obj[objKey].stars);
    if (callback(obj[objKey])) {          // calling callback fn using as argument the object key
      return objKey;
    }
  }
};

const newObj = {
  HarryPotter: "Daniel Radcliffe",
  HermioneGranger: "Emma Watson",
  RonyWeasley: "Rupert Grint",
  Dumbledore: "Michael Gambon"
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey(newObj, x => x === "Emma Watson"), "HermioneGranger");

module.exports = findKey;
