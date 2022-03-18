//argument: 2-dimensional array
//each element in the array is an array with three elements: a lender, a borrower, and the amount borrowed
//for example: [["Amy", "Bob", 100], ["Tony", "Bob", 200]]  Amy and Tony are both lending money to Bob. Bob owes a total of $300

// return: a string
// the return should be a string of the name of the person who owes the most money.

// - define a function called findMostBorrowed(arr)
// - define an array called amountArr
// - for loop through the passed in array
// - for each loop:
//   -- check if the index[0] of the element is in amountArr by looping through the amountArr
//   -- if arr[0] === amountArr[j] then add arr[2] to amountArr[j + 1]
//   -- if arr

const test = [
  ["Amy", "Bob", 100],
  ["Tony", "Bob", 200],
  ["Tony", "Bob", 200],
  ["Tony", "Bob", 200],
  ["Tony", "Bob", 200],
  ["Tony", "Bob", 200],
  ["Tony", "Bob", 200],
  ["Tony", "Bob", 200],
  ["Bob", "Steve", 500],
  ["Bob", "Steve", 500],
  ["Bob", "Steve", 500],
  ["Bob", "Steve", 500],
  ["Bob", "Steve", 500],
  ["Bob", "Steve", 500],
]; // should return "Steve"

const findMostBorrowed = (arr) => {
  const map = new Map();
  let lowest = 0;
  let lowestKey = "";

  for (let i = 0; i < arr.length; i++) {
    let personOne = map.get(arr[i][0]);
    let personTwo = map.get(arr[i][1]);

    if (personOne) {
      map.set(arr[i][0], (personOne += arr[i][2]));
    }

    if (personTwo) {
      map.set(arr[i][1], (personTwo -= arr[i][2]));
    }

    if (!personOne) {
      map.set(arr[i][0], 0 + arr[i][2]);
    }

    if (!personTwo) {
      map.set(arr[i][1], 0 - arr[i][2]);
    }
  }

  for (let [key, value] of map.entries()) {
    if (value < lowest) {
      lowestKey = key;
      lowest = value;
    }
  }

  return lowestKey;
};

console.log(findMostBorrowed(test));
