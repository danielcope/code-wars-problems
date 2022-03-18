// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

const pangram = (str) => {
  const checkList = {
    A: false,
    B: false,
    C: false,
    D: false,
    E: false,
    F: false,
    G: false,
    H: false,
    I: false,
    J: false,
    K: false,
    L: false,
    M: false,
    N: false,
    O: false,
    P: false,
    Q: false,
    R: false,
    S: false,
    T: false,
    U: false,
    V: false,
    W: false,
    X: false,
    Y: false,
    Z: false,
  };

  for (let i = 0; i < str.length; i++) {
    checkList[str[i].toUpperCase()] = true;
  }

  for (let key in checkList) {
    if (!checkList[key]) return false;
  }

  return true;
};

const pangram1 = (str) =>
  "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((e) => str.toLowerCase().includes(e));

console.log(pangram1("abcdefghijklmnopqrstuvwxyz")); //true
console.log(pangram1("abcdxyz")); // false
