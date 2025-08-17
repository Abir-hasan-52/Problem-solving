// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

// Example:

// Input: "hello world"
// Output: "Hello World"

function capitalizes(str){
   const wordArr= str.split(" ");
  const  singleWord= wordArr.map(word=>word.charAt(0).toUpperCase()+word.slice(1))
  const  fullSent= singleWord.join(" ");
    return fullSent;
}
console.log(capitalizes("hello world"));