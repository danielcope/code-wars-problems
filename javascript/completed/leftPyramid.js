const stacked = (num) => {
  let arr = [];
  let result = [];

  for (let i = 1; i <= num; i++) {
    arr.push("*");
    result.push(arr.join(""));
  }

  return result.join("\n");
};

console.log(stacked(5));
