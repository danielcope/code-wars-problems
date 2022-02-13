// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//==============================

//input : str
// output : str
// const solution = str => str

// pseudo code :

// define a function called solution with 1 param
// define a variable called splitStr that is equal to the input str split by char
// loop through the splitStr arr
// if splitStr[i] is upper case then insert a space and increment i++ an additional time to avoid an infinite loop
// return splitStr joined back to a string 

const solution = (str) => {
  let splitStr = str.split("");

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === splitStr[i].toUpperCase()) {
      splitStr.splice(i, 0, " ");
      i++;
    }
  }

  return splitStr.join("");
};

console.log(solution("camelCasingTest"));
console.log(solution(""));
