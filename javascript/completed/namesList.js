// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

//=====================================================================

//Step 1: arguments, return
// 1 argument = an array of obejects with one name property
// 1 return = a string of names

//Step: 2: text data

const testData = [
  { name: "Bart" },
  { name: "Lisa" },
  { name: "Maggie" },
  { name: "Homer" },
  { name: "Marge" },
];
const testData2 = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }];
const testData3 = [{ name: "Bart" }, { name: "Lisa" }];
const testData4 = "";

const list = (names) => {
  let result = "";

  if (names.length === 1) {
    return names[0].name;
  }

  for (let i = 0; i < names.length; i++) {
    if (i === names.length - 1) {
      result += `& ${names[i].name}`;
    } else if (i === names.length - 2) {
      result += `${names[i].name} `;
    } else {
      result += `${names[i].name}, `;
    }
  }

  return result;
};

console.log(list(testData));
console.log(list(testData2));
console.log(list(testData3));
console.log(list(testData4));
