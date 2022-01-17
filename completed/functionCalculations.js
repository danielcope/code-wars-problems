
// Description:
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand

// eight(dividedBy(three()));
// Division should be integer division. For example, this should return 2, not 2.666666...:


const zero = (a = 0) => {
  if (a.token && a.token === "plus") return 0 + a.num;
  if (a.token && a.token === "sub") return 0 - a.num;
  if (a.token && a.token === "times") return 0 * a.num;
  if (a.token && a.token === "div") return Math.floor(0 / a.num);
  return a;
};

const one = (a = 1) => {
  if (a.token && a.token === "plus") return 1 + a.num;
  if (a.token && a.token === "sub") return 1 - a.num;
  if (a.token && a.token === "times") return 1 * a.num;
  if (a.token && a.token === "div") return Math.floor(1 / a.num);

  return a;
};

const two = (a = 2) => {
  if (a.token && a.token === "plus") return 2 + a.num;
  if (a.token && a.token === "sub") return 2 - a.num;
  if (a.token && a.token === "times") return 2 * a.num;
  if (a.token && a.token === "div") return Math.floor(2 / a.num);

  return a;
};
const three = (a = 3) => {
  if (a.token && a.token === "plus") return 3 + a.num;
  if (a.token && a.token === "sub") return 3 - a.num;
  if (a.token && a.token === "times") return 3 * a.num;
  if (a.token && a.token === "div") return Math.floor(3 / a.num);

  return a;
};
const four = (a = 4) => {
  if (a.token && a.token === "plus") return 4 + a.num;
  if (a.token && a.token === "sub") return 4 - a.num;
  if (a.token && a.token === "times") return 4 * a.num;
  if (a.token && a.token === "div") return Math.floor(4 / a.num);

  return a;
};
const five = (a = 5) => {
  if (a.token && a.token === "plus") return 5 + a.num;
  if (a.token && a.token === "sub") return 5 - a.num;
  if (a.token && a.token === "times") return 5 * a.num;
  if (a.token && a.token === "div") return Math.floor(5 / a.num);

  return a;
};

const six = (a = 6) => {
  if (a.token && a.token === "plus") return 6 + a.num;
  if (a.token && a.token === "sub") return 6 - a.num;
  if (a.token && a.token === "times") return 6 * a.num;
  if (a.token && a.token === "div") return Math.floor(6 / a.num);

  return a;
};

const seven = (a = 7) => {
  if (a.token && a.token === "plus") return 7 + a.num;
  if (a.token && a.token === "sub") return 7 - a.num;
  if (a.token && a.token === "times") return 7 * a.num;
  if (a.token && a.token === "div") return Math.floor(7 / a.num);

  return a;
};

const eight = (a = 8) => {
  if (a.token && a.token === "plus") return 8 + a.num;
  if (a.token && a.token === "sub") return 8 - a.num;
  if (a.token && a.token === "times") return 8 * a.num;
  if (a.token && a.token === "div") return Math.floor(8 / a.num);

  return a;
};

const nine = (a = 9) => {
  if (a.token && a.token === "plus") return 9 + a.num;
  if (a.token && a.token === "sub") return 9 - a.num;
  if (a.token && a.token === "times") return 9 * a.num;
  if (a.token && a.token === "div") return Math.floor(9 / a.num);

  return a;
};

const plus = (num) => {
  return (r = {
    token: "plus",
    num: num,
  });
};
const minus = (num) => {
  return (r = {
    token: "sub",
    num: num,
  });
};
const times = (num) => {
  return (r = {
    token: "times",
    num: num,
  });
};
const dividedBy = (num) => {
  return (r = {
    token: "div",
    num: num,
  });
};

console.log(zero(plus(one())));
console.log(seven(minus(two())));
console.log(seven(times(two())));
console.log(zero(dividedBy(two())));
