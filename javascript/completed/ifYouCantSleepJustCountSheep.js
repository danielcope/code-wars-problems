// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers

//==================

const countSheep = (n) => {
  let result = "";
  let counter = 1;

  while (counter <= n) {
    result += `${counter} sheep...`;

    counter++;
  }

  return result;
};

console.log(countSheep(7));
