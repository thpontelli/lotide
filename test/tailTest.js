// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// const words2 = ["Yo Yo"];
// console.log(tail(words2)); // no need to capture the return value since we are not checking it
// assertEqual(words2.length, 1); // original array should still have 1 elements!

// const words3 = [];
// console.log(tail(words3)); // no need to capture the return value since we are not checking it
// assertEqual(words3.length, 0); // original array should still have 0 elements!

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"];', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('returns [] for ["Yo Yo"];', () => {
    assert.deepEqual(tail(["Yo Yo"]), []);
  });

  it('returns [] for [];', () => {
    assert.deepEqual(tail([]), []);
  });

});



