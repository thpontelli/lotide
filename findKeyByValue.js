const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  // let objKey = "";
  let objKeys = Object.keys(obj);
  // console.log(objKeys);
  for (const objKey of objKeys) {
    if (obj[objKey] === val) {
      return objKey;
    }
  }
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  horror: "The Walking Dead" ,
  fantasy: "The Rings of Power",
  
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Walking Dead"), "horror");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Rings of Power"), "fantasy");