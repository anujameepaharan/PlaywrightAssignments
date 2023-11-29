/*4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/


const inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6];

const uniqueArray = [];

inputArray.forEach((c) => {
    if (!uniqueArray.includes(c)){
        uniqueArray.push(c);
    }
});

console.log(uniqueArray);
