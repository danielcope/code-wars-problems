// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// =========================================================

const sumMix = (arr) => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += +arr[i];
  }

  return result;
};

console.table([
  sumMix([9, 3, "7", "3"]),
  "22",
  +"765465464654654654654654654654654654654654",
]);
