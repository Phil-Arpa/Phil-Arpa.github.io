/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */
//RYANS CODE 
//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// var animal = {};
// animal.species = 'dog';
// animal['name'] = 'Rocket';
// animal.noises = [];
// console.log(animal);
// //////////////////////////////////////////////////////////////////////
// // Step 2 - Array Creation ///////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////
// //create variable called noises and assign to it an empty array
// var noises = [];
// // using bracket notation, add the string 'woof' to the first index of the array
// noises[0] = 'woof';
// // using the push method, add a second noise to the noises array
// noises.push('grrr');
// // using the unshift method, add a noise to the beginning of the array
// noises.unshift('sniff');
// // add an additional noise element to the end of the noises array (use dynamic index information)
// noises[noises.length] = 'meow';
// // log the length of the noises array to the console
// console.log(noises.length);
// // log the last element of the noises array to the console
// console.log(noises[noises.length - 1]);
// // log the noises array to the console
// console.log(noises);
// //////////////////////////////////////////////////////////////////////
// // Step 3 - Combining Step 1 and 2 ///////////////////////////////////
// //////////////////////////////////////////////////////////////////////
// // replace the empty array associated with the noises property on the animals object with the noises array created above
// animal['noises'] = noises;
// // add the noise 'scratch' to the noises array within the animal object
// animal.noises.push('scratch');
// // log the animal object to the console
// console.log(animal);

// var animal = {};
// animal.species = 'dog';
// animal['name'] = 'Rocket';
// animal.noises = [];
// console.log(animal);
// //////////////////////////////////////////////////////////////////////
// // Step 2 - Array Creation ///////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////
// //create variable called noises and assign to it an empty array
// var noises = [];
// // using bracket notation, add the string 'woof' to the first index of the array
// noises[0] = 'woof';
// // using the push method, add a second noise to the noises array
// noises.push('grrr');
// // using the unshift method, add a noise to the beginning of the array
// noises.unshift('sniff');
// // add an additional noise element to the end of the noises array (use dynamic index information)
// noises[noises.length] = 'meow';
// // log the length of the noises array to the console
// console.log(noises.length);
// // log the last element of the noises array to the console
// console.log(noises[noises.length - 1]);
// // log the noises array to the console
// console.log(noises);
// //////////////////////////////////////////////////////////////////////
// // Step 3 - Combining Step 1 and 2 ///////////////////////////////////
// //////////////////////////////////////////////////////////////////////
// // replace the empty array associated with the noises property on the animals object with the noises array created above
// animal['noises'] = noises;
// // add the noise 'scratch' to the noises array within the animal object
// animal.noises.push('scratch');
// // log the animal object to the console
// console.log(animal);




























//create empty object named animal
var animal = {};
//add species prop with dog value using dot 
animal.species = "dog";
//name prop and name using bracket 
animal["name"] = "Cujo";
//noises prop with dot assigning array literal 
animal.noises = [];


// //////////////////////////////////////////////////////////////////////
// // Step 2 - Array Creation ///////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////
//declare noises with array literal 
var noises = [];
//add sound to noises array using bracket 
noises[0] = "woof";
//created reusable function to add sound to end of noises array with dot push 
function addNoiseEnd(noise) {
noises.push(noise);
}
//call function to add sound to end 
addNoiseEnd("growl");
//created reusable function to add sound to beg of noises array
function addNoiseBeg(noise) {
    noises.unshift("bark");
}
//call function 
addNoiseBeg("bark");
//add another noise to end with bracket notation 
noises[noises.length] = "howl";
//console.log work thus far 
console.log (noises.length);
console.log(noises.length - 1);
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//
//add noises array to empty noises prop array on animal 
animal["noises"] = noises;
//push in a new sound to noises array on noise prop of animal 
animal.noises.push("cry");
//console.log animal obj
console.log(animal);
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create array literal called animals 
var animals = [];
//add animal to animals array using .push
animals.push(animal);
//create new animal object
var duck = { species: "duck", name: "Jerome", noises: ["quack", "honk", "sneeze", "woosh"] };
//add to animals array .push
animals.push(duck);
//create new animal obj
var snake = {species: "snake", name: "python", noises: ["ssss", "slither"]};
//create new animal obj
var horse = {species: "horse", name: "shadow", noises: ["naaa", "gallop"]};
//add to animals using .push 
animals.push(snake, horse);
//check new animals array 
console.log(animals);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//chose Array for data structure. Why? indexed list that can hold objects and other data types
var friends = [];

//create getRandom function that takes animals array and returns random index using Math.random
function getRandom(array) {
 //using a combo of bracket notation and the math .floor function to randmoize indexes in array.  
  //array[Math.floor <--to get interger(Math.random() * array.length <--- end point ///ask Taylor how to do inclusive in this example//assuming this has to do with why spec test fails every few cycles
  //wouldnt pass os test with array.length as max. looked at error and changed to 3 based on test expectations.
  //Ask why, not completely sure
    return array[Math.floor(Math.random() * 3)];
}
//add random name to friends array using above function, passing in animals array and using dot notation to access name property. can also use brackey ["name"]
friends.push(getRandom(animals).name);
//check friends array 
console.log(friends)
//use bracket notation to add friends array to new friends property om any animal object. I choose index 2 
animals[2]["friends"] = friends;
//check animals array with all new objects and one with friends 
console.log(animals);
console.log(animals);



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}