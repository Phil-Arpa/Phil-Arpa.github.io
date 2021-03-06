// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    //simply returning the value 
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
    //check for array with Array.isArray
    if (Array.isArray(value)) {
        return "array";
    //check for null with value === null
    } else if (value === null) {
        return "null";
    //lastly, return typeof value 
    }  else {
        return typeof value;
    }
}
/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array,num) { 
   //if array is not an array return array literal
    if (!Array.isArray(array)) {
        return [];
    //if number isnt given or not a number return first element (index 0)
    } else if (typeof num !== "number") {
        return array[0]
    //if number is negative, less than 0, return array literal
    }   else if (num < 0) {
        return []
    //if number is greater than arrays length, return entire array
    }   else if (num > array.length) {
        return array;
    //if array and number is given thats not neg or greater than array, return first number of elements
    }   else {
    //use .slice. (start: index 0, end: num)    
        return array.slice(0, num)
    }
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function (array, num) {
    //if array is not array, return array literal 
    if (!Array.isArray(array)) {
        return [];
    //if num is not a number or not given 
    } else if (typeof num !== "number") {
       //return last element 
        return array[array.length-1]
   //if num is negative return array literal 
    }   else if (num < 0) {
        return []
    // if num is greater than length of array, return array
    }   else if (num > array.length) {
        return array;
    
     //if array is array and number isnt greater than length or negative, return last number of elements   
    }   else {
        //use .slice method with array.length - num (number arg), to access the last indexes and slice off any index before 
        return array.slice(array.length - num)
    }
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function (array, value) {
    //return index of array that is first occurance of value for loop to access array
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            //return index
            return i;
        }  
    }
   //return -1 if not found OUTSIDE OF LOOP
    return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
    //use .includes and ternary operator. does array include value ? return true or false.
    return array.includes(value) ? true : false;
}



/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
//essential same as a for loop
_.each = function(collection, func) {
    //condition to check if array
    if (Array.isArray(collection)) {
        //for loop to iterate through array
        for (var i = 0; i < collection.length; i++) {
            //passing in callbckFN with normal call back params
            func(collection[i], i, collection);
        }
    } else {
       //if collection is object
        for (var key in collection) {
            //pass in callbackFN with call back params 
            func(collection[key], key, collection);
        }
    }
}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
//create array literal   
   const newArray = [];
//create for loop to itereate through array   
   for (let i = 0; i < array.length; i++) {
//use ._indexOf in conditional to see if newArray does not include values from array[i]
    if (_.indexOf(newArray, array[i]) === -1) {
//if does not contain it push value to newArray         
        newArray.push(array[i])
    }
   }
   //return newArray, which will only have one of each value from array (duplicates removed)
    return newArray
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
//take an array and a function
// _.filter = function(array, func) {
//     //create empty array to collect data 
//     const newArray = []
// //create for loop to call function for each element in array   
//     for (let i = 0; i < array.length; i++) {
// //if function params are true 
//     if (func(array[i], i, array)) {
//       //push truthy elements into newArray
//         newArray.push(array[i]);
//         }  
//     }
//     //return newArray 
//     return newArray;
// }

_.filter = function(array, func) {
    //create empty array to collect data 
    const newArray = []
//use .each to call function for each element in array . loop through array.  
    _.each(array, function(e, i, c) {
        //check if elements are truthy
        if (func(array[i], i, array)) {
      //push truthy elements into newArray
        newArray.push(array[i]);
        }  
     })
    //return newArray 
    return newArray;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func) {
 //create array literal to collect data    
    const newArray = []
//create for loop to call function for each element in array   
    for (let i = 0; i < array.length; i++) {
//if calling func params are false 
    if (!func(array[i], i, array)) {
        //push false elements into new array
        newArray.push(array[i]);
        }  
    }
    //return newArray
    return newArray;
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func) {
  //create empty array to collect all data
   var newArray = []
   //create empty array for truthy data 
   var trueArray = [];
    //create false array for falsy data 
    var falseArray = [];
   //for loop to iterate through array 
    for (let i = 0; i < array.length; i++) {
      //if call back function parameters are true, push to true array  
        if (func(array[i], i, array)) {
            trueArray.push(array[i]);
        //if false, push to false array 
        } else {
            falseArray.push(array[i])
        }
    }
    //push in trueArray and falseArray into newArray
    newArray.push(trueArray, falseArray);
    //return newArray 
    return newArray;
    
}



/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

////USING WITH FOR LOOP/////
// _.map = function(collection, func) {
//     const newArray = []
//     if (Array.isArray(collection)) {
//         for (let i = 0; i < collection.length; i++) {
//             newArray.push(func(collection[i], i, collection))
//         }
//     } else {
//         for (let key in collection) {
//             newArray.push(func(collection[key], key, collection))
//         }
//     }

//     return newArray
// }

///USING WITH EACH FUNCTION///TAKES PLACE OF LOOP
_.map = function(collection, func) {
    //create array literal to collect data 
    const newArray = []
    //check for array 
    if (Array.isArray(collection)) {
        //use .each to iterate through array with element, index and collection as params
        _.each(collection, function(e, i, c) {
            //push in entire functioncall with element, index and collection 
            newArray.push(func(collection[i], i, c))
        })
    } else {
        //check for object and key in loop to iterate through 
        for (let key in collection) {
          //push entire callback function with element, key and collection into newArray 
            newArray.push(func(collection[key], key, collection))
        }
    }
    //return newArray 
    return newArray
}


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, prop) {
    //use  and return .map to iterate through array passing in element, index and collection
    return _.map(array, function(element, i, c) {
     // .map creates a new array, so we just need to now return what we want, element[property] (value)   
        return element[prop]
    })
}; 

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/



//first attempt with .each, didnt work 
// _.every = function(collection, func) {
//     _.each(collection, function(e, i, c) {
//         if (typeof func === 'undefined') {
//                 if (collection[i] !== true) {
//                     return false;
//                 }
//         }
            
//         else if (!func(collection[i], i, collection)) {
//                 return false; 
//             }
//         })

//     return true;
        
// }


//second attempt worked with for loops. 
//Return false first bc we want every element to pass. 
_.every = function(collection, func) {
    //check to see if array
    if (Array.isArray(collection)) {
        //for loop to iterate through array 
        for (let i = 0; i < collection.length; i++) {
            //if no colleciton is given, func is undef
            if (func === undefined) {
                //if element is false, return false  
                if (!collection[i]) {
                    //return false     
                    return false 
                }
                //condtional to see if function call paramaters return false 
            } else if (!func(collection[i], i, collection)) {
                    // if so, return false 
                    return false
                }
        }
           //return true if all pass turthy, OUTSIDE OF LOOP
            return true; 
    }

        //check if object
        else if (typeof(collection) === "object") {
            //iterate through obj
            for (let key in collection) {
                //if any parameters if the call back func are false, return false
                if (!func(collection[key], key, collection)) {
                    //return false 
                    return false;
                }
            
                
            }
        //if all pass truthy, return true outside of loop 
            return true; 
        }

    
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
//Needed to do undefined on own loop for this to pass.
_.some =  function(collection, func) {
    //conditional if func is not given 
    if (func === undefined){
        //for loop to itierate through array
        for(var i = 0; i < collection.length; i++) {
            //if even one element is true, return true
            if (collection[i]) {
                //return true. 
                return true;
            }
        }
        //if all are false, return false OUTSIDE OF LOOP
        return false;
    }
    //check if Array
    if (Array.isArray(collection)){
        //for loop to iterate
        for(var i = 0; i < collection.length; i++) {
            //conditional to see if params of call func are true 
            if(func(collection[i], i, collection)){
                //return true 
                return true;
            }
        }    
        //return false if not, OUTSIDE OF LOOP
        return false;
    
        //check if obj
    } else if (typeof collection === 'object') {
        //for loop to iterate through array 
        for (var key in collection) {
            //conditional if params of func call are true, just one needed 
            if(func(collection[key], key, collection)){
                //return true 
                return true;
            }
        }
        //if not, return false. OUTSIDE OF LOOP 
        return false;
    }
};    


// _.some = function(collection, func) {
//     //check for Array
//     if (Array.isArray(collection)) {
//         //iterate through array
//         for (let i = 0; i++; i < collection.length) {
//             //conditional if func is undefined 
//             if (func === undefined) {
//                 //conditional if one element is truthy 
//                 if (collection[i]) {
//                     //return true  
//                     return true;
//                 }
//                  
//                 //if there is a function check if one element is true 
//             } else if (func(collection[i], i, collection)) {
//                 //return true 
//                 return true; 
//             }
//         
//         }
//     //if not return false  
//       return false;   
//     }
//     //check for object
//     else if (typeof collection === "object") {
//         //key in loop to itereate object
//         for (let key in collection) {
//             if (func === undefined) {
//                 if (collection[key]) {
//                     return true; 
//                 }
//             
                
//             }
//             //if calling function is true for at least one element
//              else if (func(collection[key], key, collection)) {
//                 //return true
//                 return true;
//             }
          
//         }
//         // if not return false OUTSIDE OF LOOP 
//       return false;  
//     }
// }



/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed) {
 //conditional to see if seed exists
    if(seed !== undefined) {
       //for loop to iterate through array
       for(var i = 0; i < array.length; i++) {
           //for the first iteration, set seed to previous result, use the return value of function as the previous result for the next iteration
          seed = func(seed, array[i], i)
       }
       //return value of final function call (assigned to seed) ie return seed 
       return seed;
    } else {
        //else if no seed was given assign seed to first value in array (index zero) 
       seed = array[0];
        //use for loop to iterate through array 
        for (var i = 1; i < array.length; i++) {
          //reassign seed to be value of function call 
          
          seed = func(seed, array[i], i);
        }
       //return value of final function call, ie seed. 
        return seed;
    }
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(obj1, ...obj2) {
  //set new obj to any argument params using Obj.assign and ... syntax
   var newObj = Object.assign(obj1, ...obj2)
    //return new obj with obj arguments merged 
    return newObj;
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
