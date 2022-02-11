// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

//============================================================

const loveFunc = (n1, n2) => (n1 + n2) % 2 !== 0;

console.log(loveFunc(1, 4));
console.log(loveFunc(1, 3));
console.log(loveFunc(2, 3));
console.log(loveFunc(3, 3));
