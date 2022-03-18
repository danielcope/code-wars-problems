let nums = [1, 2, 2, 3];

let removeDuplicatesUsingSet = (arr) => [...new Set(arr)];

console.log(removeDuplicatesUsingSet(nums));
