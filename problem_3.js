// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

function Palindrome(str){
    str = str.toLowerCase();
    const reversed =str.split("").reverse().join("");
    return str=== reversed;
}
console.log(Palindrome("madam"));
console.log(Palindrome("abir"));