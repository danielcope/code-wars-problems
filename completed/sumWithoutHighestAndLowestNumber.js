// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

//=====================================================

// input: array
// output: integer

// const sumArray = arr => int

// pseudo code:

// define sumArray with one param
// sort the given array from highest to lowest
// splice out the first and last elements of the array
// sum the arr
// return the sum

const sumArray = (arr) => {
  if(arr === null || arr === undefined) return 0;

  const sortedArr = arr.sort((a, b) => a - b);
  const slicedArr = sortedArr.slice(1, -1);
  let sum = slicedArr.reduce((a, b) => a + b, 0);

  return sum;
};



console.log(sumArray([3, 54, 2, 6, 7, 84, 5, 1]));
console.log(sumArray([3, 2, 6, 7, 5, 1]));
console.log(sumArray([3, 2, 5, 1]));
console.log(sumArray([3, 54, 2, 6, 7, 84, 5, 1]));
console.log(sumArray([]), "should equal 0");
console.log(sumArray([3]), "should equal 0");
console.log(sumArray([3, 5]), "should equal 0");
