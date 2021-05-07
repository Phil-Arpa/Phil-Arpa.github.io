/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create function called search with array and name as parameters 
function search (array, name) {
    //for loop to search through array 
    for (let i = 0; i < array.length; i++){
        //conditional to test if name argument is equal to a name of animal in animals array. used bracket notation.
        if (name === array[i].name) {
          // if true return that object in array (array[i])  
            return array[i]
        }
    }
    //if not found return null OUTSIDE OF LOOP
    return null
}



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create function called replace
function replace(array, name, object) {
    //reate for loop to loop through array
    for (let i = 0; i < array.length; i++) {
        //if statment comparing name argument to name in names in objects of array, same as above.
        if (name === array[i].name) {
            //remove that object if name matches. use .splice (index, number of removes)
            array.splice(array[i], 1);
            //push new obkect into array.
            array.push(object);
        }
    }
    //nothing else needed per instructions 
    
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//very similar to above, howvever this time we are just removing and not also replacing 
//create function named remove with array and name params
/*came back and edited using arrow that Taylor taught today
declare function name with varible, syntax = (paramaters) => {code}*/
var remove = (array,name) => {
//function remove(array, name) {
    //for loop to access all items in array 
    for (let i = 0; i < array.length; i++) {
        //condtional comparing name to name property of object in array, accessed via brakcet and dot notation. bracket for indivdual values (our object) in array and dot to acesss name property on object. 
        if (name === array[i].name) {
            //code block to remove object using .splice 
            array.splice(array[i], 1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create function called add 
var add = (array, object) => {
    //create for loop to access objects within array 
    for (let i = 0; i < array.length; i++) {
        //conditional to first compare object arg name to names of objects in array. This is most important, if names match, end the process. 
        if (object.name === array[i].name) {
            //empty return to stop loop if names match. nothing happens.
            return;
        //new conditional per instructions. Used logical AND operator to meet all conditions. 
        } else if (object.name.length > 0 && object.species.length > 0 && object.name !== array[i].name) {
        //if all conditions are true add object to array using .push method
        array.push(object)
        
        }
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
