// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //return boolean if value is greater than base 
    return function(value) {
        return value > base;
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // return boolean if value is less than base 
    return function(value) {
        return value < base;
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    return function (string) {
        // use starts with method. use chain for dot notation. change toLowerCase to compare equally. 
        return string.toLowerCase().startsWith(startsWith.toLowerCase());
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // use ends with method. use chain for dot notation. change toLowerCase to compare equally.
    return function (string) {
        return string.toLowerCase().endsWith(endsWith.toLowerCase());
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
  //create array literal 
  var modifiedArray = [];
  //for loop to loop over strings array. 
  for (var i = 0; i < strings.length; i++) {
     //use .push method to push in modify function with strings [i] (string in given array of strings) as paramater. push to modifiedArray. 
      modifiedArray.push(modify(strings[i]));
       //return array with modified strings    
     }  return modifiedArray
}   
    //  modifiedArray += strings[i] + modify;
    //  return modifiedArray;
      
    
    
    
    
    // YOUR CODE ABOVE HERE //
/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //use for loop to access each indexed string within array
    for (let i = 0; i < strings.length; i++) {
        
        //use conditional with test function and strings[i] as parameter to test if false. False first bc firtst instance of false we want to stop loop. Return inside a loop stops loop.  
        if (test(strings[i]) === false) {
            return false;
        }
    }
    //return true outside of loop becasue we only want true if every string passes test, meaning the entire loop
    return true;
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
