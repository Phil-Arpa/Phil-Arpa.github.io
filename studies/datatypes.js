/*Data Types:
*
*A type of data in javascipt is called data type
*
*There are two categoires of dataypes : Simple/Primitive and Complex 
*
*Lets start by taking a look at the different Simple/Primitive datatypes and why they are considered "simple"
*
*SIMPLE DATA TYPE EXAMPLES :
*
*1) Number - this is self explanitory, a numeric value - example below*/
//Number example

var number = 1;

/*Boolean - only takes the values true or false.
Booleans are extremely useful. A great example for Boolean useage 
is in control flow when we are trying to determine if a condition 
is true or false. Everything with a value will be true. Everything without a value 
will be false. Boolean EX's Below*/

Boolean(10 > 5); // will return true 
Boolean(10 < 5); //will return false 

//Remember, data with a value is true, while data without a value is false. EX
var stringWithValue = "this string has a value"
Boolean(stringWithValue) // will return true bc string is not empty 

var stringWithOutValue = ""
Boolean(stringWithOutValue) // returns false bc string is empty

var hasValue = 10 
Boolean(hasValue) // will be true bc of value 
var noValue = 0
Boolean(noValue) // will be false bc of no value 

/*Stings - Strings are great for holding character data, ie, text. 
*Strings are indexed and have a length. This .length method will work on them.
*Strings are always inside quotations "" or '', Either is perfectly fine 
however, you must be conistent in your choice. 
*Strings have many different uses and methods, such as .split and concating,
we will review some below.
*Strings have a super cool ES6 feature called string interpolation. We will review 
below*/

//String Example//

var stringLiteral = ""; // empty string;
var string = "this is a string with text"; //string with a value string.split(" "); //splits string into array. 

/*NaN - "Not A Number" - this will appear when a value is not 
a legal number*/

//NaN example
console.log(10 / "string") //will print NaN bc value is not a number, you cant divide 10 by text

/*Undefined - literally what it says, "not defined". Think about it, if we delcare a variable 
without a value, it will be undefined.*/

//Undefined Example//
var somethingUd;
console.log(somethingUd) // will print undefined bc we have not assigned any value to that variable 

/*Null - nullified by a programer. Many times if we dont know a specific value 
we can pass in null as a placeholder*/

var someValueWeDontKnow = null 
console.log(someValueWeDontKnow) // prints null
//typeof null = "object" not undefined 

//Infinity and negative Infifinty//
/*variable in the global scope that represents the max number (infinity). Same thing 
with negative but lowest possible starting point*/
//EX//
console.log(Infinity + 1) // prints Infinity 

/*Okay, so these are some of our main Simple/Primitive datatypes.
But why? Because they are immutable, they do not hold other values. 
Simple data types are COPIED BY VALUE - meaning - they are copied from one value to the next when assigning or passing. 
*/

//Complex Data Types//
/*data types that can aggregate or COMBINE other values. Thus, their size is unlimited. 
Complex data types are COPIED BY REFERENCE. Meaning, that the value is referenced, not a direct copy and therefore
changes effect all references bc the value is referencing the same object.*/

//Complex Datatypes - Objects, Arrays and Functions//

/*Object - not indexed. Objects are important, very important. I mean, we are doing 
what the pro's call Object Oriented Programming, so they must be pretty important. 
Objects have key/value pairs. Or property/value. This is great for charaterizing 
something specific. If you wanted to really describe a person for example, you 
might want to collect data on their name, their hometown, thier pet, their favorite food, etc
etc, etc. The possibilites are endless. Lets take a look at how Objects are set up.*/

var personObj = {name: "Phil", hometown: "Baltimore", favoriteFood: "italian"}

//Above I created a person object that has key/value pairs going into detail about a person (me in this case)//
//**Note - the keys in objects are strings//
//Object Access// 
//Lets take a look at some of the ways we can access the elements of an object//
//DOT NOTATION//
console.log(personObj.name) // will print Phil
personObj.name = "Captain" // will reassign name value to "Captain"
//Its important to note that when using .dot notation we need to know the specific name of the key.

//BRACKET NOTATION//
console.log(personObj["name"]); //prints Captain to the console
/*Remeber, dot notation requires us to know the specific key name, not always true 
with bracket notation. Below I created a simple reusable function that can update an object
to demonstrate this*/

function changeObj(obj,key,value) {
 //this would not work with dot notation, but with bracket, I can use the key parameter as a placeholder  
  obj[key] = value
}
//remeber when passing the argument the the key is a string
changeObj(personObj, "hometown", "NOLA")
console.log(personObj) // hometown is now changed to NOLA 
//If key does not exist, a new key/value will be added to object//
changeObj(personObj, "pets", 3);
console.log(personObj) /* now a new key of "pets" is added to the object with a value of 3
if my function was using .Dot noation this would not work*/
/*This wouldnt be a super useful function as we could just use bracket notation with the specific 
but I wanted to demonstrate how we dont need to know the exact key name as we do with dot.
"key" would be the new key everytime*/

//Arrays//
//Think of Arrays as lists, they are ordered and indexed and therefore have a length//
//Array syntax//
var arrayEx = [1, 2, 3, "lets", "gooo", true, {id: "whoa", name: "an object"}]
/*Notice I included various datatypes simple and even a complex (the object)
Therefore, arrays can have an indefinite indexed length and hold any type of datatype.
Now lets look at some array access*/

console.log(arrayEx.length) // prints length of array 
console.log(arrayEx.length -1) // prints last index in array, good way to see how many indexes there are.

//Array Access//
arrayEx[arrayEx.length-1]; // returns last element in array 
//Bracket notation is the only way to access the array, dot does not work//
arrayEx[1] = "look it changed"; //re assigning a specific index in array 
console.log(arrayEx) // prints updated array with "look it changed" string as new value in index 1 

//Array Methods//
//Like strings, arrays are indexed and have some really useful prototype methods//
//some of the methods fall into the Higher Order Function categories, we will worry about those in the functions section//

//.pop() - removes last element in array - "pop that off the end bruh"
//.shift() - remmoves first element in array - "shift that $hit off the beginning"
//.push(element) - adds element to end of array - "push it to the limit"
//.unshift(element) - adds element to beginning of array - sorry, no slogan for this one, just remember beginning 
//.slice(start, end) - returns new array with start and end index paramters 
//.join ("") - joins array elements into a new string seperated by specified seperator in parenthesis 
/*.splice(start, delete count, elements to add from start position) - removes or adds items to array based 
on start index, amount to delete from start and elements to add. Delete count and adding elements can be odmitted which would 
then just delete from start point*/
//.includes() - will check if array includes element returning true or false 
//.indexOf(element) - will return index of first instance of element in array, will return -1 if not found 

//Functions//
/* Functions are great and very much the bread and butter of javascript along with objects and arrays.
Below is an example of a simple function. We will get more into Functions and their uses in the Functions section.
Just remember, Functions make code resuable. They help us create cleaner code and decrease repitition. They can take paramaters
and arguments or they can ommit them*/

//Basic Function Example 

function addParams(param1, param2) {
 return param1 + param2
}; 

//Now we can call the above function passing in arguments for our placeholder parameters


console.log(addParams(1,2)) //will print 3

/*Before we finish with the data types section it is important to review two major points. How their values are stored and why.
We refer to this as COPY BY VALUE or COPY BY REFERENCE. The reason for this difference is becasue of the alloted memory the computer 
allows us for the information inside a given variable. 8 bits. Thats all we have to work with. Therefore, primitive or SIMPLE
data types such as bools, numbers, strings (all the examples we covered above) can fit into that alloted space, those 8 bits.
However, Complex Data Types (arrays, objs, our fun fun functions) values are not stored within that bits. Their size is 
INDEFINITE! Thats what makes the so useful and the bread and butter of our programming. Therefore their values are COPIED 
BY REFERENCE. Lets look at a couple quick bullet points below to further distinguish. 

SIMPLE/PRIMITITIVE DATA TYPES --> COPY BY VALUE
 -Can fit into the 8 bits of memory directly as the value 
 - Atomic - only one single value 
 - When assigning, copied from one var to the next
 - Operations on primitives return NEW PRIMITIVES 
 -Fun Fact** the largest primiitive data type is a number, taking up the full 8 bits of memory while our super 
 useful friends Booleans, only take up 1 bit. 
 
 
 COMPLEX DATA TYPES --> COPY BY REFERENCE 
  -Indefinite in size, they can be as large or small as we want and ever changing, therefore their values are
  COPIED BY REFERENCE 
  -Typically the this reference refers to an address in the memory, not the actual data itself 
  EX:*/
 //complex data type - object 
  var myObj = {name: "phil", town: "nola"}
  //copying data by reference into another var 
  var newRef = myObj;
  newRef.town = "Bmore";
  console.log(myObj.town) // prints Bmore because the VALUE is REFERENCED to the SAME OBJECT
  
  