/* Write a program that takes any number of command line arguments, converts each to pig latin (the rules are in the next paragraph), then puts the translated words together into one sentence logged to the console.

The true pig latin rules would be a bit difficult to implement, so let's simplify them. Convert a word to pig latin by taking its first letter, moving it to the end of the word, then adding "ay" after it all */

const pigLatin = function(originalStr) {
  let newStr = originalStr.substring(1);
  // console.log(newStr);

  let firstLetter = originalStr.substring(0, 1);
  // console.log(firstLetter);
  
  newStr += firstLetter + "ay";
  //console.log(newStr);
  return newStr;
};

let phrase = "";

const args = process.argv.slice(2);
//console.log(args);
for (let i = 0; i < args.length; i++) {
  phrase += pigLatin(args[i]) + " ";
}

console.log(phrase);

module.exports = pigLatin;

