// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

// argument: arr of numbers. At least 3 numbers
// return: number

//pseudo code:
// define function called Unique

const test = [2, 3, 2, 2, 2, 2];
const test1 = [1, 2, 2, 2, 2, 2];

const unique = (arr) => {
  let unique = 0;

  if (arr[0] === arr[1] && arr[2] !== arr[0]) {
    unique = arr[2];
  } else if (arr[0] !== arr[1] && arr[0] === arr[2]) {
    unique = arr[1];
  } else if (arr[0] !== arr[1] && arr[1] === arr[2]) {
    unique = arr[0];
  } else {
    unique = arr.find((e) => e !== arr[0]);
  }

  return unique;
};

console.log(unique(test));
console.log(unique(test1));
