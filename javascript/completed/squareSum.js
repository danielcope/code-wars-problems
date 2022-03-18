// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//====================================================================

const squareSum = (arr) => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += Math.pow(arr[i], 2);
  }

  return result;
};

console.table([
  [squareSum([1, 2]), 5],
  [squareSum([0, 3, 4, 5]), 50],
  [squareSum([0]), 0],
]);
