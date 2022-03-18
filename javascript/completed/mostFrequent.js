// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// agr: array of numbers - never an empty array
// result: number   -- the most frequent number is the passed in array

// - define function called mostFrequent with one argument
// - define a variable called mostFrequent
// - loop through the array
// - loop through the array again
// - define a variable called count
// - increase count when arr[i] === arr[j]
// - if (count > mostFrequent) mostFrequent = count
// - return count

// Test Data:
const test = [12, 10, 8, 12, 7, 6, 4, 10, 12]; //  12
const testData1 = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]; //  12
const testData2 = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]; // 3

const mostFrequent = (arr) => {
  let most = 0;
  let number = 0;

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count += 1;
      }
    }

    if (count > most) {
      number = arr[i];
      most = count;
    }
  }

  return number;
};

console.log(mostFrequent(test));
console.log(mostFrequent(testData1));
console.log(mostFrequent(testData2));
