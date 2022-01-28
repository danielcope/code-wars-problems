// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// ===============================================================================================================

// input: string, string
// output: string

const longest = (str1, str2) => {
  let result = "";
  const key = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < key.length; i++) {
    if (str1.includes(key[i]) || str2.includes(key[i])) {
      result += key[i];
    }
  }

  return result;
};

console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
console.log(longest("inmanylanguages", "theresapairoffunctions"));
