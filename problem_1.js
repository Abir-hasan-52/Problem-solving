// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

// Example:

// Input: "hello"
// Output: "olleh"

function reverseString(str){
    const arr = str.split("");
    const reverse = arr.reverse().join("");
    return reverse;
}
console.log(reverseString("abir"));