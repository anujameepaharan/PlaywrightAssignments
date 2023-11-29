/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0]
*/

const nums = [0,1,0,3,12];

const notZero = [];
const zero = [];

for (let i=0; i<nums.length; i++){
    if ((nums[i]) == 0) {
        zero.push(nums[i]);
    } else {
        notZero.push(nums[i]);
    }
}


notZeroSorted = notZero.sort(function(a, b){return a - b});
console.log(notZeroSorted.concat(zero));







