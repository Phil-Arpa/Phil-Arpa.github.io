// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // Second Attempt: Trying with While Loop 
    //Intitalize count variable (above loop) to 1
    let count = 1;
    //create while loop where count is less than or equal to 100
    while (count <=100) {
    //create conditional if statement to meet instructions. first, if multiples of 3 AND 5 place at top bc I want it to meet that condition first for both. multiples of a # leave zero remainder. print Fizzbuzz
        if (count % 3 === 0 && count % 5 === 0) {
             console.log ("FizzBuzz");
    //second condition if multiple of 3 print Fizz
         }  else if (count % 3 === 0) {
             console.log("Fizz");
    //third condition if multiple of 5 print Buzz
         }  else if (count % 5 ===0) {
             console.log("Buzz");
    //Last, no condition, just print numbers in loop that dont meet (equal true) conditions above
         }  else {
             console.log(count);
    //Add increment operator to count, if not INFINITE LOOP 
         }  count++;
    }
    
    // First Attempt: passed with For Loop below 
    //Start:1
    //Stop (inlude): 100
    //for (let i = 1; i <= 100; i++) {
    //      if (i % 3 === 0 && i % 5 === 0) {
    //          console.log ("FizzBuzz");
    //      }  else if (i % 3 === 0) {
    //          console.log("Fizz");
    //      }  else if (i % 5 ===0) {
    //          console.log("Buzz");
    //      }  else {
    //          console.log(i);
    //      }
     }



    // YOUR CODE GOES ABOVE HERE //






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}