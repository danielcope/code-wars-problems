// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//==========================================================================================================

// input : string
// output : string

// const highAndLow = str => str

//test data:

const data = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";

const highAndLow = (str) => {
  let splitString = str.split(" ").sort((a, b) => a - b);

  return `${splitString[splitString.length - 1]} ${splitString[0]}`;
};

console.log(highAndLow(data), `should return "42 -9"`);
