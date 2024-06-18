/*
Arrays: Use what you have learned about arrays to complete the problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npm test test/01-avg-value-spec.js
*/

// Define a function called avgValue that takes in an array of numbers. Return
// the average number value of all the numbers in the array.

// Your code here 
function avgValue(num){
    if (num.length === 0) return 0;
    let begin = 0
    for (let i = 0; i < num.length; i++){
        begin += num[i];
    }
    return begin / num.length;

}
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = avgValue;
