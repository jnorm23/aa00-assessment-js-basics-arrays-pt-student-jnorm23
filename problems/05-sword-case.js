/*
Arrays: Use what you have learned about arrays to complete the problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npm test test/05-sword-case-spec.js
*/

// Define a function called swordCase that takes in a string. Return the string
// lowercased with the spaces replaced with a 'dash'. This is sword-cased naming
// convention commonly used as your project file names (e.g., 05-sword-case.js).

// Your code here 
function swordCase(str) {
    let lowerCasedStr = str.toLowerCase();                 // Convert the string to lowercase
    
    let swordCasedStr = lowerCasedStr.replace(/ /g, '-');  // Replace spaces with dashes
    
    return swordCasedStr;
}

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = swordCase;
