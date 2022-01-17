// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

const multiplicationTable = (size) => {
  let counter = 1;
  let result = [];

  while (counter <= size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(counter * (i + 1));
    }
    result.push(arr);
    counter++;
  }
  return result;
};

console.log(multiplicationTable(4));
console.log(multiplicationTable(3));
