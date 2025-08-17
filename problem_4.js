// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

// Example:

// Input: [5, 1, 9, 3]
// Output: 9

function Max(arr){
    const Max= Math.max(...arr);
    return Max;
}
console.log(Max([5,0,9,4]));