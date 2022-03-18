// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

//============================================================================================

// input: string
// output: boolean

const isIsogram = (str) => {
  let splitStr = str.split("");

  for (let i = 0; i < splitStr.length; i++) {
    if (
      str.includes(splitStr[i].toLowerCase(), i + 1) ||
      str.includes(splitStr[i].toUpperCase(), i + 1)
    ) {
      return false;
    }
  }

  return true;
};

console.log(isIsogram("raw"));
console.log(isIsogram("rawr"));
console.log(isIsogram("abcdefghijklmnopqrstuvwxyz"));
