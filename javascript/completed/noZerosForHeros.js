// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

//===========================================

const noBoringZeros = (n) => {
  if (n === 0) return 0;

  let splitNum = n.toString().split("");

  for (let i = splitNum.length - 1; i >= 0; i--) {
    if (splitNum[i] === `0`) {
      splitNum.splice(i, 1);
    } else {
      return Number(splitNum.join(""));
    }
  }
};

console.log(noBoringZeros(50000500000));
