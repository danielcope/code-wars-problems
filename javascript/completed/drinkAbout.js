// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

// ============================================

const peopleWithAgeDrink = (old) => {
  let result = "";

  if (old <= 13) result = "toddy";
  if (old >= 14 && old <= 17) result = "coke";
  if (old >= 18 && old <= 20) result = "beer";
  if (old >= 21) result = "whisky";

  return `drink ${result}`;
};

console.log(peopleWithAgeDrink(13));
console.log(peopleWithAgeDrink(17));
console.log(peopleWithAgeDrink(18));
console.log(peopleWithAgeDrink(20));
console.log(peopleWithAgeDrink(30));
