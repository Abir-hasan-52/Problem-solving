// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

// Example:

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

function removeDuplicates(arr) {
  newArr = [...new Set(arr)];
  return newArr;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
