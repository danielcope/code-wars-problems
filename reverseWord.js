// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// input : string
// output : string

// const function = str => str

const reverseWords = (str) => {
  let result = [];
  let splitString = str.split(" ");

  for (let i = 0; i < splitString.length; i++) {
    let reversedWord = "";

    for (let j = splitString[i].length - 1; j >= 0; j--) {
      reversedWord += splitString[i][j];
    }

    result.push(reversedWord);
  }

  return result.join(" ");
};

console.log(reverseWords("rawr rawr rwar"));
