const capitalize = (s) => {
  let arrZero = "";
  let arrOne = "";

  for (let i = 0; i < s.length; i++) {
    if (i === 0 || i % 2 === 0) {
      arrZero += s[i].toUpperCase();
      arrOne += s[i];
    } else {
      arrZero += s[i];
      arrOne += s[i].toUpperCase();
    }
  }

  return [arrZero, arrOne];
};

console.log(capitalize("abcdef"));
