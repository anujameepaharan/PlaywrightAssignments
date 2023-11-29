/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
*/

let s = "   fly me   to   the moon  ";
const a = s.split(" ");
console.log(a);

let countOfWords = a.length;

for (let i = countOfWords-1; i>=0; i--){
    if (a[i] != "") {
        console.log("Length of last word is : " + a[i].length + " and the word is : " + a[i]); 
        i = -1;
    }
}
