// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

// Example:

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

function evenNum(arr){
    even = arr.filter(num=>num%2===0);
    return even;
}
console.log(evenNum([1,2,3,4,5,6]));