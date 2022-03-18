// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

// ====================

// input: [arr of "strings"]
// output: "string"

// const longestCommonPrefix = (arr) => str

//test data:
const testData = ["flower", "fleece", "flan"];
const testData1 = ["flower", "fleece", "pork"];
const testData2 = ["fork", "fork", "fork"];

// pseudo code:
//

const longestCommonPrefix = (arr) => {
  if (arr.length === 0) return "";

  let prefix = arr[0];

  for (let i = 0; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);

      if (!prefix) return "";
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(testData));
console.log(longestCommonPrefix(testData1));
console.log(longestCommonPrefix(testData2));
