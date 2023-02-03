const reverseString = function(str) {
  let final = "";
  for (let i = str.length - 1; i >= 0; i--) {
    final += str[i];
  }
  console.log(final);
};

const args = process.argv.slice(2);
for (let j = 0; j < args.length; j++) {
  reverseString(args[j]);
}




// olleh
// eybdoog