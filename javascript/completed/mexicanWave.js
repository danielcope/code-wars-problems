// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example

// input = str
// return = arr
// example = wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// pseudo code

// define array called wave with one argument
// define a variable called result that is equal to an array.
// for loop starting at 0 to have an incrementing variable.
// Inside the loop define a variable called munipulatedStr
// write an if statement to ignore spaces
//
//
//
//

// return result arr
const wave = (str) => {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let s = str.split("");

    if (s[i] === " ") continue;

    s.splice(i, 1, s[i].toUpperCase());
    result.push(s.join(""));
  }

  return result;
};

console.log(wave("rawr asdfas"));
