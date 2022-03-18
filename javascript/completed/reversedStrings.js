// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//============

// input: string
// output: string

// const solution = (str) => str

//pseudo code:
// define function called solution
// define variable called result the is equal to a string
// loop through string starting at the back of the string
// add the ele of the string to the result variable

const solution = (str) => {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
};

console.log(solution("asdf")); //should return "fdsa"
console.log(solution("rawr")); //should return "rwar"
console.log(solution("pumpkin")); //should return "nikpmup"
