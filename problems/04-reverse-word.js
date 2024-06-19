/*
Arrays: Use what you have learned about arrays to complete the problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npm test test/04-reverse-word-spec.js
*/

// RESEARCH: Use MDN to look up how the following methods work, then use them
// when doing the problem below:
// - String.prototype.split
// - Array.prototype.reverse
// - Array.prototype.join

// Define a function called reverseWord that takes in a word string. Reverse
// the characters in the word and return it as a string. Use the methods
// researched from MDN above.

// Your code here 
function reverseWord(word) {
    let charArray = word.split('');           // Use .split to split the word into an array of characters
    charArray.reverse();                      // Use .reverse to reverse the array of characters
    let reversedWord = charArray.join('');    // Use .join to join the reversed array back into a string
    return reversedWord;
}
// OPTIONAL CHALLENGE: Define a function called reverseWordChallenge that takes
// in a word string. Reverse the characters in the word and return it as a
// string WITHOUT using the methods researched from MDN above.
// Your code here 
function reverseWordChallenge(word) {
    let reversedWord = '';
    
    for (let i = word.length - 1; i >= 0; i--) {    // Loop through the string from the end
        reversedWord += word[i];
    }
    
    return reversedWord;
}
// console.log(reverseWordChallenge("test")); // Should return "tset"
// console.log(reverseWordChallenge("trial")); // Should return "lairt"
// console.log(reverseWordChallenge("JavaScript")); // Should return "tpircSavaJ"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverseWord;
