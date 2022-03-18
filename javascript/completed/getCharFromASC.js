// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65)
// should return:

// 'A'
// For ASCII table, you can refer to http://www.asciitable.com/

//=============================================

const getChar = (c) => String.fromCharCode(c);

console.log(getChar(55));
console.log(getChar(56));
console.log(getChar(57));
console.log(getChar(58));
