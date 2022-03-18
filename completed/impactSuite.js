const oneThruOneHundredArr = () => {
  let result = [];

  for (let i = 1; i <= 100; i++) {
    result.push(i);
  }

  return result;
};

// console.log(oneThruOneHundredArr());

const removeRandomIndex = () => {
  let result = [...oneThruOneHundredArr()];
  let randomIndex = Math.floor(Math.random() * 100) + 1;

  result.splice(randomIndex, 1);

  return result;
};

// console.log(removeRandomIndex());

const findMissingNumber = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== i + 1) {
      return i + 1;
    }
  }
};

console.log(findMissingNumber(removeRandomIndex()));


