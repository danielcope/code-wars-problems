// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//===========================================================================================

// input: string
// output: string

//const findShort = (str) => str;

const findShort = (str) => {
  let array = str
    .split(" ")
    .map((ele, i) => {
      return ele.length;
    })
    .sort((a, b) => a - b);

  return array[0];
};

console.log(
  findShort("Laboris consectetur amet magna magna deserunt laboris aliquip")
);
console.log(
  findShort("Minim do non consectetur nostrud cupidatat commodo velit")
);
