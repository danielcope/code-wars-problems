// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

//     ======================================================================     //

// input : string or array
// output : array

const uniqueInOrder = (iterable) => {
  if (iterable.length === 0) return [];

  const result = [iterable[0]];
  let current = iterable[0];

  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] === current) continue;
    if (iterable[i] !== current) {
      current = iterable[i];
      result.push(iterable[i]);
    }
  }

  return result;
};

console.log(uniqueInOrder("AAAABBBBCCCCDAAABBB"));
console.log(uniqueInOrder([1, 2, 3, 3, 4, 4]));
console.log(uniqueInOrder([]));
