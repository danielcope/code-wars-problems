// argument: array of emojis
//eg.: [":D", ":)", ":;"]

//return: a number that equals the count of smile emoji's
// either: ;D   :D   ;)   :)
//can also have a nose of - or ~

//psudo code:
// 1. create function called countSmileys with one argument
// 2. create variable called smileyCount equal to 0
// 3. loop through each element in the argument arr
// 4. check if the element in the array is 3 characters long or 2 characters long.
// 5. if the element is 2 characters check for these requirements
//  -- the character at index 0 is either a ":" or ";"
//  -- the character at index 1 is either a ")" or "D"
// 6. increase smileyCount by one if both of those conditions are met
// 7. if the element is 2 characters check for these requirements
//  -- the character at index 0 is either a ":" or ";"
//  -- the character at index 1 if either a "-" or "~"
//  -- the character at index 2 is either a ")" or "D"
// 8. increase smileyCount by one if all of those conditions are met
// 9. return smileyCount

//test data
let testData = [":D", ":~D", ";~D"]; //all should pass
let testData2 = [":)", ";(", ";}", ":-D"]; // 2
let testData3 = [";D", ":-(", ":-)", ";~)"]; // 3
let testData4 = [";]", ":[", ";*", ":$", ";-D"]; // 1

const countSmileys = (arr) => {
  let smileyCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 2) {
      if (arr[i][0] === ":" || arr[i][0] === ";") {
        if (arr[i][1] === ")" || arr[i][1] === "D") {
          smileyCount += 1;
        }
      }
    }

    if (arr[i].length === 3) {
      if (arr[i][0] === ":" || arr[i][0] === ";") {
        if (arr[i][1] === "-" || arr[i][1] === "~") {
          if (arr[i][2] === ")" || arr[i][2] === "D") {
            smileyCount += 1;
          }
        }
      }
    }
  }

  return smileyCount;
};

console.log(countSmileys(testData));
console.log(countSmileys(testData2));
console.log(countSmileys(testData3));
console.log(countSmileys(testData4));

// Best Practice on CodeWars

function countSmiles(arr) {
  return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
}

console.log(countSmiles(testData));
console.log(countSmiles(testData4));
