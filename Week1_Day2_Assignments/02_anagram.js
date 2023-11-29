/*Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/


let word1 = 'listen';
let word2 = 'silent';
isAnagram(word1,word2);

function isAnagram(word1, word2){
    let lowercaseWord1 = word1.toLowerCase();
    let lowercaseWord2 = word2.toLowerCase();

    const arrayWord1 = lowercaseWord1.split('');
    const arrayWord2 = lowercaseWord2.split('');

    if (arrayWord1.length === arrayWord2.length){
        arrayWord1.sort();
        arrayWord2.sort();

        for (let i = 0; i<=arrayWord1.length; i++){
            if (arrayWord1[i] != arrayWord2[i]){
                console.log("Words " + word1 + " and " + word2 + " are not anagram"); 
                return false;
            }
            console.log("Words " + word1 + " and " + word2 + " are anagram");
        }
    }
    else {
        console.log("Words " + word1 + " and " + word2 + " are not anagram");
    }
}
