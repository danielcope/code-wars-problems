// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

const findSum = (n) => {
  let counter = n;
  let result = 0;

  while (counter > 0) {
    if (counter % 3 === 0 || counter % 5 === 0) {
      result += counter;
    }

    counter--;
  }

  return result;
};

console.log(findSum(5));
console.log(findSum(10));
