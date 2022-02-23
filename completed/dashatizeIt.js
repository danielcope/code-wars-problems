// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return an empty value.

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

// ========================================================================

// input : int
// output : str

// const dashatize = int => str;

// test data:
const testData = 274;
const testData1 = 5311;
const testData2 = 974302;

const dashatize = (n) => {
  if (typeof n !== "number") return NaN;

  const splitNum = Math.abs(n).toString().split("");
  const result = [];

  for (let i = 0; i < splitNum.length; i++) {
    if (splitNum[i] % 2 !== 0 && splitNum[i + 1] % 2 !== 0) {
      result.push("-", splitNum[i]);
    }

    if (splitNum[i] % 2 !== 0 && splitNum[i + 1] % 2 === 0) {
      result.push("-", splitNum[i], "-");
    }

    if (splitNum[i] % 2 === 0) {
      result.push(splitNum[i]);
    }
  }

  if (result[0] === "-") {
    result.shift();
  }

  return result.join("") === "N-a-N" ? "NaN" : result.join("");
};

// console.log(dashatize(testData));
// console.log(dashatize(testData1));
console.log(dashatize(testData2));
console.log(dashatize("testData2"));
console.log(dashatize(NaN));
console.log(dashatize(0));
console.log(dashatize(-1));
console.log(dashatize(-28369));
