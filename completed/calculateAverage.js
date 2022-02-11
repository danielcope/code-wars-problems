// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//=======================================================

const find_average = (arr) => arr[0] ? arr.reduce((a, b) => a + b) / arr.length : 0;

console.log(find_average([2, 4, 6]));
console.log(find_average([]));
