/*
3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1
*/

const nums = [34, 7, 21, 89, 54, 10, 91, 67];

let max = nums[0];
let indexOfMax = 0;

for (let i = 1; i <= nums.length ; i++){
    if (nums[i] > max) {
        max = nums [i];
        indexOfMax = i;
    }
}

console.log("Maximum Element : " + max + " Index : " + indexOfMax);

let min = nums[0];
let indexOfMin = 0;

for (let j = 1; j <= nums.length ; j++){
    if (nums[j] < min) {
        min = nums [j];
        indexOfMin = j;
    }
}

console.log("Minimum Element : " + min + " Index : " + indexOfMin);

