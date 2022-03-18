// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// ==================================================

// input: num
// output: "str"

//const expandedForm = num => "string"

// test data
const testData = 12;
const testData1 = 42;
const testData2 = 70304;

const expandedForm = (num) => {
  let result = [];
  let stringfyNum = num.toString();

  for (let i = 0; i < stringfyNum.length; i++) {
    if (parseInt(stringfyNum[i]) !== 0) {
      let temp = `${stringfyNum[i]}`;

      for (let j = 1; j <= stringfyNum.length - 1 - i; j++) {
        temp += "0";
      }

      result.push(temp);
    }
  }

  return result.join(" + ");
};

console.log(expandedForm(testData));
console.log(expandedForm(testData1));
console.log(expandedForm(testData2));
