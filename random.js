let names = "bob, tony, steve";

const countNames = (names) =>
  names.split(",").length >= 3
    ? "There are at least three cities"
    : "There are less than three cities";

console.log(countNames(names));
