// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

//================================

// input : array of arrays
// output : number

// const isSolved = board => num;

// test data:
const testData = [
  [0, 0, 1],
  [0, 1, 2],
  [2, 1, 0],
];
const testData1 = [
  [0, 0, 1],
  [0, 1, 2],
  [1, 2, 0],
];
const testData2 = [
  [0, 0, 2],
  [0, 2, 1],
  [2, 1, 1],
];
const testData3 = [
  [1, 1, 2],
  [2, 2, 1],
  [1, 1, 2],
];

const isSolved = (arr) => {
  let result = 0;

  if (arr[0].includes(0) || arr[1].includes(0) || arr[2].includes(0))
    result = -1;

  for (let i = 1; i <= 2; i++) {
    if (arr[0][0] === i && arr[0][1] === i && arr[0][2] === i) return i;
    if (arr[0][0] === i && arr[1][1] === i && arr[2][2] === i) return i;
    if (arr[0][0] === i && arr[1][1] === i && arr[2][2] === i) return i;
    if (arr[0][1] === i && arr[1][1] === i && arr[2][1] === i) return i;
    if (arr[0][2] === i && arr[1][1] === i && arr[2][0] === i) return i;
    if (arr[0][2] === i && arr[1][2] === i && arr[2][2] === i) return i;
    if (arr[1][0] === i && arr[1][1] === i && arr[1][2] === i) return i;
    if (arr[2][0] === i && arr[2][1] === i && arr[2][2] === i) return i;
  }

  return result;
};

console.log(isSolved(testData), "should be -1");
console.log(isSolved(testData1), "should be 1");
console.log(isSolved(testData2), "should be 2");
console.log(isSolved(testData3), "should be 0");
