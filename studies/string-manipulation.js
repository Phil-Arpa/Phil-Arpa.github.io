//String Manipulation//

/*Like Arrays, Strings are indexed and therefore have a length property and 
can be easily manipulated. Lets looks at some examples below*/

var stringLiteral = ""; // empty string;

var string = "this is a string with text"; //string with a value string.split(" "); //splits string into array. 

//Length Property
string.length; // will return length of string 

//Concatinating
stringLiteral += "this is concating"; /*contacting connects strings and other data into a string 
stringLiteral will now = "this is concating"*/

var number = 1 

//Concatinating with varibles holding data 
var someText = "we now know"
var newString = someText + " " + "that this is concating, lets also concat a numeric value from our number variable" + " " + number;
console.log(newString); // prints "we now know that this is concating, lets also concat a numeric value from our number variable 1"


//Thats a lot of code and use of the + operator, lets use an example of ES6 to do the same thing//
//ES6 string interpolation//
newString = `${someText} that this is concating, lets also concat a numeric value from our number variable ${number}`
console.log(newString) // will pring the same above, much easier and cleaner. 
/*String Access - Bc string are indexed we access them with bracket notation and 
other string prototype methods.*/


console.log(someText[1]) // will print "e", remeber indexes start at 0.



//Some other string methods//
//.includes() - will check if a string includes value 
//.charAt() = returns character at specified index 
//"\n" - new line 
//.toLowerCase - changes characters to lowercase
//.toUpperCase - changes characters to uppercase 
//.slice (start, end) - extracts part of string and returns that extracted part in new string, neg numbers will be counted from end of string
//.substring() - similar to slice but doesn't accept neg numbers. 
//.substr() - similar to .slice but second param specifies length 

//lets see some of these bad dudes in use for live code examples*/
//first lets create a test string to manipulate in our examples.
let ourString = "Studies will help me study"
//1: toUpperCase() - changes string chars (letters) to upperCase
console.log(ourString.toUpperCase()) // prints STUDIES WILL HELP ME STUDY
//2:
console.log(ourString.toLowerCase()) // prints studies will help me study 
//3:
console.log(ourString.charAt(1)) // prints "t". Remember strings are zero indexed.
//4:
console.log(ourString.slice(1,2)) // prints "t". the second param is optional. anything before index one is removed and index 2, leaving "t" generated on a new string
//5:
console.log(ourString.includes("u")) // will print true because our string includes the letter "u". Case sensitive. 
//There are a TON of string methods, MDN and w3 schools are great resources//