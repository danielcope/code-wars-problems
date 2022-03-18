// Simple, remove the spaces from the string, then return the resultant string.

//==============================

// input: string
// output: string

// const noSpace = str => str;

//test data:

const dataI = "rawr rawr rawr";
const dataII = "Hello World";
const dataIII =
  "Labore sint cillum velit quis voluptate voluptate.Sint pariatur consectetur eiusmod est voluptate. Lorem excepteur consectetur voluptate ipsum elit deserunt laborum ad qui minim adipisicing sunt velit. Deserunt Lorem sunt dolor eu occaecat consectetur quis dolore.";

//pseudo code:
// define noSpace function with one param

// const noSpace = (str) =>
//   str
//     .split("")
//     .filter((ele) => ele !== " ")
//     .join("");

//or you can use regex

const noSpace = (str) => str.replace(/\s/g, "");

console.log(noSpace(dataI));
console.log(noSpace(dataII));
console.log(noSpace(dataIII));
