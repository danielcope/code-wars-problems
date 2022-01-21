// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

//============================================================================================
//============================================================================================

// input: num
// output: arr

// const digitize = (n) => arr

const digitize = (n) => {
  let result = [];
  let nStr = n.toString();

  for (let i = nStr.length - 1; i >= 0; i--) {
    result.push(parseInt(nStr[i]));
  }

  return result;
};

console.log(digitize(1234));
console.log(digitize(4567));
console.log(digitize(7890));
console.log(digitize(66666564521));
