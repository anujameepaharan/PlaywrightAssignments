/*2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/

const nums1 = [4,9,5];
const nums2 = [9,4,9,8,4];
const nums3 = [];

const intersection1 = nums1.filter(x => nums2.includes(x));

console.log(intersection1); //Intersected array but still with duplicate elements

const intersection2 = [];

for (let i = 0; i < (intersection1.length); i++) {
    if (intersection2.indexOf(intersection1[i]) === -1){
        intersection2.push(intersection1[i]);
    }
}

console.log(intersection2);
