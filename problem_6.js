// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.

// Example:

// Input: [1, 2, 3, 4]
// Output: 10
function sumArr(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum+arr[i];
    }
    return sum;
}
console.log(sumArr([1,2,3,4]))